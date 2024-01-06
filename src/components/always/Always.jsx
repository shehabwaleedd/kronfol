import React, { useRef } from 'react'
import styles from "./style.module.scss"
import { BsArrowRight } from "react-icons/bs";
import { motion, useTransform, useScroll } from 'framer-motion';

const Always = () => {
    const imgRef = useRef(null);
    const url = "https://images.pexels.com/photos/3034343/pexels-photo-3034343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    const background = "https://images.pexels.com/photos/5522703/pexels-photo-5522703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    const { scrollYProgress } = useScroll({
        target: imgRef,
        offset: ["start end", "end start"]
    });
    const translateY = useTransform(scrollYProgress, [0, 1], ["-90%", "20%"]);

    return (
        <motion.section className={styles.always}>
            <div className={styles.always__container}>
                <motion.div className={styles.always__container__left}>
                <motion.img style={{ translateY }} className={styles.story__right_images__container__image_left} src={url} />
                </motion.div>
                <div className={styles.always__container__right}>
                    <div className={styles.always__container__right_container}>
                        <div className={styles.always__container__right_container_header}>
                            <h2>Always <span>Ahead.</span></h2>
                            <div className={styles.always__learn_more_button}>
                                <div className={styles.icon}>
                                    <BsArrowRight style={{
                                        fontSize: "2.2rem", border: "1px solid var(--header-color)",
                                        borderRadius: "50%", padding: "0.5rem", color: "var(--accent-color)"
                                    }} />
                                </div>
                                <p>Learn more about us</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Always