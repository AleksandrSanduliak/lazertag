import { HeaderNavigation } from 'components/common/Navigation/Navigation';
import { Account } from 'modules/Account/Account';
import { createPortal } from 'react-dom';
import cl from './BurgerContent.module.scss';

const modalRootElement = document.getElementById('modal-root');
const BurgerContent = () => {
  return createPortal(
    <div className={cl.burgerContent}>
      <HeaderNavigation />
    </div>,
    modalRootElement,
  );
};

export default BurgerContent;
