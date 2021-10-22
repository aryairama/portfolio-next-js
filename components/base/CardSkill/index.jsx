import style from './CardSkill.module.css';
import PropTypes from 'prop-types';

const CardSkill = ({ iconClassName, title, ...props }) => {
  return (
    <div className={style['card-skill-container']}>
      <i className={`${iconClassName} ${style['card-skill-icon']}`}></i>
      <p className={style['card-skill-title']}>{title}</p>
    </div>
  );
};

CardSkill.propTypes = {
  iconClassName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CardSkill;
