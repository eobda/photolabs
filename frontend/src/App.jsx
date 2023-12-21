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

  return (
    <div className="App">
      <HomeRoute toggleModal={toggleModal} />
      {modalOpen && <PhotoDetailsModal toggleModal={toggleModal} />}
    </div>
  );
};

export default App;
