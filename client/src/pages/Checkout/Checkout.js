import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { clearCartRequest, getCartProducts } from "../../redux/cartRedux";
import { getAllProducts } from "../../redux/productsRedux";
import { getOrder, submitOrder, getOrderLoading, getOrderError } from "../../redux/ordersRedux";
import { Spinner } from "react-bootstrap";
import formatPrice from "../../utils/formatPrice";

import styles from "./Checkout.module.scss"
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const Checkout = () => {

    const dispatch = useDispatch();

    const cart = useSelector(getCartProducts);
    const products = useSelector(getAllProducts);
    const order = useSelector(getOrder);

    const loading = useSelector(getOrderLoading);
    const error = useSelector(getOrderError);

    const [form, setForm] = useState({
        customerName: '',
        email: '',
        phone: '',
    })

    useEffect(() => {
        if(order) {
            dispatch(clearCartRequest());
        }
    }, [order, dispatch]);

    if(order) {
        return (
            <div>
                <h1>Thank you for your order!</h1>

                <p>Order placed successfully</p>

                <p>Order ID: {order.id}</p>
            </div>
        )
    }




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
        <div className={styles.checkout}>

            <h1>Checkout</h1>

            <div className={styles.layout}>

                <div className={styles.products}>
                    <h2>Your Products</h2>


                    {cart.map(cartItem => {
                        
                        const product = products.find(product => product.id === cartItem.productId);
                        
                        if(!product) return null;
                        
                        return (
                            <div key={cartItem.productId} className={styles.product}>

                                <img
                                    src={product.mainImage}
                                    alt={product.name}
                                    />

                                <div>

                                    <h3>{product.name}</h3>

                                    <p>Amount: {cartItem.amount}</p>

                                    <p>Price: {formatPrice(product.price)}</p>

                                </div>

                            </div>
                        )
                    })}

                </div>

                    {error && (
                        <ErrorMessage message={error} onRetry={() => dispatch(submitOrder(data))} />
                    )}

                <div className={styles.form}>
                    
                    <h2>Your details</h2>

                    <label htmlFor="customerName">Name</label>
                    <input
                    id="customerName"
                    name="customerName"
                    value={form.customerName}
                    onChange={handleChange}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    />

                    <label htmlFor="phone">Phone Number</label>
                    <input
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    />

                    <button 
                    disabled={loading}
                    onClick={() => dispatch(submitOrder(data))} 
                    className={styles.buttonPrimary}
                    >
                        {
                            loading && (
                                <Spinner size='sm' className='me-2' />
                            )
                        }
                        {
                            loading? "Sending" : "ORDER"
                        }
                        </button>

                </div>

            </div>

        </div>
    )
};

export default Checkout;