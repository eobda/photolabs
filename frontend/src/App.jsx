import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(null);
  const setModalState = (photo) => {
    setActivePhoto(photo);
    setModalOpen(!modalOpen);
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
