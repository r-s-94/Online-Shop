import { createContext } from "react";

export const ArticleIdContext = createContext<{
  articleIdArray: number[];
  setArticleIdArray: React.Dispatch<React.SetStateAction<number[]>>;
}>({
  articleIdArray: [],
  setArticleIdArray: () => {},
});
