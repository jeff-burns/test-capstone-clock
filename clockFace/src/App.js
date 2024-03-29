import React, { Component } from "react";
import Clock from "react-live-clock";
import logo from "./logo.svg";
import "./App.css";

const ONE_SEC = 1000; // milliseconds

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alarmClockOn: false
    };
  }

  componentDidMount() {
    setInterval(() => this.getCurrentTime(), ONE_SEC);
  }

  getCurrentTime = () => {
    /* fetch(url).then( alarmClockOn => { 
      this.setState({ alarmClockOn });
    })*/
    const { alarmClockOn } = this.state;
    this.setState({ alarmClockOn: !alarmClockOn });
  };

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  render() {
    const { alarmClockOn } = this.state;
    return (
      <div className="App">
        <Clock format={"h:mm a"} ticking={true} timezone={"US/Mountain"} />
        <div>Alarm is {alarmClockOn ? " On" : " Off"}</div>
        <div>
            <button type="button" onClick="startAlarm()">Start Alarm</button>
            <button type="button" onClick="stopAlarm()">Stop Alarm</button>
            <button type="button" onClick="toggleLight()">Toggle Light</button>
            <audio  id="sound" controls loop hidden>
            <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg"/>
            </audio>
            <img id="light" src="" alt=""></img>
        </div>
      </div>
    );
  }
}

export default App;
