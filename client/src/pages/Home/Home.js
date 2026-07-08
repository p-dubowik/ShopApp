import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getAllProducts } from "../../redux/productsRedux";
import ProductList from "../../components/ProductList/ProductList";

const Home = () => {
    const dispatch = useDispatch()

    const products = useSelector(getAllProducts);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])

    return (
        <div>
            <h1>HOME</h1>
            <ProductList data={products} />
            
        </div>
    )
};

export default Home;