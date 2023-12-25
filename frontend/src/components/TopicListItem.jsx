import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { id, title, onLoadTopic } = props;

  return (
    <div className="topic-list__item" onClick={() => {onLoadTopic(id)}}>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
