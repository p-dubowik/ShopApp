import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = () => {
    return (
        <div>
            <Navbar expand='lg'>
                <Navbar.Brand as={NavLink} to='/'>CoffeeShop</Navbar.Brand>

                <Nav className="ms-auto">
                    <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                    <Nav.Link as={NavLink} to='/cart'>Cart</Nav.Link>
                    <Nav.Link as={NavLink} to='/checkout'>Checkout</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
};

export default NavBar;