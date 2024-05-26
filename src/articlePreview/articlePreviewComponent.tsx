import { Article, articles } from "../articleData";
import { LOCALE_STORAGE_KEY } from "../App";
import { ShoppingCartContext, ShoppingCartDatatype } from "../CustomContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import shoppingPriceTag from "../assets/shopping-price-tag.png";
import "./articlePreviewComponent.scss";
import "./articlePreviewResponsive.scss";

export default function ArticlePreviewComponent() {
  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);
  const [popUpWindow, setPopUpWindow] = useState<boolean>(false);
  const [userMessage, setUserMessage] = useState<string>("");

  function checkArticle(name: string) {
    const findArticle = shoppingCart.find((article) => {
      return article.name === name;
    });

    if (findArticle) {
      setUserMessage(`Der Artikel ${findArticle.name} ist schon im Warenkorb.`);
      showPopUp();
    } else {
      const selectedArticle = articles.find((article) => {
        return article?.name === name;
      });
      console.log(selectedArticle);

      if (selectedArticle) {
        addArticleToShoppingCart(selectedArticle);
      }
    }
  }

  function addArticleToShoppingCart(selectedArticle: Article) {
    if (selectedArticle) {
      /*  wenn nur die Variable in der if-Abfrage steht ist das wie die Art der Kurzschreibweise
        
        */
      const articleOrder: ShoppingCartDatatype = {
        name: selectedArticle.name,
        img: selectedArticle.img,
        price: selectedArticle.price,
        quantity: 1,
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

  function showPopUp() {
    setPopUpWindow(true);
  }

  function closePopUp() {
    setPopUpWindow(false);
    setUserMessage("");
  }

  return (
    <>
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

      <div className="article-preview-section">
        <h2 className="article-preview-section__headline">Unsere Angebote</h2>
        <div className="article-preview">
          {articles.map((article) => {
            return (
              <div className="article">
                <div className="article__left-section">
                  <img
                    src={article.img}
                    alt=""
                    className="article__left-section--article-img"
                  />
                </div>

                <div className="article__right-section">
                  <h2 className="article__right-section--article-headline">
                    {article.name}
                  </h2>
                  <p className="article__right-section--article-description">
                    {article.description}
                  </p>
                  <div className="article__right-section--price-and-sale-icon-div">
                    <p className="article__right-section--price-and-sale-icon-div--article-price">
                      {article.price}€
                    </p>
                    <img
                      src={shoppingPriceTag}
                      alt=""
                      className="article__right-section--price-and-sale-icon-div--sale-icon"
                    />
                  </div>
                  <div className="article__right-section--button-div">
                    <button
                      onClick={() => {
                        checkArticle(article.name);
                      }}
                      className="article__right-section--button-div--add-shoppingcart-button button"
                    >
                      zum
                      <span className="article__right-section--button-div--add-shoppingcart-button--shoppingcart-icon">
                        &#128722;
                      </span>
                      hinzufügen
                    </button>
                    <Link
                      to={`products/${article.id}`}
                      className="article__right-section--button-div--link-component link-component"
                    >
                      <button className="article__right-section--button-div--link-component--more-info-button button">
                        mehr Infos
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

/*

*/
