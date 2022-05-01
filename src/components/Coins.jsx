// components
import CoinItem from './CoinItem';
// css
import './Coins.css';

const Coins = (props) => {
  return (
    <div className="container">
      {props.coins.map((coin) => {
        return <CoinItem coin={coin} />;
      })}
    </div>
  );
};

export default Coins;
