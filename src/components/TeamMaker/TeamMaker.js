import React from 'react';
import {withRouter} from 'react-router-dom';
import PlayerBlocks from '../PlayerBlocks/PlayerBlocks';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Header from '../Header/Header';
import TeamHeader from '../TeamHeader/TeamHeader';
import CricketBg from '../StadiumBg/CricketBg.svg';
import StadiumSvg from '../StadiumBg/stadiumBg.svg';
import PlayerImg from '../PlayerImg/PlayerImg';
import ContinueButton from '../ContinueButton/ContinueButton'
import axios from 'axios';
import './TeamMaker.css'

class TeamMaker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            credits : 100,
            nPlayers: 11,
            players:[],
            selectedPlayers : [],
            team1:"",
            team2:"",
            continue:false,
            deactivate:false,
            cName: "mx-auto mt-0 shadow cardAnim",
          };
        this.setState({team1:this.props.location.state.team1})
        this.setState({team2:this.props.location.state.team2})
        console.log(this.props.location.state.team1)  // Team1 name
        console.log(this.props.location.state.team2)  // Team2 name
        this.OnPlayerClick = this.OnPlayerClick.bind(this)
        this.onContinue = this.onContinue.bind(this)
      }
    componentDidMount(){
      console.log(this.props.location.state.matchId)
      axios.get(`/matches/${this.props.location.state.matchId}/players`)
        .then(response => {this.setState({players:response.data.players})
                          })

    }
    onContinue(){
      let toContinue;
      if(this.state.credits >0){
      if( window.confirm("You have "+this.state.credits+" credits left. Are you sure you want to continue?")){
            toContinue = true;
      }
      else{
        toContinue = false;
      }
      }
      else{
        toContinue = true;

      }
      if(toContinue){
      console.log("Continue! "+this.props.location.state.matchId )
      this.props.history.push({
        pathname: '/chooseCaptain',
        state: { selectedPlayers: this.state.selectedPlayers , team1:this.props.location.state.team1, team2:this.props.location.state.team2, matchId:this.props.location.state.matchId }
    });}
      
    }
    OnPlayerClick(playerCredits, playerChange, playerImgSrc, playerName){
        console.log(playerName, playerChange)
        this.setState({credits : this.state.credits + playerCredits,
                        nPlayers : this.state.nPlayers + Number(playerChange)
                      });        
                      
        if(playerChange === -1){
            this.setState({selectedPlayers: this.state.selectedPlayers.concat({playerName: playerName, playerCredits: -1*Number(playerCredits), playerImgSrc:playerImgSrc})},()=>this.validateButton())
        }

        else{
            console.log(playerName)
            this.setState({selectedPlayers: this.state.selectedPlayers.filter((person) => { 
                                                                          return person.playerName !== playerName })
                          },()=>this.validateButton());
        }
    }

    validateButton(){
      console.log(this.state.selectedPlayers)
      if(this.state.selectedPlayers.length >= 11 ){  //Change to 11
        if(this.state.credits<0){
            alert("CREDITS CANNOT BE LESS THAN 0")
            this.setState({continue: false, deactivate:true, cName:""})
        }
        else{
            this.setState({continue: true, deactivate:true, cName:""})}
      }
      else{
        this.setState({continue:false, deactivate:false, cName:"mx-auto mt-0 shadow cardAnim"})
      }
    }
    render(){

    return (
        <div style={{"overflow":"hidden"}}>
            <Header />
            
            <Container className = "ml-0 LargeContainer" style={{width:"80rem !important", "overflow":"hidden"}}>

              <Row>
                <Col>
                <ContinueButton maxWidth={"750px"} continue={this.state.continue} onContinue={this.onContinue}/>

        <Container  style={{width:"43rem", marginLeft:"0.3rem", marginTop:"1.5rem", height:"91vh","overflow-x":"hidden", "overflow-y":"scroll", scrollPaddingRight:"10px"}}>
              <Card className = "mr-auto mt-0" style={{width:"40rem", border:0, marginLeft:"20px"}} >
                <Card.Body>
                    <Row>
                    <Col md="auto" style={{padding:0}}>
                    <Card.Body style={{fontWeight:"bold", fontSize:"18px"}}> Player Name</Card.Body>
                    </Col>
                    <Col md="auto" style={{padding:0, marginLeft:"35px"}}>
                    <Card.Body style={{fontWeight:"bold", fontSize:"18x"}}> </Card.Body>
                    </Col>

                    <Col className="mr-auto" style={{padding:0, marginLeft:"120px"}}>
                        <Card.Body className = "mr-auto" style={{fontWeight:"bold" , fontSize:"18px"}}>Credits</Card.Body>
                    </Col>

                    </Row>
                </Card.Body>
                </Card>
      { this.state.players.map((el,idx) => (
            <PlayerBlocks className={this.state.cName} deactivate={this.state.deactivate} playerName = {el.playerName} playerType={el.playerType} playerCredits = {el.playerCredit} playerImgSrc = {"/default-player-image.png"} updateCredits = {this.OnPlayerClick} forCaptain={false}/>
        )) }
        </Container>
        </Col>
        <Col style={{paddingRight:0, height:"94vh"}}>
        <div className = "StadiumBg" style={{backgroundImage: `url(${CricketBg})`, height:"94vh"}}>
        <Row style={{marginTop:"20px"}}>
        {this.state.selectedPlayers.slice(0,3).map((el,idx) =>(
             <PlayerImg playerImgSrc = {el.playerImgSrc} playerName={el.playerName}/>  )
        )}
        </Row>   
        <Row style={{marginTop:"20px"}}>
        {this.state.selectedPlayers.slice(3,7).map((el,idx) =>(
             <PlayerImg playerImgSrc = {el.playerImgSrc} playerName={el.playerName}/>  )
        )}
        </Row>
        <Row style={{marginTop:"20px"}}>
        {this.state.selectedPlayers.slice(7,11).map((el,idx) =>(
             <PlayerImg playerImgSrc = {el.playerImgSrc} playerName={el.playerName}/>  )
        )}
        </Row>
        </div>
        </Col>
        <Col md="sm" style={{height:"94vh"}}>
        <TeamHeader credits = {this.state.credits} nPlayers = {this.state.nPlayers} team1ImgSrc= {this.props.location.state.team1+".png"} team2ImgSrc= {this.props.location.state.team2+".png"}  />
        </Col>
        </Row>
        
        </Container>
        </div>

    );
  }
}

export default withRouter(TeamMaker);