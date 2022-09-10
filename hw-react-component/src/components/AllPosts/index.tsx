import { useEffect, useState } from "react";
import { IPost } from "../../types/post";
import { ListPost } from "../InstagramPost/ListPosts";

export const AllPosts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const promise = fetch("https://studapi.teachmeskills.by/blog/posts/");

    promise
      .then((response) => {
        return response.json();
      })
      .then((values) => {
        console.log({ values });
        setPosts(values.results);
      });
  }, []);

  return <ListPost posts={posts} />;
};
