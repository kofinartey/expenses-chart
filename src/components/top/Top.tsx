import React from "react";
import Card from "../card/Card";
import styles from "./Top.module.css";
import colors from "../../utils/colors";

function Top() {
  return (
    <Card bkg_color={colors.red}>
      <div className={styles.top_content}>
        <div>
          <p>My balance</p>
          <h2>$921.48</h2>
        </div>
        <div className={styles.circles}>
          <div className={`${styles.circle} ${styles.c1}`}></div>
          <div className={`${styles.circle} ${styles.c2}`}></div>
        </div>
      </div>
    </Card>
  );
}

export default Top;
