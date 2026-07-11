import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.scss"

const NavBar = () => {
    return (
        <div>
            <Navbar className={styles.navbar} expand="lg">
                <Container className={styles.container}>
                    <Navbar.Brand as={NavLink} to='/' className={styles.logo}>PROFFEE</Navbar.Brand>

                    <Navbar.Toggle />

                    <Navbar.Collapse>

                        <Nav className="ms-auto">

                            <NavLink to='/' className={({isActive}) => isActive ? styles.activeLink : styles.link}>Home</NavLink>

                            <NavLink to='/cart' className={({isActive}) => isActive ? styles.activeLink : styles.link}>Cart</NavLink>
                        </Nav>

                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    )
};

export default NavBar;