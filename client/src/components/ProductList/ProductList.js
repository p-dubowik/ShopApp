import { Row, Col } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({ data }) => {
    return (
        <Row className="g-4">

        {data.map(prod => (
            <Col md={4} className="mb-4" key={prod.id}>
                <ProductCard product={prod} />
            </Col>
        ))}
        </Row>
    )
};

export default ProductList;