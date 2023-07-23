import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { NavDropdown, Form, FormControl, Button } from "react-bootstrap";

export default function HeaderNavigationHome(props) {



    return (
        <></>

        // <div style={{ backgroundColor: "black", zIndex: "1" }}>
        //     <Navbar bg="dark" variant="dark" expand="lg" className="">
        //         <Container fluid>
        //             <Navbar.Brand href="/home" className="text-warning">
        //                 <h3>TransX</h3>
        //             </Navbar.Brand>
        //             <Navbar.Toggle aria-controls="navbarScroll" />
        //             <Navbar.Collapse id="navbarScroll">
        //                 <Nav
        //                     className="me-auto my-2 my-lg-0 text-light"
        //                     style={{ maxHeight: "200px" }}
        //                     navbarScroll
        //                 >
        //                     <Nav.Link href="/home">HOME</Nav.Link>
        //                     <Nav.Link href="/Feature">FEATURES</Nav.Link>
        //                     <Nav.Link href="/Pricing">PRICING</Nav.Link>
        //                     <Nav.Link href="/Contact">CONTACT</Nav.Link>
        //                     <Nav.Link href="/About"> ABOUT US</Nav.Link>
        //                 </Nav>
        //                 <Form className="d-flex me-4">
        //                     <Button type="submit" variant="outline-warning" onClick={() => { session.clear(); navigate("/login") }}>
        //                         LOGOUT
        //                     </Button>
        //                 </Form>
        //                 <br></br>
        //                 <p className="text-white pt-2 ">
        //                     Welcome
        //                     <br />
        //                     <span>{props.name}</span>
        //                 </p>
        //             </Navbar.Collapse>
        //         </Container>
        //     </Navbar>
        //     );
        // </div>
    );
}