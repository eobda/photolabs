import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photoData, favPhotos, updateToFavPhotoIds, onPhotoSelect, checkIfFav } = props;
  
  const renderPhotos = photoData.map((photo) => {
    return (
      <li key={photo.id}>
        <PhotoListItem
          photoData={photo}
          favPhotos={favPhotos}
          updateToFavPhotoIds={updateToFavPhotoIds}
          onPhotoSelect={onPhotoSelect}
          checkIfFav={checkIfFav}
        />
      </li>
    );
  })

  return (
    <ul className="photo-list">
      {renderPhotos}
    </ul>
  );
};

export default PhotoList;
