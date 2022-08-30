import { EmojiRow } from "../EmojiRow";
import { emojies } from "./list";

export const EmojiList = () => {
  return (
    <div>
      <h2>Задание 3</h2>
      {emojies.map((item) => {
        return (
          <EmojiRow
            key={item.keywords}
            symbol={item.symbol}
            title={item.title}
          />
        );
      })}
    </div>
  );
};
