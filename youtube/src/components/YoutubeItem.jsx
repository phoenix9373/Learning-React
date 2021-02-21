import React from "react";
import styles from "./YoutubeItem.module.css";

function YoutubeItem({ title, imageSrc, channelTitle, onHandleDetail, item }) {
  return (
    <div onClick={() => onHandleDetail(item)} className={styles.frame}>
      <img className={styles.thumbnail} src={imageSrc} alt="thumbnail" />
      <div className={styles.info}>
        <span className={styles.title}>{title}</span>
        <span className={styles.channelTitle}>{channelTitle}</span>
      </div>
    </div>
  );
}

export default YoutubeItem;
