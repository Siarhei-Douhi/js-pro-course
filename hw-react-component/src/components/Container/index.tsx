import { ReactNode, useContext } from "react";
import style from "./style.module.css";
import { Context } from "../../App";

interface IProps {
  children: ReactNode;
}

export const Container = ({ children }: IProps) => {
  const { isDark } = useContext(Context);

  return (
    <div
      className={`${style.container} ${
        isDark ? style.darkContainer : style.whiteContainer
      }`}
    >
      {children}
    </div>
  );
};
