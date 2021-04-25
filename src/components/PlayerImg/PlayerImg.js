import React from 'react';
import Card from 'react-bootstrap/Card'

class PlayerImg extends React.Component{

    render(){
        return(
            <Card className = "mx-auto" style={{width:"7rem", backgroundColor:"rgba(0,0,0,0.0)"}}>
                <Card.Img style={{width:"7rem", "border":"none"}} src={this.props.playerImgSrc} />
                <Card.Body style={{fontSize:"15px", textAlign:"center", backgroundColor:"#0000009e",color:"#fff", height:"20px", "flex":0, padding:0}}> {this.props.playerName} </Card.Body>
            </Card>

        );


    }
}

export default PlayerImg;