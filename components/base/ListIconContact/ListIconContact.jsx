import style from './ListIconContact.module.css';
import PropTypes from 'prop-types';

const ListIconContact = ({ url, iconClassName }) => {
  return (
    <div className={style['list-icon-contact']} onClick={() => window.open(url)}>
      <i className={`${iconClassName} ${style['list-icon-contact-icon']}`}></i>
    </div>
  );
};

ListIconContact.propTypes = {
  url: PropTypes.string.isRequired,
  iconClassName: PropTypes.string.isRequired,
};

export default ListIconContact;
