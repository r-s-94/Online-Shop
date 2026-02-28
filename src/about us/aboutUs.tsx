import customerSupportTeam from "../assets/custemers support team.jpg";
import customerSupport from "../assets/custermor support.jpg";
import wareHouse from "../assets/ware house in.jpg";
import "./aboutUs.scss";
import "../index.scss";
//import "./aboutUsResponsive.scss";
import aboutUseTransportAirplain from "../assets/online shop about use transport airplain img.jpg";
import aboutUseTransportTrain from "../assets/online shop about use transport train img.jpg";
import aboutUseTransportTruck from "../assets/truck-image2.jpg";
import aboutUseTransportShip from "../assets/online shop about use transport ship img.jpg";
import Amagon from "../assets/Amagonunternehmen.jpg";

import FooterComponent from "../footer/footer";
import Nav from "../nav/nav-bar";
import ToTopEl from "../toTopEl";
import LogoShoppingcartEl from "../logoShoppingcart/logoShoppingcartEl";

export default function AboutUsComponent() {
  return (
    <section className="about-use-section">
      <Nav />
      <LogoShoppingcartEl />

      <h2 className="about-use-section__headline center-content">Amagon</h2>

      <div className="about-use-section__description-div">
        <p className="about-use-section__text">
          {" "}
          <span className="about-use-section__focus-word">Amagon</span>
          ist ein Weltweites, Globales Online-Business-Unternehmen was dir genau
          das Bietet was du brauchst.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime iste
          consequatur voluptatem nemo ipsam excepturi similique distinctio qui
          possimus autem eligendi, blanditiis laudantium dolorem commodi beatae
          ex non pariatur unde.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          commodi itaque, facilis eos quam tempore quod cum voluptatibus nobis,
          veniam provident vero dignissimos reprehenderit perferendis.
          Voluptates, odit unde! Possimus, magnam.
        </p>
        <img src={Amagon} alt="" className="about-use-section__img" />
      </div>

      <div className="about-use-section__main-description-div center-content-column">
        <div className="about-use-section__generally-description-div">
          <div className="about-use-section__first-description center-content-column">
            <img
              src={customerSupportTeam}
              alt=""
              className="about-use-section__first-img"
            />
            <p className="about-use-section__first-text">
              Unsere qualifizierten, motivierten und engagierten Mitarbeiter
              sind stets für dich da.
            </p>
          </div>

          <div className="about-use-section__second-description center-content-column">
            <img
              src={customerSupport}
              alt=""
              className="about-use-section__second-img"
            />
            <p className="about-use-section__second-text">
              Unser Supportteam ist rund um die Uhr für dich erreichbar.
            </p>
          </div>

          <div className="about-use-section__third-description center-content-column">
            <img
              src={wareHouse}
              alt=""
              className="about-use-section__third-img"
            />
            <p className="about-use-section__third-text">
              Unser Lager ist stets bestens gefühlt – und unser Team gibt
              täglich 100 %, damit deine Bestellung schnellst möglichst bei dir
              ankommt.
            </p>
          </div>
        </div>

        <div className="about-use-section__way-to-client-description-div center-content-column">
          <p className="about-use-section__way-to-client-text">
            Egal ob zu Wasser, in der Luft, auf Schienen oder auf der Straße,
            kein Weg zu dir ist uns zu weit oder zu umständlich.
          </p>
          <div className="about-use-section__way-to-client-img-div">
            <img
              src={aboutUseTransportAirplain}
              alt=""
              className="about-use-section__airplane-img"
            />
            <img
              src={aboutUseTransportShip}
              alt=""
              className="about-use-section__ship-img"
            />
            <img
              src={aboutUseTransportTruck}
              alt=""
              className="about-use-section__truck-img"
            />
            <img
              src={aboutUseTransportTrain}
              alt=""
              className="about-use-section__train-img"
            />
          </div>
        </div>
      </div>

      <ToTopEl />
      <FooterComponent />
    </section>
  );

  /*
  
  */
}
