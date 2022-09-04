import { useEffect, useState } from "react";
import { Button } from "../Button";

export const Timer = () => {
  let [count, setCount] = useState(0);
  let intervalId: any;
  const start = () => {
    intervalId = setInterval(() => {
      console.log("setInterval");
      setCount((state) => state + 1);
    }, 1000);
  };
  const stop = () => {
    setCount((state) => state);
    return clearInterval(intervalId);
  };
  const reset = () => {
    setCount(0);
    clearInterval(intervalId);
  };

  return (
    <div>
      {count}
      <div>
        <Button text={"start"} onClick={start} type={"primary"} />
        <Button text={"stop"} onClick={stop} type={"primary"} />
        <Button text={"reset"} onClick={reset} type={"primary"} />
      </div>
    </div>
  );
};
