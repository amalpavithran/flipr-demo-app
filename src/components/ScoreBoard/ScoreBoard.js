import React from  'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './ScoreBoard.css'
class ScoreBoard extends React.Component{
    constructor(props){
        super(props)
        this.state={
                gridApi : null,
                gridColumnApi: null,
                columnDefs: [
                    { headerName: "MI VS RCB", children:[
                        { headerName: "Player Data", children:[
                        { headerName: 'Player Name',  field: 'playerName' },
                        { headerName: 'Team', field: 'playerTeam' },]},
                        { headerName: 'Batting Data', children:[
                            { headerName: 'R', field: 'battingData.runs' , width: 60,},
                            { headerName: 'B', field: 'battingData.balls' , width: 60,},
                            { headerName: '4s', field: 'battingData.4s' , width: 80,},
                            { headerName: '6s', field: 'battingData.6s' , width: 80,},
                        ]},
                        { headerName: 'Bowling Data', children:[
                            { headerName: 'O', field: 'bowlingData.overs' , width: 80,},
                            { headerName: 'R', field: 'bowlingData.runs' , width: 80,},
                            { headerName: 'W', field: 'bowlingData.wickets' , width: 80,},
                        ]},
                        {children:[
                        { headerName: 'Points', field: 'points' , width:100},]},
                    ]},
                ],
                

        };
            this.onGridReady = this.onGridReady.bind(this)
    }


    onGridReady(params){
            this.setState({gridApi : params.api, gridColumnApi:params.columnApi});
    }



    render(){
        // console.log("HERE")
        // console.log(this.props.rowData)
        return(
            <div className="ag-theme-alpine" style={{ height: 608.35, width: 1025, "overflow-x": "hidden", "overflow-y": "hidden"}}>
            <AgGridReact 
                onGridReady={this.onGridReady}
                rowData={this.props.rowData}
                suppressHorizontalScroll={true}
                defaultColDef={{
                    sortable: true,
                    resizable: true,
                    filter: true,
                  }}
                columnDefs={this.state.columnDefs}>
                <AgGridColumn headerName="MI VS RCB" > 
                <AgGridColumn field="playerName"></AgGridColumn>
                <AgGridColumn field="playerTeam"></AgGridColumn>
                <AgGridColumn headerName="Batting Data" style={{color:"#70757a", fontSize:"15px"}}>
                <AgGridColumn field="battingData.balls"></AgGridColumn>
                <AgGridColumn field="battingData.runs"></AgGridColumn>
                <AgGridColumn field="battingData.4s"></AgGridColumn>
                <AgGridColumn field="battingData.6s"></AgGridColumn>
                </AgGridColumn>
                <AgGridColumn headerName="Bowling Data">
                <AgGridColumn field="bowlingData.overs"></AgGridColumn>
                <AgGridColumn field="bowlingData.overs"></AgGridColumn>
                <AgGridColumn field="bowlingData.overs"></AgGridColumn>
                </AgGridColumn>
                <AgGridColumn field="bowlingData.overs"></AgGridColumn>
                </AgGridColumn>
            </AgGridReact>
            </div>
        );

    }

}

export default ScoreBoard;