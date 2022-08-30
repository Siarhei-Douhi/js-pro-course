import { ItemPost } from "../ItemPost";

const generateUniqId = () => {
  return "_" + Math.random().toString(16).slice(2);
};

const todos = [
  {
    text: "Lorem Ipsum is simy of type and scrambled it to make a type specimen book.",
    id: generateUniqId(),
    author: "Ivanov",
    title: "What is Lorem Ipsum?",
    date: "28.08.2022",
    image: "https://avatarko.ru/img/kartinka/3/zhivotnye_medved_lampa_2384.jpg",
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    id: generateUniqId(),
    author: "Stilov",
    title: "What is Lorem Ipsum?",
    date: "28.08.2022",
    image: "https://avatarko.ru/img/kartinka/9/robot_medved_8715.jpg",
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  book.",
    id: generateUniqId(),
    author: "Petrovov",
    title: "What is Lorem Ipsum?",
    date: "28.08.2022",
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's staince the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    id: generateUniqId(),
    author: "Malahov",
    title: "What is Lorem Ipsum?",
    date: "28.08.2022",
    image: "https://avatarko.ru/img/kartinka/2/multfilm_robot_1481.jpg",
  },
];

export const ListPost = () => {
  return (
    <div style={{ display: "flex ", flexWrap: "wrap" }}>
      {todos.map((item) => {
        return (
          <ItemPost
            key={item.id}
            text={item.text}
            author={item.author}
            title={item.title}
            date={item.date}
            image={item.image}
          />
        );
      })}
    </div>
  );
};
