import React, { useState } from 'react';
// pages
import CoinData from '../pages/CoinData';
// react-router-dom
import { Link } from 'react-router-dom';
// sparklines
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
// react-icons
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
// context
import { UserAuth } from '../context/AuthContext';
// firebase
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
// css
import './Coins.css';

const CoinItem = ({ coin }) => {
  // state
  const [favoriteCoin, setFavoriteCoin] = useState(false);

  // context
  const { user } = UserAuth();
  const coinPath = doc(db, 'users', `${user?.email}`);

  // handle save coin
  const saveCoin = async () => {
    if (user?.email) {
      setFavoriteCoin(true);
      await updateDoc(coinPath, {
        watchList: arrayUnion({
          id: coin.id,
          name: coin.name,
          image: coin.image,
          rank: coin.market_cap_rank,
          symbol: coin.symbol,
          price: coin.current_price,
          marketcap: coin.market_cap,
          percentage_change: coin.price_change_percentage_24h,
          sparkline: coin.sparkline_in_7d.price,
        }),
      });
    } else {
      alert('Please login to add coins to watch list.');
    }
  };

  return (
    <tr className="coin__row">
      <td onClick={saveCoin}>
        {favoriteCoin ? <AiFillStar /> : <AiOutlineStar />}
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
