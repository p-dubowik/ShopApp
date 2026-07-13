import { Spinner } from "react-bootstrap";
import styles from "./Loader.module.scss";

const Loader = () => {
    return (
        <div className={styles.loader}>
            <Spinner animation="border" />
        </div>
    )
};

export default Loader;