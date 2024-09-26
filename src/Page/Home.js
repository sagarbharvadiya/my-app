import React from 'react'
import Banner from '../Components/Banner';
import AboutUs from '../Components/About-us';
import Services from '../Components/Services';
import Clients from '../Components/Clients';
import Technologies from '../Components/Technologies';
import OurTeam from '../Components/OurTeam';
import SomeOfOurWork from '../Components/SomeofOurWork';
import CareersPage from '../Components/CareersPage';
// import JobDetails from '../Components/JobDetails';

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
            <CareersPage/>
            {/* <JobDetails/> */}
        </>
    )
}

export default Home