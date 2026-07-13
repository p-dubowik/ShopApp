import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getAllProducts, getProductsLoading, getProductsError } from "../../redux/productsRedux";
import Hero from "../../components/Hero/Hero";
import ProductList from "../../components/ProductList/ProductList";

const Home = () => {
    const dispatch = useDispatch()

    const products = useSelector(getAllProducts);
    const loading = useSelector(getProductsLoading);
    const error = useSelector(getProductsError);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])

    return (
        <div>
            <Hero />

            <ProductList data={products} loading={loading} error={error} onRetry={() => dispatch(fetchProducts())} />
            
        </div>
    )
};

export default Home;