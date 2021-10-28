import style from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ className, children, type, ...props }) => {
  let typeButton = style['button-primary'];
  if (type === 'primary') {
    typeButton = style['button-primary'];
  }
  return (
    <button className={`${style['button']} ${className} ${typeButton}`} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['primary']).isRequired,
};

export default Button;
