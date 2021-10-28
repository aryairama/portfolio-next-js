import style from './Footer.module.css';
import { ListIconContactContainer, ListIconContact } from '../../base';
import PropTypes from 'prop-types';

const Footer = ({ contacts, ...props }) => {
  return (
    <div className={style['footer']}>
      <div className={style['footer-layout']}>
        <i onClick={() => window.scrollTo(0, 0)} className={`${style['footer-to-header']} fas fa-angle-double-up`}></i>
        <ListIconContactContainer className="justify-center">
          {contacts?.map((contact, index) => (
            <ListIconContact type="footer" key={index} iconClassName={contact.icon_class_name} url={contact.url} />
          ))}
        </ListIconContactContainer>
      </div>
      <hr className={style['footer-divide']} />
      <div className={style['footer-text-copyright']}>Arya Irama Wahono&copy;2021</div>
    </div>
  );
};

Footer.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default Footer;
