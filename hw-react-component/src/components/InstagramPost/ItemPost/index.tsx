import style from "./style.module.css";
import { picture } from "../../../assets";
import { IPost } from "../../../types/post";

export const ItemPost = (props: IPost) => {
  return (
    <div className={style.container}>
      <div>{props.author}</div>
      {props.image ? (
        <img className={style.image} src={props.image} alt={props.title} />
      ) : (
        <img className={style.image} src={picture} alt={props.title} />
      )}
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <div>{props.date}</div>
    </div>
  );
};
