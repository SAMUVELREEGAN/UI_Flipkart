import React from 'react'
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../Component/Component.css'

const Header = () => {
  return (
    <div>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-light mb-3">
          <Container fluid>
            <Navbar.Brand href="/" className='nav_logo w-75 d-flex ps-lg-5'><img src="logo.png" className='nav_img ' alt='Error'/>
            <Form className="d-flex w-75">
                  <Form.Control
                    type="search"
                    placeholder="Search for Products,Brands and More"
                    className="ms-5 nav_search pe-lg-5"
                    aria-label="Search"
                  />                
                  </Form>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3 mx-3">
                  <Nav.Link href="/login" className='me-5'>Login</Nav.Link>
                  <Nav.Link href="/" className='me-5'>Home</Nav.Link>
                  <Nav.Link href="/cart" className='me-5'>Cart</Nav.Link>
                  <NavDropdown
                    title="My Profile"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Ordres</NavDropdown.Item>
                    <NavDropdown.Item href="#action3">Rewards</NavDropdown.Item>
                    <NavDropdown.Item href="#action3">Wishlist</NavDropdown.Item>
                 
                  </NavDropdown>
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  )
}

export default Header