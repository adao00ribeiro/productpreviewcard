import styles from "./styles.module.scss"

export function ProductCard() {
    return (
        <div className={styles.card}>
            <div className={styles.imageProduct}></div>
            <div className={styles.cardRight}>
                <h3>PERFUME</h3>
                <h2>Gabrielle Essence Eau De Parfum</h2>
                <span>A floral, solar and voluptuous interpretation composed by Olivier Polge,
                    Perfumer-Creator for the House of CHANEL.</span>
                <div className={styles.containerPrecos}>
                    <span>$149.99</span>
                    <p>$169,99</p>
                </div>
                <button className={styles.btn}> <img src="/images/icon-cart.svg" alt="" /> <span>Add to Cart</span>
                </button>
            </div>
        </div>
    )
}