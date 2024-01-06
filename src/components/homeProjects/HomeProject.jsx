import React, { useRef } from 'react';
import styles from "./style.module.scss"
import { projects } from './data';
import { useScroll } from 'framer-motion';
import ProjectCard from './projectCard/ProjectCard';

const HomeProject = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })
    return (
        <section ref={container} className={styles.main}>
            {projects.map((project, i) => {
                const targetScale = 1 - ((projects.length - i) * 0.05);
                return <ProjectCard key={`p_${i}`} link={project.link} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />
            })
            }
        </section>
    )
}

export default HomeProject