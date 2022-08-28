import style from "./style.module.css";

interface Props {
  userName: string;
  isDark: boolean;
}

export const UserCard = (props: Props) => {
  const arrayFullName = props.userName.split(" ");

  return (
    <div
      className={`${style.container} ${
        props.isDark ? style.containerDark : ""
      }`}
    >
      <div
        className={`${style.userInicial} ${
          props.isDark ? style.userInicialDark : ""
        }`}
      >{`${arrayFullName[0][0]}${
        arrayFullName[1] ? arrayFullName[1][0] : ""
      }`}</div>
      <div className={style.user}>{props.userName}</div>
    </div>
  );
};
