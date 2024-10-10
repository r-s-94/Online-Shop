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
    <div className="article-count-and-quantity">
      <button onClick={countDown} className="count-down button">
        -
      </button>
      <p className="quantity">{count}x</p>
      <button onClick={countUp} className="count-up button">
        +
      </button>
    </div>
  );
}
