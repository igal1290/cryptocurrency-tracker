// images
import CryptoIcon from '../images/crypto-icon.png';
// react-router-dom
import { Link } from 'react-router-dom';
// css
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <Link to="/">
          <div className="navbar__title">
            <img
              className="navbar__logo"
              src={CryptoIcon}
              alt="Crypto Icon"
              width="40"
              height="40"
            />
            <h1 className="navbar__header">CryptoCore</h1>
          </div>
        </Link>
        <div className="navbar__account">
          <button className="navbar__login">Log In</button>
          <button className="navbar__signup">Sign up</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
