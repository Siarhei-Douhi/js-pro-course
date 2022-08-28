import style from "./style.module.css";
interface Props {
  title: string;
  symbol: string;
}

export const EmojiRow = (props: Props) => {
  return (
    <div className={style.wrapper}>
      {props.symbol}
      {props.title}
    </div>
  );
};
