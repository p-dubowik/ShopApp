import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct, getCurrentProduct } from "../../redux/productsRedux";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap"
import { addToCart } from "../../redux/cartRedux";

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
            
            
        </Container>
    )
};

export default Product;