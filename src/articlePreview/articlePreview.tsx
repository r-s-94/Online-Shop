import { Article, articles } from "../articleData";
import { LOCALE_STORAGE_KEY } from "../App";
import { ShoppingCartContext, ShoppingCartDatatype } from "../CustomContext";
import { useContext } from "react";
import "./articlePreview.scss";
import ArticleComponent from "../article/article";

export default function ArticlePreviewComponent() {
  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);

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

  function saveArticle(shoppingArticle: ShoppingCartDatatype[]) {
    localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(shoppingArticle));
  }

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
    };

    console.log(updateArticleOrder);

    const updateShoppingCart = [...filteredShoppingCart];

    updateShoppingCart.splice(findArticleIndex, 0, updateArticleOrder);

    setShoppingCart(updateShoppingCart);
    saveArticle(updateShoppingCart);
  }

  return (
    <section id="allArticle" className="article-preview-section">
      <h2 className="article-preview-section__headline">Unsere Angebote</h2>
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
