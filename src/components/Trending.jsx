// react
import { useState, useEffect } from 'react';
// axios
import axios from 'axios';
// css
import './Trending.css';

const Trending = () => {
  // HOOKS =>
  // state
  const [trending, setTrending] = useState([]);

  // api
  const url = 'https://api.coingecko.com/api/v3/search/trending';

  //effect
  useEffect(() => {
    axios.get(url).then((response) => {
      setTrending(response.data.coins);
    });
  }, []);

  return (
    <div className="trending__container">
      <h2>Trending Coins</h2>
      <div className="trending">
        {trending.map((coin, idx) => (
          <div className="trending__card" key={idx}>
            <div className="trending__symbol">
              <img
                className="trending__coin-image"
                src={coin.item.small}
                alt="trendingcoin"
              />
              <div>{coin.item.name}</div>
            </div>
            <div className="trending__data">
              <img
                className="trending__bitcoin"
                src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                alt="bitcoin"
              />
              <p>{coin.item.price_btc.toFixed(7)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
