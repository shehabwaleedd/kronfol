import React from 'react'
import { translate } from "../../components/navbar/anim";
import { motion } from "framer-motion"
import styles from './style.module.scss'


const AnimatedSubHeaders = (word) => {
    return (
        <div className={styles.getChars}>
            <motion.p
                custom={1}
                variants={translate}
                initial="initial"
                animate="enter"
                exit="exit">
                {word}
            </motion.p>
        </div>
    )
}

export default AnimatedSubHeaders