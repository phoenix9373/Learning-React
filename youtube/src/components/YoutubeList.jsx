import React from "react";
import YoutubeItem from "./YoutubeItem";
import styles from "./YoutubeList.module.css";

function YoutubeList({ items, onHandleDetail }) {
  return (
    <div className={styles.frame}>
      {items.map((item) => (
        <YoutubeItem
          key={item.id.videoId}
          imageSrc={item.snippet.thumbnails.default.url}
          title={item.snippet.title}
          channelTitle={item.snippet.channelTitle}
          onHandleDetail={onHandleDetail}
          item={item}
        />
      ))}
    </div>
  );
}

export default YoutubeList;
