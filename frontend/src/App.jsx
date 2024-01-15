import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import FavPhotosModal from 'routes/FavPhotosModal';
import { useApplicationData } from 'hooks/useApplicationData';

const App = () => {

  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    onCloseFavPhotosModal,
    onLoadTopic
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        state={state}
        onPhotoSelect={onPhotoSelect}
        updateToFavPhotoIds={updateToFavPhotoIds}
        onLoadTopic={onLoadTopic}
      />
      {state.photoDetailsModalOpen && <PhotoDetailsModal
        state={state}
        onPhotoSelect={onPhotoSelect}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        updateToFavPhotoIds={updateToFavPhotoIds}
      />}
      {state.favPhotosModalOpen && <FavPhotosModal
        state={state}
        onPhotoSelect={onPhotoSelect}
        onCloseFavPhotosModal={onCloseFavPhotosModal}
        updateToFavPhotoIds={updateToFavPhotoIds}
      />}
    </div>
  );
};

export default App;
