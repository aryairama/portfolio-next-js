/* eslint-disable @next/next/no-img-element */
import style from './TextIconContact.module.css';
import PropTypes from 'prop-types';

const TextIconContact = ({ icon, url, ...props }) => {
  return (
    <div className={style['text-contact-container']} onClick={() => window.open(url)}>
      <img className={style['text-contact-icon']} src={icon} alt="text-contact" />
      <div className="text-sm">{props.children}</div>
    </div>
  );
};

TextIconContact.propTypes = {
  icon: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default TextIconContact;
