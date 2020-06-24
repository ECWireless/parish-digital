import React from 'react';

export default function H3(props) {
    return (
        <div className="hp3">

            <div className="hp3__section-1">
                <div className="hp3__photo-background" />
                <div className="hp3__photo" />
                <h2 className="hp3__heading1">What we do</h2>
                <div className="hp3__heading1-bar" />
                <div className="hp3__heading1-line" />

                <h3 className="hp3__sub-heading hp3__sub-heading--1">Corporate Video</h3>
                <p className="hp3__paragraph hp3__paragraph--1">Effectively communicate to your company</p>
                <a
                    href="https://vimeo.com/320622734"
                    target="_blank" rel="noopener noreferrer"
                    className="hp3__button-link hp3__button-link--1"
                >
                    <button className="hp3__button hp3__button--1">View Example</button>
                </a>
                <div className="hp3__line hp3__line--1" />

                <h3 className="hp3__sub-heading hp3__sub-heading--2">Marketing Video</h3>
                <p className="hp3__paragraph hp3__paragraph--2">Reach a wider audience in an engaging way</p>
                <a
                    href="https://vimeo.com/128684206"
                    target="_blank" rel="noopener noreferrer"
                    className="hp3__button-link hp3__button-link--2"
                >
                    <button className="hp3__button hp3__button--2">View Example</button>
                </a>
                <div className="hp3__line hp3__line--2" />

                <h3 className="hp3__sub-heading hp3__sub-heading--3">Industrial Video</h3>
                <p className="hp3__paragraph hp3__paragraph--3">Show off your facilities, equipment, or industrial capabilities</p>
                <a
                    href="https://vimeo.com/365644402"
                    target="_blank" rel="noopener noreferrer"
                    className="hp3__button-link hp3__button-link--3"
                >
                    <button className="hp3__button hp3__button--3">View Example</button>
                </a>
                <div className="hp3__line hp3__line--3" />

            </div>

            <div className="hp3__section-2" ref={props.demoReelRef}>
                <h2 className="hp3__heading2">Parish Digital</h2>
                <div className="hp3__heading2-bar" />
                <div className="hp3__heading2-line" />
                <p className="hp3__heading2-sub">We’ve consistently produced top-notch videos and happy clients since 2007</p>
                <iframe
                    className="hp3__video"
                    title="Demo Reel"
                    src={`https://player.vimeo.com/video/392027059${props.autoplayToggle}`}
                    frameBorder="0" allow="autoplay; fullscreen" allowFullScreen>
                </iframe>

                <h3 className="hp3__sub-heading hp3__sub-heading--4">Capabilities</h3>
                <div className="hp3__line-capabilities" />
                <ul className="hp3__list">
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

                <ul className="hp3__list-alt-1">
                    <li>On-location video production</li>
                    <li>In-studio video production</li>
                    <li>Travel</li>
                    <li>Drone Videography</li>
                    <li>Video Editing</li>
                    <li>2D motion graphics</li>
                    <li>360° VR video production</li>
                    <li>Photography</li>
                </ul>

                <ul className="hp3__list-alt-2">
                    <li>Aerial photography</li>
                    <li>High-speed photography</li>
                    <li>Photo Editing</li>
                    <li>Script Editing</li>
                    <li>Consultation</li>
                    <li>Server Storage and File Backup</li>
                </ul>
            </div>

            <div className="hp3__section-3">
                <h2 className="hp3__heading3">What people say</h2>
                <div className="hp3__heading3-bar" />
                <div className="hp3__heading3-line" />

                <div className="hp3__testimonial-container hp3__testimonial-container--1">
                    <div className="hp3__box" />
                    <p className="hp3__quotation-mark">&ldquo;</p>
                    <p className="hp3__quote">Whether onsite filming, or in-studio creative 
                        editing, Parish Digital continually exceeds our 
                        expectations for top-notch videos.
                    </p>
                    <p className="hp3__name">ERIC DZUBA</p>
                    <p className="hp3__title">Director, Marketing & Innovation</p>
                    <p className="hp3__company">Carmeuse Americas</p>
                </div>

                <div className="hp3__testimonial-container hp3__testimonial-container--2">
                    <div className="hp3__box" />
                    <p className="hp3__quotation-mark">&ldquo;</p>
                    <p className="hp3__quote">Our videos are now bringing in millions of views. 
                        I would highly recommend Parish Digital to 
                        anyone looking to take their video 
                        portfolio to the next level.
                    </p>
                    <p className="hp3__name">Brandon Fandel</p>
                    <p className="hp3__title">Digital Marketing Analyst</p>
                    <p className="hp3__company">Kennametal, Inc.</p>
                </div>

                <div className="hp3__testimonial-container hp3__testimonial-container--3">
                    <div className="hp3__box" />
                    <p className="hp3__quotation-mark">&ldquo;</p>
                    <p className="hp3__quote">
                        (Parish Digital) always delivers quality work, 
                        even when an unexpected project comes up. 
                        We appreciate how are easy they are to work 
                        with, and that they are flexible to our needs. 
                        They have my full recommendation.
                    </p>
                    <p className="hp3__name">Lindsay Ackman</p>
                    <p className="hp3__title">Product Manager</p>
                    <p className="hp3__company">LivaNova</p>
                </div>

                <div className="hp3__line-bottom" />
            </div>
        </div>
    )
}
