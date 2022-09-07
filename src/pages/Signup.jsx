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
import './Signup.css';

const Signup = () => {
  // state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // navigate
  const navigate = useNavigate();

  // context/signup
  const { signUp } = UserAuth();

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    navigate('/signin');
    try {
      await signUp(email, password);
    } catch (e) {
      setError(e.message);
      console.log();
    }
  };

  return (
    <div>
      <div className="signup">
        <h1 className="signup__heading">Sign up</h1>
        {error ? <p>{error}</p> : null}
        <form onSubmit={handleSubmit} className="signup__form">
          <div className="signup__form-content">
            <label className="signup__email-label">Email</label>
            <div>
              <input
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                className="signup__email-input"
              />
              <GrMail className="signup__email-icon" />
            </div>
          </div>
          <div className="signup__form-content">
            <label className="signup__password-label">Password</label>
            <div>
              <input
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                className="signup__password-input"
              />
              <RiLockPasswordFill className="signup__password-icon" />
            </div>
          </div>
          <button className="signup__button">Sign up</button>
        </form>
        <p>
          Already a member?{' '}
          <Link to="/signin" className="signup__link">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
