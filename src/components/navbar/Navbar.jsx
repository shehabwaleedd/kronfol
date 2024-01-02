import React, { useState, useEffect, useCallback } from 'react';
import styles from "./style.module.scss";
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Nav from './nav';

const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
    const controls = useAnimation();
    const [navOpen, setNavOpen] = useState(false);
    const location = useLocation();

    const toggleNavOpen = useCallback(() => {
        setNavOpen(prevNavOpen => !prevNavOpen);
    }, [setNavOpen]);

    useEffect(() => {
        setNavOpen(false);
    }, [location.pathname, setNavOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            // Check if the screen width is greater than 768px
            if (window.innerWidth > 768) {
                setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 10);
            } else {
                setVisible(true); // Always show the navbar on smaller screens
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);


    useEffect(() => {
        controls.start({
            y: visible ? 0 : -80
        });
    }, [controls, visible]);
    return (
        <motion.nav className={styles.navbar}
            animate={controls}
            transition={{ ease: "easeOut" }}
        >
            <div className={styles.navbar__logo}>
                <h1>K</h1>
            </div>
            <div className={styles.navbar__links}>
                <ul>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className={styles.menu} onClick={toggleNavOpen}>
                <span>menu</span>
            </div>
            <AnimatePresence mode='wait'>
                {navOpen && <Nav setNavOpen={setNavOpen} />}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Navbar