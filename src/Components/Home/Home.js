import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from './Banner';
import Packages from './Packages';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Packages/>
        </div>
    );
};

export default Home;