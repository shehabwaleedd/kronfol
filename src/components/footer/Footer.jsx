import React, { useState, useEffect, useRef } from 'react'
import styles from "./style.module.scss"
import { AnimatePresence, motion } from 'framer-motion'
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [creditsOpened, setCreditsOpened] = useState(false)
    const marqueeRef = useRef(null);
    const toggleCredits = () => {
        setCreditsOpened(!creditsOpened);
    }
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__top}>
                <h3 ref={marqueeRef}>KRONFOL©  KRONFOL© KRONFOL© KRONFOL© KRONFOL©  </h3>
            </div>
            <div className={styles.footer__footer}>
                <div className={styles.footer__logoz} onClick={toggleCredits}>
                    <h2>©2024 Kronfol</h2>
                    <Link to="https://cairo-studio.com">By Cairo Studio</Link>

                </div>
                <div className={styles.footer__rest}>
                    <ul className={styles.foso__content}>
                        <li onClick={toggleCredits}>
                            <span>
                                Credits
                            </span>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/cairostudioo/" target='_blank' rel="noreferrer">
                                Terms
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/cairostudioo/" target='_blank' rel="noreferrer">
                                Privacy
                            </a>
                        </li>
                    </ul>
                </div>
                <AnimatePresence>
                    {creditsOpened && (
                        <motion.div
                            initial={{ y: 20 }}
                            animate={{ y: 0 }}
                            exit={{ y: 20 }}
                            className={styles.credits}>
                            <div className={styles.credits__container}>
                                <div>
                                    <ul>
                                        <li>
                                            Developed & Designed by
                                            <a href="https://www.cairo-studio.com//" target='_blank' rel="noreferrer">
                                                Cairo Studio
                                            </a>
                                        </li>
                                        <li>
                                            Powered by
                                            <a href="https://www.weareelites.com//" target='_blank' rel="noreferrer">
                                                Elites
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </footer>
    )
}

export default Footer