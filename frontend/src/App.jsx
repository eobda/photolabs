import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {

  // Modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(null);
  const setModalState = (photo) => {
    setActivePhoto(photo);
    setModalOpen(!modalOpen);
    console.log(photo);
  };

  // Favourite Photo states
  const [liked, setLiked] = useState([]);
  const likeItem = (photo) => {
    const newLikes = [...liked, photo];
    setLiked(newLikes);
    console.log(liked);
  }

  return (
    <div className="App">
      <HomeRoute
        setModalState={setModalState}
        liked={liked}
        likeItem={likeItem}
      />
      {modalOpen && <PhotoDetailsModal
        setModalState={setModalState}
        activePhoto={activePhoto}
        liked={liked}
        likeItem={likeItem}
      />}
    </div>
  );
};

export default App;
