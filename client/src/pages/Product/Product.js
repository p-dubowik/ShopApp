import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct, getCurrentProduct, getProductsLoading, getProductsError } from "../../redux/productsRedux";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap"
import { addToCart } from "../../redux/cartRedux";
import formatPrice from "../../utils/formatPrice";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import Loader from "../../components/Loader/Loader";

import styles from "./Product.module.scss";


const Product = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    const product = useSelector(getCurrentProduct);
    const loading = useSelector(getProductsLoading);
    const error = useSelector(getProductsError);

    const [activeImage, setActiveImage] = useState(null);

    const [amount, setAmount] = useState(1);

    useEffect(() => {
        dispatch(fetchProduct(id));
    }, [dispatch, id])

    useEffect(() => {
        if(product) {
            setActiveImage(product.mainImage)
        }
    }, [product])

    if(loading) {
        return (
            <Loader />
        )
    }

    if(error) {
        return (
            <ErrorMessage message={error} onRetry={() => dispatch(fetchProduct(id))} />
        )
    }

    if(!product) {
        return null;
    }

    const handleAddToCart = () => {
        const cartProduct = {
            productId: product.id,
            amount,
            comment: ""
        }

        dispatch(addToCart(cartProduct));
    }

    const increaseAmount = () => {
        setAmount(prev => prev + 1);
    };

    const decreaseAmount = () => {
        if(amount > 1) {
            setAmount(prev => prev - 1);
        }
    };

    return (
        <Container className={styles.container}>

        <div className={styles.product}>

            <div className={styles.gallery}>

                <div className={styles.thumbnails}>

                    <img
                    src={product.mainImage}
                    className={styles.thumbnail}
                    onClick={() => setActiveImage(product.mainImage)}
                    />

                    {product.images.map(image => (

                        <img
                        key={image.id}
                        src={image.imageUrl}
                        className={styles.thumbnail}
                        onClick={() => setActiveImage(image.imageUrl)}
                        />

                    ))}

                </div>

                <img
                src={activeImage}
                alt={product.name}
                className={styles.mainImage}
                />
            </div>

            <div className={styles.info}>

                <h1>{product.name}</h1>

                <p className={styles.price}>{formatPrice(product.price)}</p>

                <p>{product.description}</p>

                <div className={styles.amount}>
                    <button onClick={decreaseAmount}>
                        -
                    </button>

                    <span>{amount}</span>

                    <button onClick={increaseAmount}>
                        +
                    </button>
                </div>

                <button onClick={handleAddToCart} className={styles.buttonPrimary}>Add to Cart</button>

            </div>
        </div>
            
        </Container>
    )
};

export default Product;