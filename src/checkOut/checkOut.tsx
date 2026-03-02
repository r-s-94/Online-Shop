import "../index.scss";
import "./checkOut.scss";
import "./checkOutResponsive.scss";
import FooterComponent from "../footer/footer";
import Nav from "../nav/nav-bar";
import HeadlineEl from "../header/headEl";

export default function CheckoutComponent() {
  return (
    <div className="online-shop-checkout">
      <Nav />
      <HeadlineEl />
      <h2 className="online-shop-checkout__headline center-text">
        Danke für Ihren Einkauf bei
        <span className="online-shop-checkout__focus-word">Amagon</span>
        . <br /> Dem Online-Shop #1.
      </h2>

      <FooterComponent />
    </div>
  );
}
