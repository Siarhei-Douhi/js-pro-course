import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IPost } from "../../types/post";
import { Button } from "../Button";
import { Input } from "../Input";
import { ListPost } from "../InstagramPost/ListPosts";
import style from "./style.module.css";

export const AllPosts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const navigate = useNavigate();
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [searchText, setSearchText] = useState("");

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchText(event.target.value);
  };

  const navigateToPost = (id: number) => {
    navigate(`/selected_post/${id}`);
  };

  useEffect(() => {
    const promise = fetch(
      searchText
        ? `https://studapi.teachmeskills.by/blog/posts/?search=${searchText}&limit=10`
        : "https://studapi.teachmeskills.by/blog/posts/?limit=10"
    );
    promise
      .then((response) => {
        return response.json();
      })
      .then((values) => {
        console.log({ values });
        setPosts(values.results);
      });
  }, [searchText]);

  const loadMore = () => {
    const promise = fetch(
      searchText
        ? `https://studapi.teachmeskills.by/blog/posts/?search=${searchText}&limit=10&offset=${posts.length}`
        : `https://studapi.teachmeskills.by/blog/posts/?limit=10&offset=${posts.length}`
    );
    promise
      .then((response) => {
        return response.json();
      })
      .then((values) => {
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
      <ListPost posts={posts} onClickPost={navigateToPost} />
      {showLoadMore ? (
        <div className={style.buttonWrapper}>
          <Button text="Загрузить еще" onClick={loadMore} type="primary" />
        </div>
      ) : null}
    </>
  );
};
