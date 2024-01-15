import React from "react";

import '../styles/FavPhotosModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from "components/PhotoList";

const FavPhotosModal = (props) => {
  const {
    state,
    onPhotoSelect,
    onCloseFavPhotosModal,
    updateToFavPhotoIds
  } = props;
  const favPhotos = state.favPhotos;

  return (
    <div className="fav-photos-modal">

    <div className='fav-photos-modal__top-bar'>
      <button className="fav-photos-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={() => onCloseFavPhotosModal()} />
      </button>
    </div>

    <h2 className='fav-photos-modal__header'>Your Likes</h2>
              
    {favPhotos.length > 0 && (
    <div className='fav-photos-modal__images'>
      <PhotoList
        photoData={favPhotos}
        favPhotos={favPhotos}
        updateToFavPhotoIds={updateToFavPhotoIds}
        onPhotoSelect={onPhotoSelect}
      />
    </div>
    )}

    {favPhotos.length === 0 && (
      <p className='fav-photos-modal__message'>You have no liked photos. Like a photo to see it here!</p>
    )}

  </div>
  )
};

export default FavPhotosModal;