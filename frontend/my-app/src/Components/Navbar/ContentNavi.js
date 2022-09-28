import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import './Navibar.css'

const ContentNavi = () => {
  return (
<div >
<Navbar className='Main-Nav'>
  <Container fluid>
    <Navbar.Brand className='Brand' style={{color:"black"}} href="#">E-LEARNING</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        {/* <Nav.Link href="/Home">Home</Nav.Link>
        <Nav.Link href="/Aboutus">Aboutus</Nav.Link> */}
        {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown> */}
        {/* <Nav.Link href="/UserCourses" >
          Courses
        </Nav.Link> */}
      </Nav>
      <Nav.Link style={{color:"black"}} href="/usercourses">Courses</Nav.Link>
      <Nav.Link style={{color:"black"}} href="/Profile">Profile</Nav.Link> 
      <Nav.Link style={{color:"black"}} href="/home">Logout</Nav.Link>

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

export default ContentNavi