import React, { useState, useEffect } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const { photo, favPhotos, updateToFavPhotoIds } = props;

  const checkIfFav = (photo, favList) => {
    return favList.includes(photo);
  }

  const [selected, setSelected] = useState(checkIfFav(photo, favPhotos));

  const handleClick = () => {
    updateToFavPhotoIds(photo, selected);
  };
  
  useEffect(() => {
    setSelected(checkIfFav(photo, favPhotos));
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