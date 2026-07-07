import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Product</NavLink>
            <NavLink to="/checkout">Checkout</NavLink>
            <NavLink to="/cart">Cart</NavLink>
            NavBar
        </div>
    )
};

export default NavBar;