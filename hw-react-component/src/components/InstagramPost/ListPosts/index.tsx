import style from "./style.module.css";
import { IPost } from "../../../types/post";
import { ItemPost } from "../ItemPost";

interface IProps {
  posts: IPost[];
}

export const ListPost = (props: IProps) => {
  return (
    <div className={style.listPosts}>
      {props.posts.map((item) => {
        return (
          <ItemPost
            key={item.id}
            id={item.id}
            text={item.text}
            author={item.author}
            title={item.title}
            date={item.date}
            image={item.image}
            lesson_num={item.lesson_num}
          />
        );
      })}
    </div>
  );
};
