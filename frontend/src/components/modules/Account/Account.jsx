import NotLoginUserSvg from 'assets/notLoginUser.svg';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router';
import AuthUserSvg from '../../../assets/authUser.svg';
import cl from './Account.module.scss';

export const Account = () => {
  const isAuth = useSelector((state) => state.reducer.auth.isAuth);
  const isAuthPath = isAuth ? '/userCabinet' : '/login';
  const isAuthImg = isAuth ? AuthUserSvg : NotLoginUserSvg;
  return (
    <NavLink to={isAuthPath}>
      <img
        className={cl.loginImg}
        width="35"
        height="30"
        src={isAuthImg}
        alt="Инконка пользователя"
      />
    </NavLink>
  );
};
