import "./head.scss";

export default function HeadlineEl() {
  return (
    <div className="headline-div">
      <h1 className="headline-div__headline">
        <span className="headline-div__focus-text">Amagon</span>
        <br />
        Der Online-Shop #1.
        <br />
        <span className="headline-div__slogan-text">
          Wo Online Shoppen Freude macht.
        </span>
      </h1>
    </div>
  );

  /*<img
            src={onlineShopShoppingCartLogo}
            alt=""
            className="shopping-cart-logo"
          />
    
    */
}
