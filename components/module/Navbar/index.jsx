/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from 'react';
import style from './Navbar.module.css';
import PropTypes from 'prop-types';
import Router from 'next/router';

const Navbar = ({ sectionHeader, ...props }) => {
  const [show, setShow] = useState(false);
  const [navbarScroll, setNavbarScroll] = useState(false);
  const navbarRef = useRef(null);
  const onScroll = () => {
    if (sectionHeader.current && navbarRef.current) {
      if (window.pageYOffset >= navbarRef.current.offsetHeight / 2) {
        setNavbarScroll(true);
      } else if (window.pageYOffset + navbarRef.current.offsetHeight <= sectionHeader.current.offsetHeight) {
        setNavbarScroll(false);
      }
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return (
    <div
      ref={navbarRef}
      className={`${style.navbar} ${navbarScroll ? style['navbar-scroll'] : ''} ${show ? style['show-navbar'] : ''}`}
    >
      <div className={style['navbar-container']}>
        <div className={style['navbar-menu-left']}>
          <div className={style['text-brand']}>{props.textBrand}</div>
        </div>
        <div className={style['navbar-button']}>
          <button onClick={() => setShow(!show)}>
            <img src="/assets/icons/list.svg" alt="icon-list" className={style['navbar-list-icon']} />
          </button>
        </div>
        <div className={`${style['navbar-menu-right']} ${show ? style['show-navbar'] : ''}`}>
          <div className={style['navbar-menu']}>
            <div className={style['li-menu']}>
              <div onClick={() => Router.push('/')} className={style['li-menu-a']}>
                Home
              </div>
            </div>
            <div className={style['li-menu']}>
              <div onClick={() => Router.push('/jos')} className={style['li-menu-a']}>
                About
              </div>
            </div>
            <div className={style['li-menu']}>
              <div onClick={() => Router.push('/jos')} className={style['li-menu-a']}>
                Skills
              </div>
            </div>
            <div className={style['li-menu']}>
              <div onClick={() => Router.push('/jos')} className={style['li-menu-a']}>
                Projects
              </div>
            </div>
            <div className={style['li-menu']}>
              <div onClick={() => Router.push('/jos')} className={style['li-menu-a']}>
                Contact
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  textBrand: PropTypes.string,
};

export default Navbar;
