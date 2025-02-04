import cn from 'classnames';
import { NavLink } from 'react-router';
import { navigationData } from 'utils/consts/navigationData';
import useMediaQuery from 'utils/hooks/useMediaQuery';
import cl from './Navigation.module.scss';

const NavUserAccount = () => {
  return (
    <li key="account" className={cn('text', cl.headerLink)}>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          `${isActive ? cl.isActiveHeaderLink : ''} 'text' ${cl.headerLink}`
        }>
        <p>Личный кабинет</p>
      </NavLink>
    </li>
  );
};

const Navigation = ({ listClassName, linkClassName, children, isActiveClass }) => {
  return (
    <nav>
      <ul className={listClassName}>
        {children}
        {navigationData.map((item) => {
          return (
            <li className="text" key={item.id}>
              <NavLink
                className={({ isActive }) => `${isActive ? isActiveClass : ''} ${linkClassName}`}
                to={item.link}>
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export const HeaderNavigation = () => {
  const isTablet = useMediaQuery(1024);
  return (
    <Navigation
      listClassName={cl.headerNav}
      linkClassName={cl.headerLink}
      isActiveClass={cl.isActiveHeaderLink}>
      {isTablet && <NavUserAccount />}
    </Navigation>
  );
};

export const FooterNavigation = () => {
  return (
    <Navigation
      listClassName={cl.footerNav}
      linkClassName={cl.footerLink}
      isActiveClass={cl.isActiveFooterLink}
    />
  );
};
