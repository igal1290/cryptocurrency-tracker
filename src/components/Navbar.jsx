// css
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <h1 className="navbar__logo">Crypto Currency Tracker</h1>
        <hr></hr>
        <div className = "data">
        <p>Icon</p>
        <p>Name</p>
        <p>Price</p>
        <p>Amount</p>
        <p>Percentage</p>      
  </div>
      </nav>
    </div>
  );
};

export default Navbar;
