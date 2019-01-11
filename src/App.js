import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AboutMe from "./components/AboutMe/aboutMe"
import MyDesign from "./components/MyDesign/myDesign"
import Bio from "./components/Bio/bio"
import Slider from './components/slider';
import Secondslide from './components/Secondslide/Secondslide';
import Thirdslide from './components/Thirdslide';
import Fourthslide from './components/Fourthslide';
import Resume from './components/Resume';
import ContactMe from './components/contactme';
import Experience from './components/experience';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-body">
          <p><AboutMe /></p>
          
          <p><MyDesign /></p>

          <p><Secondslide /></p>

          <p><Thirdslide /></p>

          <p><Fourthslide /></p>

          <p><Bio /></p>
            <p className="sliderHolder6"></p>
            <p className="sliderHolder5"></p>
          
          <p><Resume /></p>
     
          <p className="kkHolder1"></p>
          <p className="kkHolder2"></p>
          <p className="kkHolder3"></p>
          <p className="kkHolder4"></p>
          <p className="kkHolder5"></p>
          {/*<p className="kkHolder6"></p>*/}
          <p className="kkHolder7"></p>
            
          <Experience />

         

          <p className="cnoteHolder1"></p>
          <p className="cnoteHolder2"></p>
          <p className="cnoteHolder3"></p>
          <p className="cnoteHolder4"></p>
          <p className="cnoteHolder5"></p>  

          <ContactMe />
        </header>
      </div>
    );
  }
}

export default App;
