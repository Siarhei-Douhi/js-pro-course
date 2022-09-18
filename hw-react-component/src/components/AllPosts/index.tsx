import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IPost } from "../../types/post";
import { Button } from "../Button";
import { ListPost } from "../InstagramPost/ListPosts";

export const AllPosts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const navigate = useNavigate();

  const navigateToPost = (id: number) => {
    console.log("выполняется функция navigateToPost с id=", id);
    navigate(`/selected_post/${id}`);
  };

  useEffect(() => {
    const promise = fetch(
      "https://studapi.teachmeskills.by/blog/posts/?limit=10"
    );

    promise
      .then((response) => {
        return response.json();
      })
      .then((values) => {
        console.log({ values });
        setPosts(values.results);
      });
  }, []);

  return (
    <>
      <ListPost posts={posts} onClickPost={navigateToPost} />
      <Button text="Загрузить еще" onClick={() => {}} type="primary" />
    </>
  );
};
