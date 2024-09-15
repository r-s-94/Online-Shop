import { Link } from "react-router-dom";
import "./checkOut.scss";
import "./checkOutResponsive.scss";

export default function CheckoutComponent() {
  return (
    <div className="online-shop-checkOut">
      <div className="online-shop-checkOut__header-frame"></div>

      <div className="online-shop-checkOut__link-div">
        <Link
          to="/"
          className="online-shop-checkOut__link-div--link-component-left link-component"
        >
          <button className="online-shop-checkOut__link-div--link-component-left--back-menu-button button">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="online-shop-checkOut__link-div--link-component-left--back-menu-button--icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </span>{" "}
            zum Hauptmenu
          </button>
        </Link>

        <Link
          to="/shoppingStorage"
          className="online-shop-checkOut__link-div--link-component-right link-component"
        >
          <button className="online-shop-checkOut__link-div--link-component-right--shopping-cart-button button">
            Warrenkorb
            <span className="online-shop-checkOut__link-div--link-component-right--shopping-cart-button--shopping-cart-icon">
              &#128722;
            </span>
          </button>
        </Link>
      </div>

      <h2 className="online-shop-checkOut__headline">
        Danke für Ihren Einkauf bei
        <span className="online-shop-checkOut__headline--focus-word">
          Amagon
        </span>
        . <br /> Dem Online-Shop #1.
      </h2>

      <div className="online-shop-checkOut__rooter-frame"></div>
    </div>
  );
}
