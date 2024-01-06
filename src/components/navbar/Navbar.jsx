import React, { useState, useEffect, useCallback } from 'react';
import styles from "./style.module.scss";
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Nav from './nav';
import ContactPageOverlay from "../contactOverlay";
import getChars from '../../animations/animatedHeaders/getChars.tsx';

const Navbar = ({ setNavOpen, navOpen, logoRef }) => {
    const controls = useAnimation();
    const location = useLocation();
    const [contactPageOpen, setContactPageOpen] = useState(false);

    const toggleContactPage = useCallback(() => {
        setContactPageOpen(prevContactPageOpen => !prevContactPageOpen);
    }, [setContactPageOpen])

    const toggleNavOpen = useCallback(() => {
        setNavOpen(prevNavOpen => !prevNavOpen);
    }, [setNavOpen]);

    useEffect(() => {
        setNavOpen(false);
    }, [location.pathname, setNavOpen]);


    return (
        <>
            <header>
                <motion.nav className={styles.navbar}
                    animate={controls}
                    transition={{ ease: "easeOut" }}>
                    <Link ref={logoRef} className={styles.navbar__logo} to="/">
                        <div className={styles.navbar__logo_anim}>
                            {getChars('KRONFOL')}
                        </div>
                    </Link>
                    <div className={styles.navbar__links}>
                        <ul>
                            <li>
                                <Link to="/vision">
                                    Vision
                                </Link>
                            </li>
                            <li>
                                <Link to="/approach">
                                    Appraoch
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects">
                                    Projects
                                </Link>
                            </li>
                            <li onClick={toggleContactPage}>Contact</li>
                        </ul>
                    </div>

                    <div className={styles.menu} onClick={toggleNavOpen}>
                        <span>menu</span>
                    </div>
                    <AnimatePresence mode='wait'>
                        {navOpen && <Nav setNavOpen={setNavOpen} />}
                    </AnimatePresence>

                </motion.nav>
                <AnimatePresence mode='wait'>
                    {contactPageOpen && <ContactPageOverlay setContactPageOpen={setContactPageOpen} />}
                </AnimatePresence>
            </header>
        </>
    )
}

export default Navbar