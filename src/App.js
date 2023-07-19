import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NewHeader from './Components/NewHeadr';
import Home from './Page/Home';
import SomeOfOurWorkDetails from './Components/SomeOfOurWorkDetails';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './style.css'

function App() {
    return (
        <>
            <NewHeader />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/Home' element={<Home />} />
                <Route exact path='/work/:productId' element={<SomeOfOurWorkDetails />} />
            </Routes>
            <Contact />
            <Footer />
        </>
    )
};

export default App;
