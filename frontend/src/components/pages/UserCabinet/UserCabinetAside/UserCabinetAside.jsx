import StandartUserPhoto from 'assets/standartPhotoUser.jpg';
import React from 'react';
import { useSelector } from 'react-redux';
import cl from './UserCabinetAside.module.scss';

const ContentTabs = ({ setActiveTab }) => {
  return (
    <ul className={cl.userCabinetNavigation}>
      <li onClick={() => setActiveTab('events')}>МЕРОПРИЯТИЯ</li>
      <li onClick={() => setActiveTab('favorites')}>ИЗБРАННОЕ</li>
    </ul>
  );
};

const ProfileTabs = ({ setActiveTab }) => {
  return (
    <ul className={cl.userCabinetNavigation}>
      <li onClick={() => setActiveTab('myProfile')}>МОЙ ПРОФИЛЬ</li>
      <li onClick={() => setActiveTab('logout')}>ВЫЙТИ</li>
    </ul>
  );
};

const UserInformation = () => {
  const { name, surname } = useSelector((state) => state.reducer.auth.user);

  return (
    <div className={cl.user}>
      <img src={StandartUserPhoto} alt="Фото пользователя" />
      <p className={cl.userName}>
        {name} {surname}
      </p>
    </div>
  );
};

const UserCabinetAside = ({ setActiveTab }) => {
  return (
    <aside className={cl.userCabinerAside}>
      <UserInformation />
      <ContentTabs setActiveTab={setActiveTab} />
      <ProfileTabs setActiveTab={setActiveTab} />
    </aside>
  );
};

export default UserCabinetAside;
