import { Link } from "react-router-dom";
import "../index.scss";
import "./footer.scss";
export default function FooterComponent() {
  return (
    <section className="footer-div center-content">
      <p className="footer-div__footer-info">Impressum</p>
      <span>|</span>
      <p className="footer-div__footer-info"> Datenschutz</p>
      <span>|</span>
      <p className="footer-div__footer-info">AGB</p>
      <span>|</span>{" "}
      <p className="footer-div__footer-info">&copy; www.amagon.de</p>
      <span>|</span>
      <Link to="/aboutUs">
        <p className="footer-div__footer-info">Über Uns</p>
      </Link>
    </section>
  );
}
