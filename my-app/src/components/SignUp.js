import React, {useState} from 'react'
import { Button, Card, Form, Input, message } from "antd";
import { Link } from 'react-router-dom'
import './signup.css'
// import LogIn from './LogIn'
import { useNavigate } from 'react-router-dom';
const SignUp= ()=> {
    const navigate = useNavigate();
    const [user,setUser] = useState({
        name: "",  username:"", password: ""
    });
 
    // const handleInputs = (event) => {
    //     console.log(event);
    //     name = event.target.name;
    //     value = event.target.value;

    //     setUser({...user,[name]:value})
    // }

    const PostData = async (values)=> {
      console.log("vals:",values);
        const {name, username, password} = values;

        const res = await fetch("https://convai-submission.onrender.com/register", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
              name, username, password
            })
        })
        message.success("Registered Successfully!")

        // const data = await res.json();
        window.location.href="/login"
        
        // if(data.reg == false || !data){
        //     window.alert("Invalid Registeration");
        //     console.log("Invalid Registeration")
        // }else{
        //     window.alert("Registered")
        //     console.log("Registered")
        //     navigate("/LogIn")
        // }

    }
    // fetch('/register', {
    // const {email, bid, password, cpassword, aggre} = user;
    // method: 'POST',
    // headers: {
    //     'Content-Type': 'application/json',
    // },
    // body: JSON.stringify(data),
    // })
    // .then((response) => response.json())
    // //Then with the data from the response in JSON...
    // .then((data) => {
    // console.log('Success:', data);
    // })
    // //Then with the error genereted...
    // .catch((error) => {
    // console.error('Error:', error);
    // });

    return (
      <div className="cardContainer">
        <Card className="card">
        <div>
          Enter your details below to continue
        </div>
        <Form layout="vertical" onFinish={PostData}>
          <Form.Item name="name"
         rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input placeholder="Name" size="large" />
          </Form.Item>
          <Form.Item name="username"
         rules={[{ required: true, message: 'Please input your username!' }]}
          
          >
            <Input placeholder="Username" size="large" />
          </Form.Item>
          <Form.Item name="password"
         rules={[{ required: true, message: 'Please input your password!' }]}
         >
            <Input.Password placeholder="Password" size="large" />
          </Form.Item>
          <div >
            <Button htmlType="submit">
              <a>Register</a>
            </Button>
          </div>
          <p>
            Already have an account?
            <span>
              <a href="/LogIn">Log In</a>
            </span>
          </p>
        </Form>
      </Card>
      </div>


    );

}
export default SignUp;