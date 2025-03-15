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
                'a Quant Developer.',
                'a Fullstack Developer.',
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
              title="Quantitative Strategy Developer"
              subtitle="Quantumcona · Full-time"
              date="Mar 2025 - Present"
              description={[
                "Develop and backtest quantitative trading strategies for global markets from scratch.",
                "Design and implement robust workflows and data pipelines to support strategy development and analysis.",
                "Collaborate with cross-functional teams to integrate advanced quantitative research and data science methodologies.",
                "Continuously optimize strategies using performance metrics and market insights.",
                "Conduct research on market trends and emerging technologies to improve strategies and processes."
              ]}
            />

            <WorkElement
              title="Software Developer Intern"
              subtitle="Appropriate Tech Solutions · Internship"
              date="Jan 2025 - Feb 2025"
              description={[
                "Designed and implemented the company's official website.",
                "Created an administrative panel enabling dynamic content management.",
                "Implemented secure authentication and content management features.",
                "Participated in the development of warehouse management solutions.",
                "Gained hands-on experience with various enterprise platforms: Oracle APEX, Odoo ERP, Firebase, and MERN stack."
              ]}
            />

            <WorkElement
              title="Contributor"
              subtitle="Timechain Labs · Full-time"
              date="May 2024 - Jul 2024"
              description={[
                "Contributed to open-source projects, enhancing functionality and fixing bugs.",
                "Collaborated with a team of developers to improve code quality and performance."
              ]}
            />

            <WorkElement
              title="Intern"
              subtitle="TinkerHub · Internship"
              date="Apr 2024 - Jun 2024"
              description={[
                "Contributed to open-source projects, enhancing functionality and fixing bugs.",
                "Collaborated with a team of developers to improve code quality and performance."
              ]}
            />

            <WorkElement
              title="Website and Content Developer"
              subtitle="Spotlight · Full-time"
              date="Feb 2023 - Nov 2023"
              description={[
                "Managed and developed the organization's website, resulting in a 25% increase in user retention.",
                "Implemented chatrooms, enhancing user interaction and satisfaction."
              ]}
            />

            <WorkElement
              title="Frontend Developer Trainee"
              subtitle="mark-P · Apprenticeship"
              date="Dec 2022 - Apr 2023"
              description={[
                "Explored and solved various backend challenges, improving coding proficiency.",
                "Collaborated with team members on projects, enhancing team efficiency and product quality."
              ]}
            />

            <EducationElement
              title="B.Tech. Information Technology"
              subtitle="Cochin University of Science and Technology"
              date="2022 - 2026"
              description={["Currently in the fourth semester."]}
            />

          </VerticalTimeline>
        </Container>
      </Container>
    </>
  );
}

export default About;