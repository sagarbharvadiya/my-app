import React from 'react';
import './style.css'
import Banner from './Components/Banner';
import AboutUs from './Components/About-us';
import Services from './Components/Services';
import Clients from './Components/Clients';
import Footer from './Components/Footer';
import Technologies from './Components/Technologies';
import OurTeam from './Components/OurTeam';
import Contact from './Components/Contact';
import NewHeader from './Components/NewHeadr';
import SomeOfOurWork from './Components/SomeofOurWork';


function App() {
    return (
        <>
            <NewHeader />
            <Banner />
            <AboutUs />
            <Services />
            <Technologies />
            <SomeOfOurWork />
            <Clients />
            <OurTeam />
            <Contact />
            <Footer />
        </>
    )
};

export default App;
