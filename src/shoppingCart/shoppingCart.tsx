import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../CustomContext";
import { LOCALE_STORAGE_KEY } from "../App";
import "./shoppingCart.scss";
import "./shoppingCartResponsive.scss";
import HeadComponent from "../header/head";
import EditArticlePriceComponent from "../editArticlePrice/editArticlePrice";
import FooterComponent from "../footer/footer";
import PopUp from "../PopUp/popUp";
import Count from "../count/count";
import { ShoppingCartDatatype } from "../CustomContext";

export default function ShoppingCart() {
  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);
  /*  !!!!!!!!! ACHTUNG ACHTUNG ACHTUNG !!!!!!!!!!!!

      wenn eine Variable, ein Objekt, ein Array oder ein useState-Hook über das value-Attribute vom Provider und createContext weitergegeben wird
      muss useContext immer verwendet werden um diese Variable, dieses Objekt, Array oder Hook global und ständig verwenden zukönnen
      
      wenn nur die Variable gebraucht wird reicht es aus durch die destrukturierung nur die Variable zuschreiben und nicht noch zusätzlich die 
      Funktion zur aktualisierung der Variable
  
  */
  const [, setTimeoutControl] = useState<number>(0);
  const [showShortPopUp, setShowShortPopUp] = useState<boolean>(false);
  const [popUpMessage, setPopUpMessage] = useState<string>("");
  const [picture, setPicture] = useState<string>("");

  function countUp(id: number) {
    console.log(id);

    const selectedArticle = shoppingCart.find((article) => {
      return article.id === id;
    });

    const findArticleIndex = shoppingCart.findIndex((article) => {
      return article.id === id;
    });

    console.log(selectedArticle);

    if (selectedArticle) {
      const updateArticleOrder: ShoppingCartDatatype = {
        ...selectedArticle,
        quantity: selectedArticle.quantity + 1,
      };

      const updatedShoppingCard = [...shoppingCart];

      updatedShoppingCard.splice(findArticleIndex, 1, updateArticleOrder);
      setShoppingCart(updatedShoppingCard);
      saveArticle(updatedShoppingCard);
    }
  }

  function countDown(id: number) {
    const selectedArticle = shoppingCart.find((article) => {
      return article.id === id;
    });

    const findArticleIndex = shoppingCart.findIndex((article) => {
      return article.id === id;
    });

    console.log(selectedArticle);

    if (selectedArticle && selectedArticle.quantity > 1) {
      const updateArticleOrder: ShoppingCartDatatype = {
        ...selectedArticle,
        quantity: selectedArticle.quantity - 1,
      };

      const updatedShoppingCard = [...shoppingCart];

      updatedShoppingCard.splice(findArticleIndex, 1, updateArticleOrder);
      setShoppingCart(updatedShoppingCard);
      saveArticle(updatedShoppingCard);
    }
  }

  function calculationTotalSum() {
    let sum = 0;
    for (let index = 0; index < shoppingCart.length; index++) {
      const element = shoppingCart[index];
      const article = element.price * element.quantity;
      sum = article + sum;
    }
    return sum.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
    /*  !!!!!!! ACHTUNG ACHTUNG ACHTUNG !!!!!!!!!!!!!!

        wenn eine Funktion direkt in einem Ausdruck von React = in den {} geschweiften Klammern steht muss aber am Ende der Funktion das Schlüsselwort
        return stehen damit der Inhalt der Funktion auch ausgegeben wird
        
    */
  }

  function saveArticle(shoppingArticle: ShoppingCartDatatype[]) {
    localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(shoppingArticle));
  }

  function deleteArticle(id: number) {
    const selectedArticle = shoppingCart.find((article) => {
      return article.id === id;
    });

    const filteredArticle = shoppingCart.filter((article) => {
      return article.id !== selectedArticle?.id;
    });

    const updatetArray = [...filteredArticle];
    setShoppingCart(updatetArray);
    localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(filteredArticle));

    setPopUpMessage(
      `${selectedArticle?.declination} ${selectedArticle?.name} wurde aus dem Warenkorb entfernt.`
    );
    setPicture("delete");
    setShowShortPopUp(true);
    setTimeoutControl(setTimeout(closeShortPopUp, 3000));
  }

  function closeShortPopUp() {
    setShowShortPopUp(false);
  }

  return (
    <section className="online-shop-shopping-cart">
      <HeadComponent />

      <h2 className="online-shop-shopping-cart__headline">Warenkorb</h2>

      {showShortPopUp && <PopUp message={popUpMessage} picture={picture} />}

      <div className={shoppingCart.length === 0 ? "space-food" : ""}>
        {shoppingCart.map((article) => (
          <div className="online-shop-shopping-cart__article">
            <div className="online-shop-shopping-cart__article--main-div">
              <div className="online-shop-shopping-cart__article--main-div--left-section">
                <h2 className="online-shop-shopping-cart__article--main-div--left-section--name">
                  {article.name}
                </h2>

                <img
                  src={article.img}
                  className="online-shop-shopping-cart__article--main-div--left-section--img"
                  alt=""
                />
              </div>

              <div className="online-shop-shopping-cart__article--main-div--right-section">
                {" "}
                <Count
                  count={article.quantity}
                  countUp={() => countUp(article.id)}
                  countDown={() => countDown(article.id)}
                />
                <p className="online-shop-shopping-cart__article--main-div--right-section--price">
                  Einzelpreis:{" "}
                  {<EditArticlePriceComponent articlePrice={article.price} />}
                </p>
                <div className="online-shop-shopping-cart__article--main-div--right-section--article-total-sum">
                  {" "}
                  Gesamtpreis:
                  {
                    <EditArticlePriceComponent
                      articlePrice={article.price * article.quantity}
                    />
                  }
                </div>
              </div>
            </div>

            <div className="online-shop-shopping-cart__article--main-div--button-div">
              <Link
                to={`/products/${article.name}`}
                className="online-shop-shopping-cart__article--main-div--button-div--link"
              >
                {" "}
                <button className="online-shop-shopping-cart__article--main-div--button-div--link--more-infos-button">
                  mehr Infos
                  <span className="online-shop-shopping-cart__article--main-div--button-div--link--more-infos-button--icon">
                    &#128712;
                  </span>
                </button>{" "}
              </Link>

              <button
                onClick={() => {
                  deleteArticle(article.id);
                }}
                className="online-shop-shopping-cart__article--main-div--button-div--delete-button button"
              >
                {" "}
                Artikel entfernen
                <span className="online-shop-shopping-cart__article--main-div--button-div--delete-button--icon button">
                  &#128465;
                </span>
              </button>
            </div>
          </div>
        ))}

        <div
          className={`shopping-cart-message
            ${
              shoppingCart.length === 0
                ? "shopping-cart-status-true"
                : "shopping-cart-status-false"
            }`}
        >
          Der Warenkorb &#128722; ist leer.
        </div>

        <div className={`online-shop-shopping-cart__total-sum-div `}>
          <p className="online-shop-shopping-cart__total-sum-div--text">
            Gesamtbetrag:
          </p>
          <p className="online-shop-shopping-cart__total-sum-div--total-sum">
            {calculationTotalSum()}
          </p>
        </div>
      </div>

      <Link
        to="/checkOut"
        className="online-shop-shopping-cart__link-component link-component"
      >
        <button className="online-shop-shopping-cart__link-component--check-out-button button">
          zur Kasse
        </button>
      </Link>

      <FooterComponent />
    </section>
    /*  !!!!!!!!  ACHTUNG ACHTUNG ACHTUNG !!!!!!!!!!

        so wie es in Zeile 81 der Fall ist ist es AUCH möglich Funktionen DIREKT in die {} geschweiften Klammern = in einen Ausdruck von React zu 
        schreiben

        so wie es Zeile 69 zeigt ist es auch möglich in einem Ausdruck von React = in den {} geschweifetn Klammern Dinge zu Multiplizieren etc.
   
   
                 
                  ${
            shoppingCart.length === 0
              ? "shopping-cart-status-false"
              : "shopping-cart-status-true"
          }
      
                    
                   
    
                  */
  );
}
