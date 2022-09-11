import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { InfoTemplate } from "../../components/InfoTemplate";

export const EmailConfirmed = () => {
  return (
    <Container>
      <Header />
      <InfoTemplate
        textBtn="Login"
        onClick={() => {}}
        text="Email confirmed. Your registration is now completed"
        title="Success"
      />
    </Container>
  );
};
