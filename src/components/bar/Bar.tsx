import { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { motion } from "framer-motion";
import colors from "../../utils/colors";
import styles from "./Bar.module.css";

type BarProps = {
  value: number;
  maxValue: number;
  day: string;
};

function Bar({ value, maxValue, day }: BarProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [barValue, setBarValue] = useState(0);
  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  useEffect(() => {
    setTimeout(() => {
      setBarValue(value);
    }, 1000);
  }, []);

  const barStyle = {
    height: `${(barValue / maxValue) * 100}%`,
    backgroundColor: barValue === maxValue ? colors.cyan : "",
  };

  const tooltipStyle = {
    opacity: showTooltip ? 1 : 0,
  };
  return (
    <div
      className={styles.wrapper}
      onMouseEnter={toggleTooltip}
      onMouseLeave={toggleTooltip}
    >
      {/* {showTooltip && <p>show</p>} */}
      <div className={styles.track}>
        <motion.div
          className={styles.tooltip}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          style={tooltipStyle}
        >
          ${value}
        </motion.div>
        <div className={styles.bar} style={barStyle}></div>
      </div>
      <p className={styles.day}>{day}</p>
    </div>
  );
}

export default Bar;
