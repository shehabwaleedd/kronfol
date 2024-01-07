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
        <>
            <footer className={styles.footer}>
                <div className={styles.footer__upper}>
                    <div className={styles.footer__upper__left}>
                        <h2>Contact Us</h2>
                        <ul>
                            <li>
                                <a href="mailto:info@kronfol.com"> Info@kronfol.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+961 1 999 000"> +961 1 999 000
                                </a>
                            </li>
                            <li>
                                <a href="https://goo.gl/maps/1F1D9f8c8yJ2" target='_blank' rel="noreferrer" >
                                    80 Rue du Liban, Beirut, Lebanon
                                </a>
                            </li>
                        </ul>

                    </div>
                    <div className={styles.footer__upper__right}>
                        <h2>Follow us</h2>
                        <div className={styles.footer__upper__right_container}>
                            <div >
                                <ul>
                                    <li>
                                        <a href="https://www.instagram.com/kronfol_lebanon/" target='_blank' rel="noreferrer">
                                            Instagram
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/kronfol_lebanon/" target='_blank' rel="noreferrer">
                                            Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/company/kronfol_lebanon/" target='_blank' rel="noreferrer">
                                            LinkedIn
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <Link to="/vision">
                                            Vision
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/approach">
                                            Approach
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/projects">
                                            Projects
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footer__footer}>
                    <div className={styles.footer__footer_logoz} onClick={toggleCredits}>
                        <h2>KRONFOL</h2>

                    </div>
                    <div className={styles.footer__footer_lower}>
                        <ul>
                            <li>
                                <a href="https://www.instagram.com/kronfol_leb/" target='_blank' rel="noreferrer">
                                    Terms
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/kronfol_leb/" target='_blank' rel="noreferrer">
                                    Privacy
                                </a>
                            </li>
                            <span onClick={toggleCredits}>
                                Credits
                            </span>
                        </ul>
                        <span>
                            @Kronfol Real Estate 2024
                        </span>
                    </div>
                </div>
            </footer >
            <AnimatePresence mode='wait'>
                {creditsOpened && (
                    <motion.div className={styles.footer__credits}
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        exit={{ y: 100 }}
                        transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
                    >
                        <div className={styles.footer__credits_close} onClick={() => setCreditsOpened(false)}>
                            X
                        </div>
                        <div className={styles.footer__credits_content}>
                            <h2>
                                Designed & Developed By <Link>Cairo Studio</Link>
                            </h2>
                            <h2>
                                Powered By <Link>Elites</Link>
                            </h2>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Footer