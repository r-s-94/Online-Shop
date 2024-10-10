import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ShoppingCart from "./shoppingCart/shoppingCart";
import ArticleInfo from "./articleInfo/articleInfo";
import "./App.scss";
import Root from "./root";
import { ShoppingCartContext } from "./CustomContext";
import { ShoppingCartDatatype } from "./CustomContext";
//import { ArticleIdContext } from "./articleIdContext";
import { useState, useEffect } from "react";
import CheckoutComponent from "./checkOut/checkOut";
export const LOCALE_STORAGE_KEY = "shoppingCart";
//export const LOCALE_STORAGE_ARTICLE_ID_KEY = "articleId";
import AboutUsComponent from "./about us/aboutUs";

function App() {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartDatatype[]>([]);
  //const [articleIdArray, setArticleIdArray] = useState<number[]>([]);
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "products/:name",
        element: <ArticleInfo />,
      },
      {
        path: "aboutUs",
        element: <AboutUsComponent />,
      },
      {
        path: "shoppingStorage",
        element: <ShoppingCart />,
      },
      {
        path: "checkOut",
        element: <CheckoutComponent />,
      },
    ],
    {
      basename: "/Online-Shop/",
    }
  );

  useEffect(() => {
    loadArticles();
    //loadArticleId();
  }, []);

  function loadArticles() {
    const getArticlesFromStorage = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (getArticlesFromStorage !== null) {
      setShoppingCart([...JSON.parse(getArticlesFromStorage)]);
    }
  }

  /*function loadArticleId() {
    const getArticleIdFromStorage = localStorage.getItem(
      LOCALE_STORAGE_ARTICLE_ID_KEY
    );
    if (getArticleIdFromStorage !== null) {
      setShoppingCart([...JSON.parse(getArticleIdFromStorage)]);
    }
  }*/

  return (
    <ShoppingCartContext.Provider value={{ shoppingCart, setShoppingCart }}>
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </ShoppingCartContext.Provider>
  );

  /*
   <ArticleIdContext.Provider value={{ articleIdArray, setArticleIdArray }}>
  </ArticleIdContext.Provider>
  */
}

export default App;
