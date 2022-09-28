import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMyPosts } from "../../api/posts";

import { IPost } from "../../types/post";
import { ListPost } from "../InstagramPost/ListPosts";

export const MyPostsList = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetchMyPosts()
      .then((values) => {
        setPosts(values);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const navigateToSelectedPost = (postId: number) => {
    navigate(`/selected_post/${postId}`);
  };

  return (
    <>
      {isLoading ? (
        <div style={{ width: 100, height: 100, background: "#000" }} />
      ) : (
        <>
          <ListPost posts={posts} onClickPost={navigateToSelectedPost} />
        </>
      )}
    </>
  );
};
