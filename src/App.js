import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col, Button,Alert,Breadcrumb,Card, Form } from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <form>
          <Row></Row>
          <Form.Group controlId="FormEmail">
            <Form.Label>
              Email Address
            </Form.Label>
            <Form.Control type="email" placeholder="Example@email.com"/>
            <Form.Label>
              Password
            </Form.Label>
            <Form.Control type="Password" placeholder="Password"/>
            </Form.Group>
        </form>
      <Button>sign in
      </Button>
        
        <Card>
          <Row>
            <Col>
          <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl12ZPeZYQ-6Qslu8apHh-E8zw3T1JyG4KqA&usqp=CAU/10/" width = "50px">

          </Card.Img>
          <Card.Body>
            <Card.Title>
              Card Example 
              </Card.Title>
              <Card.Text>
                example of react boostrap cards
              </Card.Text>
            
          </Card.Body>
          </Col>
          </Row>
        </Card>
       <Breadcrumb>
       <Breadcrumb.Item>Test</Breadcrumb.Item>
       <Breadcrumb.Item>Test2</Breadcrumb.Item>
       <Breadcrumb.Item active>Test3</Breadcrumb.Item>
       </Breadcrumb>
        <Alert variant="success">This is a button</Alert>
        <Button>Test Button</Button>
      </header>
    </div>
  );
}

export default App;
