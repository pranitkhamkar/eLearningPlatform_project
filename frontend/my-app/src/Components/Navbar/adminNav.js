import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import './Navibar.css'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { toast } from 'react-toastify'

const AdminNav = () => {


  const navigate = useNavigate()
  const [show, setShow]= useState(true)

  let loginRegister

  const { firstName, loginStatus } = sessionStorage

  if (firstName != undefined) {
    loginRegister = `Hello, ${firstName}`
  } else {
    loginRegister = "Login"
  }

  const logoutUser = () => {
    // remove the logged users details from session storage

    if (firstName == undefined) {
      toast.warning("please login first")
    }

    sessionStorage.removeItem("id")
    sessionStorage.removeItem("firstName")
    sessionStorage.removeItem("lastName")
    sessionStorage.removeItem("loginStatus")

    // navigate to sign in component
    navigate("/home")
  }




  return (
<div >
<Navbar className='Main-Nav'>
  <Container fluid>
    <Navbar.Brand className='Brand' style={{color:"black"}} href="#">E-LEARNING</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
        <br/>
        <Navbar.Brand className='Brand' style={{color:"black"}} href="#">Admin Panal</Navbar.Brand>
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/courseChapter">CourseChapter</Nav.Link>
        <Nav.Link href="/coursechaptercontent">CourseChapterContent</Nav.Link>
        {/* <Nav.Link href="/Enrollment">enrollment</Nav.Link> */}
        <Nav.Link href="/admin">Courses</Nav.Link>
        <Nav.Link href="/user">User</Nav.Link>
        {/* <Nav.Link href="/Aboutus">Aboutus</Nav.Link> */}
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

      <Nav.Link style={{color:"black"}} href="/Profile">Profile</Nav.Link> 
      
      <button onClick={logoutUser}>Logout</button>
    

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

export default AdminNav