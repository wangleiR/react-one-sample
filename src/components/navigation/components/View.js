import React from 'react';
import { Link } from 'react-router-dom';
import '../style.scss';

export default () => (
  <div className="navigation">
    <Link className="navigation__link" to="/">Home</Link>
    <Link className="navigation__link" to="/classes">Classes</Link>
    <Link className="navigation__link" to="/login">Login</Link>
    <Link className="navigation__link" to="/about">About</Link>
  </div>
)