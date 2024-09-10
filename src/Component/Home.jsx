import React from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import '../Component/Component.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Home = () => {
    const navigate =useNavigate()
    const handle =()=>{
        navigate("/login")
    }
  return (
    <div>
        <button onClick={handle} className='login_btn d-none'>Login</button>
        <div className='Caoursole'>
          <Carousel >
        <Carousel.Item interval={500}>
        <img src={require("../Assets/3.jpg")} alt="" className='w-100'/>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
        <img src={require("../Assets/4.png")} alt=""className='w-100' />
        </Carousel.Item>
      </Carousel>
          </div>
       <div className=' mt-sm-4 mb-5'>
       <Container fluid style={{margin:"-5px"}}>
       <Row className="product_list">
            <Col lg={2} md={2} sm={4} xs={4}className='text-center pt-5 '><a href="/mobile" className='product_1'>Mobile</a></Col>
            <Col lg={2} md={2} sm={4} xs={4}className='text-center pt-5'><a href="/laptop" className='product_2'>Laptops</a></Col>
            <Col lg={2} md={2} sm={4} xs={4}className='text-center pt-5'><a href="/fashion" className='product_3'>Fashion</a></Col>
            <Col lg={2} md={2} sm={4} xs={4}className='text-center pt-5'><a href="/shoe" className='product_4'>Shoes</a></Col>
            <Col lg={2} md={2} sm={4} xs={4}className='text-center pt-5'><a href="/mobile" className='product_5'>Appliances</a></Col>
            <Col lg={2} md={2} sm={4} xs={4}className='text-center pt-5'><a href="/mobile" className='product_6'>Golds</a></Col>
        </Row>
       </Container>
       </div>
       <Container className='mb-4 '>
        <h3 className=''>Best Deals on Smartphones</h3>
        <div className="home_product">
          <div className="product_details">
           <div className="product_image">
            <img src={require('../Assets/Mobile (12).jpeg')} alt="" />
            </div>
            <p>Realme p1 5G</p>
            <h5>From $14,999</h5>
          </div>

          <div className="product_details">
           <div className="product_image">
            <img src={require('../Assets/Mobile (7).jpeg')} alt="" />
            </div>
            <p>Realme p1 5G</p>
            <h5>From $14,999</h5>
          </div>

          <div className="product_details">
           <div className="product_image">
            <img src={require('../Assets/Mobile (8).jpeg')} alt="" />
            </div>
            <p>Realme p1 5G</p>
            <h5>From $14,999</h5>
          </div>

          <div className="product_details">
           <div className="product_image">
            <img src={require('../Assets/Mobile (5).jpeg')} alt="" />
            </div>
            <p>Realme p1 5G</p>
            <h5>From $14,999</h5>
          </div>

          <div className="product_details">
           <div className="product_image">
            <img src={require('../Assets/Mobile (9).jpeg')} alt="" />
            </div>
            <p>Realme p1 5G</p>
            <h5>From $14,999</h5>
          </div>

          <div className="product_details">
           <div className="product_image">
            <img src={require('../Assets/Mobile (11).jpeg')} alt="" />
            </div>
            <p>Realme p1 5G</p>
            <h5>From $14,999</h5>
          </div><div className="product_details">
           <div className="product_image">
            <img src={require('../Assets/Mobile (1).jpeg')} alt="" />
            </div>
            <p>Realme p1 5G</p>
            <h5>From $14,999</h5>
          </div>
          

        
        </div>
       </Container>

       <Container fluid className='home_value'>
          <Row>
            <Col xs={12} sm={12} md={4} lg={4}><img src={require('../Assets/card (1).jpg')} alt="" className='img-fluid my-2' /></Col>
            <Col xs={12} sm={12} md={4} lg={4}><img src={require('../Assets/card (2).jpg')} alt=""className='img-fluid my-2' /></Col>
            <Col xs={12} sm={12} md={4} lg={4}><img src={require('../Assets/card (1).png')} alt=""className='img-fluid my-2' /></Col>
          </Row>
       </Container>

       <Container fluid className='home_value'> 
       <h3 className=''>Best Deals on Fashion</h3>
        <div className="home_product">
          <div className="product_details">
           <div className="product_image">
            <img src={require('../Assets/fashion (1).jpeg')} alt="" />
            </div>
            <p>Realme p1 5G</p>
            <h5>From $14,999</h5>
          </div>
          <div className="product_details">
           <div className="product_image">
            <img src={require('../Assets/fashion (2).jpeg')} alt="" />
            </div>
            <p>Realme p1 5G</p>
            <h5>From $14,999</h5>
          </div>
          <div className="product_details">
           <div className="product_image">
            <img src={require('../Assets/fashion (4).jpeg')} alt="" />
            </div>
            <p>Realme p1 5G</p>
            <h5>From $14,999</h5>
          </div>
          <div className="product_details">
           <div className="product_image">
            <img src={require('../Assets/fashion (5).jpeg')} alt="" />
            </div>
            <p>Realme p1 5G</p>
            <h5>From $14,999</h5>
          </div>
          <div className="product_details">
           <div className="product_image">
            <img src={require('../Assets/fashion (6).jpeg')} alt="" />
            </div>
            <p>Realme p1 5G</p>
            <h5>From $14,999</h5>
          </div>
          <div className="product_details">
           <div className="product_image">
            <img src={require('../Assets/fashion (1).jpg')} alt="" />
            </div>
            <p>Realme p1 5G</p>
            <h5>From $14,999</h5>
          </div>
          <div className="product_details">
           <div className="product_image">
            <img src={require('../Assets/fashion (3).jpeg')} alt="" />
            </div>
            <p>Realme p1 5G</p>
            <h5>From $14,999</h5>
          </div>
          </div>
       </Container>
       
       <div className='Caoursole'>
        <Carousel>
      <Carousel.Item interval={3000}>
      <img src={require("../Assets/cursole.jpeg")} alt="" className='w-100'/>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img src={require("../Assets/cursole (2).jpeg")} alt="" className='w-100'/>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img src={require("../Assets/cursole (1).jpg")} alt=""className='w-100' />
      </Carousel.Item>
    </Carousel>
        </div>

        <Container fluid className='home_value'>
          <Row>
            <Col xs={12} sm={12} md={4} lg={4}><img src={require('../Assets/card2 (1).jpeg')} alt="" className='img-fluid my-2' /></Col>
            <Col xs={12} sm={12} md={4} lg={4}><img src={require('../Assets/card2 (2).jpeg')} alt=""className='img-fluid my-2' /></Col>
            <Col xs={12} sm={12} md={4} lg={4}><img src={require('../Assets/card2 (1).png')} alt=""className='img-fluid my-2' /></Col>
          </Row>
       </Container>

       <div className=' text-center'>
        <button className='load_btn my-4'>Load More...</button>
       </div>
    </div>
  )
}

export default Home
