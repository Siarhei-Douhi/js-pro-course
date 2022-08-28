import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { UserCard } from "./components/UserCard";
import { Title } from "./components/Title";
import { Clicker } from "./components/Clicker";
import { ItemPost } from "./components/InstagramPost/ItemPost";
import { ListPost } from "./components/InstagramPost/ListPosts";
import { EmojiRow } from "./components/Emoji/EmojiRow";

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
      <div style={{ display: "flex ", marginBottom: "30px" }}>
        <ItemPost
          image="https://avatarko.ru/img/kartinka/9/robot_medved_8715.jpg"
          author="Petrov"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          title="What is Lorem Ipsum?"
          date={"28.08.2022"}
        />
        <ItemPost
          image="https://avatarko.ru/img/kartinka/2/multfilm_robot_1481.jpg"
          author="Ivanov"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          title="What is Lorem Ipsum?"
          date={"28.08.2022"}
        />
        <ItemPost
          author="Sidorov"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          title="What is Lorem Ipsum?"
          date={"28.08.2022"}
        />
      </div>
      <ListPost />
    </div>
  );
}

export default App;
