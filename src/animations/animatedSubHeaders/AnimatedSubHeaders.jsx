import React from 'react'
import { translate } from "../../navbar/anim";
import { motion } from "framer-motion"
import styles from './AnimatedSubHeaders.module.scss'


const AnimatedSubHeaders = (word) => {
    return (
        <div className={styles.getChars}>
            <motion.span
                custom={1}
                variants={translate}
                initial="initial"
                animate="enter"
                exit="exit">
                {word}
            </motion.span>
        </div>
    )
}

export default AnimatedSubHeaders