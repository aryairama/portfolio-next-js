import { LayoutPrimary, About, Carousel } from '../../components/module';
import { configSkillsCarousel } from '../../configs/Carousel';
import {
  CardSkill,
  TimelineContainer,
  LeftTimeline,
  RightTimeline,
  CardProjectContainer,
  Card,
  InputContact,
  TextareaContact,
  Button,
  Tilt,
} from '../../components/base';
import PropTypes from 'prop-types';
import style from './Home.module.css';
import React from 'react';

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
  projects,
  sendContact,
  contact,
  handlerContact,
  validator,
  loader,
  resetStateContact,
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
        <Tilt positionDivider="top-right" />
        <div className={style['skills-container']}>
          <p data-aos="fade-left" className={style['skills-header']}>
            Skills
          </p>
          <Carousel className={style['carousel-skill']} config={configSkillsCarousel}>
            {skills?.map((skill, index) => (
              <CardSkill iconClassName={skill.icon_class_name} title={skill.title} key={index} />
            ))}
          </Carousel>
        </div>
      </section>
      <section id="education_experience" className={style['education-experience']}>
        <Tilt positionDivider="top-right" colorType="grey" />
        <Tilt positionDivider="bottom-left" colorType="grey" />
        {/* <div className={style['education-experience-mask']} /> */}
        <div data-aos="fade-up" className={style['education-experience-container']}>
          <p data-aos="fade-right" className={style['education-experience-header']}>
            Education & Experience
          </p>
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
      <section id="project" className={style['project-bg']}>
        <div data-aos="fade-up" className={style['project-container']}>
          <p data-aos="fade-left" className={style['project-header']}>
            Projects
          </p>
          <CardProjectContainer>
            {projects?.map((project, index) => (
              <Card
                key={index}
                image={project.image}
                title={project.title}
                shortDescription={project.short_description}
                skillAndPackage={project.skill_and_package}
                typeUrl={project.type_url}
                preview={project.preview}
                url={project.url}
                data-aos="flip-down"
              ></Card>
            ))}
          </CardProjectContainer>
        </div>
        <div className={style['project-shape-divider']}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
              className={style['project-shape-fill']}
            ></path>
          </svg>
        </div>
      </section>
      <section data-aos="fade-up" id="contact" className={style['contact-container']}>
        <p data-aos="fade-right" className={style['contact-header']}>
          Contact
        </p>
        <div data-aos="fade-left" className={style['layout-form-contact-container']}>
          <div className={style['layout-form-box-icon']}>
            <i className={`fas fa-handshake ${style['layout-form-icon']}`}></i>
            <p className={style['layout-form-box-text']}>Thank You</p>
            <p className={style['layout-form-box-text-question']}>Do You Have Questions?</p>
          </div>
          <div className={style['layout-form-contact']}>
            <InputContact
              placeholder="Name"
              name="name"
              value={contact.name}
              onChange={handlerContact}
              onFocus={() => validator.current.showMessageFor('name')}
            >
              {validator.current.message('name', contact.name, `required|min:3`)}
            </InputContact>
            <InputContact
              placeholder="Subject"
              name="subject"
              value={contact.subject}
              onChange={handlerContact}
              onFocus={() => validator.current.showMessageFor('subject')}
            >
              {validator.current.message('subject', contact.subject, `required|min:3`)}
            </InputContact>
            <InputContact
              placeholder="Enter email"
              name="email"
              value={contact.email}
              onChange={handlerContact}
              onFocus={() => validator.current.showMessageFor('email')}
            >
              {validator.current.message('email', contact.email, 'required|email')}
            </InputContact>
            <TextareaContact
              placeholder="Your message"
              rows="5"
              name="message"
              value={contact.message}
              onChange={handlerContact}
              onFocus={() => validator.current.showMessageFor('message')}
            >
              {validator.current.message('message', contact.message, 'required|min:10')}
            </TextareaContact>
            <Button
              disabled={validator.current.allValid() ? (loader.waiting ? true : false) : true}
              onClick={() => sendContact(contact, resetStateContact)}
              type="primary"
              className="w-full py-3"
            >
              Submit
            </Button>
          </div>
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
  projects: PropTypes.array.isRequired,
};

export default HomeView;
