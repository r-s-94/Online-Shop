import "../index.scss";
import "./count.scss";

export default function Count({
  count,
  countUp,
  countDown,
}: {
  count: number;
  countUp(): void;
  countDown: () => void;
}) {
  return (
    <div className="article-count-and-quantity center-content">
      <button
        onClick={countDown}
        disabled={!(count > 1)}
        className={`count-down button ${
          count === 1 ? "disabled-button no-hover" : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="minus-icon"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
        </svg>
      </button>
      <p className="quantity center-content">{count}</p>
      <button onClick={countUp} className="count-up button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="plus-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
}
