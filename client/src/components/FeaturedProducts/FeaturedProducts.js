import formatPrice from "../../utils/formatPrice";
import styles from './FeaturedProducts.module.scss';


const FeaturedProducts = ({ products }) => {
    return (
        <section className={styles.section}>
            <div className='container mb-2 py-3'>

                <h2 className={`mb-5 ${styles.sectionTitle}`}>Featured Products</h2>

                <div
                    id="featuredCarousel"
                    className="carousel slide"
                    data-bs-ride='carousel'
                    >
                    <div className="carousel-inner">
                        {products.map((product, index) => (
                            <div key={product.id} className={`carousel-item ${index === 0 ? "active" : ''}`}>
                                <div className="card mx-auto" style={{ maxWidth: "400px", height: '500px' }}>
                                    <img
                                        src={product.mainImage}
                                        className="card-img-top"
                                        alt={product.name}
                                        style={{ height: '300px', objectFit: 'cover'}}
                                        />

                                    <div className='card-body text-center'>
                                        <h5 className="card-title">{product.name}</h5>

                                        <p className="card-text text-truncate">{product.description}</p>

                                        <p className="fw-bold">{formatPrice(product.price)}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target='#featuredCarousel'
                        data-bs-slide='prev'
                        >
                        <span className="carousel-control-prev-icon bg-dark"></span>
                    </button>

                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target='#featuredCarousel'
                        data-bs-slide='next'
                        >
                        <span className="carousel-control-next-icon bg-dark"></span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;