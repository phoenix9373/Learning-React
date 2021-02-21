import React, { useRef } from "react";
import styles from "./Header.module.css";

// react-icon
import { CgProfile } from "react-icons/cg";

function Header({ onHandleSearch }) {
  const inputRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    onHandleSearch(inputRef.current.value);

    inputRef.current.value = "";
  };
  return (
    <div className={styles.frame}>
      <div className={styles.logos}>
        <span className={styles.logoText}>Youtube</span>
      </div>
      <form onSubmit={(e) => onSubmit(e)}>
        <input ref={inputRef} type="text" placeholder="Search..." />
        <button>검색</button>
      </form>
      <div className={styles.profile}>
        <CgProfile className={styles.profileIcon}></CgProfile>
      </div>
    </div>
  );
}

export default React.memo(Header);
