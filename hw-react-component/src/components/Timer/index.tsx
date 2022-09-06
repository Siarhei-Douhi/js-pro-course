import { useEffect, useRef, useState } from "react";
import { Button } from "../Button";
import style from "./style.module.css";

export const Timer = () => {
  const [count, setCount] = useState(0);
  const timerRef = useRef<NodeJS.Timer | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const onClickStart = () => {
    if (!timerRef.current) {
      console.log(timerRef.current);
      timerRef.current = setInterval(() => {
        setCount((state) => state + 1);
      }, 1000);
      console.log(timerRef.current);
    }
  };

  const onClickStop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = null;
  };

  const onClickReset = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = null;
    setCount(0);
  };

  return (
    <div className={style.timer}>
      <h3>{count}</h3>
      <div>
        <Button type="primary" text={"start"} onClick={onClickStart} />
        <Button type="primary" text={"stop"} onClick={onClickStop} />
        <Button type="primary" text={"reset"} onClick={onClickReset} />
      </div>
    </div>
  );
};
