import React, { useRef } from 'react';
import styles from "./style.module.scss"
import mainVideo from "../../assets/mainVideo.webm"
import posterImage from "../../assets/poster.webp"
import { motion, useScroll, useTransform } from 'framer-motion';

const Landing = ({ landingRef }) => {
    const background = useRef(null);

    // Use the useScroll hook to get the scroll progress
    const { scrollYProgress } = useScroll({
        target: background,
        offset: ["start end", "end end"]
    });

    // Transform the scroll progress into a clipPath value
    const clipPath = useTransform(
        scrollYProgress,
        [0, 1],
        [`inset(5%)`, `inset(0%)`]
    );

    return (
        <section className={styles.landing} ref={landingRef}>
            <div className={styles.landing__top}>
                <div className={styles.landing__top_bottom}>
                    <span> Luxrious Homes for Exclusive Tastes <br /> In Lebanon </span>
                    <span>Sursock Tower, Ashrafieh ✹ Beirut, Lebanon</span>
                </div>
            </div>
            <motion.div className={styles.landingBottom} ref={background}>
                <motion.video
                    style={{ clipPath }}
                    autoPlay
                    playsInline
                    loop muted poster={posterImage} loading="lazy">
                    <source src={mainVideo} type="video/webm" />
                </motion.video>
            </motion.div>
        </section>
    )
}

export default Landing