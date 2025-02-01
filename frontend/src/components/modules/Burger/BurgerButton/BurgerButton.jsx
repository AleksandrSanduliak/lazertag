import cn from 'classnames';
import cl from './BurgerButton.module.scss';

const BurgerButton = ({ isOpenBurger, onHandleOpen }) => {
  return (
    <div
      className={cn(cl.burgerButton, { [cl.burgerActive]: isOpenBurger })}
      aria-label={isOpenBurger ? 'Закрыть главное меню' : 'Открыть главное меню'}
      onClick={onHandleOpen}>
      <span className={cl.line} />
      <span className={cl.line} />
      <span className={cl.line} />
    </div>
  );
};

export default BurgerButton;
