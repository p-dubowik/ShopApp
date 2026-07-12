import { Container, Button } from "react-bootstrap";
import styles from "./Hero.module.scss";

const Hero = () => {

    return (
        <section className={styles.hero}>

            <Container className={styles.container}>

                <div className={styles.content}>
                    <h1>PROFFEE</h1>

                    <h2>Premium coffee machines and grinders</h2>

                    <p>For personal and professional use</p>

                    <a href='#products'>
                        <Button className={styles.button}>Discover our equipment</Button>
                    </a>
                </div>

            </Container>
        </section>
    )
}

export default Hero;