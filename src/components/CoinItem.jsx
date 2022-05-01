// css
import './Coins.css';

const CoinItem = (props) => {
  return (
    <div className="coin__row">
      <div className="coin__symbol">
        <img src={props.coin.image} alt="coin img"></img>
        <p>{props.coin.symbol.toUpperCase()}</p>
      </div>
      <p>{props.coin.current_price.toLocaleString()}</p>
      <p>{props.coin.market_cap}</p>
      <p>{props.coin.price_change_percentage_24h}</p>
    </div>
  );
};

export default CoinItem;
