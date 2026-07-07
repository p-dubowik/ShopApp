import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getAllProducts } from "../../redux/productsRedux";

const Home = () => {
    const dispatch = useDispatch()

    const products = useSelector(getAllProducts);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])

    return (
        <div>
            <h1>HOME</h1>

            {products.map(product => (
                <div key={product.id}>
                    {product.name}
                </div>
            ))}
        </div>
    )
};

export default Home;