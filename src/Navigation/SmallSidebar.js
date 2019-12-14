import React from 'react';

// SVGs
import { ReactComponent as WorkIcon } from '../assets/navigation/film.svg';
import { ReactComponent as AboutIcon } from '../assets/navigation/info.svg';
import { ReactComponent as GearIcon } from '../assets/navigation/video-camera.svg';
import { ReactComponent as ContactIcon } from '../assets/navigation/phone.svg';

export default function SmallSidebar() {
    return (
        <div className="smallSidebar">
            <div className="smallSidebar__work">
                <WorkIcon className="smallSidebar__work-icon"/>
            </div>
            <div className="smallSidebar__about">
                <AboutIcon className="smallSidebar__about-icon"/>
            </div>
            <div className="smallSidebar__gear">
                <GearIcon className="smallSidebar__gear-icon"/>
            </div>
            <div className="smallSidebar__contact">
                <ContactIcon className="smallSidebar__contact-icon"/>
            </div>
        </div>
    )
}
