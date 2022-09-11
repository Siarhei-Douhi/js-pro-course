import { Container } from "../../components/Container";
import { FullPost } from "../../components/FullPost";
import { Header } from "../../components/Header";
import { posts } from "../../mock";
import style from "./style.module.css";

export const SelectedPost = () => {
  const objMock = posts[1];
  return (
    <Container>
      <div className={style.wrap}>
        <Header />
        <h1 className={style.title}>Selected post</h1>
        <FullPost
          key={objMock.id}
          id={objMock.id}
          text={objMock.text}
          author={objMock.author}
          title={objMock.title}
          date={objMock.date}
          image={objMock.image}
          lesson_num={objMock.lesson_num}
        />
      </div>
    </Container>
  );
};
