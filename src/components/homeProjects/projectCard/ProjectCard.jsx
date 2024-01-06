import React, { useRef } from 'react';
import { useTransform, motion, useScroll } from 'framer-motion';
import styles from "./style.module.scss"
import { Link } from 'react-router-dom';

const ProjectCard = ({ i, title, description, link, url, color, progress, range, targetScale }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    })

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <section className={styles.homeProjects} ref={container}>
            <motion.div
                style={{ backgroundColor: color, scale, top: `calc(-5vh + ${i * 25}px)` }}
                className={styles.card}
            >
                <div className={styles.body}>
                    <div className={styles.description}>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <span>
                            <Link to={url} target="_blank">See more</Link>
                        </span>
                    </div>

                    <div className={styles.imageContainer}>
                        <motion.div
                            className={styles.inner}
                            style={{ scale: imageScale }}
                        >
                            <img
                                src={`${link}`}
                                alt="project"
                            />
                        </motion.div>
                    </div>

                </div>
            </motion.div>
        </section>
    )
}

export default ProjectCard