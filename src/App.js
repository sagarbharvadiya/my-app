import React from 'react';
import './style.css'
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import AboutUs from './Components/About/About-us';
import Services from './Components/Services/Services';
// import Blogs from './Components/Blogs/Blogs';
import Clients from './Components/Clients/Clients';
// import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';
import Technologies from './Components/Technologies';
import OurTeam from './Components/OurTeam';
import Contact from './Components/Contact';

function App() {
    return (
        <>
            <Header />
            <Banner />
            <AboutUs />
            <Services />
            <Technologies />
            {/* <Blogs/> */}
            <Clients />
            <OurTeam />
            {/* <Testimonials/> */}
            {/* <Contact/> */}
            <Footer />
        </>
    )
};

export default App;
