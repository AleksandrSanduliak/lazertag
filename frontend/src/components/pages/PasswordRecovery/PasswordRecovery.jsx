import React from 'react';
import cl from './PasswordRecovery.module.scss';

const PasswordRecovery = () => {
  return (
    <div>
      <div className="passwordRecovery__container">
        <div className={cl.passwordRecoveryInner}>
          <form>
            Восстановление пароля Введите адрес электронной почты, связанный с вашим аккаунтом, и мы
            вышлем вам ссылку для изменения пароля
            <AuthInput type="email" name="email" placeholder="Email" isRequire />
            <AuthButton>СБРОСИТЬ ПАРОЛЬ</AuthButton>
            <NavLink to="/login" className="authLink">
              Я вспомнил(а) пароль
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordRecovery;
