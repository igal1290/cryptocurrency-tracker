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

  return (
    <div className="container">
      <Trending />
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
              return <CoinItem coin={coin} key={coin.id} />;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Coins;
