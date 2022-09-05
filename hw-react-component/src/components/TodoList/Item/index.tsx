import style from "./style.module.css";
import { useEffect, useState } from "react";
import { Button } from "../../Button";

interface IProps {
  text: string;
  checked: boolean;
  onClickRemove: () => void;
  onClickChecked: () => void;
}

export const Item = (props: IProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("setInterval");
      setCount((state) => state + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (count === 5) {
      alert("555555");
    }
  }, [count]);

  return (
    <div className={style.todoItem}>
      <input
        type={"checkbox"}
        checked={props.checked}
        onChange={props.onClickChecked}
      />
      <p>{props.text}</p>
      <p>{count}</p>
      <Button text="Remove" onClick={props.onClickRemove} type="primary" />
    </div>
  );
};
