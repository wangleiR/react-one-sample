import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default (WrappedComponent) => {
  const View = (props) => {
    const { logged, ...rest } = props;
    return (
      <div>
        {!logged && <Redirect to="/login"/>}
        {logged && <WrappedComponent {...rest} />}
      </div>
    );
  };

  return connect(({ isAuthenticated }) => ({
    logged: isAuthenticated
  }))(View);
};