import { useReducer, useEffect } from "react";
import axios from "axios";

const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
  SELECT_PHOTO: 'SELECT_PHOTO',
  SET_ACTIVE_TOPIC: 'SET_ACTIVE_TOPIC',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  CLOSE_DETAILS_MODAL: 'CLOSE_DETAILS_MODAL'
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
      return {...state, photoDetailsModalOpen: true, activePhoto: photoSearch};
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
    case 'CLOSE_DETAILS_MODAL': {
      return {...state, photoDetailsModalOpen: false, activePhoto: null}
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
    photoDetailsModalOpen: false
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

   // GET photos by topic (reset to all photos if there is no topic)
   useEffect(() => {
    if (state.activeTopic === null) {
      axios.get('/api/photos')
      .then((response) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: response.data });
      })
    }

    if (state.activeTopic) {
    axios.get(`/api/topics/photos/${state.activeTopic}`)
    .then((response) => {
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: response.data });
    })
    }
  }, [state.activeTopic]);

  const updateToFavPhotoIds = (photo, isFav) => {
    if (isFav) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photo });
    } else {
      dispatch({type: ACTIONS.FAV_PHOTO_ADDED, payload: photo });
    }
  }

  const onPhotoSelect = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo.id });
  }

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_DETAILS_MODAL });
  }

  const onLoadTopic = (topicId) => {
    dispatch({ type: ACTIONS.SET_ACTIVE_TOPIC, payload: topicId }); 
  }

  return { state, onPhotoSelect, updateToFavPhotoIds, onClosePhotoDetailsModal, onLoadTopic };
};