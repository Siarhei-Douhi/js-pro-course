import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { UserCard } from "./components/UserCard";
import { Title } from "./components/Title";
import { Clicker } from "./components/Clicker";

function App() {
  const onClickBtn1 = () => {
    alert("great:)");
  };
  const onClickBtn2 = () => {
    alert("Ok");
  };
  return (
    <div className="App">
      <Title text="Start homework react" />
      <div>
        <Button text="click me" onClick={onClickBtn1} type="primary" />
        <Button text="and me" onClick={onClickBtn2} type="secondary" />
      </div>
      <Input value="some text" />
      <Input value="text2" />
      <UserCard userName="Artem Malkin" isDark={false} />
      <UserCard userName="Ivanov" isDark={true} />
      <Clicker />
    </div>
  );
}

export default App;
