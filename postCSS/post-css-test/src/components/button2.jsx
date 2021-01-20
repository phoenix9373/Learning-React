import React, { Component } from "react";
import styles from "./button2.module.css";

class Button2 extends Component {
  render() {
    return (
      <div className={styles.button}>
        <span className={styles.text}>Button</span>
      </div>
    );
  }
}

export default Button2;
