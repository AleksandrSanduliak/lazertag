import React from 'react';
import cl from './AuthInput.module.scss';

const AuthInput = ({ placeholder, type, name, isRequire, ...props }) => {
  const [isLabelVisible, setIsLabelVisible] = React.useState(true);
  const labelRef = React.useRef(null);

  const handleLabelClick = () => {
    setIsLabelVisible(false);
  };

  const handleClickOutside = (event) => {
    if (labelRef.current && !labelRef.current.contains(event.target)) {
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
      <input
        name={name}
        type={type}
        className={cl.authInput}
        required
        ref={labelRef}
        onClick={handleLabelClick}
        {...props}
      />
      {isLabelVisible && (
        <span className={cl.placeholder}>
          {placeholder}
          {isRequire && <span className={cl.requiredStar}>*</span>}
        </span>
      )}
    </label>
  );
};

export default AuthInput;
