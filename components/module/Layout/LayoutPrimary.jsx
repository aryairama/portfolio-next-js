import { Navbar, Header } from '../';
import { useRef } from 'react';
import PropTypes from 'prop-types';

const LayoutPrimary = (props) => {
  const sectionHeader = useRef(null);
  return (
    <>
      <Navbar sectionHeader={sectionHeader} />
      <section id="header" ref={sectionHeader}>
        <Header name={props.name} job={props.job} avatar={props.avatar} />
      </section>
      {props.children}
    </>
  );
};

LayoutPrimary.propTypes = {
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default LayoutPrimary;
