import { LayoutPrimary, About } from '../components/module';
import PropTypes from 'prop-types';
import Aos from 'aos';
import { useEffect } from 'react';

const HomeView = ({ name, job, avatar, phoneNumber, email, address, contacts, about, ...props }) => {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 200 });
    window.addEventListener('scroll', () => Aos.refresh());
    return () => {
      window.removeEventListener('scroll', () => Aos.refresh());
    };
  }, []);
  return (
    <LayoutPrimary
      name={name}
      job={job}
      avatar={avatar}
      phoneNumber={phoneNumber}
      email={email}
      address={address}
      contacts={contacts}
    >
      <section id="about" className="container">
        <About text={about} />
      </section>
    </LayoutPrimary>
  );
};

HomeView.propTypes = {
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
  contacts: PropTypes.array.isRequired,
  about: PropTypes.string.isRequired,
};

export default HomeView;
