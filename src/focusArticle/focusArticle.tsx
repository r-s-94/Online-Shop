import { articles } from "../articleData";
import "./focusArticle.scss";
import ArticleComponent from "../article/article";
import { ShoppingCartContext } from "../CustomContext";
import { useContext } from "react";
import { Article } from "../articleData";
import { ShoppingCartDatatype } from "../CustomContext";
import { LOCALE_STORAGE_KEY } from "../App";

export default function article() {
  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);

  function checkArticle(id: number) {
    console.log(id);

    const findArticle = articles.find((article) => {
      return article.id === id;
    });

    console.log(findArticle);

    if (findArticle) {
      addArticleToShoppingCart(findArticle);
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

  return (
    <section className="focus-article-section">
      <div className="focus-article-section__focus-article-preview">
        <ArticleComponent article={articles[0]} checkArticle={checkArticle} />
        <ArticleComponent article={articles[3]} checkArticle={checkArticle} />
      </div>
    </section>
  );
}
