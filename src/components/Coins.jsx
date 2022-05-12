// components
import CoinItem from './CoinItem';
// css
import './Coins.css';

const Coins = (props) => {
  return (
    <div className="container">
      <div className='header'>
        <p>Logo</p>
        <p>Coin</p>
        <p>Price</p>
        <p>Market Cap</p>
        <p>24H Change</p>

      </div>
      <div>
      {props.coins.map((coin) => {
        return <CoinItem coin={coin} />;
      })}
      </div>
      
    </div>
  );
};

export default Coins;
