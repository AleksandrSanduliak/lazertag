import cn from 'classnames';
import React from 'react';
import cl from './UserCabinet.module.scss';
import UserCabinetAside from './UserCabinetAside/UserCabinetAside';
import UserCabinetContent from './UserCabinetContent/UserCabinetContent';

const UserCabinet = () => {
  const [activeTab, setActiveTab] = React.useState('events');
  return (
    <section className={cl.userCabinet}>
      <div
        id={cl.userCabinetContainer}
        className={cn('user_rightSideContainer', cl.userCabinetContainer)}>
        <div className={cl.userCabinetInner}>
          <UserCabinetAside setActiveTab={setActiveTab} />
          <UserCabinetContent activeTab={activeTab} />
        </div>
      </div>
    </section>
  );
};

export default UserCabinet;
