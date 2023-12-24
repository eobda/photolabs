import { useReducer, useEffect } from "react";
import axios from "axios";
// import photos from "mocks/photos";

//NOTE TO SELF:  USE ARRAY.SOME TO FIND IF PHOTO IS FAV AND SET FAVICON

const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SELECT_PHOTO: 'SELECT_PHOTO',
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
      const photoSearch = photos.find(photo => photo.id === action.payload);
      return {...state, modalOpen: true, activePhoto: photoSearch};
    }
    case 'SET_TOPIC_DATA': {
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

  useEffect(() => {
    axios.get('/api/photos')
    .then((response) => {
      console.log(response);
    })
  }, []);

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

  // onLoadTopic

  return { state, onPhotoSelect, updateToFavPhotoIds, onClosePhotoDetailsModal };
};