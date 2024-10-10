import { articles } from "../articleData";
import "./focusArticle.scss";
import ArticleComponent from "../article/article";
import { ShoppingCartContext } from "../CustomContext";
//import { ArticleIdContext } from "../articleIdContext";
import { useContext, useState } from "react";
import { Article } from "../articleData";
import { ShoppingCartDatatype } from "../CustomContext";
import { LOCALE_STORAGE_KEY } from "../App";
//import { LOCALE_STORAGE_ARTICLE_ID_KEY } from "../App";
import PopUp from "../PopUp/popUp";

export default function FocusArticleComponent() {
  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);
  //const { articleIdArray, setArticleIdArray } = useContext(ArticleIdContext);
  const [timeoutControl, setTimeoutControl] = useState<number>(0);
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const [popUpMessage, setPopUpMessage] = useState<string>("");
  const [picture, setPicture] = useState<string>("");

  function checkArticle(id: number) {
    console.log(id);
    const articleExists = articles.find((article) => {
      return article.id === id;
    });

    const articleInShoppingCart = shoppingCart.find((article) => {
      return articleExists?.id === article.id;
    });

    console.log();

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
        img: findArticle.img,
        price: findArticle.price,
        quantity: 1,
        id: findArticle.id,
        declination: findArticle.declination,
      };
      /*  ein weiteres Objekt war nötig
            
            */

      console.log(articleOrder);
      const updatedShoppingCard = [...shoppingCart, articleOrder];
      //const updatedShoppingCardArticleId = [...articleIdArray, articleOrder.id];
      console.log(updatedShoppingCard);
      setShoppingCart(updatedShoppingCard);
      saveArticle(updatedShoppingCard);
      //setArticleIdArray(updatedShoppingCardArticleId);
      //saveArticleId(updatedShoppingCardArticleId);

      setPopUpMessage(
        `${articleOrder.declination} ${articleOrder.name} wurde dem Warenkorb hinzugefügt.`
      );
      setPicture("shopping-cart");
      setShowPopUp(true);
      setTimeoutControl(setTimeout(closePopUp, 3000));
    }
  }

  function saveArticle(shoppingArticle: ShoppingCartDatatype[]) {
    localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(shoppingArticle));
  }

  /*function saveArticleId(id: number[]) {
    localStorage.setItem(LOCALE_STORAGE_ARTICLE_ID_KEY, JSON.stringify(id));
  }*/

  function updateArticleQuantity(
    findArticle: Article | ShoppingCartDatatype,
    id: number
  ) {
    const filteredShoppingCart = shoppingCart.filter((article) => {
      return article.id !== id;
    });

    const findArticleIndex = shoppingCart.findIndex((article) => {
      return article.id === id;
    });

    const updateArticleOrder: ShoppingCartDatatype = {
      name: findArticle.name,
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

    setPopUpMessage(
      `${updateArticleOrder.declination} ${updateArticleOrder.name} wurde dem Warenkorb hinzugefügt.`
    );
    setPicture("quantity");
    setShowPopUp(true);
    setTimeoutControl(setTimeout(closePopUp, 3000));
  }

  function closePopUp() {
    setShowPopUp(false);
  }

  return (
    <section id="supaSales" className="focus-article-section">
      <h2 className="focus-article-section__headline">Unsere Super Sales</h2>

      {showPopUp && <PopUp message={popUpMessage} bild={picture} />}

      <div className="focus-article-section__focus-article-preview">
        <ArticleComponent article={articles[0]} checkArticle={checkArticle} />
        <ArticleComponent article={articles[3]} checkArticle={checkArticle} />
      </div>
    </section>
  );

  /*
  
  */
}
