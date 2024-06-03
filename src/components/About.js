import { Container, Image, ListGroup } from 'react-bootstrap';
import Typed from 'react-typed';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const EducationElement = ({ title, subtitle, date, description }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--school"
    contentStyle={{ background: 'rgb(0, 51, 51)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(0, 51, 51)' }}
    date={date}
    dateClassName='glow'
    iconStyle={{ background: 'rgb(0, 51, 51)', color: '#fff' }}
    icon={<i className="fas fa-graduation-cap center-icon"></i>}
  >
    <h3 className="vertical-timeline-element-title glow">{title}</h3>
    <p className="vertical-timeline-element-subtitle">{subtitle}</p>
    <hr />
    {
      description.map((item) => (
        <p>{item}</p>
      ))
    }
  </VerticalTimelineElement>
);

const CertificationElement = ({ title, subtitle, date, description }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--school"
    contentStyle={{ background: 'rgb(102, 0, 0)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(102, 0, 0)' }}
    date={date}
    dateClassName='glow'
    iconStyle={{ background: 'rgb(102, 0, 0)', color: '#fff' }}
    icon={<i className="fas fa-scroll center-icon"></i>}
  >
    <h3 className="vertical-timeline-element-title glow">{title}</h3>
    <p className="vertical-timeline-element-subtitle">{subtitle}</p>
    <hr />
    {
      description.map((item) => (
        <p>{item}</p>
      ))
    }
  </VerticalTimelineElement>
);

const WorkElement = ({ title, subtitle, date, description }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--school"
    contentStyle={{ background: 'rgb(51, 51, 102)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(51, 51, 102)' }}
    date={date}
    dateClassName='glow'
    iconStyle={{ background: 'rgb(51, 51, 102)', color: '#fff' }}
    icon={<i className="fas fa-briefcase center-icon"></i>}
  >
    <h3 className="vertical-timeline-element-title glow">{title}</h3>
    <p className="vertical-timeline-element-subtitle">{subtitle}</p>
    <hr />
    {
      description.map((item) => (
        <p>{item}</p>
      ))
    }
  </VerticalTimelineElement>
);

const About = () => {
  return (
    <>
      <Container>
        <Container>
          
          <h1 className='glow'>About</h1>
          <div>
            <p>Hi, I'm Mohammed Sahal.</p>
            <p>I am <Typed
              strings={[
                'an Information Technology student.',
                'a Frontend Developer.',
                'a Grammar Nazi.',
                'a Polygot.',
                'a Creative Thinker.'
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop />
            </p>
          </div>
        </Container>
        <Container className="my-5">
          <h2 align="center" className='glow'>Media</h2>
          <hr />
          <div className="my-5">
            <p>Sometimes I write stuff.</p>
            <ListGroup a="ul">
              <li>
                <a href="./blog/#tate" target="_blank" rel="noreferrer">
                  Emory Andrew Tate III: Provoking Laughter Amidst the Theatrics of Exaggerated Masculinity
                </a>
              </li>
              <li>
                <a href="./blog/#terry" target="_blank" rel="noreferrer">
                  Terry Crews: Speaking Up
                </a>
              </li>
              <li>
                <a href="./blog/#manipur" target="_blank" rel="noreferrer">
                  Manipur is Burning                </a>
              </li>
              <li>
                <a href="./blog/#ripple" target="_blank" rel="noreferrer">
                  Exploring the longterm consequences of sexual abuse.                </a>
              </li>
              <li>
                <a href="./blog/#dalai" target="_blank" rel="noreferrer">
                  A greeting lost in translation, or, exploitation of authority?
                </a>           </li>
              <li>
                <a href="./blog/#bilkis" target="_blank" rel="noreferrer">
                  Bilkis Bano: How India Failed sexual abuse survivors                </a>
              </li>
            </ListGroup>
          </div>
        </Container>
        <Container className="my-5">
          <h2 align="center" className='glow'>Timeline</h2>
          <hr />
          <VerticalTimeline>

            <WorkElement
              title="Intern"
              subtitle="TinkerHub"
              date="2024"
              description={[
                "Joined TinkerHub as a Full Stack Developer Intern",
                "Developed and maintained the TinkerSpace's website from scratch, and publishing content."
              ]}
            />

            {/* <CertificationElement */}
            {/* // title="" */}
            {/* // subtitle="" */}
            {/* // date="" */}
            {/* // description={[""]} */}
            {/* // /> */}

            <WorkElement
              title="Intern"
              subtitle="Google Developer Students' Club, CUSAT"
              date="2023"
              description={[
                "Joined GDSC-CUSAT as an Intern."
              ]}
            />
            <WorkElement
              title="Website and Content Developer"
              subtitle="Spotlight India, Remote"
              date="2023"
              description={[
                "Assumed a managerial/developer role at an NGO",
                "Developed and maintained the organization's website from scratch, while also developing chatrooms for service users, and maintaining content."
              ]}
            />
            <WorkElement
              title="Frontend Developer Trainee"
              subtitle="mark-P, Kochi"
              date="2022"
              description={[
                "Interned at a college-incubated start-up",
                "Explored a variety of coding problems and frontend challenges."
              ]}
            />
            <EducationElement
              title="B.Tech. Information Technology"
              subtitle="Cochin University of Science and Technology"
              date="Future (2022 - 2026)"
              description={["Incoming undergraduate."]}
            />
            <EducationElement
              title="All India Senior School Certificate Exam"
              subtitle="Central Board of Secondary Education"
              date="2020 - 2022"
              description={[
                "Graduated from CBSE's AISSCE with 91% in Math."
              ]}
            />
          </VerticalTimeline>
        </Container>
      </Container>
    </>
  );
}

export default About