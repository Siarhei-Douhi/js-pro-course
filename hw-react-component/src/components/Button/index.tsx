import styles from "./style.module.css";

interface Props {
  text: string;
  onClick: () => void;
}
interface Props {
  text: string;
  type: "primary" | "secondary" | "secondary2";
  disabled?: boolean;
  onClick: () => void;
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
  return (
    <button
      className={`${styles.button} ${getButtonStyle(props.type)}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};
