/* eslint-disable @next/next/no-img-element */
import Aos from 'aos';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import style from './About.module.css';

const About = ({ text, ...props }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className={style['about-grid-layout']}>
      <div data-aos="zoom-in-right" className={style['about-left-content']}>
        <img src="/assets/ilustrations/about.svg" className="h-72 w-96" alt="ilustration-about-me" />
      </div>
      <div data-aos="zoom-in-left" className={style['about-right-content']}>
        <p className={style['about-header']}>About Me</p>
        <p className={style['about-content']}>{text}</p>
      </div>
    </div>
  );
};

About.propTypes = {
  text: PropTypes.string.isRequired,
};

export default About;
