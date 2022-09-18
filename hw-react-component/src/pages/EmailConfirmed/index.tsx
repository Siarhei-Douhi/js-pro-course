import { useNavigate } from "react-router-dom";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { InfoTemplate } from "../../components/InfoTemplate";

export const EmailConfirmed = () => {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };
  return (
    <Container>
      <Header />
      <InfoTemplate textBtn="Login" onClick={navigateToLogin} title="Success">
        Email confirmed. Your registration is now completed
      </InfoTemplate>
    </Container>
  );
};
