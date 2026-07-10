import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct, getCurrentProduct } from "../../redux/productsRedux";
import { useEffect } from "react";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap"


const Product = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    const product = useSelector(getCurrentProduct);

    useEffect(() => {
        dispatch(fetchProduct(id));
    }, [dispatch, id])

    if(!product) {
        return (
            <p>
                Loading...
            </p>
        )
    }

    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <Image
                    src={product.mainImage}
                    rounded
                    fluid
                    style={{ height:'400px', objectFit: 'cover'}}
                    />
                </Col>

                <Col>
                    <Card>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};

export default Product;