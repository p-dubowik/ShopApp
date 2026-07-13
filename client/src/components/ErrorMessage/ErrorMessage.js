import styles from "./ErrorMessage.module.scss";

const ErrorMessage = ({ message, onRetry }) => {
    
    return (
        <div className={styles.error}>
            <p>{message}</p>

            {onRetry && (
                <button onClick={onRetry} className={styles.buttonPrimary}>Try Again</button>
            )}
        </div>
    )
};

export default ErrorMessage;