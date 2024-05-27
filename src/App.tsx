import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ShoppingCart from "./shoppingCart/shoppingCart";
import Article from "./articleComponent/articleComponent";
import "./App.scss";
import Root from "./root";
import { ShoppingCartContext } from "./CustomContext";
import { ShoppingCartDatatype } from "./CustomContext";
import { useState, useEffect } from "react";
import CheckoutComponent from "./checkoutComponent/checkOutComponent";
export const LOCALE_STORAGE_KEY = "shoppingCart";

function App() {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartDatatype[]>([]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
    {
      path: "shoppingStorage",
      element: <ShoppingCart />,
    },
    {
      path: "products/:name",
      element: <Article />,
    },
    {
      path: "checkOut",
      element: <CheckoutComponent />,
    },
  ],
    {
      basename: "/online-shop/",
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
}

export default App;
