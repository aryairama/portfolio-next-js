import style from './ListIconContact.module.css';
import PropTypes from 'prop-types';

const ListIconContact = ({ url, iconClassName, type }) => {
  let typeList = style['list-icon-contact'];
  let styleIcon = style['list-icon-contact-icon'];
  if (type === 'footer') {
    typeList = style['list-icon-contact-footer'];
    styleIcon = style['list-icon-contact-icon-footer'];
  }
  return (
    <div className={typeList} onClick={() => window.open(url)}>
      <i className={`${iconClassName} ${styleIcon}`}></i>
    </div>
  );
};

ListIconContact.propTypes = {
  url: PropTypes.string.isRequired,
  iconClassName: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['header', 'footer']),
};

export default ListIconContact;
