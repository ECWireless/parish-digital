import React from 'react';
import webVideo from '../../assets/home-page/hero-video-final.mp4';

export default function H1(props) {
    return (
        <div className="hp1">
            <div className="hp1__web-hero-container">
                <video src={webVideo} className="hp1__web-hero-video" autoPlay loop muted playsInline />
            </div>
            <div className="hp1__overlay" />

            <h1 className="hp1__slogan">Your Partner in Video</h1>
            <div className="hp1__line" />
            <h2 className="hp1__sub-slogan">Our focus is video for business</h2>
            <a href="mailto: keith@parishdigital.com" className="hp1__button-1-link">
                <button className="hp1__button hp1__button--1">Get a Quote</button>
            </a>
                <button className="hp1__button hp1__button--2" onClick={props.onDemoReelScroll}>Demo Reel</button>
        </div>
    )
}
