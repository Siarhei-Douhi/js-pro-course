import { useContext } from "react";
import { Context } from "../../App";
import { Button } from "../Button";
import style from "./style.module.css";

interface IProps {
  title: string;
  text: string;
  textBtn: string;
  onClick: () => void;
}
export const InfoTemplate = (props: IProps) => {
  const { isDark } = useContext(Context);
  return (
    <div className={style.wrap}>
      <h1 className={`${style.title} ${isDark ? style.titleDark : ""}`}>
        {props.title}
      </h1>
      <p className={`${style.text} ${isDark ? style.textDark : ""}`}>
        {props.text}
      </p>
      <Button type="primary" text={props.textBtn} onClick={props.onClick} />
    </div>
  );
};
