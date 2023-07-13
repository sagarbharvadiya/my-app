import React from 'react';
import './style.css'
import Banner from './Components/Banner';
import AboutUs from './Components/About-us';
import Services from './Components/Services';
// import Blogs from './Components/Blogs';
import Clients from './Components/Clients';
// import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import Technologies from './Components/Technologies';
import OurTeam from './Components/OurTeam';
import Contact from './Components/Contact';
import NewHeader from './Components/NewHeadr';

function App() {
    return (
        <>
            <NewHeader />
            <Banner />
            <AboutUs />
            <Services />
            <Technologies />
            {/* <Blogs/> */}
            <Clients />
            <OurTeam />
            {/* <Testimonials/> */}
            <Contact />
            <Footer />
        </>
    )
};

export default App;
