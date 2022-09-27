import style from "./style.module.css";
import { IPost } from "../../../types/post";
import { ItemPost } from "../ItemPost";

interface IProps {
  posts: IPost[];
  onClickPost: (id: number) => void;
}

export const ListPost = (props: IProps) => {
  return (
    <div className={style.listPosts}>
      {props.posts.map((item) => {
        const clickPost = () => {
          props.onClickPost(item.id);
        };
        return (
          <div onClick={clickPost}>
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
          </div>
        );
      })}
    </div>
  );
};
