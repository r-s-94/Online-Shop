import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../CustomContext";
import Planet_Earth from "../assets/pngegg.png";
import "./head.scss";

export default function HeadComponent() {
  const { shoppingCart } = useContext(ShoppingCartContext);

  return (
    <section id="top" className="online-shop-head-section">
      <div className="online-shop-head-section__main-div">
        <div className="online-shop-head-section__main-div--logo-div">
          <img
            src={Planet_Earth}
            alt=""
            className="online-shop-head-section__main-div--logo-div--img"
          />
          <p className="online-shop-head-section__main-div--logo-div--text">
            Amagon
          </p>
        </div>
        <h1 className="online-shop-head-section__main-div--headline">
          Wilkommen bei
          <br />
          <span className="online-shop-head-section__main-div--headline--focus-text">
            Amagon
          </span>
          <br />
          Der Online Shop #1.
          <br />
          <span className="online-shop-head-section__main-div--headline--slogan-text">
            Wo Online Shoppen freude macht.
          </span>
        </h1>
        <Link
          to="/shoppingStorage"
          className="online-shop-head-section__main-div--link-component link-component"
        >
          <div className="online-shop-head-section__main-div--link-component--shopping-cart">
            <p className="shopping-cart-qunatity">{shoppingCart.length}</p>
            <span className="shopping-cart-logo">&#128722;</span>
          </div>
        </Link>
      </div>{" "}
      <nav className="online-shop-head-section__nav-bar">
        <a
          href="#supaSales"
          className="online-shop-head-section__nav-bar--link"
        >
          Super Sales
        </a>
        <a
          href="#allArticle"
          className="online-shop-head-section__nav-bar--link"
        >
          Unsere Angebote
        </a>
        <Link to="/aboutUs" className="online-shop-head-section__nav-bar--link">
          {" "}
          Über Uns
        </Link>
      </nav>
    </section>

    /*<img
            src={onlineShopShoppingCartLogo}
            alt=""
            className="shopping-cart-logo"
          />
    
    */
  );
}
