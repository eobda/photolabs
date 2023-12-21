import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  }
  const [activePhoto, setActivePhoto] = useState(null);
  const setPhotoAsActive = (photo) => {
    setActivePhoto(photo);
  }

  return (
    <div className="App">
      <HomeRoute toggleModal={toggleModal} setPhotoAsActive={setPhotoAsActive} />
      {modalOpen && <PhotoDetailsModal toggleModal={toggleModal} activePhoto={activePhoto} />}
    </div>
  );
};

export default App;
