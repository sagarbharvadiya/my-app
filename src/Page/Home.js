import React from 'react'
import Banner from '../Components/Banner';
import AboutUs from '../Components/About-us';
import Services from '../Components/Services';
import Clients from '../Components/Clients';
import Technologies from '../Components/Technologies';
import OurTeam from '../Components/OurTeam';
import SomeOfOurWork from '../Components/SomeofOurWork';
const Home = () => {
    return (
        <>

            <Banner />
            <AboutUs />
            <Services />
            <Technologies />
            <SomeOfOurWork />
            <Clients />
            <OurTeam />
        </>
    )
}

export default Home