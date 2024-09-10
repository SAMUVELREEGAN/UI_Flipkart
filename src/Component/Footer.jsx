import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Component/Component.css'

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <Container fluid >
          <Row className='footer_details pt-5 '>
            <Col lg={2} md={6} sm={6} xs={6}>
            <h6>ABOUT :</h6>
            <ul className='footer_info'>
              <li>Contact US</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Flipkart Store</li>
              <li>Press</li>
            </ul>
            </Col>
            <Col lg={2} md={6} sm={6} xs={6}>
            <h6>GROUP COMPANIES :</h6>
            <ul className='footer_info'>
              <li>Myntra</li>
              <li>Cleartrip</li>
              <li>Shopsy</li>
            </ul>
            </Col>
            <Col lg={2} md={6} sm={6} xs={6}>
            <h6>HELP :</h6>
            <ul className='footer_info'>
              <li>Payments</li>
              <li>Shipping</li>
              <li>Cancellation & Retruns</li>
              <li>FAQ</li>
              <li>Report</li>
            </ul>
            </Col>
            <Col lg={2} md={6} sm={6} xs={6}>
            <h6>CONSUMER POLICY :</h6>
            <ul className='footer_info'>
              <li>Terms of Use</li>
              <li>Security</li>
              <li>Priacy</li>
              <li>Sitemap</li>
              <li>Redressai</li>
              <li>EPR compiance</li>
            </ul>
            </Col>
            <Col lg={2} md={6} sm={6} xs={6}>
            <h6>MAIL US :</h6>
            <ul className='footer_info'>
              <li>Flipkar Internet Private Limit,</li>
              <li>Builiding India,Clove</li>
              <li>tech Village</li>
              <li>Outer Ring Road</li>
              <li>Bengaluru</li>
              <li>Karnataka,India</li>
            </ul>
            </Col>
            <Col lg={2} md={6} sm={6} xs={6}>
            <h6>OFFICE ADDRESS :</h6>
            <ul className='footer_info'>
            <li>Flipkar Internet Private Limit,</li>
              <li>Builiding India,Clove</li>
              <li>tech Village</li>
              <li>Outer Ring Road</li>
              <li>Bengaluru</li>
              <li>Karnataka,India</li>
              <li>CIN: U576342872</li>
              <li>TELEPHONE:</li>
              <li><span className='text-primary'>044-3456543/ 044-543234567</span></li>
            </ul>
            </Col>
          </Row>
        </Container>
    </div>
    </footer>
  )
}

export default Footer