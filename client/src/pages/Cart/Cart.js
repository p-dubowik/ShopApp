import { useDispatch, useSelector } from "react-redux";
import { getCartProducts, updateAmount, updateComment, removeFromCart } from "../../redux/cartRedux";
import { getAllProducts } from "../../redux/productsRedux";
import { Button } from "react-bootstrap";

const Cart = () => {

    const dispatch = useDispatch();

    const cartProducts = useSelector(getCartProducts);
    const allProducts = useSelector(getAllProducts);

    return (
        <div>
            <h1>Cart</h1>

            {cartProducts.length === 0 && (
                <p>Cart empty</p>
            )}

            {cartProducts.map(cartItem => {

                const product = allProducts.find(product => product.id === cartItem.productId);

                if(!product) return null;

                return (
                    <div key={cartItem.productId}>
                        <h3>{product.name}</h3>
                        <p>Price: {product.price}</p>
                        <p>Amount: {cartItem.amount}</p>
                        <p>Comment: {cartItem.comment}</p>

                        <textarea
                        value={cartItem.comment}
                        onChange={(e) => dispatch(updateComment({
                            productId: cartItem.productId,
                            comment: e.target.value
                        }))}
                        />

                        <input
                        type="number"
                        value={cartItem.amount}
                        min="1"
                        onChange={(e) => dispatch(updateAmount({
                            productId: cartItem.productId,
                            amount: Number(e.target.value)
                        }))}
                        />

                        <div>
                            <Button>+</Button>
                            <Button>-</Button>
                            <Button variant="warning" onClick={() => dispatch(removeFromCart(cartItem.productId))}>Remove</Button>
                        </div>
                    </div>
                )
            })}

        </div>
    )
};

export default Cart;