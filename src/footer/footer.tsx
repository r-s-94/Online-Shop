import { Link } from "react-router-dom";
import "./footer.scss";
export default function FooterComponent() {
  return (
    <section className="footer-section">
      <p className="footer-section__footer-info">Impressum</p>
      <span>|</span>
      <p className="footer-section__footer-info"> Datenschutz</p>
      <span>|</span>
      <p className="footer-section__footer-info">AGB</p>
      <span>|</span>{" "}
      <p className="footer-section__footer-info">&copy; www.amagon.de</p>
      <span>|</span>
      <Link to="/aboutUs">
        <p className="footer-section__footer-info">Über Uns</p>
      </Link>
      <span>|</span>
      <p>
        <a href="#top" className="footer-section__footer-info">
          nach Oben
        </a>
      </p>
    </section>
  );
}
