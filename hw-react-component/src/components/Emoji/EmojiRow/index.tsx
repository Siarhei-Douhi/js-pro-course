interface Props {
  title: string;
  symbol: Symbol;
}

export const EmojiRow = (props: Props) => {
  return <div>{`${props.symbol}`}</div>;
};
