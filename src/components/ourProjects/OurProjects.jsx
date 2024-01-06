import React, { useRef, useState } from 'react'
import styles from "./style.module.scss"
import { motion, useTransform, useScroll, AnimatePresence } from 'framer-motion';
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Data from './Data';


const OurProjects = () => {
    const imgRef = useRef(null);
    const imgRef2 = useRef(null);
    const projects = [
        {
            url: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name: "Seaway West"
        },
        {
            url: "https://images.pexels.com/photos/36362/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name: "Sumner Ridge"
        },
    ];
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
            {/* <div className={styles.ourProjects__bottom}>
                {projects.map((project, index) => (
                    <div className={styles.ourProjects__bottom_container} onMouseEnter={() => setHoveredProjectIndex(index)} onMouseLeave={() => setHoveredProjectIndex(null)} key={index} >
                        <motion.img style={{ translateY: index % 2 === 0 ? translateY : translateY2 }} className={index % 2 === 0 ? styles.story__right_images__container__image_left : styles.story__right_images__container__image_top_right} src={project.url} />
                        <AnimatePresence mode='wait'>
                            {hoveredProjectIndex === index && (
                                <motion.div className={styles.hoveredProject}
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 10, opacity: 0 }}
                                    
                                    transition={{ duration: 0.4, type: "spring", damping: 12, stiffness: 100, ease: [0.42, 0, 0.58, 1] }}
                                    style={{
                                        bottom: index % 2 === 0 ? "5rem" : "8rem",
                                    }}
                                >

                                    <div className={styles.hoveredProject__container}>
                                        <div className={styles.hoveredProject__container_cont}>
                                            <div className={styles.hoveredProject__container_left}>
                                                <BsArrowRight style={{
                                                    fontSize: "2.2rem", border: "1px solid var(--header-color)",
                                                    borderRadius: "50%", padding: "0.5rem", color: "var(--accent-color)",
                                                    marginTop: "0.3rem",
                                                }} />
                                            </div>
                                            <div className={styles.hoveredProject__container_right}>
                                                <p>{project.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </div>
                ))}
            </div> */}
            <div className={styles.ourProjects__bottom}>
                {Data.map((project, index) => (
                    <motion.div style={{ translateY: index % 2 === 0 ? translateY : translateY2 }} className={styles.ourProjects__bottom_container} onMouseEnter={() => setHoveredProjectIndex(index)} onMouseLeave={() => setHoveredProjectIndex(null)} key={index} >
                        <Link to={`/project/${project.projectName}`}>
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
        </section>
    )
}

export default OurProjects