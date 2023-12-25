import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { topicData, onLoadTopic } = props;

  const renderTopics = topicData.map((topic) => {
    return (
      <TopicListItem
        key={topic.id}
        id={topic.id}
        title={topic.title}
        onLoadTopic={onLoadTopic}
      />
    );
  });

  return (
    <div className="top-nav-bar__topic-list">
      {renderTopics}
    </div>
  );
};

export default TopicList;
