import style from './Input.module.css';
import PropTypes from 'prop-types';

const InputContact = ({ classContainer, className, children, ...props }) => {
  return (
    <div className={`${style['input-contact-container']} ${classContainer}`}>
      <input className={`${style['input-contact']} ${className}`} {...props} />
      {children}
    </div>
  );
};

InputContact.propTypes = {
  classContainer: PropTypes.string,
  className: PropTypes.string,
};

export default InputContact;
