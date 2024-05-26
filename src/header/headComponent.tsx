import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../CustomContext";
import onlineShopLogo from "../assets/online shop logo.png";
import onlineShopShoppingCartLogo from "../assets/shopping-cart-logo.png";

import "./headComponent.scss";

export default function HeadComponent() {
  const { shoppingCart } = useContext(ShoppingCartContext);

  return (
    <div className="online-shop-head-section">
      <img
        src={onlineShopLogo}
        alt=""
        className="online-shop-head-section__img"
      />

      <h1 className="online-shop-head-section__headline">
        Willkommen bei <span className="focus-word">Amagon</span> <br /> Dem
        Online-Shop #1
      </h1>

      <Link
        to="/shoppingStorage"
        className="online-shop-head-section__link-component link-component"
      >
        <div className="online-shop-head-section__link-component--shopping-cart">
          <p className="shopping-cart-qunatity">{shoppingCart.length}</p>
          <img
            src={onlineShopShoppingCartLogo}
            alt=""
            className="shopping-cart-logo"
          />
        </div>
      </Link>
    </div>
  );
}
