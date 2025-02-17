import StandartUserPhoto from 'assets/standartPhotoUser.jpg';
import cn from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';
import cl from './UserCabinetAside.module.scss';

const ContentTabs = ({ setActiveTab, isOpen }) => {
  return (
    <ul className={cl.userCabinetNavigation}>
      <li onClick={() => setActiveTab('events')}>
        <span className={cn({ [cl.hideText]: !isOpen })}>МЕРОПРИЯТИЯ</span>
        <div className={cl.userCabinetSvg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        </div>
      </li>
      <li onClick={() => setActiveTab('favorites')}>
        <span className={cn({ [cl.hideText]: !isOpen })}>ИЗБРАННОЕ</span>
        <div className={cl.userCabinetSvg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </div>
      </li>
    </ul>
  );
};

const ProfileTabs = ({ setActiveTab, isOpen }) => {
  return (
    <ul className={cl.userCabinetNavigation}>
      <li onClick={() => setActiveTab('myProfile')}>
        <span className={cn({ [cl.hideText]: !isOpen })}>МОЙ ПРОФИЛЬ</span>
        <div className={cl.userCabinetSvg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
      </li>
      <li onClick={() => setActiveTab('logout')}>
        <span className={cn({ [cl.hideText]: !isOpen })}>ВЫЙТИ</span>
        <div className={cl.userCabinetSvg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
        </div>
      </li>
    </ul>
  );
};

const UserInformation = ({ isOpen }) => {
  const { name, surname } = useSelector((state) => state.reducer.auth.user);

  return (
    <div className={cn(cl.user, { [cl.isOpenHideUser]: !isOpen })}>
      <img src={StandartUserPhoto} alt="Фото пользователя" />
      <p className={cl.userName}>
        {name} {surname}
      </p>
    </div>
  );
};

const UserCabinetAside = ({ setActiveTab }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <aside className={cl.userCabinerAside}>
      <div className={cn(cl.asideWrapper, { [cl.isOpenAside]: isOpen })}>
        <UserInformation isOpen={isOpen} />
        <button
          style={{
            transition: 'transform 0.3s ease',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
          className={cl.toggleButton}
          onClick={handleToggle}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M9 18l6-6-6-6"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </button>
        <ContentTabs isOpen={isOpen} setActiveTab={setActiveTab} />
        <ProfileTabs isOpen={isOpen} setActiveTab={setActiveTab} />
      </div>
    </aside>
  );
};

export default UserCabinetAside;
