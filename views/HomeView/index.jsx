import { LayoutPrimary, About, Carousel } from '../../components/module';
import { configSkillsCarousel } from '../../configs/Carousel';
import { CardSkill, TimelineContainer, LeftTimeline, RightTimeline } from '../../components/base';
import PropTypes from 'prop-types';
import style from './Home.module.css';
import React from 'react';
import Particles from 'react-tsparticles';
import { educationParticles } from '../../configs/tsParticles';

const HomeView = ({
  name,
  job,
  avatar,
  phoneNumber,
  email,
  address,
  contacts,
  about,
  skills,
  educationAndExperience,
  ...props
}) => {
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
      <section data-aos="fade-up" data-aos-duration="1000" id="skills" className={style['skills-bg']}>
        <div className={style['skills-container']}>
          <p className={style['skills-header']}>Skills</p>
          <Carousel className={style['carousel-skill']} config={configSkillsCarousel}>
            {skills?.map((skill, index) => (
              <CardSkill iconClassName={skill.icon_class_name} title={skill.title} key={index} />
            ))}
          </Carousel>
        </div>
      </section>
      <section data-aos="fade-up" id="education_experience" className={style['education-experience']}>
        <Particles
          options={educationParticles}
          id="educationParticles"
          className={style['education-experience-particles']}
        />
        <div className={style['education-experience-container']}>
          <p className={style['education-experience-header']}>Education & Experience</p>
          <TimelineContainer className="mt-7">
            {educationAndExperience?.map((value, index) => (
              <React.Fragment key={index}>
                {value.type === 'education' ? (
                  <LeftTimeline
                    startDate={value.startDate}
                    endDate={value.endDate}
                    position={value.position}
                    institution={value.institution}
                    description={value.description}
                    type={value.type}
                  />
                ) : (
                  <RightTimeline
                    startDate={value.startDate}
                    endDate={value.endDate}
                    position={value.position}
                    institution={value.institution}
                    description={value.description}
                    type={value.type}
                  />
                )}
              </React.Fragment>
            ))}
          </TimelineContainer>
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
  educationAndExperience: PropTypes.array.isRequired,
};

export default HomeView;
