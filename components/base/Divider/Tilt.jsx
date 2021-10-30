import style from './Divider.module.css';
import PropTypes from 'prop-types';

const Tilt = ({ positionDivider, colorType, className, ...props }) => {
  let position = style['tilt-bottom'];
  let color = style['tilt-shape-fill-white'];
  if (positionDivider === 'bottom-left') {
    position = position = style['tilt-bottom-left'];
  } else if (positionDivider === 'top-right') {
    position = position = style['tilt-top-right'];
  }
  if (colorType === 'white') {
    color = style['tilt-shape-fill-white'];
  } else if (colorType === 'grey') {
    color = style['tilt-shape-fill-grey'];
  }
  return (
    <div className={`${position} ${className}`}>
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className={color}></path>
      </svg>
    </div>
  );
};

Tilt.propTypes = {
  positionDivider: PropTypes.oneOf(['top-right', 'bottom-left']),
  color: PropTypes.oneOf(['white', 'grey']),
  className: PropTypes.string,
};

export default Tilt;
