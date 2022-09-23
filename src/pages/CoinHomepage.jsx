// components
import Coins from '../components/Coins';

const CoinHomepage = ({ coins, isLoading }) => {
  return (
    <div>
      <Coins coins={coins} isLoading={isLoading} />
    </div>
  );
};

export default CoinHomepage;
