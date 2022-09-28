import { useNavigate, useParams } from "react-router-dom";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { InfoTemplate } from "../../components/InfoTemplate";
import { useEffect } from "react";
import { activateUser } from "../../api/auth";

export const EmailConfirmed = () => {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };
  const params = useParams();

  useEffect(() => {
    if (params.uid && params.token) {
      activateUser(params.uid, params.token);
    }
  }, []);

  return (
    <Container>
      <Header />
      <InfoTemplate textBtn="Login" onClick={navigateToLogin} title="Success">
        Email confirmed. Your registration is now completed
      </InfoTemplate>
    </Container>
  );
};
