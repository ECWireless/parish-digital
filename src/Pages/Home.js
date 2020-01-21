import React, { Component } from 'react';

import { ReactComponent as Chevron } from '../assets/home-page/circle-down.svg';
import webVideo from '../assets/home-page/hero-video-2.mov';

export default class Home extends Component {
    render() {
        return (
            <div className="homePage">
                <div className="homePage__web-hero">
                    <div className="homePage__web-hero-container">
                        <video src={webVideo} className="homePage__web-hero-video" autoPlay loop muted playsInline />
                    </div>
                    <div className="homePage__chevron-container">
                        <Chevron className="homePage__chevron-svg" />
                    </div>
                </div>
                <div className="homePage__slogan">
                    <h1 className="homePage__slogan-heading">Parish Digital</h1>
                    <h3 className="homePage__slogan-subheading">Video Production</h3>
                    <div className="homePage__slogan-box">
                        <h3 className="homePage__slogan-box-heading">Our Focus is <span style={{fontWeight: 'bold'}}>video </span>for <span style={{fontWeight: 'bold'}}>business</span></h3>
                        <div className="homePage__slogan-box-notch" />
                        <p className="homePage__slogan-box-paragraph1">Since 2007, we’ve consistently produced top-notch videos and happy clients.</p>
                        <p className="homePage__slogan-box-paragraph2">Located in Pittsburgh, PA</p>
                        <button className="homePage__slogan-box-button homePage__slogan-box-button--1">Get a Quote</button>
                        <button className="homePage__slogan-box-button homePage__slogan-box-button--2">2019 Video Reel</button>
                    </div>
                </div>
                <div className="homePage__testimonials">
                    <div className="homepage__testimonial-container--1">Testimonial 1</div>
                    <div className="homepage__testimonial-container--2">Testimonial 2</div>
                    <div className="homepage__testimonial-container--3">Testimonial 3</div>
                </div>
                <div className="homePage__photos">
                    <div className="homePage__photo-container--1">Corporate Video</div>
                    <div className="homePage__photo-container--2">Commercial Video</div>
                    <div className="homePage__photo-container--3">Informational Video</div>
                </div>
                <div className="homePage__stat">
                    <p className="homePage__stat-paragraph">Over 1,000 videos produced.</p>
                </div>
            </div>
        )
    }
}
