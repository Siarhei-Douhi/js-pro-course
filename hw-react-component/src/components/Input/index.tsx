import styles from "./style.module.css";
import { ChangeEventHandler, useContext } from "react";
import { Context } from "../../App";

interface Input {
  label?: string;
  value: string;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
export const Input = (props: Input) => {
  const { isDark } = useContext(Context);
  return (
    <label>
      {props.label ? (
        <p
          className={`${styles.labelTitle} ${
            isDark ? styles.labelTitleDark : ""
          }`}
        >
          {props.label}
        </p>
      ) : null}
      <input
        className={`${styles.input} ${isDark ? styles.inputDark : ""}`}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      ></input>
    </label>
  );
};
