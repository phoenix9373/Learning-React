import React from "react";
import styles from "./video_item.module.css";

// 극한의 destructuring
const VideoItem = ({ video: { snippet: info } }) => (
  <li className={styles.container}>
    <div className={styles.video}>
      <img
        className={styles.thumbnail}
        src={info.thumbnails.medium.url}
        alt="thumbnail"
      />
      <div className={styles.metadata}>
        <p className={styles.title}>{info.title}</p>
        <p className={styles.channel}>{info.channelTitle}</p>
      </div>
    </div>
  </li>
);

export default VideoItem;
