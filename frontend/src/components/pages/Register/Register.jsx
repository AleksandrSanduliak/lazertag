import cn from 'classnames';
import AuthButton from 'components/common/auth/button/AuthButton';
import AuthInput from 'components/common/auth/input/AuthInput';
import React from 'react';
import { NavLink, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { useAuthRegisterUserMutation } from 'store/api/authApi';
import useMediaQuery from 'utils/hooks/useMediaQuery';
import cl from './Register.module.scss';

const registerDataForLaptop = [
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
    type: 'date',
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

const registerDataForPhone = [
  {
    name: 'name',
    type: 'text',
    placeholder: 'Имя',
  },
  {
    name: 'email',
    type: 'Email',
    placeholder: 'Email',
  },
  {
    name: 'surname',
    type: 'text',
    placeholder: 'Фамилия',
  },
  {
    name: 'phone',
    type: 'text',
    placeholder: 'Телефон',
  },
  {
    name: 'country',
    type: 'text',
    placeholder: 'Страна',
  },
  {
    name: 'password',
    type: 'passoword',
    placeholder: 'Пароль',
  },
  {
    name: 'locality',
    type: 'type',
    placeholder: 'Населённый пункт',
  },
  {
    name: 'confirmPassword',
    type: 'passoword',
    placeholder: 'Повторите пароль',
  },
  {
    name: 'dateBirth',
    type: 'date',
  },
];

const Register = () => {
  const [register, { isSuccess, isError, isLoading: isUpdating }] = useAuthRegisterUserMutation();
  const [isChecked, setIsChecked] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const navigate = useNavigate();
  const [inputValues, setInputValues] = React.useState({
    name: '',
    email: '',
    surname: '',
    phone: '',
    country: '',
    password: '',
    locality: '',
    confirmPassword: '',
    dateBirth: '',
  });
  console.log('inputValues', inputValues);
  React.useEffect(() => {
    if (isError) alert('Ошибка регистрации');
    if (isSuccess) {
      alert('Регистрация прошла успешно');
      navigate('/login');
    }
  }, [isSuccess, isError]);

  const isLaptop = useMediaQuery(1200);
  const registerData = isLaptop ? registerDataForLaptop : registerDataForPhone;

  const validationRules = {
    name: (value) => {
      if (value.length < 2) {
        return 'Имя должно содержать не менее 2 символов';
      }
      return '';
    },
    surname: (value) => {
      if (value.length < 2) {
        return 'Фамилия должна содержать не менее 2 символов';
      }
      return '';
    },
    email: (value) => {
      if (!/\S+@\S+\.\S+/.test(value)) {
        return 'Неверный формат email';
      }
      return '';
    },
    phone: (value) => {
      const phonePattern = /^\+?[0-9]{10,15}$/;
      if (!phonePattern.test(value)) {
        return 'Телефон содержит 10-15 цифр, начиная с + при необходимости';
      }
      return '';
    },
    country: (value) => {
      if (value.length < 2) {
        return 'Страна должна содержать не менее 2 символов';
      }
      return '';
    },
    password: (value) => {
      if (value.length < 6) {
        return 'Пароль должен содержать не менее 6 символов';
      }
      return '';
    },
    confirmPassword: (value) => {
      if (value !== inputValues.password) {
        return 'Пароли не совпадают';
      }
      return '';
    },
    locality: (value) => {
      if (value.length < 2) {
        return 'Населенный пункт должен содержать не менее 2 символов';
      }
      return '';
    },
    dateBirth: (value) => {
      if (!value) {
        return 'Дата рождения обязательна';
      }
      return '';
    },
  };

  const validateField = (name, value) => {
    const error = validationRules[name] ? validationRules[name](value) : '';
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    if (!isSubmitted) return;
    validateField(name, value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();

    if (!isSubmitted) setIsSubmitted(true);

    if (!isChecked) return alert('Подтвердите согласие на обработку персональных данных');

    const newErrors = {};
    let isValid = true;

    Object.keys(inputValues).forEach((key) => {
      const error = validationRules[key] ? validationRules[key](inputValues[key]) : '';
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);

    if (!isValid) return;
    const formatter = new Intl.DateTimeFormat('ru');
    const formatDateToRu = formatter.format(new Date(inputValues.dateBirth));
    console.log(
      'formatter.format(inputValues.dateBirth)',
      formatter.format(new Date(inputValues.dateBirth)),
    );
    const formatValues = {
      ...inputValues,
      dateBirth: formatDateToRu,
    };
    console.log('formatValues', formatValues);
    register(formatValues);
  };

  React.useEffect(() => {
    if (isError) {
      toast.error('Ошибка регистрации', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }

    if (isSuccess) {
      toast.success('Вы успешно зарегистрировались, войдите в систему.', {
        position: 'top-right',
        autoClose: 5000,
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
    <div className={cl.register}>
      <div className="register__container">
        <div className={cl.registerInner}>
          <form className={cl.registerForm} onSubmit={(e) => handleRegistration(e)}>
            <h1 className="authTitle">РЕГИСТРАЦИЯ</h1>
            <div className={cl.registerInputsWrapper}>
              {registerData.map((item) => {
                return (
                  <AuthInput
                    key={item.name}
                    {...item}
                    isRequire
                    onChange={(e) => handleInputChange(e)}
                    error={errors[item.name]}
                  />
                );
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
              <AuthButton type="submit">ЗАРЕГИСТРИРОВАТЬСЯ</AuthButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
