// components
import CoinItem from './CoinItem';
// pages
import CoinData from '../pages/CoinData';
// react-router-dom
import { Link } from 'react-router-dom';
// css
import './Coins.css';

const Coins = ({ coins }) => {
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
      {coins.map((coin) => {
        return (
          <Link to={`/coin/${coin.id}`} element={<CoinData />} key={coin.id}>
            <CoinItem coin={coin} />
          </Link>
        );
      })}
    </div>
  );
};

export default Coins;
