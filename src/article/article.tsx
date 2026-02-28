import { Link } from "react-router-dom";
import { Article } from "../articleData";
import "../index.scss";
import "./article.scss";
import EditArticlePriceComponent from "../editArticlePrice/editArticlePrice";
import { useContext } from "react";
import { currentCategoryContent } from "../currentCategoryContext";

export default function ArticleComponent({
  article,
  checkArticle,
}: {
  article: Article;
  checkArticle(id: number): void;
}) {
  const { setCurrentCategory } = useContext(currentCategoryContent);

  return (
    <div className="article">
      <div className="article__img-div">
        <Link to={`products/${article.id}`}>
          {" "}
          <img src={article.imgArray[0]} alt="" className="article__img" />
        </Link>
      </div>

      <div className="article__description-div">
        <div className="article__head-div">
          {" "}
          <h2 className="article__headline">{article.name}</h2>{" "}
          <div className="article__price">
            {article.discount && (
              <span
                className={`article__discount ${article.discount ? "red" : "black"}`}
              >
                {article.discountrate.toLocaleString("de-DE", {
                  style: "percent",
                })}
              </span>
            )}{" "}
            <span
              className={`article__price ${article.discount ? "black line-through" : "gray"}`}
            >
              {<EditArticlePriceComponent articlePrice={article.oldPrice} />}
            </span>
            <br />
            <span
              className={`article__focus-price ${article.discount ? "red" : "black"}`}
            >
              {" "}
              {<EditArticlePriceComponent articlePrice={article.newPrice} />}
            </span>
          </div>
        </div>
        <p className="article__description">{article.description.short}</p>{" "}
        <div className="article__button-div">
          <Link
            to={`products/${article.id}`}
            onClick={() => {
              console.log(article.category);
              setCurrentCategory(article.category);
            }}
            className="article__link-component button no-underline center-content secondary-button"
          >
            mehr Infos{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="article__info-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
          </Link>{" "}
          <button
            onClick={() => {
              checkArticle(article.id);
            }}
            className="article__add-shoppingcart-button button primary-button"
          >
            {" "}
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
    </div>
  );
}
