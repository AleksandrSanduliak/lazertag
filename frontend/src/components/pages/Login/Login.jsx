import AuthButton from 'components/common/auth/button/AuthButton';
import AuthInput from 'components/common/auth/input/AuthInput';
import React from 'react';
import { NavLink } from 'react-router';
import cl from './Login.module.scss';

const loginData = [
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email',
  },
  {
    name: 'passoword',
    type: 'passoword',
    placeholder: 'Пароль',
  },
];

const Login = () => {
  return (
    <section>
      <div className="login__container">
        <div className={cl.loginInner}>
          <form className={cl.loginForm}>
            <h1 className="authTitle">ВХОД</h1>
            <div className="inputsWrapper">
              {loginData.map((item) => {
                return <AuthInput key={item.name} {...item} isRequire />;
              })}
            </div>
            <div className={cl.loginLinks}>
              <NavLink to="/passwordRecovery" className="authLink">
                Забыли пароль?
              </NavLink>
              <NavLink to="/register" className="authLink">
                Нет аккаунта?
              </NavLink>
            </div>

            <AuthButton>ВОЙТИ</AuthButton>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
