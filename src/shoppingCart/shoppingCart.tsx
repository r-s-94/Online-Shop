import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../CustomContext";
import { LOCALE_STORAGE_KEY } from "../App";
import "./shoppingCart.scss";
import "./shoppingCartResponsive.scss";

export default function ShoppingCart() {
  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);
  /*  !!!!!!!!! ACHTUNG ACHTUNG ACHTUNG !!!!!!!!!!!!

      wenn eine Variable, ein Objekt, ein Array oder ein useState-Hook über das value-Attribute vom Provider und createContext weitergegeben wird
      muss useContext immer verwendet werden um diese Variable, dieses Objekt, Array oder Hook global und ständig verwenden zukönnen
      
      wenn nur die Variable gebraucht wird reicht es aus durch die destrukturierung nur die Variable zuschreiben und nicht noch zusätzlich die 
      Funktion zur aktualisierung der Variable
  
  */

  function calculationTotalSum() {
    let sum = 0;
    for (let index = 0; index < shoppingCart.length; index++) {
      const element = shoppingCart[index];
      const article = element.price * element.quantity;
      sum = article + sum;
    }
    return sum;
    /*  !!!!!!! ACHTUNG ACHTUNG ACHTUNG !!!!!!!!!!!!!!

        wenn eine Funktion direkt in einem Ausdruck von React = in den {} geschweiften Klammern steht muss aber am Ende der Funktion das Schlüsselwort
        return stehen damit der Inhalt der Funktion auch ausgegeben wird
        
    */
  }

  function deleteArticle(name: string) {
    const selectedArticle = shoppingCart.find((article) => {
      return article.name === name;
    });

    const filteredArticle = shoppingCart.filter((article) => {
      return article.name !== selectedArticle?.name;
    });

    const updatetArray = [...filteredArticle];
    setShoppingCart(updatetArray);
    localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(filteredArticle));
  }

  return (
    <div className="online-shop-shopping-cart">
      <div className="online-shop-shopping-cart__header"></div>

      <div className="online-shop-shopping-cart__head-div">
        <Link
          to="/"
          className="online-shop-shopping-cart__head-div--link-component link-component"
        >
          <button className="online-shop-shopping-cart__head-div--link-component--back-button button">
            zum Hauptmenu
          </button>
        </Link>

        <h2 className="online-shop-shopping-cart__head-div--headline button">
          Warenkorb
        </h2>
      </div>

      {shoppingCart.map((article) => {
        return (
          <div className="online-shop-shopping-cart-article">
            <div className="online-shop-shopping-cart-article__left-section">
              <img
                src={article.img}
                alt=""
                className="online-shop-shopping-cart-article__left-section--article-img"
              />
            </div>
            <div className="online-shop-shopping-cart-article__right-section">
              <h2 className="online-shop-shopping-cart-article__right-section--article-headline">
                {article.name}
              </h2>
              <p className="online-shop-shopping-cart-article__right-section--article-price">
                Preis: {article.price * article.quantity}€
              </p>
              <p className="online-shop-shopping-cart-article__right-section--article-quantity">
                Menge: {article.quantity}x
              </p>
              <button
                onClick={() => {
                  deleteArticle(article.name);
                }}
                className="online-shop-shopping-cart-article__right-section--article-delete-button button"
              >
                Artikel {article.name} entfernen
                <span className="online-shop-shopping-cart-article__right-section--article-delete-button--delete-icon">
                  &#128465;
                </span>
              </button>
            </div>
          </div>
        );
      })}

      <div className="online-shop-shopping-cart-end-shopping-div">
        <h2 className="online-shop-shopping-cart-end-shopping-div__headline">
          Gesamt Summe:
          <span className="online-shop-shopping-cart-end-shopping-div__headline--total-sum">
            {calculationTotalSum()}€
          </span>
        </h2>
        <Link
          to="/checkOut"
          className="online-shop-shopping-cart-end-shopping-div__link-component link-component"
        >
          <button className="online-shop-shopping-cart-end-shopping-div__link-component--check-out-button button">
            zur Kasse
          </button>
        </Link>
      </div>

      <div className="online-shop-shopping-cart__rooter"></div>
    </div>
    /*  !!!!!!!!  ACHTUNG ACHTUNG ACHTUNG !!!!!!!!!!

        so wie es in Zeile 81 der Fall ist ist es AUCH möglich Funktionen DIREKT in die {} geschweiften Klammern = in einen Ausdruck von React zu 
        schreiben

        so wie es Zeile 69 zeigt ist es auch möglich in einem Ausdruck von React = in den {} geschweifetn Klammern Dinge zu Multiplizieren etc.
    
    */
  );
}
