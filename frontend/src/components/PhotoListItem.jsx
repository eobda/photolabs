import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { likeItem, photoData, toggleModal, setPhotoAsActive } = props;
  const handleClick = (photo) => {
    setPhotoAsActive(photo);
    toggleModal();
    console.log(photo);
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton likeItem={likeItem} photo={photoData} />
      <img className="photo-list__image" src={photoData.imageSource} onClick={()=> {handleClick(photoData)}} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photoData.profile} />
        <p className="photo-list__user-info">{photoData.username}<br />
        <span className="photo-list__user-location">{`${photoData.location.city}, ${photoData.location.country}`}</span></p>          
      </div>
    </div>
  );
};

export default PhotoListItem;
