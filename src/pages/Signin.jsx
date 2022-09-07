// react
import React, { useState } from 'react';
// react-icons
import { GrMail } from 'react-icons/gr';
import { RiLockPasswordFill } from 'react-icons/ri';
// react-router-dom
import { Link, useNavigate } from 'react-router-dom';
// context
import { UserAuth } from '../context/AuthContext';
// css
import './Signin.css';

const Signin = () => {
  // state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // navigate
  const navigate = useNavigate();

  // context
  const { signIn } = UserAuth();

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    navigate('/profile');
    try {
      await signIn(email, password);
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div>
      <div className="signin">
        <h1 className="signin__heading">Log In</h1>
        <form onSubmit={handleSubmit} className="signin__form">
          <div className="signin__form-content">
            <label className="signin__email-label">Email</label>
            <div>
              <input
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                className="signin__email-input"
              />
              <GrMail className="signin__email-icon" />
            </div>
          </div>
          <div className="signin__form-content">
            <label className="signin__password-label">Password</label>
            <div>
              <input
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                className="signin__password-input"
              />
              <RiLockPasswordFill className="signin__password-icon" />
            </div>
          </div>
          <button className="signin__button">Log In</button>
        </form>
        <p>
          Don't have an account?{' '}
          <Link to="/signup" className="signin__link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
