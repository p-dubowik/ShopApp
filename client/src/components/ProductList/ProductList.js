import { Row, Col, Container } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";

import styles from "./ProductList.module.scss";

const ProductList = ({ data }) => {
    return (
        <section className={styles.productsSection} id="products">
            <Container fluid="xl">

                <Row className={styles.sectionTitle}>
                    <h2>Our Products</h2>
                </Row>

                <Row>
                    {data.map(prod => (

                        <Col
                            key={prod.id}
                            md={4}
                            className="mb-4"
                        >

                            <ProductCard product={prod} />

                        </Col>

                    ))}
                </Row>

            </Container>
        </section>
    )
};

export default ProductList;