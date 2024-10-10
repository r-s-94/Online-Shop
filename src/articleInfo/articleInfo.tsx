import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Article, articles } from "../articleData";
import "./articleInfo.scss";
import { ShoppingCartContext, ShoppingCartDatatype } from "../CustomContext";
//import { ArticleIdContext } from "../articleIdContext";
import { LOCALE_STORAGE_KEY } from "../App";
//import { LOCALE_STORAGE_ARTICLE_ID_KEY } from "../App";
import "./articleInfoResponsive.scss";
import HeadComponent from "../header/head";
import EditArticlePriceComponent from "../editArticlePrice/editArticlePrice";
import PopUp from "../PopUp/popUp";
import FooterComponent from "../footer/footer";
import Count from "../count/count";

export default function ArticleInfo() {
  const { name } = useParams();
  const selectedArticle = articles.find((article) => {
    return name === article.name;
  });
  //const { articleIdArray, setArticleIdArray } = useContext(ArticleIdContext);
  const [count, setCount] = useState<number>(1);
  const [itemStock, setItemStock] = useState<number>(
    selectedArticle?.itemStockTotal || 0
  );

  /*  !!!!! ACHTUNG ACHTUNG ACHTUNG !!!!!!!!!!!

      Callbacks zeigen sich durch || zwei oder Zeichen
  
  */

  const [popUpWindow, setPopUpWindow] = useState<boolean>(false);
  const [userMessage, setUserMessage] = useState<string>("");
  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);
  const navigate = useNavigate();
  const [, setTimeoutControl] = useState<number>(0);
  const [showShortPopUp, setShowShortPopUp] = useState<boolean>(false);
  const [popUpMessage, setPopUpMessage] = useState<string>("");
  const [picture, setPicture] = useState<string>("");

  function countUp(id: number) {
    if (id) {
      if (itemStock === 0) {
        return;
      } else {
        setCount(count + 1);
        setItemStock(itemStock - 1);
      }
    }
  }

  function countDown(id: number) {
    if (id) {
      if (count === 1) {
        setCount(1);
        showPopUp();
        setUserMessage(
          "Sie können leider nicht weniger als 1 Menge bestellen."
        );
      } else {
        setCount(count - 1);
        setItemStock(itemStock + 1);
      }
    }
  }

  if (!selectedArticle) {
    return "";
  }

  function checkArticle() {
    console.log(selectedArticle);
    const correctSelectedArticle = shoppingCart.find((article) => {
      return article.id === selectedArticle?.id;
    });

    if (correctSelectedArticle) {
      updateArticle(correctSelectedArticle);
    } else {
      addArticleToShoppingCart();
    }
  }

  function addArticleToShoppingCart() {
    if (selectedArticle) {
      /*  wenn nur die Variable in der if-Abfrage steht ist das wie die Art der Kurzschreibweise
      
      */
      const articleOrder: ShoppingCartDatatype = {
        name: selectedArticle.name,
        img: selectedArticle.img,
        price: selectedArticle.price,
        quantity: count,
        id: selectedArticle.id,
        declination: selectedArticle.declination,
      };
      /*  ein weiteres Objekt war nötig
      
      */

      const updatedShoppingCard = [...shoppingCart, articleOrder];
      /*const updatedShoppingCardArticleId = [
        ...articleIdArray,
        selectedArticle.id,
      ];*/

      setShoppingCart(updatedShoppingCard);
      saveArticle(updatedShoppingCard);
      //setArticleIdArray(updatedShoppingCardArticleId);
      //saveArticleId(updatedShoppingCardArticleId);

      setPopUpMessage(
        `${articleOrder.declination} ${articleOrder.name} wurde dem Warenkorb.`
      );
      setPicture("shopping-cart");
      setCount(1);
      setShowShortPopUp(true);
      setTimeoutControl(setTimeout(closeShortPopUp, 3000));
    }
  }

  function saveArticle(shoppingArticle: ShoppingCartDatatype[]) {
    localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(shoppingArticle));
  }

  /*function saveArticleId(id: number[]) {
    localStorage.setItem(LOCALE_STORAGE_ARTICLE_ID_KEY, JSON.stringify(id));
  }*/

  function updateArticle(
    correctSelectedArticle: Article | ShoppingCartDatatype
  ) {
    console.log(correctSelectedArticle);
    if (correctSelectedArticle) {
      const findArticleIndex = shoppingCart.findIndex((article) => {
        return correctSelectedArticle.id === article.id;
      });

      /*console.log(findArticleIndex);
      console.log(shoppingCart);*/
      console.log(correctSelectedArticle);

      const updateArticleOrder: ShoppingCartDatatype = {
        name: correctSelectedArticle.name,
        img: correctSelectedArticle.img,
        price: correctSelectedArticle.price,
        quantity: count + correctSelectedArticle?.quantity,
        id: correctSelectedArticle.id,
        declination: correctSelectedArticle.declination,
      };

      const updatedShoppingCard = [...shoppingCart];

      updatedShoppingCard.splice(findArticleIndex, 1, updateArticleOrder);

      setShoppingCart(updatedShoppingCard);
      saveArticle(updatedShoppingCard);

      setPopUpMessage(
        `${updateArticleOrder.declination} ${updateArticleOrder.name} wurde dem Warenkorb hinzugefügt.`
      );
      setPicture("quantity");
      setCount(1);
      setShowShortPopUp(true);
      setTimeoutControl(setTimeout(closeShortPopUp, 3000));
    }
  }

  function showPopUp() {
    setPopUpWindow(true);
  }

  function closePopUp() {
    setPopUpWindow(false);
  }

  function historyBack() {
    navigate(-1);
  }

  function closeShortPopUp() {
    setShowShortPopUp(false);
  }

  return (
    <div className="online-shop-single-article">
      <HeadComponent />

      {popUpWindow && (
        <div className="pop-up-window">
          <div className="pop-up-window__message-div">
            <h3 className="pop-up-window__message-div--headline">
              {userMessage}
            </h3>
            <button
              onClick={() => {
                closePopUp();
              }}
              className="pop-up-window__message-div--close-button"
            >
              PopUp schließen
            </button>
          </div>
        </div>
      )}

      {showShortPopUp && <PopUp message={popUpMessage} picture={picture} />}

      <button
        onClick={historyBack}
        className="online-shop-single-article__back-menu-button button"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="online-shop-single-article__back-menu-button--icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </span>{" "}
        vorherige Seite
      </button>

      <div className="online-shop-single-article__preview">
        <div className="online-shop-single-article__preview--left-section">
          <h2 className="online-shop-single-article__preview--left-section--article-headline">
            {selectedArticle?.name}
          </h2>{" "}
          <img
            src={selectedArticle?.img}
            alt=""
            className="online-shop-single-article__preview--left-section--article-img"
          />{" "}
          <p className="online-shop-single-article__preview--left-section--article-description">
            {selectedArticle?.description}
          </p>
        </div>

        <div className="online-shop-single-article__preview--right-section">
          <div className="online-shop-single-article__preview--right-section--article-quantity-div">
            <h3 className="online-shop-single-article__preview--right-section--article-quantity-div--quantity-headline">
              Menge:
            </h3>
            <Count
              count={count}
              countUp={() => countUp(selectedArticle.id)}
              countDown={() => countDown(selectedArticle.id)}
            />
          </div>

          <div className="online-shop-single-article__preview--right-section--price-and-itemStock-div">
            <p className="online-shop-single-article__preview--right-section--price-and-itemStock-div--article-price">
              Preis:
              {
                <EditArticlePriceComponent
                  articlePrice={selectedArticle.price * count}
                />
              }
            </p>
            <div
              className={`${
                itemStock > 0 ? "article-green" : "article-red"
              } online-shop-single-article__preview--right-section--price-and-itemStock-div--article-itemStock-total`}
            >
              {itemStock > 0
                ? `Noch ${itemStock}x auf Lager.`
                : `Der Artikel ${selectedArticle.name} ist nicht mehr auf Lager.`}
            </div>
          </div>
          <button
            onClick={checkArticle}
            className="online-shop-single-article__preview--right-section--add-shopping-cart-button"
          >
            &#128722; Artikel hinzufügen
          </button>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}

/*





     

     

    



*/
