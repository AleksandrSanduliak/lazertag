import cn from 'classnames';
import React from 'react';
import cl from './AuthInput.module.scss';

const AuthInput = ({ placeholder, type, name, isRequire, error, ...props }) => {
  const [isLabelVisible, setIsLabelVisible] = React.useState(true);
  const inputRef = React.useRef(null);

  const handleLabelClick = () => {
    setIsLabelVisible(false);
  };

  const handleClickOutside = (event) => {
    if (inputRef.current.value) return;
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setIsLabelVisible(true);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <label htmlFor={name} className={cl.inputWrapper}>
      {error && <span className={cn('errorStatus', cl.errorStatus)}>{error}</span>}
      <input
        name={name}
        type={type}
        className={cl.authInput}
        required
        ref={inputRef}
        onClick={handleLabelClick}
        onFocus={() => setIsLabelVisible(false)}
        onBlur={() => {
          if (inputRef.current.value) return;
          setIsLabelVisible(true);
        }}
        {...props}
      />

      <span className={cl.placeholder}>
        {isLabelVisible && (
          <>
            {placeholder}
            {placeholder && isRequire && <span className={cl.requiredStar}>*</span>}
          </>
        )}
      </span>
    </label>
  );
};

export default AuthInput;
