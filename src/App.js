import React from 'react';
import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import AboutUs from './Components/About-us';
import Services from './Components/Services';
import Blogs from './Components/Blogs';
import Clients from './Components/Clients';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';

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
