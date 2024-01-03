import React, { useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const { photo, favList, updateToFavPhotoIds, checkIfFav } = props;

  const [selected, setSelected] = useState(checkIfFav(photo.id, favList));
  const handleClick = () => {
    updateToFavPhotoIds(photo, selected);
    setSelected(selected ? false : true);
  };
  
  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;