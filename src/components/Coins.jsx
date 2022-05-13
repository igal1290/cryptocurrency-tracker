// components
import CoinItem from './CoinItem';
// css
import './Coins.css';

const Coins = (props) => {
  return (
    <div className="container">
      <div>
        <div className="container__heading">
          <p className="container__coin-name">Coin</p>
          <p>Price</p>
          <p>Mkt Cap</p>
          <p>24hr%</p>
        </div>
      </div>
      {props.coins.map((coin) => {
        return <CoinItem coin={coin} />;
      })}
    </div>
  );
};

export default Coins;
