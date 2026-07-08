import { Row, Col } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({ data }) => {
    return (
        <Row className="g-4">

        {data.map(prod => (
            <Col>
                <ProductCard product={prod} />
            </Col>
        ))}
        </Row>
    )
};

export default ProductList;