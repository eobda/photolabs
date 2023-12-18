import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const photoData = props.photoData;
  return (
    <div>
        <img src ={photoData.imageSource} />
        <div>
          <img src={photoData.profile} />
          {photoData.username}<br />
          {`${photoData.location.city}, ${photoData.location.country}`}          
        </div>
    </div>
  );
};

export default PhotoListItem;
