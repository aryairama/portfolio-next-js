/* eslint-disable @next/next/no-img-element */
import style from './Card.module.css';
import PropTypes from 'prop-types';
import Router from 'next/router';

const Card = ({ image, shortDescription, title, skillAndPackage = [], typeUrl, url, preview, ...props }) => {
  return (
    <div {...props} className={style['card-layout']}>
      <div className={style['card-project']}>
        <img src={image} alt="card-img-project" className={style['card-img-project']} />
        <div className={style['card-project-body']}>
          <div className={style['card-title-project']}>{title}</div>
          <div className={style['card-short-description-project']}>{shortDescription}</div>
          <div className={style['card-skill-package-layout']}>
            {skillAndPackage.map((skill, index) => (
              <div key={index} className={style['card-skill-package']}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          if (preview) {
            if (typeUrl === 'external') {
              window.open(url);
            } else if (typeUrl === 'internal') {
              Router.push(url);
            }
          }
        }}
        className={`${!preview ? `cursor-default` : ''} ${style['card-preview']}`}
      >
        <div className={style['card-preview-layout']}>
          <i className={`fas fa-search ${style['card-preview-icon']}`}></i>
          <div className={style['card-preview-text']}>{preview ? `Preview` : 'No Preview'}</div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  skillAndPackage: PropTypes.array.isRequired,
  url: PropTypes.string.isRequired,
  typeUrl: PropTypes.oneOf(['external', 'internal']).isRequired,
  preview: PropTypes.bool.isRequired,
};

export default Card;
