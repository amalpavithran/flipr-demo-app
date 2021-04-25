import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import './ContinueButton.css'

class ContinueButton extends React.Component{

    render(){

        return(

        <Container className="Footer" style={{maxWidth:this.props.maxWidth}}>
        <Container className="Fcontainer">
        <Button disabled={!this.props.continue} className = " ContinueButton shadow" onClick={()=> this.props.onContinue()}> Continue </Button>
        </Container>
        </Container>
        );
    }

}

export default ContinueButton