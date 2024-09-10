import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';

const Shoe = ({ name, description, imageUrl, price }) => {
  return (
    <Container fluid>
    <Row>

<Col lg={2} xs={12} className='side_bar  d-none d-lg-block '>
</Col>

<Col lg={10} xs={12}>
<Row className="product-card mb-4"> 
  <Col xs={12} sm={4} md={3} lg={3} >
  <div className="product-image">
  <img src={imageUrl} alt={name}   className="img-fluid ps-lg-5"/>  
  </div> 
  </Col>
  <Col xs={12} sm={8} md={6 } lg={6} className="product-info">
    <h3>{name}</h3>
    <p>{description}</p>
  </Col>
  <Col xs={12} md={3} lg={3}>
    <div className="price_details">
    <h3 className='ms-lg-2'>Price: {price}$</h3>
    </div>
    <button className='btn_1 '>ADD TO CART</button>
    <button className='btn_2 '>BUY NOW</button>
  </Col>
</Row>
</Col>
</Row>
   </Container>
  )
}

export default Shoe