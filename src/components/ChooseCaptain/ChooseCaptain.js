import React from 'react';
import {withRouter} from 'react-router-dom'
import Header from '../Header/Header';
import PlayerBlocks from '../PlayerBlocks/PlayerBlocks';
import Container from 'react-bootstrap/Container';
import ContinueButton from '../ContinueButton/ContinueButton';
import Card from 'react-bootstrap/Card'
class ChooseCaptain extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            selectedCaptain: "",
            selectedVCaptain: "",
            continue: false,
            
        };   
        console.log(this.props)
        this.updateCaptains = this.updateCaptains.bind(this);
        this.onContinue = this.onContinue.bind(this);

    }

    onContinue = () => {
        console.log(this.props.location.state.matchId)
        this.props.history.push({
          pathname: '/startMatch',
          state: {team1:this.props.location.state.team1, team2:this.props.location.state.team2, matchId: this.props.location.state.matchId, selectedPlayers : this.props.location.state.selectedPlayers, captain:this.state.selectedCaptain, vcaptain:this.state.selectedVCaptain}
        });
    }
    validateButton = () => {
        if(this.state.selectedCaptain !== "" & this.state.selectedVCaptain !== "" ){  //Change to 11
            this.setState({continue: true})
      }
      else{
        this.setState({continue:false})
      }
    }

    updateCaptains(buttonText, selectedName){
        if(buttonText.trim()==="C"){
            if(this.state.selectedVCaptain === selectedName){
                this.setState({selectedVCaptain : ""});
            }
            this.setState({selectedCaptain: selectedName}, ()=>this.validateButton())}
        else{
            if(this.state.selectedCaptain === selectedName){
                this.setState({selectedCaptain : ""});
            }
            this.setState({selectedVCaptain: selectedName}, ()=>this.validateButton())
        }


    }

    render(){
        var players = [{
            id: 1,
            playerName: "S.Samson",
            playerCredits: "9.5",
            playerImgSrc: "/S.Samson.png"
    },
        {
            id: 2,
            playerName: "J.Buttler",
            playerCredits: "9.5",
            playerImgSrc: "/J.Buttler.png"
    },
        {
            id: 3,
            playerName: "D. Karthik",
            playerCredits: "8.5",
            playerImgSrc: "/D.Karthik.png"
    },]

        return(
            <div>
            <Header />
            <Card className="text-center" style={{backgroundColor: "#bbbbbb6e"}}>
                <Card.Body style={{fontSize:"20px"}}>Choose your captain and vice captain.</Card.Body>
                <Card.Body style={{fontSize:"20px"}}>Captain gets 2x points and Vice captain gets 1.5x points</Card.Body>
            </Card>
            <Container style={{marginTop:"10px"}}>
            { this.props.location.state.selectedPlayers.map((el,idx) => (
            <PlayerBlocks className={"mx-auto mt-0 shadow"} updateCaptains = {this.updateCaptains} isVActive = {el.playerName === this.state.selectedVCaptain} isCActive = {el.playerName === this.state.selectedCaptain} playerName = {el.playerName} playerCredits = {el.playerCredits} playerImgSrc = {el.playerImgSrc} updateCredits = {this.OnPlayerClick} forCaptain={true}/>
        )) } 
            </Container>
            
            <ContinueButton maxWidth={"100%"}continue={this.state.continue} onContinue={this.onContinue}/>
            </div>
        );


    }


}

export default withRouter(ChooseCaptain);