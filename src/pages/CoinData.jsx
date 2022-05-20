// react
import { useState, useEffect } from 'react';
// axios
import axios from 'axios';
// react-router-dom
import { useParams } from 'react-router-dom';
// css
import './CoinData.css';

const CoinData = () => {
  // HOOKS =>
  // params
  const params = useParams();

  // state
  const [coin, setCoin] = useState({});

  // API URL
  const api_url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  // effect
  useEffect(() => {
    axios
      .get(api_url)
      .then((response) => {
        setCoin(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [api_url]);

  return (
    <div>
      <div className="coindata__container">
        <div className="coindata__content">
          <h1>{coin.name}</h1>
        </div>
        <div className="coindata__content">
          <div className="coindata__content-information">
            <div className="coindata__content-display">
              {coin.image ? (
                <img
                  className="coindata__display-image"
                  src={coin.image.small}
                  alt=""
                />
              ) : null}
              <p className="coindata__display-name">{coin.name}</p>
              {coin.symbol ? <p>{coin.symbol.toUpperCase()}/USD</p> : null}
            </div>
            <div className="coindata__content-price">
              {coin.market_data?.current_price ? (
                <h1>{`$${coin.market_data.current_price.usd.toLocaleString()}`}</h1>
              ) : null}
            </div>
          </div>
        </div>
        <div className="coindata__content">
          <div className="coindata__content-stats">
            <div className="coindata__content-left">
              <div className="coindata__content-row">
                <h4>24hr Low</h4>
                {coin.market_data?.low_24h ? (
                  <p>{`$${coin.market_data.low_24h.usd.toLocaleString()}`}</p>
                ) : null}
              </div>
              <div className="coindata__content-row">
                <h4>24hr High</h4>
                {coin.market_data?.high_24h ? (
                  <p>{`$${coin.market_data.high_24h.usd.toLocaleString()}`}</p>
                ) : null}
              </div>
            </div>
            <div className="coindata__content-right">
              <div className="coindata__content-row">
                <h4>Market Cap</h4>
                {coin.market_data?.market_cap ? (
                  <p>{`$${coin.market_data.market_cap.usd.toLocaleString()}`}</p>
                ) : null}
              </div>
              <div className="coindata__content-row">
                <h4>Circulating Supply</h4>
                {coin.market_data ? (
                  <p>{coin.market_data.circulating_supply.toLocaleString()}</p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinData;
