// import logo from './logo.svg';
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/header";
import Login from "./login";
import Hero from "./components/hero";
import Courses from "./components/courses";
import CoursePage from "./components/coursePage";
import SignUp from "./components/SignUp";
import CoursePage2 from "./components/coursepage2";
import CoursePage3 from "./coursepage3"
import CoursePage4 from "./coursepage4"
import CoursePage5 from "./components/coursepage5";
import About from "./components/About";


function App() {
  // let obj = {
  //   title: 'ChatGPT',
  //   link: 'hello.com'
  // }

  return (
    <>
      <Router>
        <Routes>
          <Route
             path="/"
            element={
              <div className="mainPage">
                <Header/>
                <Hero/>
              </div>
            }
          ></Route>
           <Route
            path="/login"
            element={
              <div className="mainPage">
                <Header/>
                <Login/>
              </div>
            }
          ></Route>
           <Route
            path="/about"
            element={
              <div className="mainPage">
                <Header/>
                <About/>
              </div>
            }
          ></Route>
           <Route
            path="/courses"
            element={
              <div>
                <Header/>
                <Courses/>
              </div>
            }
          ></Route>
          <Route
            path="/coursePage"
            element={
              <div>
                <Header/>
                <CoursePage/>
              </div>
            }
          ></Route>
          <Route
            path="/coursePage2"
            element={
              <div>
                <Header/>
                <CoursePage2/>
              </div>
            }
          ></Route>
          <Route
            path="/coursePage3"
            element={
              <div>
                <Header/>
                <CoursePage3/>
              </div>
            }
          ></Route>
          <Route
            path="/coursePage4"
            element={
              <div>
                <Header/>
                <CoursePage4/>
              </div>
            }
          ></Route>
          <Route
            path="/coursePage5"
            element={
              <div>
                <Header/>
                <CoursePage5/>
              </div>
            }
          ></Route>
      
          <Route
            path="/SignUp"
            element={
              <div className="mainPage">
                <Header/>
                <SignUp/>
              </div>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <div>
                <Header/>
                <Login/>
              </div>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
