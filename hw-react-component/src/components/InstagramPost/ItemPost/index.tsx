import style from "./style.module.css";
import { picture } from "../../../assets";
import { IPost } from "../../../types/post";

interface IProps extends IPost {
  isLarge?: boolean;
}
export const ItemPost = (props: IProps) => {
  return (
    <div
      className={`${style.container} ${
        props.isLarge ? style.containerLarge : ""
      }`}
    >
      {props.image ? (
        <img
          className={`${style.imagePost} ${
            props.isLarge ? style.imagePostLarge : ""
          }`}
          src={props.image}
          alt={props.title}
        />
      ) : (
        <img
          className={`${style.imagePost} ${
            props.isLarge ? style.imagePostLarge : ""
          }`}
          src={picture}
          alt={props.title}
        />
      )}
      <h2
        className={`${style.cardTitle} ${
          props.isLarge ? style.cardTitleLarge : ""
        }`}
      >
        {props.title}
      </h2>
      <p
        className={`${style.cardText} ${
          props.isLarge ? style.cardTextLarge : ""
        }`}
      >
        {props.text}
      </p>
      <div className={`${style.date} ${props.isLarge ? style.dateLarge : ""}`}>
        {props.date}
      </div>
    </div>
  );
};
