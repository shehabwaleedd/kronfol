import React from 'react'
import Landing from '../../components/landing/Landing'
import What from '../../components/what/What'
import Grids from '../../components/grids/Grids'
import Stats from '../../components/stats/Stats'

const Home = () => {
    return (
        <main>
            <Landing />
            <What />
            <Stats />
            <Grids />
        </main>
    )
}

export default Home