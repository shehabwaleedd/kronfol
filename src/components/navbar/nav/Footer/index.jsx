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
                    <span>Developed By </span> Cairo Studio
                </motion.li>
            </ul>
        </div>
    )
}
