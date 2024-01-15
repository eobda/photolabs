import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = (props) => {
  const { isFavPhotoExist, openFavPhotosModal } = props;

  return (
    <div className='fav-badge' onClick={() => openFavPhotosModal()}>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={true}/>
    </div>
  ) 
};

export default FavBadge;