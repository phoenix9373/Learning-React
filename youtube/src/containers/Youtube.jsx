import React, { useEffect, useState } from "react";

// Components
import YoutubeList from "~/components/YoutubeList";
import Section from "~/components/Section";
import Header from "~/components/Header";

// CSS
import styles from "./Youtube.module.css";

const URL = "https://www.googleapis.com/youtube/v3";
const PART = "snippet";
const MAX_RESULT = 25;
const API_KEY = "";

function Youtube() {
  const [items, setItems] = useState(null);
  const [detailItem, setDetailItem] = useState(null);

  const handleSearch = async (value) => {
    const response = await fetch(
      `${URL}/search?part=${PART}&maxResults=${MAX_RESULT}&q=${value}&key=${API_KEY}`
    );
    const text = await response.text();
    const data = JSON.parse(text);

    setItems(() => data && data.items);
  };

  const handleDetail = (item) => {
    setDetailItem(() => item);
  };

  useEffect(() => {}, [items]);

  return (
    <div className={styles.frame}>
      <Header onHandleSearch={handleSearch}></Header>
      <div className={styles.section}>
        {detailItem && <Section item={detailItem}></Section>}
        {items && <YoutubeList onHandleDetail={handleDetail} items={items} />}
      </div>
    </div>
  );
}

export default Youtube;
