
import React from 'react'
import { Grid,Container,Row,Col } from 'react-bootstrap'
import Carousel from './Carousel';
import New from './Navi';
function Women(){

    return(
    <div>

<Container fluid>
  <Row>
    <Col xs={2}><New/></Col>
   
    <Col><Carousel /></Col>
  </Row>
</Container>

</div>
)
}

export default Women;