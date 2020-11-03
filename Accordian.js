import React from 'react'
import {Accordion,Card,AccordionCollapse,Button} from 'react-bootstrap'
function Accordian(){
    return(
        <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Create Account
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
            sign in
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
                Email Address

            </Card.Body>
          </Accordion.Collapse>


          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
            Sign in
            </Accordion.Toggle>
            </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>  Password</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
       
        )
}
      export default Accordian;