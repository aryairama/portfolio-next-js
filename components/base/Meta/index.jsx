import Head from 'next/head';
import { useEffect } from 'react';

const Meta = () => {
  useEffect(() => {
    document.body.classList.add('overflow-x-hidden');
  }, []);
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1 maximum-scale=1,0, user-scalable=no" />
      <meta
        name="description"
        content="Arya Irama Wahono is a full stack web developer who always likes to experiment and never gives up."
      />
      <meta name="robots" content="index, follow" />
      <title>Arya Irama Wahono</title>
    </Head>
  );
};

export default Meta;
