import NotLoginUserSvg from 'assets/notLoginUser.svg';
import React from 'react';
import { NavLink } from 'react-router';
import cl from './Account.module.scss';

const Login = () => {
  return (
    <NavLink to="/login">
      <img
        className={cl.loginImg}
        width="35"
        height="30"
        src={NotLoginUserSvg}
        alt="Инконка пользователя"
      />
    </NavLink>
  );
};

const UserCabinet = () => {
  return <div>logged in</div>;
};

export const Account = ({ isAuth = false }) => {
  return <div>{isAuth ? <UserCabinet /> : <Login />}</div>;
};
