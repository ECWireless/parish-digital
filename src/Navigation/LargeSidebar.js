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
                <p className="largeSidebar__work-text">Work</p>
                <WorkIcon className="largeSidebar__work-icon" />
            </div>
            <div className="largeSidebar__about">
                <p className="largeSidebar__about-text">About</p>
                <AboutIcon className="largeSidebar__about-icon" />
            </div>
            <div className="largeSidebar__gear">
                <p className="largeSidebar__gear-text">Gear</p>
                <GearIcon className="largeSidebar__gear-icon" />
            </div>
            <div className="largeSidebar__contact">
                <p className="largeSidebar__contact-text">Contact</p>
                <WorkIcon className="largeSidebar__contact-icon" />
            </div>
        </div>
    )
}
