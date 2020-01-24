import React, { Component, createRef } from 'react';

import { ReactComponent as Chevron } from '../assets/home-page/circle-down.svg';
import webVideo from '../assets/home-page/hero-video-2.mov';

export default class Home extends Component {

    state = {
        myRef: createRef(),
    }

    render() {
        console.log(this.state.myRef)
        return (
            <div className="homePage">
                <div className="homePage__web-hero">
                    <div className="homePage__web-hero-container">
                        <video src={webVideo} className="homePage__web-hero-video" autoPlay loop muted playsInline />
                    </div>
                    <div className="homePage__chevron-container" onClick={this.props.windowScroll.bind(this, 850)}>
                        <Chevron className="homePage__chevron-svg" />
                    </div>
                </div>
                <div className="homePage__slogan" ref={this.state.myRef}>
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
                    <h3 className="homePage__testimonials-heading">What People Say</h3>
                    <div className="homePage__testimonial-container homePage__testimonial-container--1">
                        <p className="homePage__testimonial-quote">"(An) ability to capture the spirit of a subject."</p>
                        <div className="homePage__testimonial-line" />
                        <div className="homePage__testimonial-photo homePage__testimonial-photo--1" />
                        <p className="homePage__testimonial-name">Dorothy Fadiman</p>
                        <p className="homePage__testimonial-title-1">Oscar-Nominated Filmmaker</p>
                        <p className="homePage__testimonial-title-2">Concentric Media</p>
                    </div>
                    <div className="homePage__testimonial-container homePage__testimonial-container--2">
                        <p className="homePage__testimonial-quote">"Serious about what they do and awesome to work with."</p>
                        <div className="homePage__testimonial-line" />
                        <div className="homePage__testimonial-photo homePage__testimonial-photo--2" />
                        <p className="homePage__testimonial-name">Shannon Barr</p>
                        <p className="homePage__testimonial-title-1">Creative Director</p>
                        <p className="homePage__testimonial-title-2">Howard Hanna Real Estate</p>
                    </div>
                    <div className="homePage__testimonial-container homePage__testimonial-container--3">
                        <p className="homePage__testimonial-quote">"A level higher than most. They deliver. A+."</p>
                        <div className="homePage__testimonial-line" />
                        <div className="homePage__testimonial-photo homePage__testimonial-photo--3" />
                        <p className="homePage__testimonial-name">Greg Yost</p>
                        <p className="homePage__testimonial-title-1">Chief Creative Officer</p>
                        <p className="homePage__testimonial-title-2">LazorYost Marketing & Design</p>
                    </div>
                </div>
                <div className="homePage__photos">
                    <h3 className="homePage__photos-heading">What We Do</h3>
                    <div className="homePage__photo-container homePage__photo-container--1">Corporate Video</div>
                    <div className="homePage__photo-container homePage__photo-container--2">Commercial Video</div>
                    <div className="homePage__photo-container homePage__photo-container--3">Informational Video</div>
                </div>
                <div className="homePage__stat">
                    <p className="homePage__stat-paragraph">Over 1,000 videos produced.</p>
                </div>
            </div>
        )
    }
}
