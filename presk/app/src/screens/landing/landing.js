import React, {Component} from "react";
import {Link} from 'react-router-dom';
import './landing.css';

//import assets
import Logo from '../../assets/logo.png';
import It from '../../assets/it.png';
import Bio from '../../assets/bio.png';
import Math from '../../assets/math.png';

import { IoCalendarClearOutline } from 'react-icons/io5';
import {SiGoogleclassroom} from 'react-icons/si';
import {CgMediaLive} from 'react-icons/cg';
import {BiVideoRecording} from 'react-icons/bi';



class Landing extends Component {
  constructor(props) {
    super(props);
  } 
    render() {
        return (
         <div style={{}}>
            <div style={{alignContent:'left', width: '100%', display:'inline-block', textAlign:'left', alignSelf:'left', position:'absolute', left:0, top:0}}>
            <img src={Logo} height="40vh" width="130vh" style={{ marginRight:'2.5%', float:'left'}}></img>
            <Link to="/new"> <div style={{fontFamily:"Montserrat", fontWeight:400, fontSize:"2.75vh", color:"#F16422", marginTop:10}}>Home</div></Link>
            </div >
            <div style={{marginTop:'10%', alignContent:'center'}}>
              
                <div style={{ marginRight:"5%", display:'inline-block'}}>
                <Link to="/class"><button type="primary" style={{backgroundColor:"#333333", height:"5.5vh", width: "120vh", border:"none", borderRadius:40, color:'white', fontFamily:'Montserrat',  fontSize:'2vh'}}> <IoCalendarClearOutline/>  My schedule</button></Link>
                <br></br>
                <Link to="/class"><button type="primary" style={{backgroundColor:"#333333", height:"5.5vh", width: "120vh", border:"none", borderRadius:40, color:'white', fontFamily:'Montserrat',  fontSize:'2vh', marginTop:'2.5%'}}> <SiGoogleclassroom/>   My Classes </button></Link>
                <br></br>
                <div style={{marginTop:'5%', color:'white', fontFamily:'Montserrat', marginLeft:'10%', marginRight:'2.5%',float:'left'}}><img src={Bio}></img><br/>Biology</div>
                <div style={{marginTop:'5%', color:'white', fontFamily:'Montserrat', marginRight:'2.5%',float:'left', color:'#F16422'}}><img src={It} style={{borderColor:'#F16422', borderWidth:5, borderStyle:'outset'}}></img><br/>Programming</div>
                <div style={{marginTop:'5%', color:'white', fontFamily:'Montserrat', float:'left'}}><img src={Math}></img><br/>Mathematics</div>
                </div>

            </div>
            <Link to="/class"><button type="primary" style={{backgroundColor:"#F16422", height:"5.5vh", width: "30vh", border:"none", borderRadius:40, color:'white', fontFamily:'Montserrat',  fontSize:'2vh', marginTop:'5%'}}> Add Class </button></Link>                        

         </div>   
        );
    }
}

export default Landing;