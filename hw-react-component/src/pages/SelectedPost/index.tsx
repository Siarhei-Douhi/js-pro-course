import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/Container";
import { FullPost } from "../../components/FullPost";
import { Header } from "../../components/Header";

import { IPost } from "../../types/post";
import style from "./style.module.css";

export const SelectedPost = () => {
  // const objMock = posts[1];
  const param = useParams();
  // console.log(param);

  const [post, setPost] = useState<IPost | null>(null);

  useEffect(() => {
    const promise = fetch(
      `https://studapi.teachmeskills.by/blog/posts/${param.id}`
    );

    promise
      .then((response) => {
        return response.json();
      })
      .then((values) => {
        console.log({ values });
        setPost(values);
      });
  }, []);
  return (
    <Container>
      <div className={style.wrap}>
        <Header />
        <h1 className={style.title}>Selected post</h1>
        {post ? (
          <FullPost
            key={post.id}
            id={post.id}
            text={post.text}
            author={post.author}
            title={post.title}
            date={post.date}
            image={post.image}
            lesson_num={post.lesson_num}
          />
        ) : (
          <p>loading...</p>
        )}
      </div>
    </Container>
  );
};
