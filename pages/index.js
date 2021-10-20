import HomeView from '../views/HomeView';

export default function Home({ name, job, avatar, phoneNumber, email, address }) {
  return <HomeView name={name} job={job} avatar={avatar} phoneNumber={phoneNumber} email={email} address={address} />;
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
    },
  };
}
