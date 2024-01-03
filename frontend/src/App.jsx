import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useApplicationData } from 'hooks/useApplicationData';

const App = () => {

  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    onLoadTopic,
    checkIfFav
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        state={state}
        onPhotoSelect={onPhotoSelect}
        updateToFavPhotoIds={updateToFavPhotoIds}
        onLoadTopic={onLoadTopic}
        checkIfFav={checkIfFav}
      />
      {state.modalOpen && <PhotoDetailsModal
        state={state}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        updateToFavPhotoIds={updateToFavPhotoIds}
      />}
    </div>
  );
};

export default App;
