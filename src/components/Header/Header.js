import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import {withRouter} from 'react-router-dom'
//import './Header.css'
import './Header.css'
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.onContinue = this.onContinue.bind(this)
  }
  onContinue(){
    console.log(this.props.history.location.pathname)
    if(this.props.history.location.pathname.trim()!="/"){
    this.props.history.goBack();}
    
  }
  render(){
    return (
<Navbar variant="dark" style={{'background-color':'#c51d23'}}>
      <Button variant="outline-light" className="BackButton" onClick={this.onContinue}>Back</Button>
    <Navbar.Brand className = "mx-auto" style={{fontWeight:"bold", fontFamily:"Georgia"}}>
BOWLED OVER    </Navbar.Brand>
  </Navbar>
    );
  }
}

export default withRouter(Header);