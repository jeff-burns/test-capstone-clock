// create state here

//Run fetch get request here 
    //for setting intervals to check the server
        //componentDidMount(){
        // this.clock = setInterval(
        //     () => this.setCurrentTime(),
        //     1000
        // )
        // this.interval = setInterval(
        //     () => this.checkAlarmClock(),
        // 1000)
        // }
    
        // componentWillUnmount(){
        // clearInterval(this.clock);
        // clearInterval(this.interval);
        // }

//setstate for just setalarm
// setAlarmTime(event) {
//     event.preventDefault();
//     const inputAlarmTimeModified = event.target.value + ':00'
//     this.setState({
//       alarmTime: inputAlarmTimeModified
//     })
//   }

// checking time is or isn't alarmset time
// setstate for alarm on
// checkAlarmClock(){
//     if(this.state.alarmTime == 'undefined' || !this.state.alarmTime) {
//       this.alarmMessage = "Please set your alarm.";
//     } else {
//       this.alarmMessage = "Your alarm is set for " + this.state.alarmTime + ".";
//       if(this.state.currentTime === this.state.alarmTime) {
//         alert("its time!");
//       } else {
//         console.log("not yet");
//       }
//     }   
//   }

// stopAlarm function 
// if light resistor empty return setstate alarm off
// else keep going?
// PYTHON CODE TO READ FROM SENSOR??
//import RPi.GPIO as GPIO
 
// GPIO.setmode(GPIO.BCM)
// GPIO.setup(4,GPIO.IN)
 
// for i in range(0,5):
//     print GPIO.input(4)
