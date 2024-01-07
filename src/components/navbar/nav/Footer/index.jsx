import styles from './style.module.scss';
import { translate } from '../../anim';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate} initial="initial"
                    animate="enter"
                    exit="exit">
                    <span>KRONFOL - </span> Real Estate Company.
                </motion.li>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate} initial="initial"
                    animate="enter"
                    exit="exit">
                    <span>Location: </span> Beirut, Lebanon.
                </motion.li>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate} initial="initial"
                    animate="enter"
                    exit="exit">
                    <Link to="/privacy">
                        Privacy Policy
                    </Link>
                </motion.li>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate} initial="initial"
                    animate="enter"
                    exit="exit">
                    <Link to="/terms">
                        Terms & Conditions
                    </Link>
                </motion.li>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate} initial="initial"
                    animate="enter"
                    exit="exit">
                    <span>Designed & Developed By </span> <a style={{color: "var(--accent-color)"}} href="https://cairo-studio.com"  target='_blank' referrerPolicy='no-referrer' rel="noreferrer">Cairo Studio</a>
                </motion.li>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate} initial="initial"
                    animate="enter"
                    exit="exit">
                    <span>Powered By </span> <a style={{color: "var(--accent-color)"}} href="https://weareelites.com" target='_blank' referrerPolicy='no-referrer' rel="noreferrer">Elite</a>
                </motion.li>
            </ul>
        </div>
    )
}
