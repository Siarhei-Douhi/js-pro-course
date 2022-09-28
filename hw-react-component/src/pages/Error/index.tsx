import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import style from "./style.module.css";

export const Error = () => {
  return (
    <Container>
      <Header />
      <div className={style.wrap}>
        <h1>404</h1>
        <p>Page not found</p>
      </div>
    </Container>
  );
};
