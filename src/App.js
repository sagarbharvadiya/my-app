import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NewHeader from './Components/NewHeadr';
import Home from './Page/Home';
import SomeOfOurWorkDetails from './Components/SomeOfOurWorkDetails';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './style.css'
import JobDetails from './Components/JobDetails';
import Blogs from './Components/Blogs'
import BlogPost from './Components/BlogPost'

function App() {
    return (
        <>
            <NewHeader />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/Home' element={<Home />} />
                <Route exact path='/work/:productId' element={<SomeOfOurWorkDetails />} />
                <Route exact path='/jobs' element={<JobDetails />} />
                <Route exact path='/Blogs' element={<Blogs />} />
                <Route exact path='/blogs/why-drupal' element={<BlogPost />} />
            </Routes>
            <Contact />
            <Footer />
        </>
    )
};

export default App;
