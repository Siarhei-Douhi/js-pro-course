import { ChangeEventHandler, useCallback, useState } from "react";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { Item } from "../Item";

const generateUniqId = () => {
  return "_" + Math.random().toString(16).slice(2);
};

interface ITodo {
  id: string;
  text: string;
  checked: boolean;
}

export const TodoList = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      console.log(event.target.value);
      setText(event.target.value);
    },
    []
  );

  const addTodo = () => {
    if (text.length < 5) {
      alert("Ошибка");
      return;
    }

    const newTodo = {
      text: text,
      id: generateUniqId(),
      checked: false,
    };

    const newTodos = [...todos, newTodo];

    setTodos(newTodos);
    setText("");
  };

  const removeTodo = (id: string) => {
    ///1. Фильтруем исходный массив
    const newTodos = todos.filter((item) => {
      if (item.id === id) {
        return false;
      }

      return true;
    });

    ///2. выполнить setTodos с массивом newTodos
    setTodos(newTodos);
  };

  const checkTodo = (id: string) => {
    ///1. Изменяем текущий массив, изменить свойство checked у тудушки с id
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        //1
        if (item.checked) {
          item.checked = false;
        } else {
          item.checked = true;
        }

        //2
        // item.checked = !item.checked;
        return item;
      }

      return item;
    });

    ///2. выполнить setTodos с массивом newTodos
    setTodos(newTodos);
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <Input value={text} onChange={handleOnChange} />
        {text.length > 5 ? (
          <Button
            type="primary"
            text="add"
            onClick={addTodo}
            disabled={text.length < 5}
          />
        ) : null}
      </div>
      {todos.map((item) => {
        const onClickRemove = () => {
          removeTodo(item.id);
        };

        const onClickChecked = () => {
          checkTodo(item.id);
        };

        return (
          <Item
            key={item.id}
            checked={item.checked}
            text={item.text}
            onClickRemove={onClickRemove}
            onClickChecked={onClickChecked}
          />
        );
      })}
    </div>
  );
};
