import { useEffect, useState } from "react";
import style from "./style.module.css";

export const Time = () => {
  const clock = (): string => {
    let date = new Date();
    let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    let minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let seconds =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  };

  let [count, setCount] = useState(clock());

  count = clock();
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(clock);
    }, 1000);

    return () => {
      clearInterval(intervalId);
      // clock();
    };
  }, []);
  return <div className={style.clock}>{count}</div>;
};
