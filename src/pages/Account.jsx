// react
import React from 'react';
// react-router-dom
import { Navigate } from 'react-router-dom';
// components
import FavoriteCoins from '../components/FavoriteCoins';
// context
import { UserAuth } from '../context/AuthContext';
// css
import './Account.css';

const Account = () => {
  // context
  const { user } = UserAuth();

  if (user) {
    return (
      <div className="container">
        <div className="account__content">
          <div>
            <h1>Welcome</h1>
            <div>
              <p>{user?.email}</p>
            </div>
          </div>
        </div>
        <div className="account__watchlist">
          <div>
            <FavoriteCoins />
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/signin" />;
  }
};

export default Account;
