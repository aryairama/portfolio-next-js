import { LayoutPrimary, About, Carousel } from '../../components/module';
import { configSkillsCarousel } from '../../configs/Carousel';
import { CardSkill } from '../../components/base';
import PropTypes from 'prop-types';
import style from './Home.module.css';

const HomeView = ({ name, job, avatar, phoneNumber, email, address, contacts, about, skills, ...props }) => {
  return (
    <LayoutPrimary
      name={name}
      job={job}
      avatar={avatar}
      phoneNumber={phoneNumber}
      email={email}
      address={address}
      contacts={contacts}
    >
      <section id="about" className={style['about-me-container']}>
        <About text={about} />
      </section>
      <section data-aos="fade-up" data-aos-anchor-placement="center-bottom" id="skills" className={style['skills-bg']}>
        <div className={style['skills-container']}>
          <p className={style['skills-header']}>Skills</p>
          <Carousel className={style['carousel-skill']} config={configSkillsCarousel}>
            {skills?.map((skill, index) => (
              <CardSkill iconClassName={skill.icon_class_name} title={skill.title} key={index} />
            ))}
          </Carousel>
        </div>
      </section>
    </LayoutPrimary>
  );
};

HomeView.propTypes = {
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
  about: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
};

export default HomeView;
