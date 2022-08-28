import style from "./style.module.css";
import im from "./Rectangle.png";

interface Props {
  id?: number;
  image?: string;
  text: string;
  date: string;
  lesson_num?: number;
  title: string;
  author: string;
}

export const ItemPost = (props: Props) => {
  return (
    <div className={style.container}>
      <div>{props.author}</div>
      {props.image ? (
        <img className={style.image} src={props.image} alt="пост" />
      ) : (
        <img className={style.image} src={im} alt="пост" />
      )}
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <div>{props.date}</div>
    </div>
  );
};
