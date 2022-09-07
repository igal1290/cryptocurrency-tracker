// images
import CryptoIcon from '../images/crypto-icon.png';
// react-router-dom
import { Link, useNavigate } from 'react-router-dom';
// context
import { UserAuth } from '../context/AuthContext';
// css
import './Navbar.css';

const Navbar = () => {
  // context
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  // handle sign out
  const handleSignOut = async () => {
    try {
      await logout();
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="container" data-testid="navbar-1">
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
        {user?.email ? (
          <div className="navbar__account">
            <Link to="/profile">
              <button className="navbar__profile">Profile</button>
            </Link>
            <button onClick={handleSignOut} className="navbar__logout">
              Log Out
            </button>
          </div>
        ) : (
          <div className="navbar__account">
            <Link to="/signin">
              <button className="navbar__login">Log In</button>
            </Link>
            <Link to="/signup">
              <button className="navbar__signup">Sign up</button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
