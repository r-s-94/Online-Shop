import { useContext, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { articles } from "../articleData";
import "../index.scss";
import "./articleInfo.scss";
import { ShoppingCartContext, ShoppingCartDatatype } from "../CustomContext";
//import { ArticleIdContext } from "../articleIdContext";
import { LOCALE_STORAGE_KEY } from "../App";
//import { LOCALE_STORAGE_ARTICLE_ID_KEY } from "../App";
//import "./articleInfoResponsive.scss";
import EditArticlePriceComponent from "../editArticlePrice/editArticlePrice";
import PopUp from "../PopUp/popUp";
import FooterComponent from "../footer/footer";
import Count from "../count/count";
import Nav from "../nav/nav-bar";
import LogoShoppingcartEl from "../logoShoppingcart/logoShoppingcartEl";

export default function ArticleInfo() {
  const { id } = useParams();
  const selectedArticle = articles.find((article) => {
    return Number(id) === article.id;
  });
  //const { articleIdArray, setArticleIdArray } = useContext(ArticleIdContext);
  const [count, setCount] = useState<number>(1);
  const [itemStock, setItemStock] = useState<number>(
    selectedArticle?.itemStockTotal || 0,
  );

  /*  !!!!! ACHTUNG ACHTUNG ACHTUNG !!!!!!!!!!!

      Callbacks zeigen sich durch || zwei oder Zeichen
  
  */

  const [imgIndex, setImgIndex] = useState<number>(0);
  const [userMessage, setUserMessage] = useState<string>("");
  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);
  const navigate = useNavigate();
  const [toasty, setToasty] = useState<boolean>(false);
  const [picture, setPicture] = useState<string>("");
  const timeControl = useRef(0);

  function moveSlider(direction: number) {
    if (direction === -1) {
      setImgIndex(() => imgIndex - 1);

      if (imgIndex === 0) {
        setImgIndex(selectedArticle!.imgArray.length - 1);
      }
    } else {
      setImgIndex(() => imgIndex + 1);

      if (imgIndex === selectedArticle!.imgArray.length - 1) {
        setImgIndex(0);
      }
    }
  }

  function showPicture(index: number) {
    setImgIndex(index);
  }

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
        description: selectedArticle.description.short,
        img: selectedArticle.imgArray[0],
        price: selectedArticle.newPrice,
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

      setUserMessage(
        `${articleOrder.declination} ${articleOrder.name} wurde dem Warenkorb.`,
      );
      setPicture("shopping-cart");
      setCount(1);
      setToasty(true);
      timeControl.current = window.setTimeout(closeToasty, 3000);
    }
  }

  function saveArticle(shoppingArticle: ShoppingCartDatatype[]) {
    localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(shoppingArticle));
  }

  /*function saveArticleId(id: number[]) {
    localStorage.setItem(LOCALE_STORAGE_ARTICLE_ID_KEY, JSON.stringify(id));
  }*/

  function updateArticle(correctSelectedArticle: ShoppingCartDatatype) {
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
        description: correctSelectedArticle.description,
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

      setUserMessage(
        `${updateArticleOrder.declination} ${updateArticleOrder.name} wurde dem Warenkorb hinzugefügt.`,
      );
      setPicture("quantity");
      setCount(1);
      setToasty(true);
      timeControl.current = window.setTimeout(closeToasty, 3000);
    }
  }

  function closeToasty() {
    setToasty(false);
  }

  function toMainSite() {
    navigate(-1);
  }

  return (
    <div className="selected-article">
      <Nav />
      <LogoShoppingcartEl />

      {toasty && <PopUp message={userMessage} picture={picture} />}

      <button
        onClick={toMainSite}
        className="selected-article__to-main-site-button button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="selected-article__to-main-site-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>{" "}
        zurück
      </button>

      <div className="selected-article__presentation-div">
        <div className="selected-article__img-slides-show-div">
          <div className="selected-article__slides-show-main-div center-content">
            <button
              onClick={() => {
                moveSlider(-1);
              }}
              className="selected-article__prev-button button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="selected-article__icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <div className="selected-article__canvas">
              <div
                style={{
                  width: `${selectedArticle.imgArray.length * 37}rem`,
                  marginLeft: `${-imgIndex * 37}rem`,
                }}
                className="selected-article__slider"
              >
                {selectedArticle.imgArray.map((img) => (
                  <img
                    src={img}
                    className="selected-article__slider-img"
                    alt=""
                  />
                ))}
              </div>
            </div>
            <button
              onClick={() => {
                moveSlider(1);
              }}
              className="selected-article__next-button button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="selected-article__icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          <div className="selected-article__img-small-overview center-content">
            {" "}
            {selectedArticle.imgArray.map((img, index) => (
              <img
                onClick={() => {
                  showPicture(index);
                }}
                src={img}
                className={`selected-article__small-img ${
                  imgIndex === index ? "selected-article__focus-img" : ""
                }`}
                alt=""
              />
            ))}
          </div>
        </div>

        <div className="selected-article__article-info-div">
          <h2 className="selected-article__article-headline">
            {selectedArticle?.name}
          </h2>{" "}
          <p className="selected-article__article-description">
            {selectedArticle.description.general}
          </p>
          <div className="selected-article__article-detail-overview-div">
            {selectedArticle.description.detail.map((articleDetail) => (
              <div className="selected-article__article-detail-div">
                <p className="selected-article__article-detail key">
                  {articleDetail.key}:{" "}
                </p>
                <p className="selected-article__article-detail">
                  {articleDetail.value}
                </p>
              </div>
            ))}
          </div>
          <div className="selected-article__quantity-price-itemstock-div center-content-column">
            <p className="selected-article__quantity-mini-headline">Menge</p>
            <Count
              count={count}
              countUp={() => countUp(selectedArticle.id)}
              countDown={() => countDown(selectedArticle.id)}
            />

            <div className="selected-article__article-price-div">
              {
                <EditArticlePriceComponent
                  articlePrice={selectedArticle.oldPrice}
                />
              }
              <p className="selected-article__article-price">
                {" "}
                Preis:
                {
                  <EditArticlePriceComponent
                    articlePrice={selectedArticle.newPrice * count}
                  />
                }
              </p>
            </div>

            <div
              className={`selected-article__article-itemStock-total center-content ${
                itemStock < 6 ? "article-red" : "article-note"
              }`}
            >
              {itemStock < 10 && itemStock > 5 && <p>Wenig verfügbar</p>}

              {itemStock < 6 && itemStock > 0 && (
                <p>Nur noch {itemStock}x auf Lager. </p>
              )}

              {itemStock === 0 && <p>Ausverkauft.</p>}
            </div>
          </div>
          <button
            onClick={checkArticle}
            disabled={itemStock !== 0 ? false : true}
            className={`selected-article__add-shopping-cart-button button primary-button ${
              itemStock !== 0 ? "" : "disabled-button no-hover"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="article__shoppingcart-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            In den Warenkorb
          </button>
        </div>
      </div>

      <a href="#oben" id="to-top-link" className="to-top-link link">
        <button
          id="to-top-button"
          className="to-top-link__to-top-button button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="to-top-link__to-up-icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
            />
          </svg>
        </button>
      </a>

      <FooterComponent />
    </div>
  );
}

/*
 <button
        onClick={toMainSite}
        className="selected-article__back-menu-button button center-content"
      >
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="selected-article__back-menu-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>{" "}
        zurück
      </button>


    
*/
