import style from "./style.module.css";
import { picture } from "../../../assets";
import { IPost } from "../../../types/post";
import { ReactEventHandler, useState } from "react";

interface IProps extends IPost {
  isLarge?: boolean;
}
export const ItemPost = (props: IProps) => {
  const [image, setImage] = useState(props.image);

  const handleError: ReactEventHandler<HTMLImageElement> = () => {
    setImage("");
  };

  return (
    <div
      className={`${style.container} ${
        props.isLarge ? style.containerLarge : ""
      }`}
    >
      {image ? (
        <img
          className={`${style.imagePost} ${
            props.isLarge ? style.imagePostLarge : ""
          }`}
          src={image}
          alt={props.title}
          onError={handleError}
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
