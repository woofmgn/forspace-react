import { useState } from "react";
import "./counter.scss";

export const Counter = () => {
  const [count, setCount] = useState("");
  return (
    <div className="counter">
      <h1 className="hui"></h1>
    </div>
  );
};
