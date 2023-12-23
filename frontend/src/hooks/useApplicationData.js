import { useReducer } from "react";
import photos from "mocks/photos";

export const ACTIONS = {
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
      return state;
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
    favPhotos: [],
    activePhoto: null,
    activeTopic: null,
    modalOpen: false
  });

  const updateToFavPhotoIds = (photo) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photo.id });
  }

  const onPhotoSelect = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo.id });
  }

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  }

  // onLoadTopic

  return { ACTIONS, state, onPhotoSelect, updateToFavPhotoIds, onClosePhotoDetailsModal };
};