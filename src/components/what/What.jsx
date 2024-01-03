import React, { useRef, useLayoutEffect } from 'react'
import styles from "./style.module.scss"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const What = () => {

    const phrase = [
        "YOUR DREAM HOME AWAITS WITH KRONFOL.",
        "POP-BY, SAY HI, INQUIRE ABOUT",
        "YOUR REAL ESTATE JOURNEY."
    ]

    const p = [
        "Based in the heart of Beirut, Kronfol specializes in luxurious residential properties.",
        "Offering exclusive listings, personalized home tours, and comprehensive market insights. ",
        "Perfect for finding your next home, investment opportunities, or short-term rentals.",
    ]

    return (
        <section className={styles.what}>
            <div className={styles.what__container_upper}>
                {phrase.map((word, index) => {
                    return <AnimatedText key={index}>{word}</AnimatedText>
                }
                )}
            </div>
            <div className={styles.what__container_lower}>
                {p.map((word, index) => {
                    return <AnimatedP key={index}>{word}</AnimatedP>
                }
                )}
            </div>
        </section>
    )
}

export default What


function AnimatedText({ children }) {
    const text = useRef(null);
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(text.current,
            { opacity: 0, x: -200 },
            {
                scrollTrigger: {
                    trigger: text.current,
                    scrub: true,
                    start: "0px bottom",
                    end: "bottom+=400px bottom",
                },
                opacity: 1,
                x: 0,
                duration: 2,
                ease: "power3.out"
            }
        );
    }, []);


    return <h2 ref={text}>{children}</h2>
}

function AnimatedP({ children }) {
    const text = useRef(null);
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(text.current,
            { opacity: 0, x: -200 },
            {
                scrollTrigger: {
                    trigger: text.current,
                    scrub: true,
                    start: "0px bottom",
                    end: "bottom+=400px bottom",
                },
                opacity: 1,
                x: 0,
                duration: 2,
                ease: "power3.out"
            }
        );
    }, []);


    return <p ref={text}>{children}</p>
}

