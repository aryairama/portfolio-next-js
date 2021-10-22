import style from './Timeline.module.css';
import PropTypes from 'prop-types';

const TimelineContainer = ({ className, children }) => {
  return <div className={`${style['timeline-container']} ${className}`}>{children}</div>;
};

TimelineContainer.propTypes = {
  className: PropTypes.string,
};

export default TimelineContainer;
