import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import "./NavbarHome.css"
const NavbarHome = () => {
    
    const history = useHistory()
    const handleLogin = () => {
        history.push("/login")
    }
    return (
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Ellegance</Navbar.Brand>
      <Nav className="ml-auto link">
        <Nav.Link  to="/home">Home</Nav.Link>
        <Nav.Link to="/about">About</Nav.Link>
        <Nav.Link to="/services">Services</Nav.Link>
        <Nav.Link to="/projects">Projects</Nav.Link>
        <Nav.Link to="/reviews">Reviews</Nav.Link>
        <Nav.Link to="/contact">Contact Us</Nav.Link>
        <button onClick={()=>handleLogin()} className="btn btn-outline-warning ml-5">Log in</button>
      </Nav>
    </Navbar>
    );
};

export default NavbarHome;