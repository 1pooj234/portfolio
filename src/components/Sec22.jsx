import { useState, useEffect } from "react";
import "./Sec22.css";
let firstTime1 = true;
let firstTime2 = true;
let firstTime3 = true;
let firstTime4 = true;
const Sec22 = (props) => {
  const [y, setY] = useState(0);
  const date = new Date();
  const getAge = date.getFullYear() - 2004;
  const scrollDownEvent = () => {
    setY(window.scrollY);
    if (firstTime1) {
      if (window.scrollY > 800) {
        firstTime1 = false;
      }
    }
    if (firstTime2) {
      if (window.scrollY > 800) {
        firstTime2 = false;
      }
    }
    if (firstTime3) {
      if (window.scrollY > 800) {
        firstTime3 = false;
      }
    }
    if (firstTime4) {
      if (window.scrollY > 800) {
        firstTime4 = false;
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollDownEvent);
    return () => {
      window.removeEventListener("scroll", scrollDownEvent);
    };
  }, []);
  let lw1 = firstTime1
    ? y >= 520
      ? "list_wrapper lw1 first_move"
      : "list_wrapper lw1"
    : "list_wrapper lw1 first_move";
  let lw2 = firstTime2
    ? y > 570
      ? "list_wrapper lw2 second_move"
      : "list_wrapper lw2"
    : "list_wrapper lw2 second_move";
  let lw3 = firstTime3
    ? y > 670
      ? "list_wrapper lw1 first_move"
      : "list_wrapper lw1"
    : "list_wrapper lw1 first_move";
  let lw4 = firstTime4
    ? y > 770
      ? "list_wrapper lw2 second_move"
      : "list_wrapper lw2"
    : "list_wrapper lw2 second_move";
  return (
    <div className="sec2">
      <h1 className="about-heading">About</h1>
      <p className="about-me">I am Poojesh.K.S .</p>
      <p className="about-me">I live In Bengaluru .</p>
      <p className="about-me">
        I always want to Challenge myself . I have a positive mindset . And I
        don't give up until I acheive it .
      </p>
      {/*  <p className="about-me">
        I make websites which give best user experiance .
      </p>*/}
      <div className={lw1}>
        <div className="corner_line"></div>
        <div className="bottom_line"></div>
        <b className="cat-heading">About me</b>
        <ul className="list">
          <li>
            <b className="btext">DOB</b> : 02-05-2004
          </li>
          <li>
            <b className="btext">Age</b> : {getAge} years
          </li>
          <li>
            <b className="btext">Gender</b> : Male
          </li>
          <li>
            <b className="btext">Birth place</b> : Kolar,Karnataka
          </li>
        </ul>
      </div>
      <div className={lw2}>
        <div className="corner_line2"></div>
        <div className="bottom_line2"></div>
        <div className="inner">
          <b className="cat-heading">Interests</b>
          <ul className="list">
            <li>1 . Crafting Circuits for Fun</li>
            <li>2 . Exercises</li>
          </ul>
        </div>
      </div>
      <div className={lw3}>
        <div className="corner_line"></div>
        <div className="bottom_line"></div>
        <div className="inner">
          <b className="cat-heading">Expertise</b>
          <ul className="list">
            <li>Web Developement and design</li>
            <li>Frontend coding</li>
            <li>Wireframe creation</li>
            <li>UX </li>
          </ul>
        </div>
      </div>
      <div className={lw4}>
        <div className="corner_line2"></div>
        <div className="bottom_line2"></div>
        <div className="inner">
          <b className="cat-heading ">Certificates</b>
          <ul className="list">
            <li>
              <b className="btext">Udemy</b> : Javascript
            </li>
            <li>
              <b className="btext">Udemy</b> : React,Redux
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sec22;
