import React, { useState } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import { message } from "antd";
/* eslint-disable jsx-a11y/anchor-is-valid */

// import ReactDOM from "react-dom";

require("../src/loginStyle.css");

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    console.log(uname.value, pass.value);

    const loginInfo = { username: uname.value, password: pass.value };
    axios
      .post("https://convai-submission.onrender.com/login", loginInfo)
      .then((Response) => {
        console.log(Response.data.success);
        if (Response.data.success == 1) {
          //Successful Redirect to course page
          console.log(Response.data);
          message.success("Login Successful");
          window.location.href="/courses"
        } else {
          message.error("Invalid Credentials");
        }
      })
      .catch((error) => {
        this.setState({ errorMessage: error.message });
        console.error("There was an error!", error);
      });
    // // Find user login info
    // const userData = database.find((user) => user.username === uname.value);

    // // Compare user info
    // if (userData) {
    //   if (userData.password !== pass.value) {
    //     // Invalid password
    //     setErrorMessages({ name: "pass", message: errors.pass });
    //   } else {
    //     setIsSubmitted(true);
    //   }
    // } else {
    //   // Username not found
    //   setErrorMessages({ name: "uname", message: errors.uname });
    // }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <>
      <div className="mainform">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Username </label>
              <input type="text" name="uname" required />
              {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" required />
              {renderErrorMessage("pass")}
            </div>
            <div className="button-container">
            <input type="submit" color="blue" />
          </div>
           
          </form>
        </div>
      </div>
      <div>
        <div className="subheading">
          Don't have an account? <Link to="/SignUp">Register</Link>
        </div>
      </div>
    </>
  );

  return (
    <div className="loginPage">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default Login;
