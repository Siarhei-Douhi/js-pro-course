import { ChangeEventHandler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IPost } from "../../types/post";
import { Button } from "../Button";
import { Input } from "../Input";
import { ListPost } from "../InstagramPost/ListPosts";
import style from "./style.module.css";
import { fetchPosts } from "../../api/posts";

export const AllPosts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const navigate = useNavigate();
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchText(event.target.value);
  };

  const navigateToPost = (id: number) => {
    navigate(`/selected_post/${id}`);
  };

  useEffect(() => {
    setIsLoading(true);

    fetchPosts(searchText, posts.length)
      .then((values) => {
        if (values.count > values.results.length) {
          setShowLoadMore(true);
        } else {
          setShowLoadMore(false);
        }

        setPosts(values.results);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchText]);

  const loadMore = () => {
    const promise = fetchPosts(searchText, posts.length);

    promise.then((values) => {
      console.log({ values });

      if (values.results.length + posts.length === values.count) {
        setShowLoadMore(false);
      }

      setPosts(posts.concat(values.results));
    });
  };

  return (
    <>
      <div className={style.infoPanel}>
        <h2 className={style.title}>All posts</h2>
        <Input value={searchText} onChange={handleOnChange} />
      </div>
      {isLoading ? (
        <div style={{ width: 100, height: 100, background: "#000" }} />
      ) : (
        <>
          <ListPost posts={posts} onClickPost={navigateToPost} />
          {showLoadMore ? (
            <div className={style.buttonWrapper}>
              <Button text="Загрузить еще" onClick={loadMore} type="primary" />
            </div>
          ) : null}
        </>
      )}
    </>
  );
};
