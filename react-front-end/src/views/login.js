import React, { useContext } from 'react';
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';

import GigfinderContext from '../context/gigfinder/gigfinderContext.js';

function Login() {
  const gigfinderContext = useContext(GigfinderContext);
  const { loggedInUser } = gigfinderContext;

  const workerLogin = () => {
    gigfinderContext.logWorkerIn();
  };

  const employerLogin = () => {
    gigfinderContext.logEmployerIn();
  };

  const logout = () => {
    gigfinderContext.logOut();
  };


  const workerRegister = () => {
  };

  const employerRegister = () => {

  };

  return (
    <div>
      <h1>Super secure login page</h1>
      <Container>
        <Row>
          <Col>
            <Button className="m-2" onClick={workerLogin}>Worker Login</Button>
            <Button className="m-2" onClick={employerLogin}>Employer Login</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className="m-2" onClick={workerRegister}>Worker Register</Button>
            <Button className="m-2" onClick={employerRegister}>Employer Register</Button>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default Login;