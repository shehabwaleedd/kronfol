import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import { translate } from '../../../components/navbar/anim';

export default function Body({ links }) {


    return (
        <div className={styles.body}>
            <div className={styles.visitUs}>
                <h2>Visit Us</h2>
                <p>Monday - Friday: 9am - 5pm</p>
                <p>80 Rue du Liban, Beirut, Lebanon</p>
            </div>
            <div className={styles.social}>
                <h2>Social</h2>
                <div className={styles.social__links}>
                    <a href="tel:+9613123456">+961 3 123 456</a>
                    <a href="mailto:hello@kronfol.com">hello@kronfol.com</a>
                    <Link to="https://www.facebook.com/" target='_blank' >Facebook</Link>
                    <Link to="https://www.instagram.com/" target='_blank' >Instagram</Link>
                    <Link to="https://www.twitter.com/" target='_blank' >Twitter</Link>
                </div>
            </div>
        </div>
    )
}
