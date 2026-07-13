import styles from "./ProductCardSkeleton.module.scss";

const ProductCardSkeleton = () => {

    return (
        <div className={styles.card}>

            <div className={styles.image}></div>

            <div className={styles.content}>
                
                <div className={styles.title}></div>

                <div className={styles.description}></div>

                <div className={styles.bottom}>

                    <div className={styles.price}></div>

                    <div className={styles.button}></div>

                </div>

            </div>

        </div>
    )
};

export default ProductCardSkeleton;