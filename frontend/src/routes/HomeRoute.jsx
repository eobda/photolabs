import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const { setModalState, liked, likeItem } = props;

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
