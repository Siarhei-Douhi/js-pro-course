import style from "./style.module.css";
import { useState } from "react";
import { Button } from "../Button";

export const Clicker = () => {
  let [clickCount, setClickCount] = useState(0);

  const onClickPlus = () => {
    setClickCount(clickCount + 1);
  };
  const onClickMinus = () => {
    setClickCount(clickCount - 1);
  };
  const reset = () => {
    setClickCount(0);
  };

  return (
    <div className={style.wrap}>
      <p>Counter</p>
      <h2>{clickCount}</h2>
      <Button text={"+"} onClick={onClickPlus} type="primary" />
      <Button text={"-"} onClick={onClickMinus} type="primary" />
      <Button text={"reset"} onClick={reset} type="secondary" />
    </div>
  );
};
