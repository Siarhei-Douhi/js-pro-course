import { useContext } from "react";
import { Context } from "../../App";
import style from "./style.module.css";

interface IProps {
  text: string;
}
export const TextForm = (props: IProps) => {
  const { isDark } = useContext(Context);
  return (
    <p className={`${style.text} ${isDark ? style.textDark : ""}`}>
      {props.text}
    </p>
  );
};
