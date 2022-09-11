import React from 'react';
import Banner from './Banner';
import CountDown from './CountDown';
import Packages from './Packages';
import Seo from './Seo.js';



const Home = () => {
    return (
        <div>
            <Banner/>
            <Seo/>
            <Packages/>
            <CountDown/>
        </div>
    );
};

export default Home;