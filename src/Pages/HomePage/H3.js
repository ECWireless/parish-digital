import React from 'react';

export default function H3() {
    return (
        <div className="h3">

            <div className="h3__background-1" />
            <div className="h3__background-2" />
            <div className="h3__background-3" />

            <div className="h3__section-1">
                <div className="h3__photo-background" />
                <div className="h3__photo" />
                <h2 className="h3__heading1">What we do</h2>
                <div className="h3__heading1-bar" />
                <div className="h3__heading1-line" />

                <h3 className="h3__sub-heading h3__sub-heading--1">Corporate Video</h3>
                <p className="h3__paragraph h3__paragraph--1">Effectively communicate to your company</p>
                <button className="h3__button h3__button--1">View Example</button>
                <div className="h3__line h3__line--1" />

                <h3 className="h3__sub-heading h3__sub-heading--2">Marketing Video</h3>
                <p className="h3__paragraph h3__paragraph--2">Reach a wider audience in an engaging way</p>
                <button className="h3__button h3__button--2">View Example</button>
                <div className="h3__line h3__line--2" />

                <h3 className="h3__sub-heading h3__sub-heading--3">Industrial Video</h3>
                <p className="h3__paragraph h3__paragraph--3">Show off your facilities, equipment, or industrial capabilities</p>
                <button className="h3__button h3__button--3">View Example</button>
                <div className="h3__line h3__line--3" />

            </div>

            <div className="h3__section-2">
                <h2 className="h3__heading2">Parish Digital</h2>
                <div className="h3__heading2-bar" />
                <div className="h3__heading2-line" />
                <p className="h3__heading2-sub">We’ve consistently produced top-notch videos and happy clients since 2007</p>
                <iframe
                    className="h3__video"
                    title="Demo Reel"
                    src="https://player.vimeo.com/video/392027059"
                    frameBorder="0" allow="autoplay; fullscreen" allowFullScreen>
                </iframe>

                <h3 className="h3__sub-heading h3__sub-heading--4">Capabilities</h3>
                <div className="h3__line-capabilities" />
                <ul className="h3__list">
                    <li>On-location video production</li>
                    <li>In-studio video production</li>
                    <li>Travel</li>
                    <li>Drone Videography</li>
                    <li>Video Editing</li>
                    <li>2D motion graphics</li>
                    <li>360° VR video production</li>
                    <li>Photography</li>
                    <li>Aerial photography</li>
                    <li>High-speed photography</li>
                    <li>Photo Editing</li>
                    <li>Script Editing</li>
                    <li>Consultation</li>
                    <li>Server Storage and File Backup</li>
                </ul>
            </div>

            <div className="h3__section-3">

            </div>
        </div>
    )
}
