import React, { useContext } from "react";
import "../stylesheets/NavigationBar.css";
import { Context } from "../../App";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LogoutIcon from "@mui/icons-material/Logout";

const NavigationBar = () => {
  const { loggedInDetails, dispatch, setUser } = useContext(Context);
  const navigate = useNavigate();
  const LogoutHandler = () => {
    setUser({})
    navigate("/")
    dispatch({
      type: "UserLogout",
    });
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className={loggedInDetails.userType ? "navbar" : "navbar-hidden"}
    >
      <Container>
        <Navbar.Brand to="/home" onClick={(e)=>{e.preventDefault();navigate("/home")}}>
          <div className="navbar-logo-div">
            <img src="/Images/airline-logo.png" className="logo-image" alt="" />
            <p className="airportName">INDIA INTERNATIONAL AIRPORT</p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link eventKey="home" href="/home"  onClick={(e)=>{e.preventDefault();navigate("/home")}}>
              <p>HOME</p>
            </Nav.Link>
            <Nav.Link eventKey="feedback" href="/feedback"  onClick={(e)=>{e.preventDefault();navigate("/feedback")}}>
              <p>FEEDBACK</p>
            </Nav.Link>
            <Nav.Link eventKey="about" href="/about"  onClick={(e)=>{e.preventDefault();navigate("/about")}}>
              <p>ABOUT</p>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey="logout" href="" onClick={LogoutHandler}>
              <p>
                LOGOUT &nbsp; <LogoutIcon />
              </p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
