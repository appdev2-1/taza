import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
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
import PageLoader from './components/PageLoader';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const AppContent = () => {
    const [playState, setPlayState] = useState(false);
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, [location.pathname]);

    if (loading) return <PageLoader />;

    return (
        <>
            <Navbar />
            <ScrollToTop />
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
            <AutoBot />
            <StickyApplyButton />
            <BackToTop />
        </>
    );
};

const App = () => {
    const [initialLoading, setInitialLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setInitialLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    if (initialLoading) return <PageLoader />;

    return (
        <Router basename="/">
            <AppContent />
        </Router>
    );
};

export default App;
