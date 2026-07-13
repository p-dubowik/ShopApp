import { Row, Col, Container } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";
import ProductCardSkeleton from "../ProductCardSkeleton.js/ProductCardSkeleton";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import styles from "./ProductList.module.scss";

const ProductList = ({ data, loading, error, onRetry }) => {
    return (
        <section className={styles.productsSection} id="products">
            <Container fluid="xl">

                <Row className={styles.sectionTitle}>
                    <h2>Our Products</h2>
                </Row>

                <Row>
                {
                    loading && (
                        Array.from({length: 6}).map((_, index) => (
                            <Col
                                key={index}
                                md={4}
                                className="mb-4"
                            >
                                <ProductCardSkeleton />
                            </Col>
                        ))
                    )
                }

                {
                    error && (
                        <ErrorMessage message={error} onRetry={onRetry} />
                    )
                }

                {
                    !loading && !error && data.map(prod => (
                        <Col
                            key={prod.id}
                            md={4}
                            className="mb-4"
                        >
                            <ProductCard product={prod} />
                        </Col>
                    ))
                }
                    
                </Row>

            </Container>
        </section>
    )
};

export default ProductList;