import React from 'react'
import { motion } from 'framer-motion';
import styles from "./style.module.scss"
import { Link } from 'react-router-dom';
import Data from '../../components/ourProjects/Data'

const Projects = () => {
    return (
        <main className={styles.ourProjects}>
            <div className={styles.ourProjects__top}>
                <div className={styles.ourProjects__top__title}>
                    <h2>All Projects</h2>
                </div>
            </div>
            <div className={styles.ourProjects__bottom}>
                {Data.map((project, index) => (
                    <motion.div className={styles.ourProjects__bottom_container} key={index} >
                        <Link to={`/projects/${project.projectName}`}>
                            <div className={styles.ourProjects__bottom_container_image}>
                                <motion.img className={index % 2 === 0 ? styles.story__right_images__container__image_left : styles.story__right_images__container__image_top_right} src={project.projectImage} />
                            </div>
                            <div className={styles.ourProjects__bottom_container_text}>
                                <h3>{project.projectName}</h3>
                                <span>
                                    {project.status[0]}
                                </span>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </main>
    )
}

export default Projects