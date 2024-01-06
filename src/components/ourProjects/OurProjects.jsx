import React, { useRef, useState } from 'react'
import styles from "./style.module.scss"
import { motion, useTransform, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import Data from './Data';


const OurProjects = () => {
    const imgRef = useRef(null);
    const imgRef2 = useRef(null);
    const isDesktop = window.innerWidth > 1268;

    const { scrollYProgress: scrollYProgress1 } = useScroll({
        target: imgRef,
        offset: ["start end", "end start"]
    });

    const { scrollYProgress: scrollYProgress2 } = useScroll({
        target: imgRef2,
        offset: ["start end", "end start"]
    });

    const [hoveredProjectIndex, setHoveredProjectIndex] = useState(null);


    const translateY = useTransform(scrollYProgress1, [0, 1], ["-40%", "20%"]);
    const translateY2 = useTransform(scrollYProgress2, [0, 1], ["0%", "-24%"]);

    return (
        <section className={styles.ourProjects}>
            <div className={styles.ourProjects__top}>
                <div className={styles.ourProjects__top__title}>
                    <h2>Our Projects</h2>
                </div>
                <div className={styles.ourProjects__top__text}>
                    <p>Our development projects are designed not only for the present but also the future, whether they’re used for onshoring manufacturing operations or serving logistics needs for the area. With that vision, we construct high quality, eye-appealing projects that provide tenants a home to build their companies for the long term.</p>
                </div>
            </div>
            <div className={styles.ourProjects__bottom}>
                {Data.map((project, index) => (
                    <motion.div
                        style={isDesktop ? { translateY: index % 2 === 0 ? translateY : translateY2 } : {}}
                        className={styles.ourProjects__bottom_container}
                        onMouseEnter={isDesktop ? () => setHoveredProjectIndex(index) : null}
                        onMouseLeave={isDesktop ? () => setHoveredProjectIndex(null) : null}
                        key={index}
                    >
                        <Link to={`/project/${project.projectName}`}>
                            <div className={styles.ourProjects__bottom_container_image}>
                                <motion.img
                                    className={index % 2 === 0 ? styles.story__right_images__container__image_left : styles.story__right_images__container__image_top_right}
                                    src={project.projectImage}
                                />
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
        </section>
    )
}

export default OurProjects