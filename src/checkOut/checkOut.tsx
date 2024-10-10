import "./checkOut.scss";
import "./checkOutResponsive.scss";
import HeadComponent from "../header/head";
import FooterComponent from "../footer/footer";

export default function CheckoutComponent() {
  return (
    <div className="online-shop-checkOut">
      <HeadComponent />

      <h2 className="online-shop-checkOut__headline">
        Danke für Ihren Einkauf bei
        <span className="online-shop-checkOut__headline--focus-word">
          Amagon
        </span>
        . <br /> Dem Online-Shop #1.
      </h2>

      <FooterComponent />
    </div>
  );
}
