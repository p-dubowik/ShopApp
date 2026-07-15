import { Link } from "react-router-dom";
import formatPrice from "../../utils/formatPrice";

import styles from "./ProductCard.module.scss";
import { useDispatch } from "react-redux";
import { addToCartRequest } from "../../redux/cartRedux";

const ProductCard = ({ product }) => {

    const dispatch = useDispatch();

    const price = formatPrice(product.price);

    const handleAddtoCart = () => {
        const cartProduct = {
            productId: product.id,
            amount: 1,
            comment: '',
        }

        dispatch(addToCartRequest(cartProduct));
    }
    return (
        <div className={styles.card}>

            <img src={product.mainImage} alt={product.name} className={styles.image}/>

            <div className={styles.content}>

                <h3 className={styles.productName}>{product.name}</h3>

                <p className={styles.description}>{product.description}</p>

                <div className={styles.bottom}>

                    <span className={styles.price}>{price}</span>

                    <div className={styles.buttons}>

                        <Link to={`/product/${product.id}`}>
                            <button className={styles.buttonPrimary}>More</button>
                        </Link>

                        <button className={styles.buttonSecondary}>Add to cart</button>

                    </div>
                    
                </div>

            </div>

        </div>
    )
};

export default ProductCard;