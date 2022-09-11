import style from "./style.module.css";
import { picture } from "../../assets";
import { IPost } from "../../types/post";

export const FullPost = (props: IPost) => {
  return (
    <div className={style.container}>
      {props.image ? (
        <img className={style.imagePost} src={props.image} alt={props.title} />
      ) : (
        <img className={style.imagePost} src={picture} alt={props.title} />
      )}
      <h2 className={style.cardTitle}>{props.title}</h2>
      <p className={style.cardText}>{props.text}</p>
      <div className={style.date}>{props.date}</div>
    </div>
  );
};
