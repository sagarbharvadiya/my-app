import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NewHeader from './Components/NewHeadr';
import Home from './Page/Home';
import SomeOfOurWorkDetails from './Components/SomeOfOurWorkDetails';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './style.css'
import JobDetails from './Components/JobDetails';
import Blog from './Page/Blog'
import BlogPost from './Components/BlogPost'
import ReactBlog from './Components/ReactBlog';
import ReactWeb from './Components/ReactWeb';

function App() {
    return (
        <>
            <NewHeader />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/Home' element={<Home />} />
                <Route exact path='/work/:productId' element={<SomeOfOurWorkDetails />} />
                <Route exact path='/jobs' element={<JobDetails />} />
                <Route exact path='/Blog' element={<Blog />} />
                <Route exact path='/blogs/why-drupal' element={<BlogPost />} />
                <Route exact path='/blogs/react-hooks' element={<ReactBlog />} />
                <Route exact path='/blogs/build-your-website-with-reactjs' element={<ReactWeb/>} />
            </Routes>
            <Contact />
            <Footer />
        </>
    )
};

export default App;
