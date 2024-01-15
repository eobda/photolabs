import React from "react";

import '../styles/PhotoDetailsModal.scss';

const LikedPhotosModal = (props) => {
  return (
    <div className="photo-details-modal">

    <div className='photo-details-modal__top-bar'>
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={() => onClosePhotoDetailsModal()} />
      </button>
    </div>
              
    <div className='photo-details-modal__images'>
      <PhotoList
        photoData={activePhoto.similar_photos}
        favPhotos={state.favPhotos}
        updateToFavPhotoIds={updateToFavPhotoIds}
        onPhotoSelect={onPhotoSelect}
      />
    </div>

  </div>
  )
};

export default LikedPhotosModal;