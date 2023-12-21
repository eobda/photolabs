import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = () => {
  const [liked, setLiked] = useState([]);
  const likeItem = (photo) => {
    const newLikes = [...liked, photo];
    setLiked(newLikes);
  }

  return (
    <div className="home-route">
      <TopNavigation liked={liked} likeItem={likeItem} />
      <PhotoList liked={liked} likeItem={likeItem} />
    </div>
  );
};

export default HomeRoute;
