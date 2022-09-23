// react
import { useState, useEffect } from 'react';
// react-router-dom
import { Routes, Route } from 'react-router-dom';
// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// pages
import CoinHomepage from './pages/CoinHomepage';
import CoinData from './pages/CoinData';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Account from './pages/Account';
//axios
import axios from 'axios';
// context
import { AuthContextProvider } from './context/AuthContext';
// css
import './App.css';

function App() {
  // ----- Variables -----
  // api url
  const api =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true';

  // ----- Hooks -----
  // state
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // effect
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(api)
      .then((response) => {
        setCoins(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<CoinHomepage coins={coins} isLoading={isLoading} />}
        />
        <Route path="/coin" element={<CoinData />}>
          <Route path=":coinId" element={<CoinData />} />
        </Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Account />} />
      </Routes>
      <Footer />
    </AuthContextProvider>
  );
}

export default App;
