import './Header.css'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { Badge, Select } from '@mui/material'
import { LocationOn, MenuOutlined, PeopleAlt, ShoppingCartOutlined } from '@material-ui/icons'
import { Button } from '@mui/material'
import { useState } from 'react'


const Header = () => {

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
    <div  >
      <div className="row" >
        <div className="col">
          <nav className="navbar navbar-expand-lg navbar-light navbar-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="/home"><h1>CarCare</h1></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                <div className="navbar-nav">

                  <a className="nav-link active" aria-current="page" href="/home">Home</a>

                  <a className="nav-link active" href="/aboutus">About us</a>
                  <a className="nav-link active" href="/contactus">Contact Us</a>
                  <a className="nav-link active" href="/services">Services</a>


                </div>
              </div>

              {/* Book Now */}
              <div className="col">
                <div className="book-now" style={{float:"right"}}>
                  <button className="btn btn-primary rounded-circle" onClick={() => {
                   if (firstName != undefined) {
                    navigate("/shops")
                  } else {
                    navigate("/signin")
                  }
                  }}>Book Now</button>
                </div>
              </div>



              {/* user login */}
              <div className="col">
                  
              </div>


              <div className='row'>
              



                <div className='col' style={{ margin: 10 }}>
                  <Button variant="outlined" type="button" class="btn btn-dark" onClick={() => {
                    if (loginStatus != 1) {
                      navigate("/signin")
                    }
                  }}
                  >
                    <PeopleAlt />
                    {loginRegister}
                  </Button>

                  <span>
                    <button
                      id="menu-button"
                      type="button"
                      className="menu-button-home"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <MenuOutlined />

                    </button>
                    
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      {/* <li>
                        <a className="dropdown-item">Profile</a>
                      </li> */}
                      <li>
                        <button onClick={logoutUser} className="dropdown-item">
                          Logout
                        </button>
                      </li>
                    </ul>
                  </span>

                    

                </div>

              </div>

            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Headerimport './Header.css'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { Badge, Select } from '@mui/material'
import { LocationOn, MenuOutlined, PeopleAlt, ShoppingCartOutlined } from '@material-ui/icons'
import { Button } from '@mui/material'
import { useState } from 'react'


const Header = () => {

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
    <div  >
  



              {/* user login */}
              <div className="col">
                  
              </div>


              <div className='row'>
              



                <div className='col' style={{ margin: 10 }}>
                  <Button variant="outlined" type="button" class="btn btn-dark" onClick={() => {
                    if (loginStatus != 1) {
                      navigate("/signin")
                    }
                  }}
                  >
                    <PeopleAlt />
                    {loginRegister}
                  </Button>

                  <span>
                    <button
                      id="menu-button"
                      type="button"
                      className="menu-button-home"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <MenuOutlined />

                    </button>
                    
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      {/* <li>
                        <a className="dropdown-item">Profile</a>
                      </li> */}
                      <li>
                        <button onClick={logoutUser} className="dropdown-item">
                          Logout
                        </button>
                      </li>
                    </ul>
                  </span>

                    

                </div>

             
      </div>
    </div>
  )
}

export default Header