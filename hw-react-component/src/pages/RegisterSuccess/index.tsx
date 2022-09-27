import { useNavigate } from "react-router-dom";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { InfoTemplate } from "../../components/InfoTemplate";

export const RegisterSuccess = () => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };
  return (
    <Container>
      <Header />
      <InfoTemplate
        onClick={navigateHome}
        textBtn="Home"
        title="Registration Confirmation"
      >
        Please activate your account with the activation link in the{" "}
        <a href="#">emailtest@gmail.com</a> Please, check your email
      </InfoTemplate>
    </Container>
  );
};
