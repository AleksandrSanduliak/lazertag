import React from 'react';
import BurgerButton from './BurgerButton/BurgerButton';
import BurgerContent from './BurgerContent/BurgerContent';

const Burger = () => {
  const [isOpenBurger, setIsOpenBurger] = React.useState(false);

  const onHandleOpen = () => {
    setIsOpenBurger((prev) => !prev);
  };

  return (
    <>
      <BurgerButton isOpenBurger={isOpenBurger} onHandleOpen={onHandleOpen} />
      {isOpenBurger && <BurgerContent />}
    </>
  );
};

export default Burger;
