import React from 'react';
import cl from './AuthButton.module.scss';

const AuthButton = ({ children }) => {
  return (
    <button type="submit" className={cl.authButton}>
      {children}
    </button>
  );
};

export default AuthButton;
