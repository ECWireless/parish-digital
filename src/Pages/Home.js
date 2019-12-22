import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div className="homePage">
                <div className="homePage__web-hero">Web Hero</div>
                <div className="homePage__slogan">Parish Digital Video Production</div>
                <div className="homePage__testimonials">Testimonials</div>
                <div className="homePage__photos">Photos</div>
                <div className="homePage__stat">Over 1,000 videos produced.</div>
            </div>
        )
    }
}
