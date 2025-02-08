import React from 'react';
import cl from './AuthButton.module.scss';

const AuthButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} type="submit" className={cl.authButton}>
      {children}
    </button>
  );
};

export default AuthButton;
