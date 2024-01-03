import React, { useState } from 'react'
import styles from "./style.module.scss"
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const Footer = () => {

    const [creditsOpened, setCreditsOpened] = useState(false)

    const toggleCredits = () => {
        setCreditsOpened(!creditsOpened);
    }


    return (
        <footer className={styles.footer}>
            <h2> Operating since 1960, Kronfol evolved to become one of Lebanon's most prominent real estate companies. </h2>
            <div className={styles.footer__container}>
                <div className={styles.footer__address}>
                    <h2>Address</h2>
                    <address>
                        <p>Sursock Tower, Ashrafieh <br /> Beirut, Lebanon </p>
                    </address>
                </div>
                <div className={styles.footer__address}>
                    <h2>Business Inquires</h2>
                    <address>
                        <a href="mailto:hello@kronfol.com">business@kronfol.com</a>
                        <a href="tel:+9613123456">+961 3 123 456</a>
                    </address>
                </div>
            </div>
            <div className={styles.footer__top}>
                <h3>KRONFOL <span>©</span></h3>
            </div>
            <div className={styles.footer__footer}>
                <div className="footer__logo" onClick={toggleCredits}>
                    <h2>Kronfol © 2023 all rights reserved</h2>
                </div>
                <div className="footer__rest" style={{
                    display: creditsOpened ? 'none' : 'block'
                }}>
                    <ul className="foso__content">
                        <li onClick={toggleCredits}>
                            <span>
                                Credits
                            </span>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/cairostudioo/" target='_blank' rel="noreferrer">
                                Instagram
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