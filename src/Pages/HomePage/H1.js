import React from 'react';
import webVideo from '../../assets/home-page/hero-video-main.mp4';

export default function H1() {
    return (
        <div className="h1__web-hero">
            <div className="h1__web-hero-container">
                <video src={webVideo} className="h1__web-hero-video" autoPlay loop muted playsInline />
            </div>
        </div>
    )
}
