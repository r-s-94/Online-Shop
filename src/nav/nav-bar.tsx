import { Link } from "react-router-dom";
import "../index.scss";
import "./nav.scss";
import { HashLink } from "react-router-hash-link";
import { useContext, useState } from "react";
import { currentCategoryContent } from "../currentCategoryContext";

export default function Nav() {
  const [executeAnimation, setExecuteAnimation] = useState<boolean>(false);
  const { setCurrentCategory } = useContext(currentCategoryContent);

  return (
    <div className="nav-div">
      <nav
        className={`nav-div__nav-bar ${executeAnimation ? "nav-bar-down" : ""}`}
      >
        <Link
          to="/"
          onClick={() => {
            setExecuteAnimation(!executeAnimation);
            setCurrentCategory("");
          }}
          className="nav-div__link no-underline"
        >
          Hauptseite
        </Link>
        <HashLink
          to="/#supaSales"
          onClick={() => {
            setExecuteAnimation(!executeAnimation);
            setCurrentCategory("");
          }}
          className="nav-div__link no-underline"
        >
          {" "}
          Super Sales
        </HashLink>
        <HashLink
          to="/#allArticle"
          onClick={() => {
            setExecuteAnimation(!executeAnimation);
            setCurrentCategory("");
          }}
          className="nav-div__link no-underline"
        >
          Unsere Angebote
        </HashLink>

        <Link
          to="/aboutUs"
          onClick={() => {
            setExecuteAnimation(!executeAnimation);
            setCurrentCategory("");
          }}
          className="nav-div__link no-underline"
        >
          {" "}
          Über Uns
        </Link>
      </nav>
      <div
        onClick={() => {
          setExecuteAnimation(!executeAnimation);
        }}
        className="nav-div__hamburger-menu"
      >
        <div
          className={`nav-div__line ${
            executeAnimation ? "animation-line-top" : ""
          } `}
        ></div>
        <div
          className={`nav-div__line ${
            executeAnimation ? "animation-line-middle" : ""
          } `}
        ></div>
        <div
          className={`nav-div__line  ${
            executeAnimation ? "animation-line-bottom" : ""
          }`}
        ></div>
      </div>
    </div>
  );
  /*<div
        onclick="interactionHamburgerMenu()"
        class="nav-section__hamburger-menu"
      >
        <div class="nav-section__bar1"></div>
        <div class="nav-section__bar2"></div>
        <div class="nav-section__bar3"></div>
      </div>
  
  */
}
