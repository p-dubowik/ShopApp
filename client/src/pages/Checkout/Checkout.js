import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { clearCart, getCartProducts } from "../../redux/cartRedux";
import { getAllProducts } from "../../redux/productsRedux";
import { getOrder, submitOrder } from "../../redux/ordersRedux";

const Checkout = () => {

    const dispatch = useDispatch();

    const cart = useSelector(getCartProducts);
    const products = useSelector(getAllProducts);
    const order = useSelector(getOrder);

    useEffect(() => {
        if(order) {
            dispatch(clearCart());
        }
    }, [order, dispatch]);

    const [form, setForm] = useState({
        customerName: '',
        email: '',
        phone: '',
    })

    const data = {
        ...form,
        items: cart,
    }

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div>
            <h1>Checkout</h1>

            <h3>Products</h3>

            {cart.map(cartItem => {

                const product = products.find(product => product.id === cartItem.productId);

                if(!product) return null;

                return (
                    <div key={cartItem.productId}>
                        <h3>{product.name}</h3>
                        <p>Price: {product.price}</p>
                        <p>Amount: {cartItem.amount}</p>
                        <p>Comment: {cartItem.comment}</p>
                    </div>
                )
            })}

            {products.map(p => (
                <div key={p.id}>{p.id}</div>
            ))}

            <p>Name:</p>
            <input
            name="customerName"
            value={form.customerName}
            onChange={handleChange}
            />
            <p>email:</p>
            <input
            name="email"
            value={form.email}
            onChange={handleChange}
            />
            <p>phone:</p>
            <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            />

            <button onClick={() => dispatch(submitOrder(data))}>ORDER</button>
        </div>
    )
};

export default Checkout;