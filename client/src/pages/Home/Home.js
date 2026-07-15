import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getAllProducts, getProductsLoading, getProductsError, getFeaturedProducts } from "../../redux/productsRedux";
import Hero from "../../components/Hero/Hero";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import ProductList from "../../components/ProductList/ProductList";

const Home = () => {
    const dispatch = useDispatch()

    const products = useSelector(getAllProducts);
    const featuredProducts = useSelector(getFeaturedProducts);
    const loading = useSelector(getProductsLoading);
    const error = useSelector(getProductsError);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])

    return (
        <div>
            <Hero />

            <FeaturedProducts products={featuredProducts} />

            <ProductList data={products} loading={loading} error={error} onRetry={() => dispatch(fetchProducts())} />
            
        </div>
    )
};

export default Home;