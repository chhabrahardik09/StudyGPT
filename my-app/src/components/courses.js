/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Card } from "antd";
import { Progress, Space, Tag } from "antd";
import axios from "axios";
const { Meta } = Card;


require("./courses.css");
export default function Courses() {
  axios.get('abcd.com').then((Response)=> 
  console
  )
  return (
    <div className="entirepage">
    <div className="coursesContainer">
      <a href="/coursePage">
        <Card
        id="course1"

          hoverable="true"
          style={{ width: 300, height: "20rem" }}
          cover={
            <img
            style={{ height: "10rem" }}
              alt="example"
              src="https://www.educative.io/v2api/collection/10370001/5577976380391424/image/4568887236755456"
            />
          }
          actions={[
            <Space wrap>
              <div className="tags1">
      <Tag id="tag1" color="success" padding="2rem">4 Modules</Tag>
      <Tag color="error">4 quizzes</Tag>
      <Tag color="geekblue">Beginner</Tag>
            </div>
            </Space>,
          ]}
        >
          <Meta
            align="center"
            //   avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
            title="Machine Learning"
            description="Where Machines are Smarter"
          />
        </Card>

        {/* COURSE2 -CLOUD COMPUTING */}
        
      </a>
      <a href="/coursePage2">  
        <Card
          hoverable="true"
          style={{ width: 300, height: "20rem" }}
          cover={
            <img
            style={{ height: "10rem" }}
              alt="example"
              src="https://cloudacademy.com/wp-content/uploads/2017/01/2022-10-14-Blog-Feature-What-is-Cloud-Computing-1-1200x620.png"
            />
          }
          actions={[
            <Space wrap>
              <div className="tags2">
      <Tag id="tag1" color="success" padding="2rem">4 Modules</Tag>
      <Tag color="error">4 quizzes</Tag>
      <Tag color="geekblue">Intermediate</Tag>
            </div>
            </Space>,
          ]}
        >
          <Meta
            align="center"
            //   avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
            title="Cloud Computing"
            description="Start your cloud journey"
          />
        </Card>
      </a>

    {/* Course3 Data Science */}
      <a href="/coursePage3">  
        <Card
          hoverable="true"
          style={{ width: 300, height: "20rem" }}
          cover={
            <img
            style={{ height: "10rem" }}
              alt="example"
              src="https://imageio.forbes.com/specials-images/imageserve/615a844b0e678d9d11c5fc26/The-5-Biggest-Data-Science-Trends-In-2022/960x0.jpg?format=jpg&width=960"
              
            />
          }
          actions={[
           <Space wrap>
            <div className="tags3">
            <Tag  color="success" >4 Modules</Tag>
            <Tag color="error">4 quizzes</Tag>
            <Tag color="geekblue">Beginner</Tag>
                  </div>
                    
          </Space>
          ]}
        >
          <Meta
            align="center"
            //   avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
            title="Data Science"
            description="Data is the new oil"
          />
          
        </Card>
      </a>

      

      {/* COURSE 4 CYBER SECURITY */}
    <a href="/coursePage4">  
        <Card
          hoverable="true"
          style={{ width: 300, height: "20rem", marginTop: "2rem" }}
          cover={
            <img
              alt="example"
              src="https://www.canterbury.ac.nz/its/cyber-security/CyberImage2.png"
              style={{ height: "10rem" }}
              
            />
          }
          actions={[
            <Space wrap>
            <div className="tags4">
      <Tag id="tag1" color="success" padding="2rem">4 Modules</Tag>
      <Tag color="error">4 quizzes</Tag>
      <Tag color="geekblue">Beginner</Tag>
            </div>
            </Space>,
          ]}
        >
          <Meta
            align="center"

            //   avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
            title="Cyber Security"
            description="Think before you click."
          />
        </Card>
      </a>


    <a href="/coursepage5">  
        <Card
          hoverable="true"
          style={{ width: 300, height: "20rem", marginTop: "2rem" }}
          cover={
            <img
              alt="example"
              src="https://assets.intersystems.com/dims4/default/12febb9/2147483647/strip/true/crop/780x422+0+0/resize/1560x844!/format/webp/quality/90/?url=http%3A%2F%2Finter-systems-brightspot.s3.amazonaws.com%2F26%2Fbd%2F6a6aa762425f87ad7d5c2fe65f8c%2Fawslogo-image.jpg"
              style={{ height: "10rem" }}
            />
          }
          actions={[
            <Space wrap>
              <div className="tags5">
      <Tag id="tag1" color="success" padding="2rem">4 Modules</Tag>
      <Tag color="error">4 quizzes</Tag>
      <Tag color="geekblue">Intermediate</Tag>
            </div>
            </Space>,
          ]}
        >
          <Meta
            align="center"
            //   avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
            title="AWS"
            description="Inspiring the World Forward"
          />
        </Card>
      </a>
    </div>
    
    </div>
  );
}
// map function in react 
