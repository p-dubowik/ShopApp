import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {

    return (
        <Card>

            <Card.Img
            src={product.mainImage}
            style={{height: '200px', objectFit: 'cover'}}
            />

            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text className="fw-bold">{product.price}</Card.Text>

                <Button
                variant="primary"
                as={Link}
                to={`/product/${product.id}`}>
                    To product
                </Button>
            </Card.Body>

        </Card>
    )
};

export default ProductCard;