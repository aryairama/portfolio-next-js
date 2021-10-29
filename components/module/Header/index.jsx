/* eslint-disable @next/next/no-img-element */
import style from './Header.module.css';
import PropTypes from 'prop-types';
import { TextIconContact, ListIconContactContainer, ListIconContact } from '../../base';

const Header = ({ name, job, avatar, phoneNumber, email, address, contacts }) => {
  return (
    <div className={style['header-container']}>
      <div className={style['header-mask']} />
      <div className={style['header-content']}>
        <div className={style['header-content-left']}>
          <div
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-anchor="#header"
            className={style['header-content-name']}
          >
            {name}
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-anchor="#header"
            className={style['header-content-job']}
          >
            {job}
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="700"
            data-aos-anchor="#header"
            className={style['header-content-text-contact']}
          >
            <TextIconContact icon="/assets/icons/whatsapp.svg" url={phoneNumber.url}>
              {phoneNumber.text}
            </TextIconContact>
            <TextIconContact icon="/assets/icons/email.svg" url={email.url}>
              {email.text}
            </TextIconContact>
            <TextIconContact icon="/assets/icons/address.svg" url={address.url}>
              {address.text}
            </TextIconContact>
          </div>
          <ListIconContactContainer
            data-aos="fade-right"
            data-aos-delay="900"
            data-aos-anchor="#header"
            className="-ml-1"
          >
            {contacts?.map((contact, index) => (
              <ListIconContact key={index} iconClassName={contact.icon_class_name} url={contact.url} />
            ))}
          </ListIconContactContainer>
        </div>
        <div data-aos="fade-left" className={style['header-content-right']}>
          <div className={style['header-content-avatar-container']}>
            <img className={style['header-content-avatar']} src={avatar} alt="img-avatar" />
          </div>
        </div>
      </div>
      <div className={style['header-shape-divider']}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={style['header-shape-fill']}
          ></path>
        </svg>
      </div>
    </div>
  );
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  phoneNumber: PropTypes.shape({
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  email: PropTypes.shape({
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  address: PropTypes.shape({
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Header;
