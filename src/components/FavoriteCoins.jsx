// react
import React, { useState } from 'react';
// react-router-dom
import { Link } from 'react-router-dom';
// sparklines
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
// react-icons
import { IoCloseSharp } from 'react-icons/io5';
// context
import { UserAuth } from '../context/AuthContext';
// firebase
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
// css
import './FavoriteCoins.css';
import { useEffect } from 'react';

const FavoriteCoins = () => {
  // state
  const [coins, setCoins] = useState([]);

  // context
  const { user } = UserAuth();

  // effect
  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user.email}`), (doc) => {
      setCoins(doc.data()?.watchList);
    });
  }, [user.email]);

  // handle remove coin
  const coinPath = doc(db, 'users', `${user.email}`);
  const removeCoin = async (receivedId) => {
    try {
      const selectedCoins = coins.filter((coin) => coin.id !== receivedId);
      await updateDoc(coinPath, {
        watchList: selectedCoins,
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="favorite">
      {coins.length === 0 ? (
        <p>
          You don't have any coins on your watch list.
          <Link className="favorite__link" to="/">
            Search coins
          </Link>
        </p>
      ) : (
        <table className="favorite__table">
          <thead className="favorite__table-head">
            <tr className="favorite__table-row">
              <th></th>
              <th>#</th>
              <th>Coin</th>
              <th>Price</th>
              <th>Mkt Cap</th>
              <th>24h%</th>
              <th>Last 7 Days</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <tr className="favorite__coin-row" key={coin.id}>
                <td className="favorite__coin-remove">
                  <IoCloseSharp onClick={() => removeCoin(coin.id)} />
                </td>
                <td className="favorite__coin-rank">{coin.rank}</td>
                <td>
                  <Link
                    className="favorite__coin-display"
                    to={`/coin/${coin.id}`}
                  >
                    <img
                      className="favorite__coin-image"
                      src={coin.image}
                      alt="/"
                    />
                    <p className="favorite__coin-symbol">
                      {coin.symbol.toUpperCase()}
                    </p>
                  </Link>
                </td>
                <td className="favorite__coin-price">
                  ${coin.price.toLocaleString()}
                </td>
                <td className="favorite__coin-marketcap">
                  ${coin.marketcap.toLocaleString()}
                </td>
                <td className="favorite__coin-percent">
                  {coin.percentage_change < 0 ? (
                    <p className="coin__red">
                      {coin.percentage_change.toFixed(2)}%
                    </p>
                  ) : (
                    <p className="coin__green">
                      {coin.percentage_change.toFixed(2)}%
                    </p>
                  )}
                </td>
                <td className="favorite__coin-sparkline">
                  <Sparklines data={coin.sparkline}>
                    <SparklinesLine color="#495a8b" />
                    <SparklinesSpots />
                  </Sparklines>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FavoriteCoins;
