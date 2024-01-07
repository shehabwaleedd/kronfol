import React from 'react'
import Landing from '../../components/landing/Landing'
import Story from '../../components/story/Story'
import Who from '../../components/who/Who'
import OurProjects from '../../components/ourProjects/OurProjects'
import Always from '../../components/always/Always'
import Statemenet from '../../components/statement/Statemenet'

const Home = ({ landingRef, isMobile }) => {
    return (
        <main>
            <Landing landingRef={ landingRef } isMobile={isMobile}/>
            <Story />
            <Who />
            <OurProjects />
            <Statemenet />
            <Always />

        </main>
    )
}

export default Home