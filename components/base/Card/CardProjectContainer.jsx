import style from './Card.module.css';

const CardProjectContainer = ({ children }) => {
  return <div className={style['card-project-container']}>{children}</div>;
};

export default CardProjectContainer;
