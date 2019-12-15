import React from 'react';
import { NavLink } from 'react-router-dom';

// SVGs
import { ReactComponent as WorkIcon } from '../assets/navigation/film.svg';
import { ReactComponent as AboutIcon } from '../assets/navigation/info.svg';
import { ReactComponent as GearIcon } from '../assets/navigation/video-camera.svg';
import { ReactComponent as ContactIcon } from '../assets/navigation/phone.svg';

export default function SmallSidebar() {
    return (
        <div className="smallSidebar">
            <NavLink
                to="/work"
                className="smallSidebar__work"
                activeClassName="smallSidebar__work-active"
                >
                <WorkIcon className="smallSidebar__work-icon"/>
            </NavLink>
            <NavLink
                to="/about"
                className="smallSidebar__about"
                activeClassName="smallSidebar__about-active"
            >
                <AboutIcon className="smallSidebar__about-icon"/>
            </NavLink>
            <NavLink
                to="./gear"
                className="smallSidebar__gear"
                activeClassName="smallSidebar__gear-active"
            >
                <GearIcon className="smallSidebar__gear-icon"/>
            </NavLink>
            <NavLink
                to="/contact"
                className="smallSidebar__contact"
                activeClassName="smallSidebar__contact-active"
            >
                <ContactIcon className="smallSidebar__contact-icon"/>
            </NavLink>
        </div>
    )
}
