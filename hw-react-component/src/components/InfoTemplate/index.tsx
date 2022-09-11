import { Button } from "../Button";
import style from "./style.module.css";

interface IProps {
  title: string;
  text: string;
  textBtn: string;
  onClick: () => void;
}
export const InfoTemplate = (props: IProps) => {
  return (
    <div className={style.wrap}>
      <h1 className={style.title}>{props.title}</h1>
      <p className={style.text}>{props.text}</p>
      <Button type="primary" text={props.textBtn} onClick={props.onClick} />
    </div>
  );
};
