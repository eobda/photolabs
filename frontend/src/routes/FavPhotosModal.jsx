import React from "react";

import '../styles/PhotoDetailsModal.scss';
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
    <div className="photo-details-modal">

    <div className='photo-details-modal__top-bar'>
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={() => onCloseFavPhotosModal()} />
      </button>
    </div>
              
    {favPhotos.length > 0 && (
    <div className='photo-details-modal__images'>
      <PhotoList
        photoData={favPhotos}
        favPhotos={favPhotos}
        updateToFavPhotoIds={updateToFavPhotoIds}
        onPhotoSelect={onPhotoSelect}
      />
    </div>
    )}

    {favPhotos.length === 0 && <p>You have no liked photos. Like a photo to see it here!</p>}

  </div>
  )
};

export default FavPhotosModal;