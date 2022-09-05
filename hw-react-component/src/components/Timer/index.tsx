import { useEffect, useState } from "react";
import { Button } from "../Button";
import style from "./style.module.css";
export const Timer = () => {
  let [count, setCount] = useState(0);
  let intervalId: any;
  const start = () => {
    setCount((count += 1));
  };
  useEffect(() => {
    if (count > 0) {
      intervalId = setInterval(() => {
        setCount(count + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [count]);
  const stop = () => {
    clearInterval(intervalId);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className={style.timer}>
      {count}
      <div>
        <Button text={"start"} onClick={start} type={"primary"} />
        <Button text={"stop"} onClick={stop} type={"primary"} />
        <Button text={"reset"} onClick={reset} type={"primary"} />
      </div>
    </div>
  );
};
