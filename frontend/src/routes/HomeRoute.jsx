import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const { setModalState } = props;
  
  const [liked, setLiked] = useState([]);
  const likeItem = (photo) => {
    const newLikes = [...liked, photo];
    setLiked(newLikes);
    console.log(liked);
  }

  return (
    <div className="home-route">
      <TopNavigation liked={liked} />
      <PhotoList
        liked={liked}
        likeItem={likeItem}
        setModalState={setModalState}
      />
    </div>
  );
};

export default HomeRoute;
