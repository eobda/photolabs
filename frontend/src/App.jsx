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
  const setModalState = (photo) => {
    setPhotoAsActive(photo);
    toggleModal();
    console.log(photo);
  };

  return (
    <div className="App">
      <HomeRoute setModalState={setModalState} />
      {modalOpen && <PhotoDetailsModal setModalState={setModalState} activePhoto={activePhoto} />}
    </div>
  );
};

export default App;
