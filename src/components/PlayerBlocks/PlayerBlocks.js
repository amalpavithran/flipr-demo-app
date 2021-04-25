import React from 'react';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {Button, ToggleButton, ToggleButtonGroup} from 'react-bootstrap'

import './PlayerBlocks.css'

class PlayerBlocks extends React.Component {
    state = {
        buttonText: "+",
        buttonVariant: "outline-warning",
        buttonBg: "#FFF",
        isActive: false,
        selected: false,
        

      }
    
    handleCClick = (e) => {
        this.props.updateCaptains( e.target.innerHTML, this.props.playerName,)

    }
    handleButtonClick = () =>{
        console.log(this.props.deactivate)
        if(!this.props.forCaptain ){
            if(this.state.buttonText  == "+" ){
                if(!this.props.deactivate){

                this.props.updateCredits(-Number(this.props.playerCredits), -1, this.props.playerImgSrc, this.props.playerName);
                this.setState({buttonText : "-", buttonVariant: "outline-success", buttonBg:"#fff7ec", selected:true })}}
            else{
                this.props.updateCredits(Number(this.props.playerCredits), +1, this.props.playerImgSrc, this.props.playerName)
                this.setState({buttonText: "+", buttonVariant: "outline-warning",  buttonBg: "#FFF", selected:false})
          }
        
        }
        else{
            

        }  // Handle captain VC stuff here


      }
    render(){
        const forCaptain = this.props.forCaptain;
        let button;

        if(!forCaptain){

            button = <Col md="auto" style={{padding:"1.25rem"}}>
                        <Button disabled={this.state.selected^this.props.deactivate} variant={this.state.buttonVariant} className="CircleButton"> {this.state.buttonText} </Button>
                    </Col>
        }
        else{
            
            button =      <><Col md="auto" style={{padding:"1.25rem"}}>
                            <Button active={this.props.isCActive} variant={this.state.buttonVariant} className="CircleButton" onClick={this.handleCClick}> C </Button>
                            </Col>
                            <Col md="auto" style={{padding:"1.25rem"}}>
                            <Button active={this.props.isVActive} variant={this.state.buttonVariant} className="SmallCircleButton" onClick={this.handleCClick}> VC </Button>
                            </Col></>



        }

        return (

            <Card  onClick={()=>this.handleButtonClick()} className ="mx-auto mt-0 shadow cardAnim" className={this.props.className} style={{width:"40rem", backgroundColor:this.state.buttonBg}} >
                <Card.Body>
                    <Row>
                    <Col md="auto" style={{padding:0}}>
                    <Card.Img  style={{width:"5rem"}}  src={this.props.playerImgSrc}/>
                    </Col>
                    <Col style={{padding:0}}>
                        <Row>
                        <Card.Body className = "PlayerName mr-auto">{this.props.playerName}</Card.Body>
                        <Card.Body className = "PlayerType mr-auto">{this.props.playerType}</Card.Body>
                        </Row>

                    </Col>
                    <Col className="mr-auto" style={{padding:0}}>
                        <Card.Body className = "PlayerCredits mr-auto">{this.props.playerCredits}</Card.Body>
                    </Col>
                    {button}

                    </Row>
                </Card.Body>

            </Card>

        );
  }
}

export default PlayerBlocks;