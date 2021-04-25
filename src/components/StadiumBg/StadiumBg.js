import React from 'react';
import StadiumSvg from './stadiumBg.svg'
import CricketBg from './CricketStadiumVector.svg'


import './StadiumBg.css'

class StadiumBg extends React.Component {
  render(){
    return (
      <div className = "StadiumBg" style={{backgroundImage: `url(${CricketBg})`}}>
      </div>
    );
  }
}

export default StadiumBg;

