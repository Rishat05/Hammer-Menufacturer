import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import CountOfView from './CountOfView/CountOfView';
import Summery from './Summery/Summery';
import Tools from './Tools';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Tools></Tools>
            <Summery></Summery>
            <CountOfView></CountOfView>
            <Contact></Contact>
        </div>
    );
};

export default Home;