import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Row>
          <Col>
            PARALAX
          </Col>
          <Col>
            PARALAX 2
          </Col>
        </Row>
      </Container>
      <Button>Nasus</Button>
      <br/>
      About Me<br/>
      Projects<br/>
      Education<br/>
    </div>
  );
}

export default App;
