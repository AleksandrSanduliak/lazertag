import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const isAuth = useSelector((store) => store.reducer);
  console.log('isAuth, ', isAuth);
  if (!isAuth) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};

export default RequireAuth;
