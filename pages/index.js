import HomeView from '../views/HomeView';
import Aos from 'aos';
import { useEffect } from 'react';

export default function Home({ name, job, avatar, phoneNumber, email, address, contacts, about, skills }) {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 200 });
    window.addEventListener('scroll', () => Aos.refresh());
    return () => {
      window.removeEventListener('scroll', () => Aos.refresh());
    };
  }, []);
  return (
    <HomeView
      name={name}
      job={job}
      avatar={avatar}
      phoneNumber={phoneNumber}
      email={email}
      address={address}
      contacts={contacts}
      about={about}
      skills={skills}
    />
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      name: 'Arya Irama Wahono',
      job: 'Fullstack Web Developer',
      avatar: '/assets/profile/cv5_compress.jpg',
      phoneNumber: { url: 'https://wa.link/e85y2f', text: '+6285334016482' },
      email: { url: 'mailto:aryairama987@gmail.com', text: 'aryairama987@gmail.com' },
      address: { url: 'https://goo.gl/maps/25zim3tHTXvkvcTo7', text: 'Trenggalek, Jawa Timur, Indonesia' },
      about:
        'A Full Stack Website Developer who has experience developing website applications such as TokoKu, Zwallet, and Vehicle Rental using React JS, Express JS, Next JS, Bootstrap, Tailwind and several other applications. Able to work in a team, can learn quickly, always updated on technological developments such as programming languages for the web, and has a great interest in Back End Development.',
      contacts: [
        {
          url: 'https://github.com/aryairama',
          icon_class_name: 'fab fa-github',
        },
        {
          url: 'https://www.linkedin.com/in/aryairamawahono',
          icon_class_name: 'fab fa-linkedin',
        },
        {
          url: 'https://wa.link/e85y2f',
          icon_class_name: 'fab fa-whatsapp',
        },
        {
          url: 'https://t.me/aryairamawahono',
          icon_class_name: 'fab fa-telegram-plane',
        },
        {
          url: 'https://discord.com/users/463194642469486614',
          icon_class_name: 'fab fa-discord',
        },
        {
          url: 'https://www.twitch.tv/ax404',
          icon_class_name: 'fab fa-twitch',
        },
      ],
      skills: [
        {
          title: 'Node Js',
          icon_class_name: 'devicon-nodejs-plain colored',
        },
        {
          title: 'React Js',
          icon_class_name: 'devicon-react-original colored',
        },
        {
          title: 'Next Js',
          icon_class_name: 'devicon-nextjs-original colored',
        },
        {
          title: 'Express Js',
          icon_class_name: 'devicon-express-original colored',
        },
        {
          title: 'Vue Js',
          icon_class_name: 'devicon-vuejs-plain colored',
        },
        {
          title: 'Laravel',
          icon_class_name: 'devicon-laravel-plain colored',
        },
        {
          title: 'PHP',
          icon_class_name: 'devicon-php-plain colored',
        },
        {
          title: 'JavaScript',
          icon_class_name: 'devicon-javascript-plain colored',
        },
        {
          title: 'Bootstrap',
          icon_class_name: 'devicon-bootstrap-plain colored',
        },
        {
          title: 'Tailwind',
          icon_class_name: 'devicon-tailwindcss-plain colored',
        },
        {
          title: 'CSS',
          icon_class_name: 'devicon-css3-plain colored',
        },
        {
          title: 'HTML',
          icon_class_name: 'devicon-html5-plain colored',
        },
        {
          title: 'MySQL',
          icon_class_name: 'devicon-mysql-plain colored',
        },
        {
          title: 'Redux',
          icon_class_name: 'devicon-redux-original colored',
        },
        {
          title: 'Redis',
          icon_class_name: 'devicon-redis-plain colored',
        },
        {
          title: 'Git',
          icon_class_name: 'devicon-git-plain colored',
        },
      ],
    },
  };
}
