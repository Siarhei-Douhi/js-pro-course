import { Link, NavLink } from "react-router-dom";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { RegisterForm } from "../../components/RegisterForm";
import { TextForm } from "../../components/TextForm";
import styles from "./style.module.css";

export const Registration = () => {
  return (
    <Container className={styles.container}>
      <Header />
      <div className={styles.wrapperLink}>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? styles.active_link : styles.noActive_link
          }
        >
          Login
        </NavLink>
        |
        <NavLink
          to={"/registration"}
          className={({ isActive }) =>
            isActive ? styles.active_link : styles.noActive_link
          }
        >
          Registration
        </NavLink>
      </div>
      <RegisterForm />
      <TextForm>
        If you have account, you can{" "}
        <Link to="/login" style={{ color: "#016efc" }}>
          login
        </Link>
      </TextForm>
    </Container>
  );
};
