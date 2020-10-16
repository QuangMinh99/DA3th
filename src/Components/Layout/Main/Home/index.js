import React, { Component } from 'react';
import Header from '../Header';
import Slide from '../Slide';
import HomeService from '../Home/HomeService';
import HomeIntroduce from '../Home/HomeIntroduce';
import HomeDoctor from '../Home/HomeDoctor';
import HomeNews from '../Home/HomeNews';
import HomeFeedback from './HomeFeedback';
import Footer from '../Footer';

const Home = (props) => {
        return (
            <div>
                <Header />
                <Slide />
                <HomeIntroduce />
                <HomeService />
                <HomeDoctor />
                <HomeNews />
                <HomeFeedback />
                <Footer />


            </div>
        );
    }

export default Home;