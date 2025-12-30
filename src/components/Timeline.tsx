import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faTrophy, faUsers, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">Open Source Contributor</h3>
            <h4 className="vertical-timeline-element-subtitle">Holopin</h4>
            <p>
              Contributing to open source projects, collaborating with the developer community, and building innovative solutions through code contributions.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Ongoing"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">GitHub Open Source Projects</h3>
            <h4 className="vertical-timeline-element-subtitle">Various Projects</h4>
            <p>
              Actively contributing to multiple open source projects on GitHub, working on bug fixes, feature implementations, and code improvements.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Achievement"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faTrophy} />}
          >
            <h3 className="vertical-timeline-element-title">Google Cloud Arcade Winner</h3>
            <h4 className="vertical-timeline-element-subtitle">Novice Category - Cloud Development</h4>
            <p>
              Winner in the Google Cloud Arcade competition (Novice category) for cloud development using Looker Studio and Google Cloud Platform. Demonstrated expertise in data visualization and cloud-based solutions.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Various Events"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faUsers} />}
          >
            <h3 className="vertical-timeline-element-title">Hackathon Participant</h3>
            <h4 className="vertical-timeline-element-subtitle">Multiple Hackathons</h4>
            <p>
              Actively participating in various hackathons, collaborating with teams to build innovative solutions, solve real-world problems, and enhance technical skills through competitive programming and development challenges.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="College"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faUserTie} />}
          >
            <h3 className="vertical-timeline-element-title">Tech Core Member</h3>
            <h4 className="vertical-timeline-element-subtitle">NullPoint Club - KS Institute Of Technology</h4>
            <p>
              Core member of NullPoint club, organizing hackathon events, managing tech projects, and fostering a collaborative environment for technology enthusiasts at KS Institute Of Technology.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;