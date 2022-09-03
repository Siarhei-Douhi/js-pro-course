import style from "./style.module.css";
import { EmojiRow } from "../EmojiRow";
import { ChangeEventHandler, useState } from "react";
import { Input } from "../../Input";

interface IEmoji {
  symbol: string;
  title: string;
  keywords: string;
}

interface IProps {
  emojies: IEmoji[];
}

export const EmojiList = ({ emojies }: IProps) => {
  const [searchText, setSearchText] = useState("");
  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchText(event.target.value);
  };

  const searchEmodjies = emojies.filter((item) => {
    if (
      item.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
      item.keywords.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    ) {
      return true;
    }
    return false;
  });

  return (
    <div className={style.wrap}>
      <Input
        value={searchText}
        onChange={handleOnChange}
        placeholder={"search emodjies"}
      />
      {searchEmodjies.map((item, index) => {
        return <EmojiRow key={index} symbol={item.symbol} title={item.title} />;
      })}
    </div>
  );
};
