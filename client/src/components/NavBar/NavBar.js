import { useSelector } from "react-redux";
import { getCartItemsAmount } from "../../redux/cartRedux";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.scss"

const NavBar = () => {

    const cartItemsAmount = useSelector(getCartItemsAmount);

    return (
        <div>
            <Navbar className={`navbar fixed-top ${styles.navbar}`} expand="lg">
                <Container className={styles.container}>
                    <Navbar.Brand as={NavLink} to='/' className={styles.logo}>PROFFEE</Navbar.Brand>

                    <Navbar.Toggle />

                    <Navbar.Collapse>

                        <Nav className="ms-auto">

                            <NavLink to='/' className={({isActive}) => isActive ? styles.activeLink : styles.link}>Home</NavLink>

                            <NavLink to='/cart' className={({isActive}) => isActive ? styles.activeLink : styles.link}>
                                Cart

                                {cartItemsAmount > 0 && (
                                    <span className={styles.cartAmount}>{cartItemsAmount}</span>
                                )}
                            </NavLink>
                        </Nav>

                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    )
};

export default NavBar;