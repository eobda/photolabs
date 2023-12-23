import React, { useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const [selected, setSelected] = useState(false);
  const {updateToFavPhotoIds} = props;
  const handleClick = () => {
    updateToFavPhotoIds(props.photo, selected);
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