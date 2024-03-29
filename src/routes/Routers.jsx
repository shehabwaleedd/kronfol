import React, { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../pages/home/Home';
import { useLocation } from 'react-router-dom';
const Projects = lazy(() => import('../pages/projects/Projects'));
const ProjectDetails = lazy(() => import('../pages/projectDetaiils/ProjectDetails'));
const Vision = lazy(() => import('../pages/vision/Vision'));
const Approach = lazy(() => import('../pages/approach/Approach'));
const NotFound = lazy(() => import('../pages/notFound/NotFound'));
const Routers = ({ landingRef, isMobile }) => {
    const location = useLocation(); // Import useLocation from 'react-router-dom'

    const routeConfig = [
        { path: '/', element: <Home landingRef={landingRef} isMobile={isMobile} key={location.pathname} /> },
        { path: '/projects', element: <Projects /> },
        { path: '/projects/:title', element: <ProjectDetails /> },
        { path: '/vision', element: <Vision /> },
        { path: '/approach', element: <Approach /> },
        { path: '*', element: <NotFound /> },
    ];

    const renderedRoutes = useRoutes(routeConfig);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            {renderedRoutes}
        </Suspense>
    );
};

export default Routers;
