import React, { useState } from 'react';
import styles from "./style.module.scss";
import Data from '../ourProjects/Data';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import leftCursor from "../../assets/left-arrow.png"
import rightCursor from "../../assets/right-arrow (1).png"

const Landing = ({ landingRef, isMobile }) => {
    const navigate = useNavigate();
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const displayedProjects = Data.slice(0, 2);

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const posX = event.clientX - rect.left;

        if (posX < rect.width / 2) {
            event.currentTarget.style.cursor = `url(${leftCursor}), auto`;
        } else {
            event.currentTarget.style.cursor = `url(${rightCursor}), auto`;
        }
    };

    const handleMouseLeave = (event) => {
        event.currentTarget.style.cursor = 'default';
    };

    const handleImageClick = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const clickPosition = event.clientX - rect.left;

        if (clickPosition < rect.width / 2) {
            handlePrev();
        } else {
            handleNext();
        }
    };

    const handleNext = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % displayedProjects.length);
    };

    const handlePrev = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + displayedProjects.length) % displayedProjects.length);
    };

    const variants = {
        enter: { opacity: 0 },
        center: { opacity: 1 },
        exit: { opacity: 0 },
    };

    return (
        <section className={styles.landing} ref={landingRef}>
            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentProjectIndex}
                    className={styles.projectCard}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.1, ease: [0.42, 0, 0.58, 1] }}
                    onClick={handleImageClick}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        src={displayedProjects[currentProjectIndex].projectImage}
                        alt={displayedProjects[currentProjectIndex].projectName}
                        className={styles.projectImage}
                    />
                    <div className={styles.projectCard_details}>
                        <h3>{displayedProjects[currentProjectIndex].projectName}</h3>
                        <span style={{ display: isMobile ? 'none' : 'block' }}>
                            {currentProjectIndex + 1} / {displayedProjects.length + 1}
                        </span>
                        <span style={{ display: isMobile ? 'none' : 'block' }}>
                            {displayedProjects[currentProjectIndex].status[0]}
                        </span>
                        <button onClick={() => navigate(`/projects/${displayedProjects[currentProjectIndex].projectName}`)}>
                            Learn More
                        </button>
                    </div>
                </motion.div>
            </AnimatePresence>
        </section>
    );
}

export default Landing;
