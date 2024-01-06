import React from 'react'
import styles from "../story/style.module.scss"


const Who = () => {
    return (
        <section className={styles.story}>
            <div className={styles.story__left}>
                <h2><span>/</span> Who are we</h2>
            </div>
            <div className={styles.story__right}>
                <p>We are a boutique investment firm with a strategic focus on long-term asset classes such as commercial real estate, timberland, and ranchland.</p>
                <p>Our industrial real estate investments are focused on acquiring, owning, and developing Class A properties in the best locations in core markets.</p>
            </div>
        </section>
    )
}

export default Who