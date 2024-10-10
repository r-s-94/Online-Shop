import { Article, articles } from "../articleData";
import { LOCALE_STORAGE_KEY } from "../App";
import { ShoppingCartContext, ShoppingCartDatatype } from "../CustomContext";
//import { ArticleIdContext } from "../articleIdContext";
import { useContext, useState } from "react";
import "./articlePreview.scss";
import ArticleComponent from "../article/article";
import PopUp from "../PopUp/popUp";
//import { LOCALE_STORAGE_ARTICLE_ID_KEY } from "../App";

export default function ArticlePreviewComponent() {
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
      return article.id === articleExists?.id;
    });

    console.log(articleInShoppingCart);

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
        count: 0,
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
      count: 0,
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
    <section id="allArticle" className="article-preview-section">
      <h2 className="article-preview-section__headline">Unsere Angebote</h2>

      {showPopUp && <PopUp message={popUpMessage} bild={picture} />}

      <div className="article-preview-section__article-preview">
        {articles.map((article) => {
          return (
            <ArticleComponent article={article} checkArticle={checkArticle} />
          );
        })}
      </div>
    </section>
  );
}

/*

*/
