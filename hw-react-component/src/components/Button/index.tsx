import { useContext } from "react";
import { Context } from "../../App";
import styles from "./style.module.css";

interface Props {
  text: string;
  type: "primary" | "secondary" | "secondary2";
  disabled?: boolean;
  onClick: () => void;
  className?: string;
}

const getButtonStyle = (type: "primary" | "secondary" | "secondary2") => {
  if (type === "primary") {
    return styles.primary;
  }

  if (type === "secondary") {
    return styles.secondary;
  }

  if (type === "secondary2") {
    return styles.secondary2;
  }
};
export const Button = (props: Props) => {
  const { isDark } = useContext(Context);
  return (
    <button
      className={`${styles.button} ${getButtonStyle(props.type)} ${
        isDark ? styles.buttonDark : ""
      } ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};
