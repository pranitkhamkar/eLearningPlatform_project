import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import './Navibar.css'

const Navibar = () => {
  return (
<div >
<Navbar className='Main-Nav'>
  <Container fluid>
    <Navbar.Brand  className='Brand' href="#">E-LEARNING</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
       
        navbarScroll
      >
        <Nav.Link href="/Home">Home</Nav.Link>
        <Nav.Link href="/Aboutus">Aboutus</Nav.Link>
        {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown> */}
        <Nav.Link href="/Courses" >
          Courses
        </Nav.Link>
      </Nav>

      <Nav.Link href="/Signin">Signin</Nav.Link> 
      <Nav.Link href="/Signup">Signup</Nav.Link>
      {/* <Nav.Link href="/logout">Logout</Nav.Link>
      <Nav.Link href="/profile">Profile</Nav.Link> */}
      

      {/* <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form> */}
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
  )
}

export default Navibar