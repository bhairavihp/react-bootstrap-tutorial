import React from 'react'
import { Carousel } from 'react-bootstrap'

function MyCarousel(){

return(
<div>
    
<Carousel>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://www.diamondsinternational.com/files/3815/6441/8499/20190716_New_Arrivals_BlockBlock_1.jpg" 
      alt="Sixth slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXgAeHiRA98PTVwu3OrLRjTELI82c3KcNSbg&usqp=CAU" 
      alt="Sixth slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-50"
      src="https://renesabino.com/wp-content/uploads/2016/11/Levievs-Vivid-yellow-diamond-pendant.jpg" 
      alt="Sixth slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
    <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://smhttp-ssl-44145-mccaskill.nexcesscdn.net/pub/media/wysiwyg/1470x652_NO-TEXT_N-A_FF_DESKTOP_OP_41_m124300-0001_STATIC-JPEG.jpg" 
      alt="Sixth slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://www.bravotv.com/sites/bravo/files/styles/blog-post-embedded--mobile-1_5x/public/most-wanted-imposters-jewelry-2.jpg?itok=aF84b6lS" 
      alt="Sixth slide"
    />
    <Carousel.Caption>
      <h3>Fourth slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://pbs.twimg.com/media/Ei2wMunWAAUR-vL.jpg" 
      alt="Sixth slide"
    />
    <Carousel.Caption>
      <h3>Fifth slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://smhttp-ssl-44145-mccaskill.nexcesscdn.net/pub/media/wysiwyg/1470x652_NO-TEXT_N-A_FF_DESKTOP_OP_41_m124300-0001_STATIC-JPEG.jpg" 
      alt="Sixth slide"
    />
    

    <Carousel.Caption>
      <h3>six slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1593093803-fine-jewellery-mikimoto-1593093731.jpg"
      alt="Sixth slide"
    /></Carousel.Item>
</Carousel>

</div>
)
}

export default MyCarousel;