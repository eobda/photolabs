import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const photoData = props.photoData;
  const {liked, likeItem} = props;
  
  return (
    <div className="photo-list__item">
      <PhotoFavButton liked={liked} likeItem={likeItem} />
      <img className="photo-list__image" src ={photoData.imageSource} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photoData.profile} />
        <p className="photo-list__user-info">{photoData.username}<br />
        <span className="photo-list__user-location">{`${photoData.location.city}, ${photoData.location.country}`}</span></p>          
      </div>
    </div>
  );
};

export default PhotoListItem;
