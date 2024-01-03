import React, { Suspense, lazy } from 'react';
import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis'
import { useLocation } from 'react-router-dom';



import './App.css';
import Footer from './components/footer/Footer';
const Navbar = lazy(() => import('./components/navbar/Navbar'));
const Home = lazy(() => import('./pages/home/Home'));

function App() {
  const location = useLocation();
  const smallerDimension = window.innerWidth < 1200;
  const [navOpen, setNavOpen] = useState(false);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

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
        duration: 1.7,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        infinite: false,
        lerp: 0.1,
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: false,
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
      <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
