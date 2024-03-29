import React, { useRef, useState } from 'react'
import styles from "./style.module.scss"
import { motion, useTransform, useScroll } from 'framer-motion';


const Story = () => {
    const imgRef = useRef(null);
    const imgRef2 = useRef(null);
    const imgRef3 = useRef(null);
    const panelRefs = useRef([]);

    const isDesktop = window.innerWidth > 1268;


    const url = "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    const url2 = "https://images.pexels.com/photos/36362/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    const url3 = "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

    const { scrollYProgress: scrollYProgress1 } = useScroll({
        target: imgRef,
        offset: ["start end", "end start"]
    });

    const { scrollYProgress: scrollYProgress2 } = useScroll({
        target: imgRef2,
        offset: ["start end", "center start"]
    });

    const { scrollYProgress: scrollYProgress3 } = useScroll({
        target: imgRef2,
        offset: ["start end", "center start"]
    });



    const translateY = useTransform(scrollYProgress1, [0, 1], ["-10%", "10%"]);
    const translateY2 = useTransform(scrollYProgress2, [0, 1], ["10%", "-14%"]);
    const translateY3 = useTransform(scrollYProgress3, [0, 1], ["10%", "-14%"]);



    return (
        <section className={styles.story}>
            <div className={styles.story__left}>
                <h2><span>/</span> Our Story</h2>
            </div>
            <div className={styles.story__right}>
                {isDesktop ? (
                    <p>Founded in 1995, Kronfol is a leading real estate agency in Beirut, Lebanon. Our team of experts are dedicated to finding the perfect property to suit your needs. Whether you are looking for a new home, an investment opportunity, or a short-term rental. Kronfol is here to help you find your dream property.</p>

                ) : (
                    <span>Founded in 1995, Kronfol is a leading real estate agency in Beirut, Lebanon. Our team of experts are dedicated to finding the perfect property to suit your needs. Whether you are looking for a new home, an investment opportunity, or a short-term rental. Kronfol is here to help you find your dream property.</span>
                )}
                <div className={styles.story__right_images}>
                    {isDesktop ? (
                        <div className={styles.story__right_images__container}>
                            <>
                                <motion.img
                                    style={{ translateY }}
                                    ref={imgRef}
                                    className={styles.story__right_images__container__image_left} src={url} />
                                <motion.img
                                    style={{ translateY: translateY2 }}
                                    ref={imgRef2}
                                    className={styles.story__right_images__container__image_top_right} src={url2} />
                                <motion.img
                                    style={{ translateY: translateY3 }}
                                    ref={imgRef3}
                                    className={styles.story__right_images__container__image_bottom_right} src={url3} />

                            </>
                        </div>

                    ) : (
                        <motion.div drag="x" dragConstraints={{ left: -500, right: 0 }} className={styles.story__right_images__drag}>
                            <div className={styles.story__right_images__drag_image}>
                                <img src={url} />
                            </div>
                            <div className={styles.story__right_images__drag_image}>
                                <img src={url2} />
                            </div>
                            <div className={styles.story__right_images__drag_image}>
                                <img src={url3} />
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Story
