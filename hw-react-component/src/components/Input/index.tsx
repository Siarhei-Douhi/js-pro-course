import styles from "./style.module.css";
import { ChangeEventHandler } from "react";

interface Input {
  label?: string;
  value: string;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
export const Input = (props: Input) => {
  return (
    <label>
      {props.label ? <p className={styles.labelTitle}>{props.label}</p> : null}
      <input
        className={styles.input}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      ></input>
    </label>
  );
};
