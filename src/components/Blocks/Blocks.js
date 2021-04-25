import React from 'react';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import { withRouter } from 'react-router-dom';
import './Blocks.css'

class Blocks extends React.Component {
    routingFunction = (param) => {
        this.props.history.push({
            pathname: '/teammaker',
            state: { team1: this.props.team1 , team2:this.props.team2, matchId:this.props.matchId }
        });
    }
  render(){
      console.log(this.props.matchID)
    return (
        <Card  onClick={this.routingFunction} className="mx-auto mt-5 shadow cardAnim" style={{width: '40rem', height:'7.8rem'}}>
            <Card.Body className="pb-2rem">
            <Card.Title  style={{fontSize:'0.9rem', opacity:'40%', marginBottom:'0'}}>VIVO IPL</Card.Title>
                <Row  style={{marginBottom:"0.9rem"}}>
                <Card.Img className= "mr-auto" style={{width:'4rem', height:"4.8rem", marginLeft:"0.5rem",}} src={this.props.team1+".png"} />
                <Card.Body  className = "ml-auto cardText">{this.props.team1} </Card.Body>
                <Card.Body  className = "mx-auto cardText" > vs </Card.Body>
                <Card.Body  className="cardText">{this.props.team2}</Card.Body>
                <Card.Img className= "ml-auto" style={{width:'4rem', marginRight:"0.5rem",height:"4.8rem",}} src={this.props.team2+".png"} />
                </Row>
            </Card.Body>
        </Card>

    );
  }
}

export default withRouter(Blocks);