import React, { useState } from 'react'
import styles from "./style.module.scss"
import { useParams } from 'react-router-dom'
import Data from '../../components/ourProjects/Data'
import { AnimatePresence, motion } from 'framer-motion'
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

const ProjectDetails = () => {

    const { title } = useParams()

    const project = Data.find(project => project.projectName === title)
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.media.length);
    };

    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.media.length) % project.media.length);
    };

    // Customized animation variants for sliding
    const variants = {
        enter: { scale: 0.98 },
        center: { scale: 1 },
        exit: { scale: 1.02 },
    };

    // Determine the swipe direction
    const swipe = (current, next) => {
        return current > next ? 1 : -1;
    };

    return (
        <main className={styles.projectDetails}>
            <div className={styles.projectDetails_top}>
                <h1>{project.projectName}</h1>
            </div>
            <div className={styles.projectDetails_bottom}>
                <img src={project.projectImage} alt="" />
                {project.details.map((detail, index) => (
                    <div className={styles.projectDetails_bottom_content_container}>
                        <div className={styles.projectDetails_bottom_content_left}>
                            <h2>{detail.text}</h2>
                        </div>
                        <div className={styles.projectDetails_bottom_content_right}>
                            <p>{detail.value}</p>
                        </div>
                    </div>
                ))}
                <div className={styles.projectDetails_bottom_gallery}>
                    <h2> Media </h2>
                    <AnimatePresence custom={swipe(currentImageIndex, (currentImageIndex + 1) % project.media.length)} mode='wait'>
                        <motion.img
                            key={currentImageIndex}
                            src={project.media[currentImageIndex].src}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                    </AnimatePresence>
                    <div className={styles.gallery_bottom}>
                        <div className={styles.gallery_bottom_index}>
                            <p>
                                {currentImageIndex + 1} / {project.media.length}
                            </p>
                        </div>
                        <div className={styles.projectDetails_bottom_gallery_image_buttons}>
                            <button onClick={handlePrev}><GoArrowLeft /> </button>
                            <button onClick={handleNext}><GoArrowRight /></button>
                        </div>
                    </div>
                </div>
                <div className={styles.projectDetails_bottom_location}>
                    <h2>Location</h2>
                    <p>{project.location}</p>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.2691323055337!2d-0.15825002341086397!3d51.489928511979556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760516dfd75ce1%3A0xfa3b801f98569d43!2s88-GALLERY!5e0!3m2!1sen!2seg!4v1704477267722!5m2!1sen!2seg" width="800" height="600" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map'></iframe>
            </div>
        </main>
    )
}

export default ProjectDetails