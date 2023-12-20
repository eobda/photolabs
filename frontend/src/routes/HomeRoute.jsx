import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = () => {
  const [liked, setLiked] = useState(false);
  const likeItem = () => {
    console.log('liked:', liked);
    setLiked(liked ? false : true);
  }

  return (
    <div className="home-route">
      <TopNavigation liked={liked} likeItem={likeItem} />
      <PhotoList liked={liked} likeItem={likeItem} />
    </div>
  );
};

export default HomeRoute;
