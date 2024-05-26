import { useContext, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { articles } from "../articleData";
import "./articleComponent.scss";
import { ShoppingCartContext, ShoppingCartDatatype } from "../CustomContext";
import { LOCALE_STORAGE_KEY } from "../App";
import "./articleResponsiveComponent.scss";

export default function Article() {
  const { name } = useParams();

  const selectedArticle = articles.find((article) => {
    return name === article.id;
  });

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

  function countUp() {
    if (itemStock === 0) {
      return;
    } else {
      setCount(count + 1);
      setItemStock(itemStock - 1);
    }
  }

  function countDown() {
    if (count === 1) {
      setCount(1);
      showPopUp();
      setUserMessage("Weniger als 1 Menge geht nicht.");
    } else {
      setCount(count - 1);
      setItemStock(itemStock + 1);
    }
  }

  if (!selectedArticle) {
    return "";
  }

  function checkArticle() {
    console.log(selectedArticle);
    const findArticle = shoppingCart.find((article) => {
      return article.name === selectedArticle?.name;
    });

    if (findArticle) {
      correctArticle();
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
      };
      /*  ein weiteres Objekt war nötig
      
      */
      console.log(articleOrder);
      const updatedShoppingCard = [...shoppingCart, articleOrder];
      console.log(updatedShoppingCard);
      setShoppingCart(updatedShoppingCard);
      saveArticle(updatedShoppingCard);
    }
  }

  function saveArticle(shoppingAtricle: ShoppingCartDatatype[]) {
    localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(shoppingAtricle));
  }

  function correctArticle() {
    console.log(selectedArticle);
    if (selectedArticle) {
      const findArticleIndex = shoppingCart.findIndex((article) => {
        return selectedArticle.name === article.name;
      });
      console.log(findArticleIndex);
      console.log(shoppingCart);

      const correctArticleOrder: ShoppingCartDatatype = {
        name: selectedArticle.name,
        img: selectedArticle.img,
        price: selectedArticle.price,
        quantity: count,
      };
      const updatedShoppingCard = [...shoppingCart];
      updatedShoppingCard.splice(findArticleIndex, 1, correctArticleOrder);
      setShoppingCart(updatedShoppingCard);
      saveArticle(updatedShoppingCard);
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

  return (
    <div className="online-shop-single-article">
      <div className="online-shop-single-article-header-frame"></div>

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

      <div className="online-shop-single-article-link-div">
        <button
          onClick={historyBack}
          className="online-shop-single-article-link-div__back-menu-button button"
        >
          zum Hauptmenu
        </button>

        <Link
          to="/shoppingStorage"
          className="online-shop-single-article-link-div__link-component link-component"
        >
          <div>
            <p className="online-shop-single-article-link-div__link-component--shopping-cart-quantity">
              {shoppingCart.length}
            </p>
            <p className="online-shop-single-article-link-div__link-component--shopping-cart-icon">
              &#128722;
            </p>
          </div>
        </Link>
      </div>

      <div className="online-shop-single-article-view">
        <div className="online-shop-single-article-view__left-section">
          <h2 className="online-shop-single-article-view__left-section--article-headline">
            {selectedArticle?.name}
          </h2>
          <img
            src={selectedArticle?.img}
            alt=""
            className="online-shop-single-article-view__left-section--article-img"
          />
          <p className="online-shop-single-article-view__left-section--article-description">
            {selectedArticle?.description}
          </p>
        </div>

        <div className="online-shop-single-article-view__right-section">
          <div className="online-shop-single-article-view__right-section--article-quantity-div">
            <h3 className="online-shop-single-article-view__right-section--article-quantity-div--quantity-headline">
              Menge:
            </h3>
            <div className="online-shop-single-article-view__right-section--article-quantity-div--article-count-and-quantity">
              <button onClick={countDown} className="count-down button">
                -
              </button>
              <p className="quantity">{count}x</p>
              <button onClick={countUp} className="count-up button">
                +
              </button>
            </div>
          </div>

          <div className="online-shop-single-article-view__right-section--price-and-itemStock-div">
            <p className="online-shop-single-article-view__right-section--price-and-itemStock-div--article-price">
              Preis: {count * selectedArticle.price}€
            </p>
            <div
              className={`${
                itemStock > 0 ? "article-green" : "article-red"
              } online-shop-single-article-view__right-section--price-and-itemStock-div--article-itemStock-total`}
            >
              {itemStock > 0
                ? `Noch ${itemStock}x auf Lager.`
                : `Der Artikel ${selectedArticle.name} ist nicht mehr auf Lager.`}
            </div>
          </div>
          <button
            onClick={checkArticle}
            className="online-shop-single-article-view__right-section--add-shopping-cart-button"
          >
            &#128722; Artikel hinzufügen
          </button>
        </div>
      </div>

      <div className="online-shop-single-article-rooter-frame"></div>
    </div>
  );
}

/*




*/
