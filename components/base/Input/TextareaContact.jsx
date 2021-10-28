import style from './Input.module.css';
import PropTypes from 'prop-types';

const TextareaContact = ({ classContainer, className, children, ...props }) => {
  return (
    <div className={`${style['input-contact-container']} ${classContainer}`}>
      <textarea className={`${className} ${style['textarea-contact']}`} {...props} />
      {children}
    </div>
  );
};

TextareaContact.propTypes = {
  classContainer: PropTypes.string,
  className: PropTypes.string,
};

export default TextareaContact;
