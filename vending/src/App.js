import raect from 'react';
import Intro from './Intro.js';
import Spot from './Spot.js';
import About from './About.js';
import Feeback from './Feedback.js';
import Video from './Video.js';
import './App.css'
function App(){
  return (
    <div>
      <div id='navbar'>
        <div id='navleft'>
          <img src='logo.png' height={'50vh'} width={'50vw'}/>
          <h1>24buy7</h1>
          <p>QUICK BUYING SOLUTIONS</p>
        </div>
        <div id='navright'>
          <button id='b1'><a id='home' href=''>Home</a></button>
          <button id='b1'><a id='backed'href=''>Backed By</a></button>
          <button id='b1'><a id='blogs'href=''>Blogs</a></button>
          <button id='b1'><a id='aboutus'href=''>About Us</a></button>
          <select>
            <option selected>Partner With Us</option>
            <option>Haldiram</option>
            <option>Coke</option>
            <option>Pepsi</option>
          </select>
          <button id='b1'><a id='faqs' href=''>FAQs</a></button>
          <button id='b1'><a id='contact' href=''>Contact</a></button>
        </div>
      </div>

      <Intro></Intro>
      <Spot></Spot>
      <About></About>
      <Feeback></Feeback>
      <Video></Video>
    </div>
  );
}
export default App; 