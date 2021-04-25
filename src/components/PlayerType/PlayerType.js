import React from react;
import Nav from 'react-bootstrap/Nav'


class PlayerType extends React.Component{

    render(){

        return (
            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                    Disabled
                    </Nav.Link>
                </Nav.Item>
</Nav>

        );


    }


}


export default PlayerType;