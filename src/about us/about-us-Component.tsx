import customerSupportTeam from "../assets/custemers support team.jpg";
import customerSupport from "../assets/custermor support.jpg";
import wareHouse from "../assets/ware house in.jpg";
import "./about-us-Component.scss";
import "./about-us-Responsive.scss";
import aboutUseTransportAirplain from "../assets/online shop about use transport airplain img.jpg";
import aboutUseTransportTrain from "../assets/online shop about use transport train img.jpg";
import aboutUseTransportTruck from "../assets/online shop about use transport truck img.jpg";
import aboutUseTransportShip from "../assets/online shop about use transport ship img.jpg";

export default function aboutUsComponent() {
  return (
    <div className="online-shop-about-use">
      <h2 className="online-shop-about-use__headline">ÜBER UNS</h2>
      <div className="online-shop-about-use__description-div">
        <h4>
          <span className="online-shop-about-use__description-div--focus-word">
            Amagon
          </span>
          ist ein Weltweites, Globales Online-Business-Unternehmen und bietet
          dir das was du brauchst.
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime iste
          consequatur voluptatem nemo ipsam excepturi similique distinctio qui
          possimus autem eligendi, blanditiis laudantium dolorem commodi beatae
          ex non pariatur unde. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eveniet commodi itaque, facilis eos quam tempore
          quod cum voluptatibus nobis, veniam provident vero dignissimos
          reprehenderit perferendis. Voluptates, odit unde! Possimus, magnam.
        </p>
      </div>

      <div className="online-shop-about-use__main-description-div">
        <div className="online-shop-about-use__main-description-div--first-description-div">
          <div className="online-shop-about-use__main-description-div--first-description-div--first-description">
            <img
              src={customerSupportTeam}
              alt=""
              className="about-use-first-img"
            />
            <p className="about-use-first-text">
              Unsere Qualifizierten, motivierten und Angaschierten Mitarbeiter
              sind stets für die da.
            </p>
          </div>

          <div className="online-shop-about-use__main-description-div--first-description-div--second-description">
            <img
              src={customerSupport}
              alt=""
              className="about-use-second-img"
            />
            <p className="about-use-second-text">
              Wir sind für dich da wenn du Hilfe brauchst.
            </p>
          </div>

          <div className="online-shop-about-use__main-description-div--first-description-div--third-description">
            <img src={wareHouse} alt="" className="about-use-third-img" />
            <p className="about-use-third-text">
              Unser Lager ist stets aktuell und alle geben 100% damit du deine
              Bestellung schnellstmöglichst bekommst.
            </p>
          </div>
        </div>

        <div className="online-shop-about-use__main-description-div--second-description-div">
          <h4 className="online-shop-about-use__main-description-div--second-description-div--headline">
            Egal ob zu Wasser, in der Luft, auf Schienen oder auf der Straße,
            kein Weg zu dir ist uns zuweit oder zu umständlich.
          </h4>
          <div className="online-shop-about-use__main-description-div--second-description-div--img-div">
            <img
              src={aboutUseTransportAirplain}
              alt=""
              className="airplane-img"
            />
            <img src={aboutUseTransportShip} alt="" className="ship-img" />
            <img src={aboutUseTransportTruck} alt="" className="truck-img" />
            <img src={aboutUseTransportTrain} alt="" className="train-img" />
          </div>
        </div>
      </div>
    </div>
  );
}
