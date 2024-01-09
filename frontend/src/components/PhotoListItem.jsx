import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const {
    photoData,
    favPhotos,
    updateToFavPhotoIds,
    onPhotoSelect
  } = props;

  return (
    <div className="photo-list__item">
      <PhotoFavButton
        updateToFavPhotoIds={updateToFavPhotoIds}
        photo={photoData}
        favPhotos={favPhotos}
      />
      <img className="photo-list__image" src={photoData.urls.regular} onClick={()=> onPhotoSelect(photoData)} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photoData.user.profile} />
        <p className="photo-list__user-info">{photoData.user.username}<br />
        <span className="photo-list__user-location">{`${photoData.location.city}, ${photoData.location.country}`}</span></p>          
      </div>
    </div>
  );
};

export default PhotoListItem;
