import React, { useState, useEffect } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const { photo, favPhotos, updateToFavPhotoIds } = props;

  const checkIfFav = (photoId, favList) => {
    return favList.includes(photoId);
  }

  const [selected, setSelected] = useState(checkIfFav(photo.id, favPhotos));

  const handleClick = () => {
    updateToFavPhotoIds(photo, selected);
  };
  
  useEffect(() => {
    setSelected(checkIfFav(photo.id, favPhotos));
  }, [photo, favPhotos]);

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;