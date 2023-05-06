import HomeView from '../views/HomeView';
import Aos from 'aos';
import { useEffect, useState, useRef } from 'react';
import { WrapperAos } from '../components/base';
import { sendContact } from '../redux/action/ContactAction';
import SimpleReactValidator from 'simple-react-validator';
import { useSelector } from 'react-redux';
import { resetFrom } from '../configs/SimpleReactValidator';

export default function Home({
  name,
  job,
  avatar,
  phoneNumber,
  email,
  address,
  contacts,
  about,
  skills,
  educationAndExperience,
  projects,
}) {
  const [forceUpdate, setForceUpdate] = useState(false);
  const validator = useRef(
    new SimpleReactValidator({ className: 'text-red-600 text-sm', autoForceUpdate: forceUpdate })
  );
  const contactInitialState = { subject: '', name: '', email: '', message: '' };
  const [contact, setContact] = useState(contactInitialState);
  const handlerContact = (e) => setContact((oldval) => ({ ...oldval, [e.target.name]: e.target.value }));
  const { loader } = useSelector((state) => state);
  const resetStateContact = () => {
    resetFrom(contactInitialState, setContact, validator);
    setForceUpdate(!forceUpdate);
  };
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 200 });
  }, []);
  return (
    <WrapperAos>
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
        educationAndExperience={educationAndExperience}
        projects={projects}
        sendContact={sendContact}
        contact={contact}
        handlerContact={handlerContact}
        validator={validator}
        resetStateContact={resetStateContact}
        loader={loader}
      />
    </WrapperAos>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      name: 'Arya Irama Wahono',
      job: 'Fullstack Web Developer',
      avatar: '/assets/profile/cv5_compress.jpg',
      phoneNumber: { url: 'https://wa.link/e85y2f', text: '+6285156081398' },
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
      educationAndExperience: [
        {
          institution: 'Papitupi Syariah',
          position: 'Frontend Website Developer',
          description:
            '<p><strong>-</strong> Develop Signer Service to support multiple signer options, stamp and show qrcode<br><strong>- </strong>Develop and integrate Rest Api with Frontend Web Transactional Financing v2<br><strong>-</strong> Web Slicing and Rest Api Transactional Financing v1 Integration with React js and Tailwind css<br><strong>- </strong>Changing the appearance of the Lender web according to the design of the ui/ux using Bootstrap 4<br><strong>-</strong> Adding/integrating Signer Service on web Lender using PHP laravel<br><strong>-</strong> Create Signer Service with team using Express js and TypeScript<br><strong>-</strong> Developing a Web Backoffice for the purposes of cooperation between Bank Jago, Bank Permata and Alva Motor for electric motorbike financing products and employee benefits.</p>',
          startDate: '2021-11-15T10:00:00.000Z',
          endDate: '2021-11-15T10:00:00.000Z',
          type: 'experience',
          employmentType: 'Full-time',
          currentJob: true,
        },
        {
          institution: 'Arkademy Tech Academy',
          startDate: '2021-06-23T17:00:00.000Z',
          position: 'Fullstack Website Developer',
          endDate: '2021-09-22T10:00:00.000Z',
          description:
            'Graduated from Bootcamp Arcademy for Full Stack Web Developer program using javascript language. Have expertise in JavaScript, React Js, Next Js, Express Js, Tailwind and MySQL. Experience working in a team as a project leader and has completed 5 SPA-based web site application projects',
          type: 'education',
        },
        {
          institution: 'PT Jasa Raharja',
          position: 'Frontend Website Developer',
          description:
            '<p><strong>-</strong> Slicing the JRKU Mudik Frontend according to the design from ui/ux using React js and Bootstrap 5. Integrate the Rest Api and participate in the operation of the JRKU Mudik website for monitoring until the mudik flow is complete. The JRKU Mudik application is a mobile sub application from JRku - Jasa Raharja which is used to get free homecoming tickets by train or bus transportation along with the terms and conditions that apply.</p><p><strong>-</strong> Slicing Frontend JR SPI according to design from ui/ux using React js, Tailwind CSS.</p>',
          startDate: '2020-12-15T10:00:00.000Z',
          endDate: '2021-04-15T10:00:00.000Z',
          type: 'experience',
          employmentType: 'Freelance',
        },
        {
          institution: 'District Education Office Branch Trenggalek',
          position: 'Fullstack Website Developer',
          description:
            'Build the entire SIMBKK website belonging to the District Education Office Branch Trenggalek using Laravel 6 and Bootstrap 4. Input more than 1000 data alumni of Trenggalek Regency Vocational High School. The SIMBKK\napplication is used for data recording and tracking of all alumni of the Trenggalek Regency Vocational High School.',
          startDate: '2020-11-10T17:00:00.000Z',
          endDate: '2020-12-15T10:00:00.000Z',
          type: 'experience',
          employmentType: 'Freelance',
        },
        {
          institution: 'CV.Energeek',
          position: 'IT Support',
          description:
            'Served as IT Support with several jobs, such as data entry on web applications developed by the company, recap of data management results from website or mobile applications in excel form, installation and assembling of company and client computers, and making personal BookStore applications as one of the results of work practices field in the company.',
          startDate: '2020-01-14T17:00:00.000Z',
          endDate: '2020-06-10T10:00:00.000Z',
          type: 'experience',
          employmentType: 'Full-time',
        },
        {
          institution: 'SMKN 2 Trenggalek',
          startDate: '2018-07-16T17:00:00.000Z',
          position: 'Software Engineering',
          endDate: '2021-06-16T10:00:00.000Z',
          description: '',
          type: 'education',
        },
        {
          institution: 'SMPN 1 POGALAN',
          startDate: '2008-07-13T17:00:00.000Z',
          position: '',
          endDate: '2018-05-27T10:00:00.000Z',
          description: '',
          type: 'education',
        },
        {
          institution: 'Madrasah Ibtidaiyah Nuruzh Zholam',
          startDate: '2008-07-13T17:00:00.000Z',
          position: '',
          endDate: '2015-06-19T10:00:00.000Z',
          description: '',
          type: 'education',
        },
      ],
      projects: [
        {
          image: '/assets/projects/tokoku.png',
          title: 'TokoKu',
          short_description: 'Fashion e-commerce that supports multi-seller.',
          skill_and_package: ['React Js', 'Bootstrap 5', 'Express Js', 'MySQL', 'Redux'],
          type_url: 'external',
          url: 'https://github.com/aryairama/arkademy-react-TokoKu',
          preview: true,
        },
        {
          image: '/assets/projects/zwallet.png',
          title: 'Zwallet',
          short_description: 'A financial application that already has a top up feature with a payment gateway.',
          skill_and_package: ['React Js', 'Bootstrap 5', 'Express Js', 'MySQL', 'Redux'],
          type_url: 'external',
          url: 'https://github.com/aryairama/zwallet-react',
          preview: true,
        },
        {
          image: '/assets/projects/vehicle_rental.png',
          title: 'Vehicle Rental',
          short_description: 'Vehicle rental app for bicycles, motorbikes and cars.',
          skill_and_package: ['Next Js', 'Tailwind', 'Express Js', 'MySQL', 'Redux'],
          type_url: 'external',
          url: 'https://github.com/aryairama/next-vehicle-rental',
          preview: true,
        },
        {
          image: '/assets/projects/telegram.png',
          title: 'Telegram Clone',
          short_description: 'Websocket-based realtime chat application.',
          skill_and_package: ['Next Js', 'Tailwind', 'Express Js', 'MySQL', 'Redux', 'Socket.IO'],
          type_url: 'external',
          url: 'https://github.com/aryairama/telegram-next-js',
          preview: true,
        },
        {
          image: '/assets/projects/coffee_shop.png',
          title: 'Coffee Shop',
          short_description: 'A cafe management application that sells food that is usually found in cafes.',
          skill_and_package: ['Next Js', 'Styled components', 'Express Js', 'MySQL', 'Redux'],
          type_url: 'external',
          url: 'https://github.com/aryairama/coffe-shop-next',
          preview: true,
        },
        {
          image: '/assets/projects/simbkk.png',
          title: 'Simbkk',
          short_description: 'Application for recording and monitoring alumni of all vocational schools in Trenggalek.',
          skill_and_package: ['Laravel 6', 'Bootstrap 4', 'Mysql'],
          type_url: 'external',
          url: 'https://github.com/aryairama/SIMBKK',
          preview: false,
        },
      ],
    },
  };
}
