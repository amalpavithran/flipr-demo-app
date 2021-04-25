import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Header from '../Header/Header'
import Timer  from '../Timer/Timer.js'
import ScoreBoard from '../ScoreBoard/ScoreBoard.js'

import './StartMatch.css'


class StartMatch extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isStarted:false,
            ballNo: 0,
            innings: 0,
            stopReq: false,
            overNo: 0.0,
            points : 0,
            userTeam : [],
    
        };
        this.onMatchStarted = this.onMatchStarted.bind(this)
        this.calcPoints = this.calcPoints.bind(this)
      }
    componentDidMount(){
        this.calcPoints();
        // console.log(this.props.location.state.selectedPlayers)
        axios.get("/startMatch",{
            params: {
                matchId : this.props.location.state.matchId,
                selectedPlayers : this.props.location.state.selectedPlayers,
                captain :  this.props.location.state.captain,
                vcaptain :  this.props.location.state.vcaptain,

            },
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': '*',
            },
          })
          .then(response => this.setState({userTeam : response.data.userTeam}))
        
    }
    componentWillUnmount(){
        clearInterval(this.interval)
        console.log("Unmounting");

    }
    getBallData(ballNo){
        if(!this.state.matchOver){
        axios.get("/getBallData",{
            params: {
                matchId : this.props.location.state.matchId,
                ballNo : this.state.ballNo,
                innings : this.state.innings,
                userTeam : this.state.userTeam,
            },
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': '*',
            },
          })
          .then(response => this.setState({ballNo:ballNo+1, userTeam : response.data.userTeam, overNo:response.data.overNo, matchOver:response.data.matchOver}, function(){this.calcPoints()}
          ))
        }
        else{
            alert("MATCH IS OVER")
        }


    }
    calcPoints(){
        var points = 0
        this.state.userTeam.map((player)=>{
                points = points  + player.points
        })
        this.setState({points : points})

    }
    onMatchStarted(props){
        this.setState({isStarted:props,})
        this.getBallData(this.state.ballNo)
        this.interval = setInterval(() => {

            this.getBallData(this.state.ballNo);
            console.log(this.state.ballNo)
            
          }, 5000);
          }

    render(){
        // console.log(this.props.location.state.team2+".png")
        let timer;
        let over;
        if(!this.state.isStarted){
            timer =  <Timer maxTimer={3} hasStarted={this.onMatchStarted}/>
        }
        else{
            timer = 
                    <Row style={{width:"98vw"}}>
                    <ScoreBoard rowData = {this.state.userTeam}/>         
                           <Card style={{marginLeft:"200px", marginTop:"200px", width:"300px", height : "50px", border:"none"}}>
                    <Card.Body style = {{fontSize:"20px"}}> Your Total Points : {this.state.points}</Card.Body>
                    </Card>
                    </Row>
            over = 
            <Col style={{width : "1000px"}}>
                                <Card.Body className="Over">Over : {this.state.overNo}/20 </Card.Body>
                            </Col>

        }

        return(
            <div>
                <Header />
                {timer}
                <Container className="MatchFooter" style={{maxWidth:"1000000px"}}>
                    <Container className="MatchFcontainer">
                    <Card className="FooterBox Background">
                        <Row className="mx-auto" md="sm">
                            {over}
                        <Row className="mx-auto" md="sm">
                        <Col>
                        <Card.Img src={this.props.location.state.team1+".png"} style={{width:'10rem',   marginRight:"0.5rem", paddingTop:"0.5rem", }} />
                        </Col>
                        <Col>
                        <Card.Body className="Versus" >
                            VS
                    </Card.Body>
                    </Col>
                    <Col className="mt-auto mb-auto">
                        <Card.Img src={this.props.location.state.team2+".png"}  style={{width:'10rem', height:"500%", paddingTop:"0.5rem", marginRight:"0.5rem",}}/>
                        </Col>
                        </Row>
                        </Row>
                    </Card>
                    </Container>
                    </Container>
              
            </div>


        );
    }
}

export default withRouter(StartMatch);