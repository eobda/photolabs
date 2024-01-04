import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const { state, onLoadTopic } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={() => onLoadTopic(null)}>PhotoLabs</span>
      <TopicList
        topicData={state.topicData}
        onLoadTopic={onLoadTopic}
      />
      <FavBadge isFavPhotoExist={state.favPhotos.length > 0} />
    </div>
  )
}

export default TopNavigation;