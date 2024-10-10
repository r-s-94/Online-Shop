import "./popUp.scss";
import ShoppingCartIMG from "../assets/zum-einkaufswagen-hinzufugen.png";
import Quantity from "../assets/nummer.png";
import DeleteIMG from "../assets/geschaft.png";

export default function PopUp({
  message,
  picture,
}: {
  message: string;
  picture: string;
}) {
  return (
    <div className="pop-up-div">
      <p className="pop-up-div__message">{message}</p>
      <img
        src={
          picture === "shopping-cart"
            ? ShoppingCartIMG
            : picture === "quantity"
            ? Quantity
            : picture === "delete"
            ? DeleteIMG
            : ""
        }
        alt=""
        className="pop-up-div__img"
      />
    </div>
  );
}
