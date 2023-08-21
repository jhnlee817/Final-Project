import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ParticlesBg from 'particles-bg';
import './App.css';

// const app = new Clarifai.App({
//   apiKey: 'a64ae5a75e57499cbfd5ebb9eeb080bc'
// });

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
    // app.models.predict("a64ae5a75e57499cbfd5ebb9eeb080bc", "https://samples.clarifai.com/face-det.jpg").then (
    //   function(response) {
    //     console.log(response);
    //   },
    //   function(err) {

    //   }
    // );
  }


  render() {
    return (
      <div className="App">
        <ParticlesBg type="cobweb" bg={true} />
        <Navigation />
        <Logo />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <Rank />
        {<FaceRecognition />}
      </div>
    )
  }
}

export default App;
