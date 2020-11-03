import React from 'react'
import { Accordion, Card, AccordionCollapse, Button, Form } from 'react-bootstrap'

function CreateAccount() {
    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Create Account
            </Accordion.Toggle>
                </Card.Header>
                    <Card.Body>
                        <form>
                            <Form.Group controlId="FormEmail">
                                <Form.Label>
                                    Email Address
            </Form.Label>
                                <Form.Control type="email" placeholder="Example@email.com" />
                                <Form.Label>
                                    Password
            </Form.Label>
                                <Form.Control type="Password" placeholder="Password" />
                                <Form.Label>
                                    Confirm Password
            </Form.Label>
                                <Form.Control type="Password" placeholder="Password" />
                            </Form.Group>
                        </form>


                        <Button>sign in
      </Button>
                    </Card.Body>
            </Card>
        </Accordion>

    )
}
export default CreateAccount;