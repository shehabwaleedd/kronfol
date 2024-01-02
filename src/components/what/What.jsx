import React from 'react'
import styles from "./style.module.scss"

const What = () => {
    return (
        <section className={styles.what}>
            <div className={styles.what__container_upper}>
                <h2>YOUR DREAM HOME AWAITS WITH KRONFOL.</h2>
                <h2>POP-BY, SAY HI, INQUIRE ABOUT</h2>
                <h2>YOUR REAL ESTATE JOURNEY.</h2>
            </div>
            <div className={styles.what__container_lower}>
                <p> Based in the heart of Beirut, Kronfol specializes in luxurious residential properties. Offering exclusive listings, personalized home tours, and comprehensive market insights. Perfect for finding your next home, investment opportunities, or short-term rentals. </p>
            </div>
        </section>
    )
}

export default What