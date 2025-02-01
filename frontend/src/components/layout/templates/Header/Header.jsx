import { HeaderLogo } from 'components/common/logo/Logo';
import { HeaderNavigation } from 'components/common/Navigation/Navigation';
import { Account } from 'modules/Account/Account';
import Burger from 'modules/Burger/Burger';
import React from 'react';
import useMediaQuery from 'utils/hooks/useMediaQuery';
import cl from './Header.module.scss';

const Header = () => {
  const isTablet = useMediaQuery(1024);

  return (
    <header className={cl.header}>
      <div className="header__container">
        <div className={cl.headerInner}>
          <HeaderLogo />
          {!isTablet && <HeaderNavigation />}
          {!isTablet && <Account />}
          {isTablet && <Burger />}
        </div>
      </div>
    </header>
  );
};

export default Header;
