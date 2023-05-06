import style from './Timeline.module.css';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useEffect, useState } from 'react';

const RightTimeline = ({
  startDate,
  endDate,
  position,
  institution,
  description,
  type,
  currentJob,
  employmentType,
  ...props
}) => {
  const [render, setRender] = useState(false);
  useEffect(() => {
    setRender(true);
  }, []);
  return (
    <div className={style['timeline-right-container']}>
      <div data-aos="fade-up" className={style['timeline-right-ruler-layout']}>
        <div className={style['timeline-right-ruler-inner']}>
          <div className={style['timeline-right-ruler']}></div>
        </div>
        <div className={style['timeline-right-ruler-bullet']}></div>
      </div>
      <div data-aos="zoom-in-left" className={style['timeline-right-layout']}>
        <h3 className={style['timeline-content-header']}>{position ? `${position} - ${institution}` : institution}</h3>
        <p className={style['timeline-content-date']}>
          {employmentType ? <span className={style['timeline-content-employment-type']}>{employmentType} · </span> : ''}
          {moment(startDate).format('MMMM-YYYY')} - {currentJob ? 'Present ' : moment(endDate).format('MMMM-YYYY')}
        </p>
        {render ? (
          <p className={style['timeline-content-description']} dangerouslySetInnerHTML={{ __html: description }}></p>
        ) : (
          <p className={style['timeline-content-description']}>{description}</p>
        )}
        <span className={style['timeline-content-type']}>{type}</span>
      </div>
    </div>
  );
};

RightTimeline.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  description: PropTypes.string,
  type: PropTypes.string.isRequired,
  currentJob: PropTypes.bool.isRequired,
  employmentType: PropTypes.string,
};

RightTimeline.defaultProps = {
  currentJob: false,
};

export default RightTimeline;
