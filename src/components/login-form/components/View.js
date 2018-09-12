import React from 'react';
import { Redirect } from 'react-router-dom';
import '../style.scss';

export default ({onLogin, logged}) => (
  <div className="login-form">
    {
      !logged &&
      <div className="login-form__panel">
        <div className="login-form__section">
          <label htmlFor="username">Username:</label>
          <input ref={(ref) => this.username = ref} id="username" />
        </div>
        <div className="login-form__section">
          <label htmlFor="password">Password:</label>
          <input ref={(ref) => this.password = ref} type="password" id="password" />
        </div>
        <button className="login-form__button" onClick={() => {
          if (this.username.value === 'tw' && this.password.value === 'tw') {
            onLogin();
          }
        }}>OK</button>
      </div>
    }
    {
      logged && <Redirect to="/classes" />
    }
  </div>
);