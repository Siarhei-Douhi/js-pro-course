import { AllPosts } from "../../components/AllPosts";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import style from "./style.module.css";

export const Main = () => {
  return (
    <Container>
      <Header />
      <div className={style.wrap}>
        <AllPosts />
      </div>
    </Container>
  );
};
