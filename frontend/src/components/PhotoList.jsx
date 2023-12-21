import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

const PhotoList = (props) => {
  const { liked, likeItem, setModalState } = props;
  
  const renderPhotos = photos.map((photo) => {
    const photoData = {
      id: photo.id,
      imageSource: photo.urls.regular,
      profile: photo.user.profile,
      username: photo.user.username,
      location: photo.location
    };

    return (
      <li key={photo.id}>
        <PhotoListItem
          photoData={photoData}
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
