import React, { lazy, useRef } from 'react';
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

function App() {
  const location = useLocation();
  const smallerDimension = window.innerWidth < 1200;
  const [navOpen, setNavOpen] = useState(false);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const landingRef = useRef(null); // Ref for the landing section
  const logoRef = useRef(null);
  const isMobile = window.innerWidth < 1077;

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


  return (
    <div className="App">
      <Navbar navOpen={navOpen} setNavOpen={setNavOpen} logoRef={logoRef} />
      <Routes location={location} key={location.key}>
        <Route path='/*' element={<Routers landingRef={landingRef} isMobile={isMobile} key={location.pathname} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
