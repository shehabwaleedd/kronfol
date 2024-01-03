import React, { useEffect, useRef } from 'react';
import styles from "./style.module.scss"
import mainVideo from "../../assets/mainVideo.webm"
import posterImage from "../../assets/poster.webp"
import getChars from '../../animations/animatedHeaders/getChars.tsx';

const Landing = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        window.addEventListener('load', () => {
            if (videoRef.current) {
                videoRef.current.play();
            }
        });
    }, []);
    return (
        <section className={styles.landing}>
            <div className={styles.landing__top}>
                <div className={styles.landing__top_display}>
                    {getChars('Kronfol')}
                </div>
                <div className={styles.landing__top_bottom}>
                    <span> Luxrious Homes for Exclusive Tastes <br /> In Lebanon </span>
                    <span>Sursock Tower, Ashrafieh ✹ Beirut, Lebanon</span>
                </div>
            </div>
            <div className={styles.landingBottom}>
                <video ref={videoRef} loop muted poster={posterImage} loading="lazy">
                    <source src={mainVideo} type="video/webm" />
                </video>
            </div>
        </section>
    )
}

export default Landing