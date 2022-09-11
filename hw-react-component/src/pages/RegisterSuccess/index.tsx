import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { InfoTemplate } from "../../components/InfoTemplate";

export const RegisterSuccess = () => {
  return (
    <Container>
      <Header />
      <InfoTemplate
        onClick={() => {}}
        textBtn="Home"
        title="Registration Confirmation"
        text="Please activate your account with the activation link in the emailtest@gmail.comPlease, check your email"
      />
    </Container>
  );
};
