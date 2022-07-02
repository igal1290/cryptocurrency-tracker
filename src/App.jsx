// react
import { useState, useEffect } from 'react';
// react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// components
import Navbar from './components/Navbar';
// pages
import CoinHomepage from './pages/CoinHomepage';
import CoinData from './pages/CoinData';
//axios
import axios from 'axios';
// css
import './App.css';

function App() {
  // API URL
  const api_url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true';

  // HOOKS =>
  // state
  const [coins, setCoins] = useState([]);

  // effect
  useEffect(() => {
    axios
      .get(api_url)
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CoinHomepage coins={coins} />} />
        <Route path="/coin" element={<CoinData />}>
          <Route path=":coinId" element={<CoinData />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
