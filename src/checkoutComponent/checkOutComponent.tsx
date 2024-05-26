import { Link } from "react-router-dom";
import "./checkOutComponent.scss";
import "./checkOutResponsiveComponent.scss";

export default function CheckoutComponent() {
  return (
    <div className="online-shop-checkOut">
      <div className="online-shop-checkOut-header-frame"></div>

      <div className="online-shop-checkOut-link-div">
        <Link
          to="/"
          className="online-shop-checkOut-link-div__link-component-left link-component"
        >
          <button className="online-shop-checkOut-link-div__link-component-left--back-menu-button button">
            zum Hauptmenu
          </button>
        </Link>

        <Link
          to="/shoppingStorage"
          className="online-shop-checkOut-link-div__link-component-right link-component"
        >
          <button className="online-shop-checkOut-link-div__link-component-right--shopping-cart-button button">
            Warrenkorb
            <span className="online-shop-checkOut-link-div__link-component-right--shopping-cart-button--shopping-cart-icon">
              &#128722;
            </span>
          </button>
        </Link>
      </div>

      <h2 className="online-shop-checkOut-headline">
        Danke für Ihren Einkauf bei
        <span className="online-shop-checkOut-headline__focus-word">
          Amagon
        </span>
        . <br /> Dem Online-Shop #1.
      </h2>

      <div className="online-shop-checkOut-rooter-frame"></div>
    </div>
  );
}
