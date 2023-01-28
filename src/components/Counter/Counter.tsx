import { useState } from "react";
import styles from "./counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState("");
  return (
    <div className={styles.hui}>
      <h1 className={styles.hui}>hui</h1>
    </div>
  );
};
