import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getAllProducts } from "../../redux/productsRedux";
import Hero from "../../components/Hero/Hero";
import ProductList from "../../components/ProductList/ProductList";

const Home = () => {
    const dispatch = useDispatch()

    const products = useSelector(getAllProducts);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])

    return (
        <div>
            <Hero />

            <ProductList data={products} />
            
        </div>
    )
};

export default Home;