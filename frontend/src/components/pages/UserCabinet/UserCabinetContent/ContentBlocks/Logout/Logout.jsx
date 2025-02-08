import cn from 'classnames';
import AuthButton from 'components/common/auth/button/AuthButton';
import React from 'react';
import { useNavigate } from 'react-router';
import { useLogoutUserMutation } from 'store/api/authApi';
import cl from './Logout.module.scss';

const Logout = () => {
  const navigate = useNavigate();
  const [logout] = useLogoutUserMutation();

  const handleLogount = () => {
    console.log('logout');
    logout();
    navigate('/');
  };
  return (
    <div className={cl.logout}>
      <div className={cl.logoutTitleWrapper}>
        <p id={cl.logoutTitle} className={cn('title')}>
          ВЫХОД ИЗ СИСТЕМЫ
        </p>
      </div>
      <div className={cl.logoutContent}>
        <p id={cl.logoutSubtitle} className={cn('authTitle')}>
          Вы уверены, что хотите выйти?
        </p>
        <AuthButton className={cl.logoutButton} onClick={handleLogount}>
          ВЫЙТИ
        </AuthButton>
      </div>
    </div>
  );
};

export default Logout;
