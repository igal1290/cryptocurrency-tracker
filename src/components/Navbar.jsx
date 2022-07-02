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
        <div className="navbar__title">
          <Link to="/">
            <img
              className="navbar__logo"
              src={CryptoIcon}
              alt="Crypto Icon"
              width="40"
              height="40"
            />
          </Link>

          <h1 className="navbar__header">CryptoCore</h1>
        </div>
        <div className="navbar__account">
          <button className="navbar__login">Log In</button>
          <button className="navbar__signup">Sign up</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
