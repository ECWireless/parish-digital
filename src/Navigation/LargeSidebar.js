import React from 'react';

// SVGs
import { ReactComponent as WorkIcon } from '../assets/navigation/film.svg';
import { ReactComponent as AboutIcon } from '../assets/navigation/info.svg';
import { ReactComponent as GearIcon } from '../assets/navigation/video-camera.svg';
import { ReactComponent as ContactIcon } from '../assets/navigation/phone.svg';

export default function LargeSidebar() {
    return (
        <div className="largeSidebar">
            <div className="largeSidebar__work">
                <WorkIcon className="largeSidebar__work-icon" />
                <p className="largeSidebar__work-text">Work</p>
            </div>
            <div className="largeSidebar__about">
                <AboutIcon className="largeSidebar__about-icon" />
                <p className="largeSidebar__about-text">About</p>
            </div>
            <div className="largeSidebar__gear">
                <GearIcon className="largeSidebar__gear-icon" />
                <p className="largeSidebar__gear-text">Gear</p>
            </div>
            <div className="largeSidebar__contact">
                <ContactIcon className="largeSidebar__contact-icon" />
                <p className="largeSidebar__contact-text">Contact</p>
            </div>
        </div>
    )
}
