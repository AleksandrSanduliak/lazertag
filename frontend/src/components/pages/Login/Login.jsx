import AuthButton from 'components/common/auth/button/AuthButton';
import AuthInput from 'components/common/auth/input/AuthInput';
import React from 'react';
import { NavLink, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { useAuthLoginUserMutation } from 'store/api/authApi';
import cl from './Login.module.scss';

const loginData = [
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email',
  },
  {
    name: 'currentPassword',
    type: 'password',
    placeholder: 'Пароль',
    autoComplete: 'true',
  },
];

const Login = () => {
  const navigate = useNavigate();
  const [login, { isSuccess, isError, isLoading: isUpdating }] = useAuthLoginUserMutation();
  const [formData, setFormData] = React.useState({
    email: '',
    currentPassword: '',
  });
  const [errors, setErrors] = React.useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email обязателен';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Введите корректный email';
    }

    if (!formData.password) {
      newErrors.password = 'Пароль обязателен';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Пароль должен быть не менее 6 символов';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (validateForm()) return;
    login(formData);
  };

  React.useEffect(() => {
    if (isSuccess) {
      toast.success('Вы зашли в систему', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      navigate('/');
    }
    if (isError) {
      toast.error('Ошибка входа, проверьте введенную почту и пароль', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  }, [isError, isSuccess]);

  return (
    <section>
      <div className="login__container">
        <div className={cl.loginInner}>
          <form className={cl.loginForm} onSubmit={(e) => handleLogin(e)}>
            <h1 className="authTitle">ВХОД</h1>
            <div className="inputsWrapper">
              {loginData.map((item) => {
                return (
                  <AuthInput
                    key={item.name}
                    {...item}
                    isRequire
                    error={errors[item.name]}
                    onChange={(e) => handleInputChange(e)}
                  />
                );
              })}
            </div>
            <div className={cl.loginLinks}>
              <NavLink to="/passwordRecovery" className="authLink">
                Забыли пароль?
              </NavLink>
              <NavLink to="/register" className="authLink">
                Нет аккаунта?
              </NavLink>
            </div>
            <AuthButton>ВОЙТИ</AuthButton>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
