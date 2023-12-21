import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      {props.liked.length === 0 && <FavBadge isFavPhotoExist={false} />}
      {props.liked.length > 0 && <FavBadge isFavPhotoExist={true} />}
    </div>
  )
}

export default TopNavigation;