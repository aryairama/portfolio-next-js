/* eslint-disable @next/next/no-img-element */
import style from './Header.module.css';
import Particles from 'react-tsparticles';
import PropTypes from 'prop-types';
import { headerParticles } from '../../../configs/tsParticles';
import { TextIconContact, ListIconContactContainer, ListIconContact } from '../../base';

const Header = ({ name, job, avatar, phoneNumber, email, address, contacts }) => {
  return (
    <div className={style['header-container']}>
      <Particles options={headerParticles} id="headerParticles" className={style['header-particles']} />
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
