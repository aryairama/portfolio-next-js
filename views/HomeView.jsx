import { LayoutPrimary } from '../components/module';
import PropTypes from 'prop-types';

const HomeView = ({ name, job, avatar, phoneNumber, email, address, ...props }) => {
  return (
    <LayoutPrimary name={name} job={job} avatar={avatar} phoneNumber={phoneNumber} email={email} address={address}>
      <section id="about" className="container">
        <div className="min-h-screen w-full flex justify-center items-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, veniam? Sit maiores quaerat repellendus
          fuga saepe facilis, numquam, voluptatem voluptatum autem dolorum tenetur ipsam? Atque aut magnam ratione
          numquam voluptatibus.
        </div>
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
};

export default HomeView;
