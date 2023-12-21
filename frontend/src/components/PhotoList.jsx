import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

const PhotoList = (props) => {
  const { liked, likeItem, setModalState } = props;
  
  const renderPhotos = photos.map((photo) => {
    return (
      <li key={photo.id}>
        <PhotoListItem
          photoData={photo}
          liked={liked}
          likeItem={likeItem}
          setModalState={setModalState}
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
