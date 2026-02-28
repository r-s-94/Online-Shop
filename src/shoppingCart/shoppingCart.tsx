import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../CustomContext";
import { LOCALE_STORAGE_KEY } from "../App";
import "../index.scss";
import "./shoppingCart.scss";
//import "./shoppingCartResponsive.scss";
import HeadComponent from "../header/headEl";
import EditArticlePriceComponent from "../editArticlePrice/editArticlePrice";
import FooterComponent from "../footer/footer";
import PopUp from "../PopUp/popUp";
import Count from "../count/count";
import { ShoppingCartDatatype } from "../CustomContext";
import Nav from "../nav/nav-bar";
import ToTopEl from "../toTopEl";

export default function ShoppingCart() {
  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);
  /*  !!!!!!!!! ACHTUNG ACHTUNG ACHTUNG !!!!!!!!!!!!

      wenn eine Variable, ein Objekt, ein Array oder ein useState-Hook über das value-Attribute vom Provider und createContext weitergegeben wird
      muss useContext immer verwendet werden um diese Variable, dieses Objekt, Array oder Hook global und ständig verwenden zukönnen
      
      wenn nur die Variable gebraucht wird reicht es aus durch die destrukturierung nur die Variable zuschreiben und nicht noch zusätzlich die 
      Funktion zur aktualisierung der Variable
  
  */
  const [toasty, setToasty] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [picture, setPicture] = useState<string>("");
  const navigate = useNavigate();
  const timeControl = useRef(0);

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

    setMessage(
      `${selectedArticle?.declination} ${selectedArticle?.name} wurde aus dem Warenkorb entfernt.`,
    );
    setPicture("delete");
    setToasty(true);
    timeControl.current = window.setTimeout(closeShortPopUp, 3000);
  }

  function closeShortPopUp() {
    setToasty(false);
  }

  function toPayment() {
    navigate("/payment");
  }

  return (
    <section className="shopping-cart">
      <Nav />
      <HeadComponent />

      <h2 className="shopping-cart__headline center-text">Warenkorb</h2>

      {toasty && <PopUp message={message} picture={picture} />}

      <div
        className={`shopping-cart__overview ${
          shoppingCart.length === 0 ? "shopping-cart-space" : ""
        }`}
      >
        {shoppingCart.map((article) => (
          <div className="shopping-cart__article-card">
            <img src={article.img} className="shopping-cart__img" alt="" />
            <p className="shopping-cart__name center-content">{article.name}</p>
            <p className="shopping-cart__count center-content">
              <Count
                count={article.quantity}
                countUp={() => countUp(article.id)}
                countDown={() => countDown(article.id)}
              />
            </p>

            <p className="shopping-cart__price center-content">
              {" "}
              {<EditArticlePriceComponent articlePrice={article.price} />}
            </p>
            <p className="shopping-cart__article-total-sum center-content">
              {" "}
              {
                <EditArticlePriceComponent
                  articlePrice={article.price * article.quantity}
                />
              }
            </p>

            <div className="shopping-cart__link-button-div">
              <Link
                to={`/products/${article.id}`}
                className="shopping-cart__to-article-link center-content no-underline"
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="shopping-cart__info-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>{" "}
                mehr Infos{" "}
              </Link>

              <button
                onClick={() => {
                  deleteArticle(article.id);
                }}
                className="shopping-cart__delete-button button"
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="shopping-cart__delete-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
                entfernen
              </button>
            </div>
          </div>
        ))}
      </div>

      {shoppingCart.length === 0 && (
        <div className="shopping-cart__message-div">
          Der Warenkorb{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="shopping-cart__message-icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>{" "}
          ist leer.
        </div>
      )}

      <div className={`shopping-cart__total-sum-div center-content`}>
        <p className="shopping-cart__text">Gesamtbetrag:</p>
        <p className="shopping-cart__total-sum">{calculationTotalSum()}</p>
      </div>

      <button
        onClick={toPayment}
        disabled={!(shoppingCart.length > 0)}
        className={`shopping-cart__check-out-button button ${shoppingCart.length > 0 ? "primary-button" : "disabled-button no-hover"}`}
      >
        zur Kasse
      </button>

      <ToTopEl />

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
