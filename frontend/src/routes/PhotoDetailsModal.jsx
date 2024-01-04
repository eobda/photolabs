import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const { state, onClosePhotoDetailsModal, updateToFavPhotoIds, checkIfFav } = props;
  const activePhoto = state.activePhoto;
  const favPhotos = state.favPhotos;

  return (
    <div className="photo-details-modal">

      <div className='photo-details-modal__top-bar'>
        <button className="photo-details-modal__close-button">
          <img src={closeSymbol} alt="close symbol" onClick={() => onClosePhotoDetailsModal()} />
        </button>
      </div>
        
      <div className='photo-details-modal__header'>
        <PhotoFavButton
          updateToFavPhotoIds={updateToFavPhotoIds}
          photo={activePhoto}
          favPhotos={favPhotos}
          checkIfFav={checkIfFav}
        />
        <img className='photo-details-modal__image' src={activePhoto.urls.full} />

        <div className='photo-details-modal__photographer-details'>
          <img className="photo-details-modal__photographer-profile" src={activePhoto.user.profile} />
          <p className="photo-details-modal__photographer-info">{activePhoto.user.username}<br />
          <span className="photo-details-modal__photographer-location">{`${activePhoto.location.city}, ${activePhoto.location.country}`}</span></p> 
        </div>
      </div>
          
      <div className='photo-details-modal__images'>
        <PhotoList
          photoData={activePhoto.similar_photos}
          favPhotos={state.favPhotos}
          checkIfFav={checkIfFav}
        />
      </div>

    </div>
  )
};

export default PhotoDetailsModal;
