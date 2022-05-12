// css
import './Coins.css';

const CoinItem = (props) => {
  return (
    <div className="coin__row">
      <div className="coin__display">
        <img
          className="coin__image"
          src={props.coin.image}
          alt="coin img"
        ></img>
        <p className="coin__symbol">{props.coin.symbol.toUpperCase()}</p>
      </div>
      <div className="coin__data">
        <p className="coin__price">
          {`$${props.coin.current_price.toLocaleString()}`}
        </p>
        <p className="coin__marketcap">
          {`$${props.coin.market_cap.toLocaleString()}`}
        </p>
        <p className="coin__percent">
          {props.coin.price_change_percentage_24h}
        </p>
      </div>
    </div>
  );
};

export default CoinItem;
