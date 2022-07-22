import React from 'react';
// pages
import CoinData from '../pages/CoinData';
// react-router-dom
import { Link } from 'react-router-dom';
// sparklines
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
// react-icons
import { AiOutlineStar } from 'react-icons/ai';
// css
import './Coins.css';

const CoinItem = ({ coin }) => {
  return (
    <tr className="coin__row">
      <td>
        <AiOutlineStar />
      </td>
      <td className="coin__rank">{coin.market_cap_rank}</td>
      <td>
        <Link
          className="coin__display"
          to={`/coin/${coin.id}`}
          element={<CoinData />}
        >
          <img className="coin__image" src={coin.image} alt="coin img"></img>
          <p className="coin__symbol">{coin.symbol.toUpperCase()}</p>
        </Link>
      </td>
      {coin.current_price < 1 ? (
        <td className="coin__price">
          $
          {coin.current_price.toLocaleString(undefined, {
            minimumFractionDigits: 4,
            maximumFractionDigits: 4,
          })}
        </td>
      ) : (
        <td className="coin__price">
          $
          {coin.current_price.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </td>
      )}
      <td className="coin__marketcap">${coin.market_cap.toLocaleString()}</td>
      <td>
        {coin.price_change_percentage_24h < 0 ? (
          <p className="coin__percent coin__red">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        ) : (
          <p className="coin__percent coin__green">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        )}
      </td>
      <td className="coin__sparkline">
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="#495a8b" />
          <SparklinesSpots />
        </Sparklines>
      </td>
    </tr>
  );
};

export default CoinItem;
