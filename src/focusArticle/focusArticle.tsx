import { articles } from "../articleData";
import "../index.scss";
import "./focusArticle.scss";
import ArticleComponent from "../article/article";
import { ShoppingCartContext } from "../CustomContext";
import { useContext, useRef, useState } from "react";
import { Article } from "../articleData";
import { ShoppingCartDatatype } from "../CustomContext";
import { LOCALE_STORAGE_KEY } from "../App";
import PopUp from "../PopUp/popUp";

export default function FocusArticleComponent() {
  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);
  const [toasty, setToasty] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [picture, setPicture] = useState<string>("");
  const timeControl = useRef(0);

  function checkArticle(id: number) {
    console.log(id);
    const articleExists = articles.find((article) => {
      return article.id === id;
    });

    const articleInShoppingCart = shoppingCart.find((article) => {
      return articleExists?.id === article.id;
    });

    if (articleExists) {
      if (articleInShoppingCart === undefined) {
        addArticleToShoppingCart(articleExists);
      } else {
        updateArticleQuantity(articleInShoppingCart, id);
      }
    }
  }

  function addArticleToShoppingCart(findArticle: Article) {
    if (findArticle) {
      /*  wenn nur die Variable in der if-Abfrage steht ist das wie die Art der Kurzschreibweise
            
            */
      const articleOrder: ShoppingCartDatatype = {
        name: findArticle.name,
        description: findArticle.description.short,
        img: findArticle.imgArray[0],
        price: findArticle.newPrice,
        quantity: 1,
        id: findArticle.id,
        declination: findArticle.declination,
      };
      /*  ein weiteres Objekt war nötig
            
            */

      console.log(articleOrder);
      const updatedShoppingCard = [...shoppingCart, articleOrder];

      console.log(updatedShoppingCard);
      setShoppingCart(updatedShoppingCard);
      saveArticle(updatedShoppingCard);

      setMessage(
        `${articleOrder.declination} ${articleOrder.name} wurde dem Warenkorb hinzugefügt.`,
      );
      setPicture("shopping-cart");
      setToasty(true);
      timeControl.current = window.setTimeout(closePopUp, 3000);
    }
  }

  function saveArticle(shoppingArticle: ShoppingCartDatatype[]) {
    localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(shoppingArticle));
  }

  function updateArticleQuantity(
    findArticle: ShoppingCartDatatype,
    id: number,
  ) {
    const filteredShoppingCart = shoppingCart.filter((article) => {
      return article.id !== id;
    });

    const findArticleIndex = shoppingCart.findIndex((article) => {
      return article.id === id;
    });

    const updateArticleOrder: ShoppingCartDatatype = {
      name: findArticle.name,
      description: findArticle.description,
      img: findArticle.img,
      price: findArticle.price,
      quantity: findArticle.quantity + 1,
      id: findArticle.id,
      declination: findArticle.declination,
    };

    console.log(updateArticleOrder);

    const updateShoppingCart = [...filteredShoppingCart];

    updateShoppingCart.splice(findArticleIndex, 0, updateArticleOrder);

    setShoppingCart(updateShoppingCart);
    saveArticle(updateShoppingCart);

    setMessage(
      `${updateArticleOrder.declination} ${updateArticleOrder.name} wurde dem Warenkorb hinzugefügt.`,
    );
    setPicture("quantity");
    setToasty(true);
    timeControl.current = window.setTimeout(closePopUp, 3000);
  }

  function closePopUp() {
    setToasty(false);
  }

  return (
    <section id="supaSales" className="focus-article-section">
      <h2 className="focus-article-section__headline center-text">
        Unsere Super-Sales
      </h2>

      {toasty && <PopUp message={message} picture={picture} />}

      <div className="focus-article-section__focus-article-preview">
        <ArticleComponent article={articles[0]} checkArticle={checkArticle} />
        <ArticleComponent article={articles[1]} checkArticle={checkArticle} />
        <ArticleComponent article={articles[12]} checkArticle={checkArticle} />
      </div>
    </section>
  );

  /*                                                                                  
  
  */
}
