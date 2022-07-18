import React from "react";
import Card from "../card/Card";
import Bar from "../bar/Bar";
import styles from "./Bottom.module.css";
import data from "../../data/data.json";

function Bottom() {
  return (
    <Card>
      <div className={styles.bottom_content}>
        <h2>Spending Last 7 days</h2>
        <div className={styles.chartWrapper}>
          {data.map((d) => (
            <Bar value={d.amount} day={d.day} maxValue={52.36} key={d.amount} />
          ))}
        </div>

        <div className={styles.line}></div>

        <div className={styles.bottom_text}>
          <div>
            <p>Total this month</p>
            <h2>$478.33</h2>
          </div>
          <div>
            <h4>+2.4%</h4>
            <p>from last month</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Bottom;
