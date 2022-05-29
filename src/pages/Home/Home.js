import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import CountOfView from './CountOfView/CountOfView';
import Review from './Review';
import ShowReview from './ShowReview';
import Summery from './Summery/Summery';
import Tools from './Tools';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Tools></Tools>
            <Summery></Summery>
            <ShowReview></ShowReview>
            <Review></Review>
            <CountOfView></CountOfView>
            <Contact></Contact>
        </div>
    );
};

export default Home;