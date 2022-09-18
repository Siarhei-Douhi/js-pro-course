import { IPost } from "../../types/post";
import { ItemPost } from "../InstagramPost/ItemPost";

export const FullPost = (props: IPost) => {
  return <ItemPost {...props} isLarge={true} />;
};
