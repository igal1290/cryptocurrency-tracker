// images
import CryptoIcon from '../images/crypto-icon.png';
// react-router-dom
import { Link } from 'react-router-dom';
// css
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">
          <img
            className="navbar__logo"
            src={CryptoIcon}
            alt="Crypto Icon"
            width="40"
            height="40"
          />
        </Link>

        <h1 className="navbar__header">Noden</h1>
      </nav>
    </div>
  );
};

export default Navbar;
