import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Homepage';
import Programs from './components/Programs/Programs';
import Title from './components/Title/Title';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ApplicationForm from './components/Hero/ApplicationForm';
import AutoBot from './components/Hero/AutoBot';
import StickyApplyButton from './components/StickyApplyButton';
import BackToTop from './components/BackToTop';


const App = () => {
    const [playState, setPlayState] = useState(false);

    return (
        <Router basename="/">
            <Navbar />
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/homepage" element={<Hero />} />
                <Route
                    path="/programs"
                    element={
                        <div className="container">
                            <Title subTitle="OUR PROGRAM" title="What We Offer" />
                            <Programs />
                        </div>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <div className="container">
                            <About setPlayState={setPlayState} />
                        </div>
                    }
                />
                <Route
                    path="/campus"
                    element={
                        <div className="container">
                            <Title subTitle="Campus" title="Our Campus" />
                            <Campus />
                        </div>
                    }
                />
                <Route
                    path="/testimonials"
                    element={
                        <div className="container">
                            <Title subTitle="TESTIMONIALS" title="What Student Says" />
                            <Testimonials />
                        </div>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <div className="container">
                            <Title subTitle="Contact Us" title="Get in Touch" />
                            <Contact />
                        </div>
                    }
                />
                <Route path="/apply" element={<ApplicationForm />} />

            </Routes>
            <Footer />
        <AutoBot/>
        <StickyApplyButton />
        <BackToTop />
        </Router>
    );
};

export default App;
