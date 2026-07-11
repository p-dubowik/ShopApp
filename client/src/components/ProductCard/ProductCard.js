import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import formatPrice from "../../utils/formatPrice";

import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }) => {

    const price = formatPrice(product.price);
    return (
        <Card className={styles.card}>

            <Card.Img
            variant="top"
            src={product.mainImage}
            className={styles.image}
            />

            <Card.Body>

                <Card.Title className={styles.title}>{product.name}</Card.Title>
                <Card.Text className={styles.description}>{product.description}</Card.Text>
                <Card.Text className={styles.price}>{price}</Card.Text>

                <Link to={`product/${product.id}`}>
                    <Button className={styles.button}>
                        More...
                    </Button>
                </Link>
            </Card.Body>

        </Card>
    )
};

export default ProductCard;