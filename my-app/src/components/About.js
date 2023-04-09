import { CheckCircleTwoTone, ClockCircleOutlined, HeartTwoTone, RocketOutlined } from '@ant-design/icons'
import { Row, Timeline } from 'antd'
import React from 'react'
import "./About.css";


function About() {
  return (
    <div>
      <div className="about">
        <h1>About StudyBot by LearnGPT</h1>
        <h6>The web app is a ChatBot that uses artificial intelligence to enhance the learning of different courses, such as machine learning, data science, and more. The ChatBot is designed to engage users in discussions about the course material, providing valuable insights and feedback to help them better understand and retain the information.</h6>
      <Row className='timeline' >
        <Timeline mode="alternate" >
          <Timeline.Item
            color="rgba(57, 84, 255, 1)"
            dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
          >
            <div>
              <span  className='timelineSpan'>Day 1:</span>
              <h1 className='timelineHeading'>Brainstorm and Ideation</h1>
              <h2 className='timelineSubheading'>
                Explored all possibilities of the given problem statements
                and my own interest in it.
              </h2>
            </div>
          </Timeline.Item>
          <Timeline.Item
            color="rgba(57, 84, 255, 1)"
            dot={
              <RocketOutlined
                style={{ fontSize: "16px" }}
                twoToneColor="rgba(57, 84, 255, 1)"
              />
            }
          >
            <div>
              <span className='timelineSpan'>Day 3:</span>
              <h1 className='timelineHeading'>Plan Prototype </h1>
              <h2 className='timelineSubheading'>
                Knowing the problem statement, ventured further into
                the details and requirements of this project
              </h2>
            </div>
          </Timeline.Item>
          <Timeline.Item
            color="rgba(57, 84, 255, 1)"
            dot={
              <HeartTwoTone
                style={{ fontSize: "16px" }}
                twoToneColor="rgba(57, 84, 255, 1)"
              />
            }
          >
            <div>
              <span className='timelineSpan'>Day 5:</span>
              <h1 className='timelineHeading'>Get Coding</h1>
              <h2 className='timelineSubheading'>
                From hashing out the boiler plate, designing the frontend to
                curating backend logic, figma and VSCode worked overtime.
              </h2>
            </div>
          </Timeline.Item>
          <Timeline.Item
            color="rgba(57, 84, 255, 1)"
            dot={
              <CheckCircleTwoTone
                style={{ fontSize: "16px" }}
                twoToneColor="rgba(57, 84, 255, 1)"
              />
            }
          >
            <div>
              <span className='timelineSpan'>Day 7:</span>
              <h1 className='timelineHeading'>Wrapping up</h1>
              <h2 className='timelineSubheading'>
                Errors and bugs were found and fixed in abundance, implemented
                further features and improved the user experience.
              </h2>
            </div>
          </Timeline.Item>
        </Timeline>
      </Row>
      </div>
    </div>
  )
}

export default About
