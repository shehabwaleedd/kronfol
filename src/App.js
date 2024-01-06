import React, { Suspense, lazy, useRef } from 'react';
import Routers from './routes/Routers';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis'
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


import './App.css';
import Footer from './components/footer/Footer';
const Navbar = lazy(() => import('./components/navbar/Navbar'));
const Home = lazy(() => import('./pages/home/Home'));

function App() {
  const location = useLocation();
  const smallerDimension = window.innerWidth < 1200;
  const [navOpen, setNavOpen] = useState(false);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const landingRef = useRef(null); // Ref for the landing section
  const logoRef = useRef(null); // Ref f
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    if (smallerDimension) {
      const lenis = new Lenis();
      const raf = (time) => {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      const resize = () => {
        setDimension({ width: window.innerWidth, height: window.innerHeight })
      }
      window.addEventListener("resize", resize)
      requestAnimationFrame(raf);
      resize();

      return () => {
        window.removeEventListener("resize", resize);
      }
    } else {
      const lenis = new Lenis({
        el: document.querySelector('[data-scroll-container]'),
        touchDirection: "vertical",
        duration: 2.7,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        infinite: false,
        lerp: 0.1,
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: true,
        smoothWheel: true,
        touchMultiplier: 2,
        autoResize: true,

      });

      const raf = (time) => {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      const resize = () => {
        setDimension({ width: window.innerWidth, height: window.innerHeight })
      }
      window.addEventListener("resize", resize)
      requestAnimationFrame(raf);
      resize();

      return () => {
        window.removeEventListener("resize", resize);
      }
    }


  }, [smallerDimension])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const updateAnimation = () => {
      if (location.pathname === "/") {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const isMobile = vw < 768; // Adjust as per your mobile breakpoint

        // Set initial scale and position based on viewport size
        const initialScale = isMobile ? 1.7 : 7; // Smaller scale for mobile
        const initialYPercent = isMobile ? -600 : -450; // Adjust for mobile

        gsap.set(logoRef.current, {
          scale: initialScale,
          yPercent: initialYPercent,
          y: "50vh",
          xPercent: window.innerWidth > 1200 ? -50 : -55,
          x: "50vw",
          position: 'fixed',
          ease: "power3.out",
          zIndex: 99,
          paddingLeft: window.innerWidth < 1200 ? "1rem" : "0",
          width: location.pathname === "/" ? "auto" : "100%",
        });

        // Create or update the ScrollTrigger animation
        const logoAnimation = gsap.to(logoRef.current, {
          scale: 1,
          top: "0", // Adjust for mobile
          left: window.innerWidth < 1200 ? "0.5rem" : "0rem", // Adjust for mobile
          xPercent: 0,
          yPercent: 0,
          x: 0,
          y: 0,
          ease: "power3.out",
          duration: 0.5,
          zIndex: 99,
          paddingLeft: window.innerWidth > 1200 ? "1rem" : "0",
          scrollTrigger: {
            trigger: landingRef.current,
            start: "top top",
            end: "bottom center",
            scrub: true,
          }
        });

        return () => logoAnimation.kill();
      } else {
        gsap.set(logoRef.current, {
          scale: 1,
          yPercent: 0,
          y: "0vh",
          xPercent: 1,
          x: "0vw",
          position: 'relative',
          ease: "power3.out",
          zIndex: 99,
          paddingLeft: "1rem",
          width: location.pathname === "/" ? "100%" : "100%",
        });
        return () => {
          window.removeEventListener('resize', updateAnimation);
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
      }
    };

    updateAnimation();
    window.addEventListener('resize', updateAnimation);

    return () => {
      window.removeEventListener('resize', updateAnimation);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [location.pathname]);


  return (
    <div className="App">
      <Navbar navOpen={navOpen} setNavOpen={setNavOpen} logoRef={logoRef} />
      <Routes location={location} key={location.pathname}>
        <Route path='/*' element={<Routers landingRef={landingRef} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
