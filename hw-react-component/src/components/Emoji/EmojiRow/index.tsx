import style from "./style.module.css";
interface IProps {
  title: string;
  symbol: string;
}

export const EmojiRow = ({ title, symbol }: IProps) => {
  return (
    <li className={style.emojiRow}>
      {symbol} {title}
    </li>
  );
};
