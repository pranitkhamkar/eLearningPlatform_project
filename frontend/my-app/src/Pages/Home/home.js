import { useNavigate } from "react-router";
import Signin from "../Signin";
import "./index.css";
import { Link } from "react-router-dom";
import WelcomeBar from "../../Components/welcomebar";
import React from "react";
import SearchBar from "../../Components/searchbars";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import Navibar from "../../Components/Navbar/Navibar";

const Home = () => {
  // get the logged in user's information
  const { id, firstName, lastName } = sessionStorage;
  const navigate = useNavigate();

  const logoutUser = () => {
    // remove the logged users details from session storage
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("firstName");
    sessionStorage.removeItem("lastName");
    sessionStorage.removeItem("loginStatus");

    // navigate to sign in component
    navigate("/signin");
  };

  return (
    <div>
      {/* <WelcomeBar/> */}
      <div className="row" style={{}}>
        <div className="col">{/* <SearchBar /> */}</div>
      </div>

      <Navibar />
      <div style={{ display: "block", width: 1120, padding: 1 }}>
        <Carousel>
          <Carousel.Item interval={2000}>
            <Carousel.Caption>
              // <h2 style={{ color: "orange" }}></h2>
            </Carousel.Caption>
            <img
              src={require("C:/E-Learning project/Frontend/my-app/src/Pages/images/eler.jpg")}
              className="img"
            ></img>
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <Carousel.Caption></Carousel.Caption>
            <img
              src={require("C:/E-Learning project/Frontend/my-app/src/Pages/images/elearning-education-internet-technology-webinar-600w-1139995139.webp")}
              className="img"
            ></img>
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <Carousel.Caption></Carousel.Caption>
            <img
              src={require("C:/E-Learning project/Frontend/my-app/src/Pages/images/el.webp")}
              className="img"
            ></img>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
