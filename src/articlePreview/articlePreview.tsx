import { Article, articles } from "../articleData";
import { LOCALE_STORAGE_KEY } from "../App";
import { ShoppingCartContext, ShoppingCartDatatype } from "../CustomContext";
import { useContext, useEffect, useRef, useState } from "react";
import "../index.scss";
import "./articlePreview.scss";
import ArticleComponent from "../article/article";
import PopUp from "../PopUp/popUp";
import { currentCategoryContent } from "../currentCategoryContext";

export default function ArticlePreviewComponent() {
  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);
  const [category, setCategory] = useState<string>("");
  const [toasty, setToasty] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [picture, setPicture] = useState<string>("");
  const timeControl = useRef(0);
  const { currentCategory } = useContext(currentCategoryContent);

  useEffect(() => {
    if (currentCategory !== "") {
      setCategory(currentCategory);
    } else {
      setCategory("electronic");
    }
  }, []);

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
        img: findArticle.imgArray[0],
        description: findArticle.description.short,
        price: findArticle.newPrice,
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

  /*function saveArticleId(id: number[]) {
    localStorage.setItem(LOCALE_STORAGE_ARTICLE_ID_KEY, JSON.stringify(id));
  }*/

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
      img: findArticle.img,
      description: findArticle.description,
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
    <section id="allArticle" className="article-preview-section">
      <h2 className="article-preview-section__headline center-text">
        Unsere Angebote
      </h2>

      {toasty && <PopUp message={message} picture={picture} />}

      <nav className="article-preview-section__all-category-nav-bar center-content">
        <p
          onClick={() => {
            setCategory("electronic");
          }}
          className={`article-preview-section__link-category link ${category === "electronic" ? "active-category" : ""}`}
        >
          Elektronik
        </p>
        <p
          onClick={() => {
            setCategory("car");
          }}
          className={`article-preview-section__link-category link ${category === "car" ? "active-category" : ""}`}
        >
          Autos
        </p>
        <p
          onClick={() => {
            setCategory("fruit");
          }}
          className={`article-preview-section__link-category link ${category === "fruit" ? "active-category" : ""}`}
        >
          Früchte
        </p>
        <p
          onClick={() => {
            setCategory("fitness");
          }}
          className={`article-preview-section__link-category link ${category === "fitness" ? "active-category" : ""}`}
        >
          Fitness
        </p>
      </nav>

      <div className="article-preview-section__article-preview">
        {articles
          .filter((article) => article.category === category)
          .map((article) => {
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
