import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartProducts, updateAmount, updateComment, removeFromCart } from "../../redux/cartRedux";
import { getAllProducts } from "../../redux/productsRedux";
import formatPrice from "../../utils/formatPrice";
import styles from "./Cart.module.scss"

const Cart = () => {

    const dispatch = useDispatch();

    const cartProducts = useSelector(getCartProducts);
    const allProducts = useSelector(getAllProducts);

    const totalPrice = cartProducts.reduce((sum, item) => {

        const product = allProducts.find(p => p.id === item.productId);

        if(!product) return sum;

        return sum + product.price * item.amount;
    }, 0)

    return (
        <div className={styles.cart}>

            <h1>Your Products</h1>

            {cartProducts.length === 0 && (
                <p>Your cart is empty</p>
            )}

            {cartProducts.map(item => {
                const product = allProducts.find(prod => prod.id === item.productId);

                if(!product) return null;

                return (
                    <div key={item.productId} className={styles.cartItem}>

                        <img src={product.mainImage} alt={product.name} className={styles.image}/>

                        <div className={styles.itemInfo}>
                            <h3>{product.name}</h3>
                            <p>Price: {formatPrice(product.price)}</p>


                            <div className={styles.amount}>

                                <button
                                    onClick={() => dispatch(updateAmount({
                                        productId: item.productId,
                                        amount: item.amount +1
                                    }))}
                                    >
                                    +
                                </button>

                                <span>{item.amount}</span>

                                <button
                                    disabled={item.amount <= 1}
                                    onClick={() => dispatch(updateAmount({
                                        productId: item.productId,
                                        amount: item.amount -1
                                    }))}
                                    >
                                    -
                                </button>

                            </div>

                            <textarea
                                value={item.comment}
                                placeholder="Comment..."
                                onChange={(e) => dispatch(updateComment({
                                    productId: item.productId,
                                    comment: e.target.value
                                }))}
                            />
                            
                        </div>
                            
                        <button 
                        onClick={() => dispatch(removeFromCart(item.productId))} 
                        className={styles.remove}
                        >
                            Remove
                        </button>


                    </div>
                )
            })}

            {cartProducts.length > 0 && (
                <div className={styles.summary}>

                    <h2>Total: {formatPrice(totalPrice)}</h2>

                    <Link to="/checkout" className={styles.buttonPrimary}>
                        Checkout
                    </Link>

                </div>
            )}

        </div>
    )
};

export default Cart;