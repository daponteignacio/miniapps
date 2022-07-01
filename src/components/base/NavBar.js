import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const NavBar = ({setApp}) => {

  

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">MiniApps</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink onClick={() => setApp(true)} className='nav-link' to="/media-browser">Buscador de assets</NavLink>
            <NavLink onClick={() => setApp(true)} className='nav-link' to="/compound-interest">Interés compuesto</NavLink>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
