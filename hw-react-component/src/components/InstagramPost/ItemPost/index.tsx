import style from "./style.module.css";

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
        <div
          className={style.image}
          style={{ backgroundImage: `url(${props.image})` }}
        />
      ) : (
        // <img className={style.image} src={"../img/Vector.jpg"} alt="пост" />
        <div
          className={style.image}
          style={{ backgroundImage: `url("../img/Vector.png")` }}
        />
      )}
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <div>{props.date}</div>
    </div>
  );
};

//   "id": 0,
// "image": "string",
// "text": "string",
// "date": "2022-08-28",
// "lesson_num": 0,
// "title": "string",
// "author": 0
