import React from 'react';
import Blocks from '../Blocks/Blocks.js'
import axios from 'axios';
import Names from './NameMatcher.json'
class Matches extends React.Component {
    state = {
        matches : [],
    }
    componentDidMount(){
        axios.get("/matches",{
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
          },
        })
        .then(response => this.setState({matches:response.data}))
}
    render(){
        
        var matches = [{
                id: 1,
                info:{
                  teams:[ "PBSK" , "MI"]
                }
            },
            {
                id: 1,
                team1: "CSK",
                team2: "MI",

            },
            {
                id: 1,
                team1: "SRH",
                team2: "MI",

        }]
        console.log(this.state.matches[0])

      return (
        <div>
            {this.state.matches.map((el, idx) => {
              console.log(el._id)
            return <Blocks team1={ Names[el.info.teams[0]]} team2={Names[el.info.teams[1]]} matchId={el._id} />
      })}
      </div>
  
      );
    }
  }
  
  export default Matches;