import React from 'react';

import './App.css';

const bankOne = [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
  keyCode: 90,
  keyTrigger: 'Z',
  id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},
];

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', pressed: false };
  }
  render() {
    return (
      <div id={this.props.name}>
        <h1>{this.props.name}</h1>
      </div>
    )
  }

}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);

  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
    document.addEventListener('keyup', this.handleKeyUp);

  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
    document.removeEventListener('keyup', this.handleKeyUp);

  }


handleKeyUp(e){
  let idx = bankOne.findIndex(el => el.keyCode === e.keyCode);
  if (idx >= 0 && idx < bankOne.length) {
     setTimeout(()=>     {
       document.getElementById(bankOne[idx].keyTrigger).style = "box-shadow: 8px 4px 12px 3px #000000";
     } 
, 1000
     );
    }
}

  handleKeyPress(e) {
    let idx = bankOne.findIndex(el => el.keyCode === e.keyCode);
    if (idx >= 0 && idx < bankOne.length) {
      setTimeout(() => {
        document.getElementById(bankOne[idx].keyTrigger).style = "box-shadow: none";
        document.getElementById('display').innerText = bankOne[idx].id;

        const sound = new Audio(bankOne[idx].url);
        sound.play();
      }, 1000);


    }

    this.playSound();

  }

  playSound(e) {

  }

  render() {
    return (
      <div className="App">
        <div >
          <h1 id="display">display text</h1>
        </div>
        <div id="drum-machine">
          <Button name="Q" />
          <Button name="W" />
          <Button name="E" />
          <Button name="A" />
          <Button name="S" />
          <Button name="D" />
          <Button name="Z" />
          <Button name="X" />
          <Button name="C" />

        </div>

      </div>
    )
  }
}

export default App;
