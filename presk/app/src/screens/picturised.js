import React, {Component} from "react";
import {Link} from 'react-router-dom';
import './screens.css';

//import assets
import LandImg from '../assets/landing.png';
import Logo from '../assets/logo.png';


class Picturised extends Component {
  constructor(props) {
    super(props);
  } 
    render() {
        return (
         <div>
            
            <div>
              <div style={{margin:"5vh 2.5%",fontFamily:"Roboto", fontSize:"9.75vh",lineHeight:"100%", color:"#4A73B1", width:"41.7%", float: "left"}}>
              <img src={Logo} height="70vh" width="70vh" style={{ marginRight:'2.5%'}}></img>
                Picturise <span style={{color:'#E14B5A', marginLeft:'-3%'}}>d</span>
                <img src={LandImg} alt="home" height="600vh" style={{marginTop:'10%'}}></img>
                </div>
             
            </div>
         </div>   
        );
    }
}

export default Picturised;