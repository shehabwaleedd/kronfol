import React, { useState, useEffect, useCallback } from 'react';
import styles from "./style.module.scss";
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Nav from './nav';
import ContactPageOverlay from "../contactOverlay";

const Navbar = ({ setNavOpen, navOpen }) => {
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
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

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            // Check if the screen width is greater than 768px
            if (window.innerWidth > 768 && !contactPageOpen) {
                setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 10);
            } else {
                setVisible(true); // Always show the navbar on smaller screens
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [contactPageOpen, prevScrollPos, visible]);


    useEffect(() => {
        controls.start({
            y: visible ? 0 : -80
        });
    }, [controls, visible]);

    return (
        <header>
            <motion.nav className={styles.navbar}
                animate={controls}
                transition={{ ease: "easeOut" }}
            >
                <Link className={styles.navbar__logo} to="/">
                    <h1>K</h1>
                </Link>
                <div className={styles.navbar__links}>
                    <ul>
                        <li>About</li>
                        <li>Projects</li>
                        <li onClick={toggleContactPage} style={{ position: "relative", zIndex: "10", backgroundColor: contactPageOpen ? "var(--header-color)" : "var(--background-color)", color:  contactPageOpen ? "var(--background-color)" : "var(--header-color)"}}>Contact</li>
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
    )
}

export default Navbar