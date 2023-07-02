import React from 'react';
import Menubar from './Menubar';
import TopBanner from './TopBanner';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Menubar />
            <TopBanner />
            {/* <AboutMe /> */}
            <Skills />
            {/* <Projects /> */}
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;