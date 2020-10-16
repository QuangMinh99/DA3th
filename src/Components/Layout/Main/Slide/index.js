import React, { Component } from 'react';
import './style.scss'

const Slide = (props) => {
        return (
            <div className="home-slider">
            <img src="images/slides/slide-1.png" alt="" />
            <img src="images/slides/slide-2.png" alt="" />
            <img src="images/slides/slide-3.png" alt="" />
            </div>
        );
    }

export default Slide;