import React from 'react'
import { Container, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'
import Carousel from './Carousel';
import New from './Navi';
function Home() {
  return (
    <Container>
      <div>
        <Carousel />
        <Card style={{ width: '50px', height: '50px' }}>
          <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl12ZPeZYQ-6Qslu8apHh-E8zw3T1JyG4KqA&usqp=CAU/10/" />
        </Card>

      </div>
    </Container>
  )
}
export default Home;