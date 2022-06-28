// react
import { useState } from 'react';
// components
import CoinItem from './CoinItem';
// pages
import CoinData from '../pages/CoinData';
// react-router-dom
import { Link } from 'react-router-dom';
// css
import './Coins.css';

const Coins = ({ coins }) => {
  // ------ Hooks ------
  // state
  const [searchInput, setSearchInput] = useState('');

  return (
    <div className="container">
      <div className="container__search">
        <form>
          <input
            className="container__search-input"
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            placeholder="Search a coin"
          />
        </form>
      </div>
      <div>
        <div className="container__heading">
          <p className="container__coin-name">Coin</p>
          <p>Price</p>
          <p>Mkt Cap</p>
          <p>24hr%</p>
        </div>
      </div>
      {coins
        .filter((value) => {
          if (searchInput === '') {
            return value;
          } else if (
            value.name.toLowerCase().includes(searchInput.toLowerCase())
          ) {
            return value;
          }
        })
        .map((coin) => {
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
