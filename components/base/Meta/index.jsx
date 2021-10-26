import Head from 'next/head';
import { detect } from 'detect-browser';
import style from './Meta.module.css';
import { useEffect, useState } from 'react';

const Meta = () => {
  const [support, setSupport] = useState(true);
  useEffect(() => {
    const browser = detect();
    if (browser.name === 'ie') {
      setSupport(false);
    }
    setTimeout(() => {
      setSupport(true);
    }, 5000);
  }, []);
  return (
    <>
      {support === false && (
        <div data-aos="fade-left" className={style['alert-not-support']}>
          <div>
            Please open it with Chrome, Firefox, Opera and Microsoft Edge browsers. Our website does not fully support
            internet explorer browser
          </div>
          <i className="fas fa-times" onClick={() => setSupport(true)}></i>
        </div>
      )}
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
        />
        <meta
          name="description"
          content="Arya Irama Wahono is a full stack web developer who always likes to experiment and never gives up."
        />
        <meta name="robots" content="index, follow" />
        <title>Arya Irama Wahono</title>
      </Head>
    </>
  );
};

export default Meta;
