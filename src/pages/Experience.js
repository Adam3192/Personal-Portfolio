import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@material-ui/icons/School'
import WorkIcon from '@material-ui/icons/Work'

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="March 2022 - January 2023"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          {' '}
          <h3 className="vertical-timeline-element-title">
            {' '}
            Bethel School of Technology, Online
          </h3>
          <p>Full Stack Web Developer Certification</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="January 2022 - present"
          iconStyle={{ background: '#e9d35b', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Software Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Alexander City, AL
          </h4>
          <p>
            Experience building projects with React, Node.js, JavaScript,
            TypeScript, MySQL Workbench, MongoDB, CSS, HTML
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2006 - March 2022"
          iconStyle={{ background: '#e9d35b', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Robot & PLC programmer - HMMA
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Montgomery, AL</h4>
          <p>Programming & maintenance of 17 Fanuc robots</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2004 - 2006"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Coastal Alabama Community College
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Associate's Degree
          </h4>

          <p> Electrical & Instrumentation Technology</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
