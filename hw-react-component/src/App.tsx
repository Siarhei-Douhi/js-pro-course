import "./App.css";
import { ListPost } from "./components/InstagramPost/ListPosts";
import { RegisterForm } from "./components/RegisterForm";
import { posts } from "./mock";

function App() {
  const onClickBtn1 = () => {
    alert("great:)");
  };
  const onClickBtn2 = () => {
    alert("Ok");
  };
  return (
    <div className="App">
      <ListPost posts={posts} />
      <RegisterForm />
    </div>
  );
}

export default App;
