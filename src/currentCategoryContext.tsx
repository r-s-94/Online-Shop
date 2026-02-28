import { createContext } from "react";

interface CurrentCategoryObject {
  currentCategory: string;
  setCurrentCategory: (value: string) => void;
}

export const currentCategoryContent = createContext<CurrentCategoryObject>({
  currentCategory: "",
  setCurrentCategory: () => {},
});
