import React from 'react'
import {
    Container,
    Form,
    Col,
    Button,
    Card,
    Alert,
    Overlay,
    Popover,
} from 'react-bootstrap';

import Header from '../Header/Header';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            error: "",
            isAuthenticated: false,
            show : false,
        }
    };

    login(){

        
    }



    render(){

        return(
                <div>
                <Header />
                <Container>
                <Card  className="shadow"  border='info' style={{marginTop:'150px',fontSize:'18px', marginLeft: 'auto', marginRight: 'auto',   maxWidth : "374px"}}>
                <Card.Header style={{fontSize:"22px"}}> Login </Card.Header>
                <Card.Body>
                    <Form onSubmit={this.login} >
                                <Form.Group size='lg' controlId = "username">
                                    <Form.Label > Username </Form.Label>
                                    <Form.Control  type="text" name="username" value={this.state.username} onChange={this.handleUserNameChange} placeholder="Username" />
                                </Form.Group>
                                <Form.Group size='lg' controlId = 'password'>
                                    <Form.Label> Password </Form.Label>
                                    <Form.Control  type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} placeholder="Password" />
                                </Form.Group>
                              <Form.Group size="lg">
                                <Button block size="lg" type="submit" name="Login" >
                                Login
                                </Button>
                                </Form.Group>
                                <Col sm="3.9">
                                    {this.state.show && <Alert variant="danger" onClose={() => this.setState({show : false})} dismissible>

                        <p>
                                          {this.state.error}

                                     </p>
                            </Alert>}

                                </Col>
                     </Form>
                     </Card.Body>
                    </Card>

                </Container>
            </div>


        );


    }

}

export default Login;