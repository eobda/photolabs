import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useApplicationData } from 'hooks/useApplicationData';
import LikedPhotosModal from 'routes/LikedPhotosModal';

const App = () => {

  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
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
      {/* <LikedPhotosModal
        state={state}
        onPhotoSelect={onPhotoSelect}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        updateToFavPhotoIds={updateToFavPhotoIds}
      /> */}
    </div>
  );
};

export default App;
