import React from "react";
import Top from "./components/top/Top";
import Bottom from "./components/bottom/Bottom";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.wrapper}>
      <Top />
      <Bottom />
    </div>
  );
}

export default App;
