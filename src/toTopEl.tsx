import "./toTopEl.scss";
import { useEffect, useState } from "react";

export default function ToTopEl() {
  const [showToTop, setShowToTop] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", handleScrollEvents);
    };
  }, []);

  window.addEventListener("scroll", handleScrollEvents);

  function handleScrollEvents() {
    console.log(window.pageYOffset);
    const trigger = document.body.scrollHeight * 0.2;

    if (window.pageYOffset > trigger) {
      setShowToTop(true);
    } else {
      setShowToTop(false);
    }
  }

  function toTop() {
    window.scrollTo(0, 0);
  }

  return (
    <button
      onClick={toTop}
      className={`to-top-button button ${showToTop ? "show" : ""}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="to-up-icon"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
        />
      </svg>
    </button>
  );
}
