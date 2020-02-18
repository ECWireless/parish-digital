import React from 'react';
import webVideo from '../../assets/home-page/hero-video-main.mp4';

export default function H1() {
    return (
        <div className="h1">
            <div className="h1__web-hero-container">
                <video src={webVideo} className="h1__web-hero-video" autoPlay loop muted playsInline />
            </div>
            <div className="h1__overlay" />

            <h1 className="h1__slogan">Your Partner in Video</h1>
            <div className="h1__line" />
            <h2 className="h1__sub-slogan">Our focus is video for business</h2>
            <button className="h1__button h1__button--1">Get a Quote</button>
            <button className="h1__button h1__button--2">Demo Reel</button>
        </div>
    )
}
