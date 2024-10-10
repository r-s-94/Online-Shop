import { Link } from "react-router-dom";
import shoppingPriceTag from "../assets/shopping-price-tag.png";
import { Article } from "../articleData";
import "./article.scss";
import EditArticlePriceComponent from "../editArticlePrice/editArticlePrice";

export default function ArticleComponent({
  article,
  checkArticle,
}: {
  article: Article;
  checkArticle(id: number): void;
}) {
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
            {<EditArticlePriceComponent articlePrice={article.price} />}
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
              <span className="article__description-section--button-div--link-component--more-info-button--icon">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
              </span>
            </button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}
