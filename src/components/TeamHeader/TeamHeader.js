import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

import './TeamHeader.css'
class TeamHeader extends React.Component {
  render(){
    return (
        <Card className="TopBox Background">
          <Row>
          <Card.Body style={{textAlign:"left"}}>
            <Card.Body className="PlayerLeft"> Players left : </Card.Body>
            <Row md="sm-2" style={{marginLeft:"5px"}}>
            <Card.Body className="SelectedPlayers">
           {this.props.nPlayers}
           </Card.Body>
           <Card.Body className="TotalPlayers">
             /11
           </Card.Body>
           </Row>
          </Card.Body>
            <Card.Body style={{textAlign:"right"}}>
              <Card.Body className="PlayerLeft" >
               Credits left : 
               </Card.Body>
               <Card.Body className="SelectedPlayers ml-auto" style={{marginRight:"23px"}}>
                  {this.props.credits}
           </Card.Body>
            </Card.Body>
            </Row>
            <Row className="mx-auto" md="sm">
              <Col>
              <Card.Img src={this.props.team1ImgSrc} style={{width:'5rem',   marginRight:"0.5rem", paddingTop:"0.5rem", }} />
              </Col>
              <Col>
              <Card.Body className="Versus" >
                  VS
           </Card.Body>
           </Col>
           <Col className="mt-auto mb-auto">
              <Card.Img src={this.props.team2ImgSrc}  style={{width:'5rem', height:"500%", paddingTop:"0.5rem", marginRight:"0.5rem",}}/>
              </Col>
            </Row>
        </Card>

    );
  }
}

export default TeamHeader;