import customerSupportTeam from "../assets/custemers support team.jpg";
import customerSupport from "../assets/custermor support.jpg";
import wareHouse from "../assets/ware house in.jpg";
import "./aboutUs.scss";
import "./aboutUsResponsive.scss";
import aboutUseTransportAirplain from "../assets/online shop about use transport airplain img.jpg";
import aboutUseTransportTrain from "../assets/online shop about use transport train img.jpg";
import aboutUseTransportTruck from "../assets/online shop about use transport truck img.jpg";
import aboutUseTransportShip from "../assets/online shop about use transport ship img.jpg";
import Amagon from "../assets/Amagonunternehmen.jpg";
import { Link } from "react-router-dom";

export default function AboutUsComponent() {
  return (
    <section className="online-shop-about-use-section">
      <Link to="/" className="online-shop-about-use-section__link">
        <button className="online-shop-about-use-section__link--back-menu-button">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="online-shop-about-us-section__link--back-menu-button--icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          zum Hauptmenu
        </button>
      </Link>

      <h2 className="online-shop-about-use-section__headline">
        Das Unternehmen{" "}
        <span className="online-shop-about-use-section__headline--focus-text">
          Amagon
        </span>{" "}
      </h2>

      <div className="online-shop-about-use-section__description-div">
        <p className="online-shop-about-use-section__description-div--text">
          {" "}
          <span className="online-shop-about-use-section__description-div--text--focus-word">
            Amagon
          </span>
          ist ein Weltweites, Globales Online-Business-Unternehmen was dir genau
          das Bietet was du brauchst.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime iste
          consequatur voluptatem nemo ipsam excepturi similique distinctio qui
          possimus autem eligendi, blanditiis laudantium dolorem commodi beatae
          ex non pariatur unde. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eveniet commodi itaque, facilis eos quam tempore
          quod cum voluptatibus nobis, veniam provident vero dignissimos
          reprehenderit perferendis. Voluptates, odit unde! Possimus, magnam.
        </p>
        <img
          src={Amagon}
          alt=""
          className="online-shop-about-use-section__description-div--img"
        />
      </div>

      <div className="online-shop-about-use-section__main-description-div">
        <div className="online-shop-about-use-section__main-description-div--first-description-div">
          <div className="online-shop-about-use-section__main-description-div--first-description-div--first-description">
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

          <div className="online-shop-about-use-section__main-description-div--first-description-div--second-description">
            <img
              src={customerSupport}
              alt=""
              className="about-use-second-img"
            />
            <p className="about-use-second-text">
              Unser Supportteam ist rund um die Uhr für dich erreichbar.
            </p>
          </div>

          <div className="online-shop-about-use-section__main-description-div--first-description-div--third-description">
            <img src={wareHouse} alt="" className="about-use-third-img" />
            <p className="about-use-third-text">
              Unser Lager ist stets aktuell, gefühlt und alle geben 100% damit
              du deine Bestellung schnellstmöglichst bekommst.
            </p>
          </div>
        </div>

        <div className="online-shop-about-use-section__main-description-div--second-description-div">
          <h4 className="online-shop-about-use-section__main-description-div--second-description-div--headline">
            Egal ob zu Wasser, in der Luft, auf Schienen oder auf der Straße,
            kein Weg zu dir ist uns zuweit oder zu umständlich.
          </h4>
          <div className="online-shop-about-use-section__main-description-div--second-description-div--img-div">
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
    </section>
  );

  /*
  
  */
}
