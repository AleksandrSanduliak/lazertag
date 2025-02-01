import cn from 'classnames';
import AuthButton from 'components/common/auth/button/AuthButton';
import AuthInput from 'components/common/auth/input/AuthInput';
import React from 'react';
import { NavLink } from 'react-router';
import cl from './Register.module.scss';

const registerData = [
  {
    name: 'name',
    type: 'text',
    placeholder: 'Имя',
  },
  {
    name: 'surname',
    type: 'text',
    placeholder: 'Фамилия',
  },
  {
    name: 'country',
    type: 'text',
    placeholder: 'Страна',
  },
  {
    name: 'locality',
    type: 'type',
    placeholder: 'Населённый пункт',
  },
  {
    name: 'dateBirth',
    type: 'text',
    placeholder: 'Дата рождения',
  },
  {
    name: 'email',
    type: 'Email',
    placeholder: 'Email',
  },
  {
    name: 'phone',
    type: 'text',
    placeholder: 'Телефон',
  },
  {
    name: 'password',
    type: 'passoword',
    placeholder: 'Пароль',
  },
  {
    name: 'confirmPassword',
    type: 'passoword',
    placeholder: 'Повторите пароль',
  },
];
const Register = () => {
  const [isChecked, setIsChecked] = React.useState(true);

  return (
    <div className={cl.register}>
      <div className="register__container">
        <div className={cl.registerInner}>
          <form className={cl.registerForm}>
            <h1 className="authTitle">РЕГИСТРАЦИЯ</h1>
            <div className={cl.registerInputsWrapper}>
              {registerData.map((item) => {
                return <AuthInput key={item.name} {...item} isRequire />;
              })}

              <div className={cl.politics}>
                <div className={cl.checkBox}>
                  <input
                    className={cn('authCheckBoxInput', {
                      ['isChecked']: isChecked,
                    })}
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                  />
                  <span className="authLink">Согласие на обработку персональных данных</span>
                </div>

                <NavLink to="/login" className="authLink">
                  Есть аккаунт?
                </NavLink>
              </div>
            </div>

            <div className={cl.registerButton}>
              <AuthButton>ЗАРЕГИСТРИРОВАТЬСЯ</AuthButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
