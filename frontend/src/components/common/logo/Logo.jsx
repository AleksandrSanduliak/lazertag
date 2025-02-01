import LogoImg from 'assets/logo.png';
import React from 'react';
import { NavLink } from 'react-router';
import cl from './Logo.module.scss';

const Logo = ({ height, width, className }) => {
  return <img src={LogoImg} alt="Логотип" height={height} width={width} className={className} />;
};

export const HeaderLogo = () => {
  return (
    <NavLink to="/">
      <Logo className={cl.headerLogo} width="71" height="77" />
    </NavLink>
  );
};

export const FooterLogo = () => {
  return <Logo width="292" height="377" className={cl.footerLogo} />;
};
