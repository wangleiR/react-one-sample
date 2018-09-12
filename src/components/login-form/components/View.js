import React from 'react';
import { Redirect } from 'react-router-dom';
import '../style.scss';

export default ({onLogin, logged}) => (
  <div class="login-form">
    {
      !logged &&
      <div class="login-form__panel">
        <div class="login-form__section">
          <label htmlFor="username">Username:</label>
          <input ref={(ref) => this.username = ref} id="username" />
        </div>
        <div class="login-form__section">
          <label for="password">Password:</label>
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