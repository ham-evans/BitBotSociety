import React from 'react';
import Navbar from '../components/Navbar'
import MintHome from '../components/MintHome';
import Welcome from '../components/Welcome'
import About from '../components/About'
import Display from '../components/Display'
import Team from '../components/Team'

const Home = () => {
    return (
        <>  
            <Navbar />
            <MintHome />
            <Welcome />
            <About />
            <Display />
            <Team />
        </>
    );
}

export default Home;