import style from './Carousel.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types';

const Carousel = ({ children, config, className, ...props }) => {
  return (
    <Slider className={className} {...config}>
      {children}
    </Slider>
  );
};

Carousel.propTypes = {
  className: PropTypes.string,
  config: PropTypes.object.isRequired,
};

export default Carousel;
