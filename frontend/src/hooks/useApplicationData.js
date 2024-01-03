import { useReducer, useEffect } from "react";
import axios from "axios";

//NOTE TO SELF:  USE ARRAY.SOME TO FIND IF PHOTO IS FAV AND SET FAVICON

const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
  SELECT_PHOTO: 'SELECT_PHOTO',
  SET_ACTIVE_TOPIC: 'SET_ACTIVE_TOPIC',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  CLOSE_MODAL: 'CLOSE_MODAL'
};

function reducer(state, action) {
  switch (action.type) {
    case 'FAV_PHOTO_ADDED': {
      return {...state, favPhotos: [...state.favPhotos, action.payload]};
    }
    case 'FAV_PHOTO_REMOVED': {
      const index = state.favPhotos.indexOf(action.payload);
      const removedPhotos = state.favPhotos.splice(index, 1);
      return {...state, favPhotos: removedPhotos};
    }
    case 'SELECT_PHOTO': {
      const photoSearch = state.photoData.find(photo => photo.id === action.payload);
      return {...state, modalOpen: true, activePhoto: photoSearch};
    }
    case 'SET_PHOTO_DATA': {
      return {...state, photoData: action.payload};
    }
    case 'SET_TOPIC_DATA': {
      return {...state, topicData: action.payload}
    }
    case 'SET_ACTIVE_TOPIC': {
      return {...state, activeTopic: action.payload};
    }
    case 'CLOSE_MODAL': {
      return {...state, modalOpen: false, activePhoto: null}
    }
  }
}

export function useApplicationData() {

  const [state, dispatch] = useReducer(reducer, {
    photoData: [],
    topicData:[],
    favPhotos: [],
    activePhoto: null,
    activeTopic: null,
    modalOpen: false
  });

  // GET photo data
  useEffect(() => {
    axios.get('/api/photos')
    .then((response) => {
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: response.data });
    })
  }, []);

  // GET topic data
  useEffect(() => {
    axios.get('/api/topics')
    .then((response) => {
      dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: response.data });
    })
  }, []);

   // GET photos by topic
   useEffect(() => {
    if (state.activeTopic) {
    axios.get(`/api/topics/photos/${state.activeTopic}`)
    .then((response) => {
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: response.data });
    })
    }
  }, [state.activeTopic]);

  const updateToFavPhotoIds = (photo, isFav) => {
    if (isFav) {
      console.log('REMOVING PHOTO!');
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photo.id });
    } else {
      console.log('ADDING PHOTO!');
      dispatch({type: ACTIONS.FAV_PHOTO_ADDED, payload: photo.id});
    }
  }

  const onPhotoSelect = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo.id });
  }

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  }

  const onLoadTopic = (topicId) => {
    dispatch({ type: ACTIONS.SET_ACTIVE_TOPIC, payload: topicId }); 
  }

  const checkIfFav = (photoId, favList) => {
    return favList.includes(photoId);
  }

  return { state, onPhotoSelect, updateToFavPhotoIds, onClosePhotoDetailsModal, onLoadTopic, checkIfFav };
};