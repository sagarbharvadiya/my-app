import React from 'react';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import AboutUs from './Components/About/About-us';
import Services from './Components/Services/Services';
import Blogs from './Components/Blogs/Blogs';
import Clients from './Components/Clients/Clients';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';

function App() {
 return(
  <>
  <Header/>
  <Banner/>
  <AboutUs/>
  <Services/>
  <Blogs/>
  <Clients/>
  <Testimonials/>
  <Footer/>
  </>
 )
};

export default App;
