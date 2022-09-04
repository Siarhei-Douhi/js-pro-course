import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { UserCard } from "./components/UserCard";
import { Title } from "./components/Title";
import { Clicker } from "./components/Clicker";
import { ListPost } from "./components/InstagramPost/ListPosts";
import { EmojiList } from "./components/Emoji/EmojiList";
import { emojies, posts } from "./mock";
import { TodoList } from "./components/TodoList/List";
import { Time } from "./components/Time";
import { Timer } from "./components/Timer";
import { Form } from "./components/Form";
import { Converter } from "./components/Converter";

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
      <Input value="some text" onChange={() => {}} label={"test"} />
      <Input value="text2" onChange={() => {}} />
      <UserCard userName="Artem Malkin" isDark={false} />
      <UserCard userName="Ivanov" isDark={true} />
      <Clicker />
      <ListPost posts={posts} />
      <TodoList />
      <EmojiList emojies={emojies} />
      <Time />
      <Timer />
      <Form />
      <Converter />
    </div>
  );
}

export default App;
