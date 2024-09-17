import { Link } from "react-router-dom";
import shoppingPriceTag from "../assets/shopping-price-tag.png";
import { Article } from "../articleData";
import "./article.scss";
import { useState } from "react";

export default function ArticleComponent({
  article,
  checkArticle,
}: {
  article: Article;
  checkArticle(id: number): void;
}) {
  function editArticlePrice(articlePrice: number) {
    if (articlePrice < 1000) {
      return articlePrice.toString();
    }

    if (articlePrice < 10000) {
      return articlePrice.toString().slice(0).replace("0", ".0");
    }

    if (articlePrice > 10000) {
      return articlePrice.toString().slice(0).replace("0", "0.");
    }
  }

  return (
    <div className="article">
      <div className="article__img-section">
        <img
          src={article.img}
          alt=""
          className="article__img-section--article-img"
        />
      </div>

      <div className="article__description-section">
        <h2 className="article__description-section--article-headline">
          {article.name}
        </h2>
        <p className="article__description-section--article-description">
          {article.description}
        </p>
        <div className="article__description-section--price-and-sale-icon-div">
          <p className="article__description-section--price-and-sale-icon-div--article-price">
            {editArticlePrice(article.price)}€
          </p>
          <img
            src={shoppingPriceTag}
            alt=""
            className="article__description-section--price-and-sale-icon-div--sale-icon"
          />
        </div>
        <div className="article__description-section--button-div">
          <button
            onClick={() => {
              checkArticle(article.id);
            }}
            className="article__description-section--button-div--add-shoppingcart-button button"
          >
            zum
            <span className="article__description-section--button-div--add-shoppingcart-button--icon">
              &#128722;
            </span>
            hinzufügen
          </button>
          <Link
            to={`products/${article.name}`}
            className="article__description-section--button-div--link-component link-component"
          >
            <button className="article__description-section--button-div--link-component--more-info-button button">
              mehr Infos
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
