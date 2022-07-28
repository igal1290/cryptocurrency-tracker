// react
import { useState } from 'react';
// components
import CoinItem from './CoinItem';
import Trending from './Trending';
// css
import './Coins.css';

const Coins = ({ coins }) => {
  // ------ Hooks ------
  // state
  const [searchInput, setSearchInput] = useState('');

  // ------ Variables ------
  // filter coins on search
  const selectedCoins = coins.filter((coin) => {
    if (searchInput === '') {
      return coin;
    } else if (coin.name.toLowerCase().includes(searchInput.toLowerCase())) {
      return coin;
    }
  });

  return (
    <div className="container">
      <div className="container__trending-content">
        <Trending />
      </div>

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
      <table className="container__table">
        <thead className="container__table-head">
          <tr className="container__table-row">
            <th></th>
            <th>#</th>
            <th className="container__coin-name">Coin</th>
            <th>Price</th>
            <th>Mkt Cap</th>
            <th>24h%</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {selectedCoins.map((coin) => {
            return <CoinItem coin={coin} key={coin.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Coins;
