import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Menu(){

    return (
        <Navbar bg="light" expand = "lg">
            <Container>
                <Navbar.Brand href="#home">Recogida Paquetes</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='me-auto'>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/CrearOrdenes">Crear Ordenes</NavLink>
                        <NavLink to="/ActualizacionOrdenes">Actualizar Ordenes</NavLink>
                        <NavLink to="/RegistrarOrdenes">Registrar Ordenes</NavLink>
                        <NavLink to="/Signup">Regístrate</NavLink>
                        <NavLink to="/Login">Ingresa</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu