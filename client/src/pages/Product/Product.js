import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct, getCurrentProduct } from "../../redux/productsRedux";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap"
import { addToCart } from "../../redux/cartRedux";
import formatPrice from "../../utils/formatPrice";

import styles from "./Product.module.scss";


const Product = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    const product = useSelector(getCurrentProduct);

    const [activeImage, setActiveImage] = useState(null);

    useEffect(() => {
        dispatch(fetchProduct(id));
    }, [dispatch, id])

    useEffect(() => {
        if(product) {
            setActiveImage(product.mainImage)
        }
    }, [product])

    if(!product) {
        return (
            <p>
                Loading...
            </p>
        )
    }

    const handleAddToCart = () => {
        const cartProduct = {
            productId: product.id,
            amount: 1,
            comment: ""
        }

        dispatch(addToCart(cartProduct));
    }

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

                <button onClick={handleAddToCart} className={styles.buttonPrimary}>Add to Cart</button>

            </div>
        </div>
            
        </Container>
    )
};

export default Product;