import React from "react";
import { Input, Button, Form,message,Alert } from "antd";

import { useState, useEffect } from "react";
import {
  MailOutlined,
  SettingOutlined,
  AppstoreOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
// require("./coursePage.css");
import {  } from "../src/components/coursePage.css";
require("dotenv").config();

const { Configuration, OpenAIApi } = require("openai");
const { TextArea } = Input;
// const [text, setText] = useState('')
// const getAPI = async () => {
//   console.log(process.env.OPENAI_API_KEY);
//   const configuration = new Configuration({
//     apiKey: "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",
//   });
//   const openai = new OpenAIApi(configuration);
//   const response = await openai.createCompletion({
//     model: "text-davinci-003",
//     prompt: "Intro to ML",
//     max_tokens: 1000,
//     temperature: 0,
//   }).then((response) =>{
//     console.log(response.data.choices[0].text)
//     setText(response.data.choices[0].text)
//   });
// };
export default function CoursePage3() {
  const [text, setText] = useState("");
  const [input, setInput] = useState("Intro to Data Science");
  const [tab, setTab] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  useEffect(() => {
    getAPI();
    setAnswer("")
  }, [input]);
  const getAPI = async () => {
    console.log(process.env.OPENAI_API_KEY);
    const configuration = new Configuration({
      apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);
    await openai
      .createCompletion({
        model: "text-davinci-003",
        prompt: input,
        max_tokens: 1000,
        temperature: 0,
      })
      .then((response) => {
        
        console.log(response.data.choices[0].text);
        setText(response.data.choices[0].text);
      });
  };

  const onClick = (e) => {
    if (e.key === "courseWork1") {
      setInput("Intro to Data Science");
      setTab("Course Work");
    } else if (e.key === "quiz1") {
      setInput("Ask me a question on Intro to Data Science");
      setTab("quiz1");

    } else if (e.key === "courseWork2") {
      setInput("Data Mining");
      setTab("courseWork2");
    } 
    else if(e.key === "quiz2"){
      setInput("Ask me a question on Data Mining");
      setTab("quiz2");
    } else if(e.key === "courseWork3"){
      setInput("Natural Language Processing");
      setTab("courseWork3");
    }else if(e.key === "quiz3"){
      setInput("Ask me a question on Natural Language Processing");
      setTab("quiz3");
    }else if(e.key === "courseWork4"){
      setInput("Computer Vision");
      setTab("courseWork4");
    }
    else if(e.key === "quiz4"){
      setInput("Ask me a question on Computer Vision");
      setTab("quiz4");
    }
    console.log("click ", e);
  };
  // const onChange = (e) => {
  //   console.log("Change:", e.target.value);
  // };
  const onClickSubmit = () => {
    const checkSatisfaction = async () => {
      const configuration = new Configuration({
        apiKey: "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",
      });
      const openai = new OpenAIApi(configuration);
      await openai
        .createCompletion({
          model: "text-davinci-003",
          prompt: `Is my answer - ${question} correct to following question: ${text}.`,
          max_tokens: 1000,
          temperature: 0,
        })
        .then((response) => {
          console.log("response", response.data.choices[0].text);
          setAnswer(response.data.choices[0].text);
          if (
            response.data.choices[0].text
              .replace(/\n/g, "")
              .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") === "Yes" ||
            response.data.choices[0].text
              .replace(/\n/g, "")
              .split(" ")[0]
              .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") === "Yes"
          ) {
            message.success(
              "Answer is satisfactory, you can move to the next module!"
            );
          } else if (
            response.data.choices[0].text
              .replace(/\n/g, "")
              .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") === "No" ||
            response.data.choices[0].text
              .replace(/\n/g, "")
              .split(" ")[0]
              .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") === "No"
          ) {
            message.error("Answer is unsatisfactory, redo the module!");
          }
        });
    };
    console.log("answer is" , answer)
    checkSatisfaction();
  };


  // const hide = () => {
  //    input ==="Quiz" ?
  //     <div className="textBox"></div>
  //   };

  return (
    <div className="coursePageContainer">
      <Menu
        onClick={onClick}
        style={{
          width: 256,
          height: "100vh",

        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />

      <div id="textArea">
        <h1>DATA SCIENCE</h1>
        <h3>{text}</h3>
        {tab === "quiz1" || tab === "quiz2" ||tab === "quiz3" || tab ==="quiz4" ? (
          <>
          <Form
          style={{width:'80%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',
          gap:'0.5rem'}}>
            <TextArea
              className="textBox"
              // id="tarea"
              onChange={
                (e)=>setQuestion(e.target.value)
              }
              style={{ height: 250 }}
              bordered='true'
              showCount    
              placeholder="Answer here"
            />
            <Button type="primary" htmlType="submit" style={{ width:'35%'}}
            onClick={onClickSubmit}>
              Submit
            </Button>
          </Form>
          {answer && answer.length != null ? (
              <Alert
              style={{
                width: "60%",
                marginBottom: "5rem"
              }}
                message="Your answer is:"
                description={answer}
                type="info"
              />
            ) : (
              <></>
            )}
          </>



        ) : (
          <></>
        )}
      </div>
      {/* {
        input==="Quiz"?
        console.log("hello"):<></>
        // document.getElementById("tarea").style.visibility="visible"
      } */}
    </div>
  );
}
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Intro to Data Science", "sub1", <DatabaseOutlined />, [
    getItem("Course Work", "courseWork1", null),
    getItem("Quiz", "quiz1", null),
  ]),
  getItem("Data Mining", "sub2", <DatabaseOutlined />, [
    getItem("Course Work","courseWork2", null),
    getItem("Quiz","quiz2", null),
  ]),
  {
    type: "divider",
  },
  getItem("Natural Language Processing", "sub4", <DatabaseOutlined />, [
    getItem("Course Work","courseWork3", null),
    getItem("Quiz", "quiz3", null),
    
  ]),
  getItem("Computer Vision", "sub5", <DatabaseOutlined />, [
    getItem("Course Work","courseWork4", null),
    getItem("Quiz", "quiz4", null),
    
  ]),
  
];