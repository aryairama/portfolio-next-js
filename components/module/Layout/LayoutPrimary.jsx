import { Navbar, Header } from '../';
import { useRef } from 'react';
import PropTypes from 'prop-types';

const LayoutPrimary = (props) => {
  const sectionHeader = useRef(null);
  return (
    <>
      <Navbar sectionHeader={sectionHeader} />
      <section id="header" ref={sectionHeader}>
        <Header
          name={props.name}
          job={props.job}
          avatar={props.avatar}
          phoneNumber={props.phoneNumber}
          email={props.email}
          address={props.address}
          contacts={props.contacts}
        />
      </section>
      {props.children}
    </>
  );
};

LayoutPrimary.propTypes = {
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
};

export default LayoutPrimary;
