import React, {Component} from "react";
import {Link} from 'react-router-dom';
import './class.css';
import webgazer from 'webgazer';
//import assets
import Logo from '../../assets/logo.png';
import YouTube from 'react-youtube';
import Pomodoro from './pomodoro';
import YoutubeBtn from '../../assets/youtube.png';
import { IoNotificationsOutline } from 'react-icons/io5';
import {BsCameraVideoFill} from 'react-icons/bs';
import {BsMusicNoteBeamed} from 'react-icons/bs';
import {BsFillImageFill} from 'react-icons/bs';
import {FaCheckCircle} from 'react-icons/fa';


class Download extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      breakTime: 450,
      workTime: 20,
      seconds: 20,
      timerId: false,
      active: 'workTime',
      quiz: false,
    }

    this.playStop = this.playStop.bind(this);
    this.updateTime = this.updateTime.bind(this);
  }

  // 
  updateTime() {
    this.setState(function(prevState, props) {
      const currentState = Object.assign(prevState);
      const stillActive = (prevState.seconds - 1) > 0;
      const nextTimer = prevState.active === 'workTime' ? 'breakTime' : 'workTime'

      currentState.seconds = stillActive ? currentState.seconds - 1 : currentState[nextTimer];
      currentState.active = stillActive ? currentState.active : nextTimer;
      if (this.timerID) {
        currentState.timerId = this.timerID;
      }
      if(this.timerId == 'breakTime'){
        this.setState({quiz:true})
      }
      return currentState;
    });
  }

  // 
  playStop() {
      if (this.state.timerId) {
        clearInterval(this.state.timerId);
        return this.setState({
          seconds: this.state.workTime,
          timerId: false,
          active: 'workTime'
        });
      }

      this.timerID = setInterval(() => this.updateTime(), 1000)
    }
    // 
  updateLength(timer, e) {
    if (this.state.timerId) {
      return false;
    }
    
    const state = Object.assign({}, this.state);
    state[timer] = e.target.value * 60;
    state.seconds = timer === 'workTime' ? e.target.value * 60 : state.seconds
    this.setState(state);
  }

  componentDidMount(){
      webgazer.setGazeListener(function(data, elapsedTime) {
        if (data == null) {
            return;
        }
        console.log('Inprogress')
        var xprediction = data.x; //these x coordinates are relative to the viewport
        var yprediction = data.y; //these y coordinates are relative to the viewport
        console.log(elapsedTime); //elapsed time is based on time since begin was called
    }).begin();
    
  }
    render() {
      const opts = {
        height: "600",
        width: "880",
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0
        }
      };
      webgazer.setGazeListener(function(data, elapsedTime) {
        if (data == null) {
            return;
        }
        console.log('Inprogress')
        var xprediction = data.x; //these x coordinates are relative to the viewport
        var yprediction = data.y; //these y coordinates are relative to the viewport
        console.log(elapsedTime); //elapsed time is based on time since begin was called
    }).begin();
      const buttonString = this.state.timerId ? 'Take a break' : 'Back to learn';
        return (
         <div style={{}}>
           
           
            <div style={{alignContent:'left', width: '100%', display:'inline-block', textAlign:'left', alignSelf:'left', position:'absolute', left:0, top:0}}>
            <img src={Logo} height="40vh" width="130vh" style={{ marginRight:'2.5%', float:'left'}}></img>
              <div style={{fontFamily:"Montserrat", fontWeight:400, fontSize:"2.75vh", color:"#F16422", marginTop:10}}>Home</div>
            </div >
            <div style={{marginTop:'2.5%', alignSelf:'left', alignContent:'left'}}>
                <div style={{fontFamily:"Montserrat", lineHeight:"100%", fontSize:"3vh", marginTop: "5%", color:'#FFF'}}>
                Programming
                </div>
                <div style={{fontFamily:'Montserrat', fontSize:20, color:'green'}}> Concentrating <FaCheckCircle/></div>
                <YouTube
                  opts={opts}
                  videoId={"kqtD5dpn9C8"}                  // defaults -> null
                  id={"kqtD5dpn9C8"}                       // defaults -> null
                  onPlay={this.playStop}                    // defaults -> noop
                  onPause={this.playStop}
                />
                <Time active={this.state.active} seconds={this.state.seconds} />
                  {}   
                </div>
               {!this.state.quiz && <div style={{color:'white', fontFamily:'Montserrat', marginTop:'15%'}}>
                <form>
                <p>What is the world's fastest growing programming language?</p>
                <input
                  type="text"
                />
                <p>Why is Python a very popular programming language?</p>
                <input
                  type="text"
                />
                <p>What other tasks do people from different disciplines use Python for?</p>
                <input
                  type="text"
                />
                <br></br>
                <button style={{backgroundColor:'#F16422', fontFamily:'Montserrat', fontSize:20,width:150, height:50, color:'white', borderRadius:20, marginTop:20 }}>Turn it in</button>
              </form>
                </div>}
            </div>  
        );
    }
}
class Option extends React.Component {
  onChange (e) {
    e.preventDefault();
    this.props.updateLength(this.props.timer, e)
  }
  
  convertToMinutes (seconds) {
    return Math.floor(seconds / 60);
  }
  
  render() {
    return (
      <label className="input-group">
      {this.props.children}
      <input className="input-group__input" type="number" min="1" step="1" placeholder="Insert minutes" onChange={this.onChange.bind(this)} value={this.convertToMinutes(this.props.value)} />
      </label>
    )
  }
}

const Button = (props) => <button style={{color:'white', backgroundColor:'#F16422', fontFamily:'Montserrat', borderRadius:20, border:'none', height:50, width:200 }} className="btn" onClick={props.action}>{props.children}</button>

class Time extends React.Component {
  twoDigits(num) {
    return num > 9 ? "" + num : "0" + num;
  }

  convertToHhMmSs(seconds) {
    const h = this.twoDigits(Math.floor(seconds / 3600));
    const m = this.twoDigits(Math.floor((seconds % 3600) / 60));
    const s = this.twoDigits(Math.floor(seconds % 3600 % 60));
    return `${h}:${m}:${s}`;
  };

  render() {
    var remainingTime = this.convertToHhMmSs(this.props.seconds);
    var activeTimer = this.props.active === 'workTime' ? 'It\'s time to learn!' : 'Take a short quiz to see if you understood the lecture';

    return (
      <div >
        <p  style={{fontFamily:'Montserrat', color:'white'}}>{activeTimer}</p>
        <p style={{fontFamily:'Montserrat', color:'#F16422', fontWeight:500, fontSize:30}}>{remainingTime}</p>
      </div>
    )
  }
}

export default Download;