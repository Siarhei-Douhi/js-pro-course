import { ReactNode, useContext } from "react";
import style from "./style.module.css";
import { Context } from "../../App";

interface IProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: IProps) => {
  const { isDark } = useContext(Context);

  return (
    <div
      className={`${style.container} ${
        isDark ? style.darkContainer : style.whiteContainer
      } ${className}`}
    >
      {children}
    </div>
  );
};
