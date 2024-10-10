import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ShoppingCart from "./shoppingCart/shoppingCart";
import ArticleInfo from "./articleInfo/articleInfo";
import "./App.scss";
import Root from "./root";
import { ShoppingCartContext } from "./CustomContext";
import { ShoppingCartDatatype } from "./CustomContext";
import { useState, useEffect } from "react";
import CheckoutComponent from "./checkOut/checkOut";
export const LOCALE_STORAGE_KEY = "shoppingCart";
import AboutUsComponent from "./about us/aboutUs";

function App() {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartDatatype[]>([]);
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
  }, []);

  function loadArticles() {
    const getArticlesFromStorage = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (getArticlesFromStorage !== null) {
      setShoppingCart([...JSON.parse(getArticlesFromStorage)]);
    }
  }

  return (
    <ShoppingCartContext.Provider value={{ shoppingCart, setShoppingCart }}>
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </ShoppingCartContext.Provider>
  );

  /*
  
  */
}

export default App;
