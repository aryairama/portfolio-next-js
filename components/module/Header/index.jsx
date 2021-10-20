/* eslint-disable @next/next/no-img-element */
import style from './Header.module.css';
import Particles from 'react-tsparticles';
import Aos from 'aos';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { TextIconContact } from '../../base';

const Header = ({ name, job, avatar }) => {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 200 });
  }, []);
  return (
    <div className={style['header-container']}>
      <Particles
        options={{
          fps_limit: 60,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onClick: { enable: true, mode: 'push' },
              onHover: { enable: true, mode: 'repulse' },
              resize: true,
            },
            modes: { push: { particles_nb: 4 }, repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: '#ffffff' },
            links: { color: '#ffffff', distance: 150, enable: true, opacity: 0.5, width: 1 },
            move: {
              bounce: false,
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 2,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 80 },
            opacity: { value: 0.5 },
            shape: { type: 'circle' },
            size: { random: true, value: 5 },
          },
          detectRetina: true,
        }}
        className={style['header-particles']}
      />
      <div className={style['header-content']}>
        <div data-aos="fade-right" className={style['header-content-left']}>
          <div className={style['header-content-name']}>{name}</div>
          <div className={style['header-content-job']}>{job}</div>
          <div className={style['header-content-text-contact']}>
            <TextIconContact icon="/assets/icons/whatsapp.svg" url="https://wa.link/e85y2f">
              +6285334016482
            </TextIconContact>
            <TextIconContact icon="/assets/icons/email.svg" url="mailto:aryairama987@gmail.com">
              aryairama987@gmail.com
            </TextIconContact>
            <TextIconContact icon="/assets/icons/address.svg" url="https://goo.gl/maps/25zim3tHTXvkvcTo7">
              Trenggalek, Jawa Timur, Indonesia
            </TextIconContact>
          </div>
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
};

export default Header;
