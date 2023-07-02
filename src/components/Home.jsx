import React from 'react';
import Menubar from './Menubar';
import TopBanner from './TopBanner';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Menubar />
            <TopBanner />
            <AboutMe />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;