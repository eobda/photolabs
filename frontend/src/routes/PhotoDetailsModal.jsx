import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const { activePhoto, setModalState } = props;
  return (
    <div className="photo-details-modal">

      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={() => setModalState(null)} />
      </button>
      
      {/* Unsure of how to use classes here to centre photo */}
      <div className='photo-details-modal__top-bar'>
        <div className='photo-details-modal__header'>
          <PhotoFavButton likeItem={null} photo={activePhoto} />
          <img className='photo-details-modal__image' src={activePhoto.urls.full} />

          <div className='photo-details-modal__photographer-details'>
            <img className="photo-details-modal__photographer-profile" src={activePhoto.user.profile} />
            <p className="photo-details-modal__photographer-info">{activePhoto.user.username}<br />
            <span className="photo-details-modal__photographer-location">{`${activePhoto.location.city}, ${activePhoto.location.country}`}</span></p> 
          </div>
        </div>
      </div>
        
      <div className='photo-details-modal__images'>
        <PhotoList />
      </div>

    </div>
  )
};

export default PhotoDetailsModal;
