import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic
  } = props;

  return (
    <div className="home-route">
      <TopNavigation
        state={state}
        onLoadTopic={onLoadTopic}
      />
      <PhotoList
        photoData={state.photoData}
        favPhotos={state.favPhotos}
        updateToFavPhotoIds={updateToFavPhotoIds}
        onPhotoSelect={onPhotoSelect}
      />
    </div>
  );
};

export default HomeRoute;
