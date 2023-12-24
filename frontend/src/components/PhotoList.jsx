import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
// import photos from "mocks/photos";

const PhotoList = (props) => {
  const { photoData, updateToFavPhotoIds, onPhotoSelect } = props;
  
  const renderPhotos = photoData.map((photo) => {
    return (
      <li key={photo.id}>
        <PhotoListItem
          photoData={photo}
          updateToFavPhotoIds={updateToFavPhotoIds}
          onPhotoSelect={onPhotoSelect}
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
