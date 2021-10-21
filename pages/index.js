import HomeView from '../views/HomeView';

export default function Home({ name, job, avatar, phoneNumber, email, address, contacts }) {
  return (
    <HomeView
      name={name}
      job={job}
      avatar={avatar}
      phoneNumber={phoneNumber}
      email={email}
      address={address}
      contacts={contacts}
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
    },
  };
}
