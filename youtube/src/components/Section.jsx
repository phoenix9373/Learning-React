import React from "react";
import styles from "./Section.module.css";

function Section({ item }) {
  return (
    <div className={styles.frame}>
      <iframe
        className={styles.iframe}
        title="Youtube"
        src={`https://www.youtube.com/embed/${item.id.videoId}`}
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Section;
