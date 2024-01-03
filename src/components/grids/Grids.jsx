import React from 'react'
import styles from "./style.module.scss"
import image2 from "../../assets/ycbj1gyndaz4nwrs12ww.webp"
import gridV1 from "../../assets/gridV1.mp4"

const Grids = () => {
    return (
        <section className={styles.grids}>
            <div className={styles.grids__container}>
                <div className={styles.grids__container__grid__image}>
                    <div className={styles.grids__container__grid__text}>
                        <h2>Unique View</h2>
                        <p>Natural light, Luxrious decore, and plants Heaven.</p>
                    </div>
                    <video src={gridV1}
                        autoPlay
                        muted
                        loop
                        playsInline
                        
                    ></video>
                </div>
                <div className={styles.grids__container__grid__image}>
                    <img src={image2} alt="grid" />
                    <div className={styles.grids__container__grid__text}>
                        <h2>Luxury Minimalism: Premium Redefined</h2>
                        <p>Our collection of premium units embodies luxury minimalism, where sophistication meets simplicity in every serene and opulent space.</p>
</div>
                </div>
            </div>

        </section>
    )
}

export default Grids