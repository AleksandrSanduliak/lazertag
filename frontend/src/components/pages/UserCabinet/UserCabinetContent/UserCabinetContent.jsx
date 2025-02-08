import cn from 'classnames';
import React from 'react';
import Events from './ContentBlocks/Events/Events';
import Favorites from './ContentBlocks/Favorites/Favorites';
import Logout from './ContentBlocks/Logout/Logout';
import MyProfile from './ContentBlocks/MyProfile/MyProfile';
import cl from './UserCabinetContent.module.scss';

const userCabinetTabs = {
  events: {
    component: <Events />,
  },
  favorites: {
    component: <Favorites />,
  },
  myProfile: {
    component: <MyProfile />,
  },
  logout: {
    component: <Logout />,
  },
};

const UserCabinetContent = ({ activeTab }) => {
  return (
    <div className={cl.content}>
      <div className={cl.contentInner}>{userCabinetTabs[activeTab].component}</div>
    </div>
  );
};

export default UserCabinetContent;
