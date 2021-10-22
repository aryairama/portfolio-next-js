import style from './Timeline.module.css';
import PropTypes from 'prop-types';
import moment from 'moment';

const LeftTimeline = ({ startDate, endDate, position, institution, description, type, ...props }) => {
  return (
    <div className={style['timeline-left-container']}>
      <div data-aos="zoom-in-right" className={style['timeline-left-layout']}>
        <h3 className={style['timeline-content-header']}>{position ? `${position} - ${institution}` : institution}</h3>
        <p className={style['timeline-content-date']}>
          {moment(startDate).format('MMMM-YYYY')} - {moment(endDate).format('MMMM-YYYY')}
        </p>
        <p className={style['timeline-content-description']}>{description}</p>
        <span className={style['timeline-content-type']}>{type}</span>
      </div>
      <div data-aos="fade-up" className={style['timeline-left-ruler-layout']}>
        <div className={style['timeline-left-ruler-inner']}>
          <div className={style['timeline-left-ruler']}></div>
        </div>
        <div className={style['timeline-left-ruler-bullet']}></div>
      </div>
    </div>
  );
};

LeftTimeline.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  position: PropTypes.string,
  institution: PropTypes.string.isRequired,
  description: PropTypes.string,
  type: PropTypes.string.isRequired,
};

export default LeftTimeline;
