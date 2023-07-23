import React from "react";
import "./Header.css";
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import swlogo from '../images/swlogo.jpg'


const Header = (props) => {

  const navigate = useNavigate();


  useEffect(() => {

    if (sessionStorage.getItem("userdata") !== null) {
      setflag(true)
      setname(JSON.parse(sessionStorage.getItem("userdata")).name)
    }

  }, [])


  const [flag, setflag] = useState(false)
  const [name, setname] = useState("")


  return (

    // <div>
    //   <nav class="navbar navbar-expand-lg navbar-info ">
    //     <div class="container-fluid">
    //       <a class="navbar-brand" href="/Login">
    //         TransX
    //       </a>
    //       <button
    //         class="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarNavAltMarkup"
    //         aria-controls="navbarNavAltMarkup"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span class="navbar-toggler-icon"></span>
    //       </button>
    //       <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    //         <div class="navbar-nav">
    //           <a class="nav-link active" aria-current="page" href="/Welcome">
    //             Home
    //           </a>
    //           <a class="nav-link" href="/Feature">
    //             Features
    //           </a>

    //           <a class="nav-link " href="#">
    //             Pricing
    //           </a>
    //           {/* <Link to="/contactus"> ContactUs</Link> */}
    //           <a class="nav-link" href="/Contactus">
    //             ContactUs
    //           </a>
    //           <a class="nav-link" href="/About">
    //             About
    //           </a>
    //           <div className="row d-flex">
    //             <div className=" col ms-5">
    //               <button type="button" class="btn btn-warning ">
    //                 <Link to="/Login" className="nav-links">
    //                   Login
    //                 </Link>
    //               </button>
    //               <button type="button" class="btn btn-info">
    //                 <Link to="/CustomerReg" className="nav-links">
    //                   Registration
    //                 </Link>
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </nav >
    // </div >
    //  =================================================/ fixed-top
    <Navbar bg="dark" variant="dark" expand="lg" className=" fixed-top " style={{ height: "60px" }}>
      <Container fluid>
        <Navbar.Brand href="/home" className="text-warning">

          <h2 className="title" style={{fontWeight:"bolder",color:"white"}}>DigiTek Computers</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "200px" }}
            navbarScroll
          >
            <Nav.Link href="/home">HOME</Nav.Link>
            {/* <Nav.Link href="/Feature">FEATURES</Nav.Link>
            <Nav.Link href="/Pricing">PRICING</Nav.Link> */}
            <Nav.Link href="/Contactus">CONTACT</Nav.Link>
            <Nav.Link href="/terms"> ABOUT US</Nav.Link>
          </Nav>
          {flag ? <> <Form className="d-flex me-4">
            <Button type="submit" variant="outline-warning"
              onClick={() => { sessionStorage.clear(); navigate('/login') }}>
              LOGOUT
            </Button>
          </Form>
            <br></br>
            <p className="text-white pt-2 ">
              Welcome,
              <br />
              <h2 className="badge bg-danger"><span className="">{name}</span></h2>
            </p> </> : <> <Form className="d-flex me-4">
              <Button type="submit" variant="outline-warning">
                <Link to="/Login" className="nav-links">
                  LOGIN
                </Link>

              </Button>
            </Form>
            <Form className="d-flex me-4">
              <Button type="submit" variant="outline-warning">

                <Link to="/CustomerReg" className="nav-links">
                  REGISTER
                </Link>
              </Button>
            </Form></>}

          <br></br>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );





};

export default Header;
