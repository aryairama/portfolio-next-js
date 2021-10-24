import style from './ListIconContact.module.css';
import PropTypes from 'prop-types';

const ListIconContactContainer = ({ children, className, ...props }) => {
  return (
    <div {...props} className={`${style['list-icon-contact-container']} ${className}`}>
      {children}
    </div>
  );
};

ListIconContactContainer.propTypes = {
  className: PropTypes.string,
};

export default ListIconContactContainer;
