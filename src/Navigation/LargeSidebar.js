import React from 'react';
import { NavLink } from 'react-router-dom';

// SVGs
import { ReactComponent as Close } from '../assets/navigation/cross.svg';
import { ReactComponent as WorkIcon } from '../assets/navigation/film.svg';
import { ReactComponent as AboutIcon } from '../assets/navigation/info.svg';
import { ReactComponent as GearIcon } from '../assets/navigation/video-camera.svg';
import { ReactComponent as ContactIcon } from '../assets/navigation/phone.svg';

export default function LargeSidebar(props) {
    return (
        <div className={props.largeSidebarClass}>
			<button
                className="largeSidebar__menu"
                onClick={props.onToggleSidebar}
            >
                <Close className="largeSidebar__menu-icon"/>
            </button>
            <NavLink
                to="/work"
                className="largeSidebar__work"
                activeClassName="largeSidebar__work-active"
                onClick={props.onPageSelection}
            >
                <WorkIcon className="largeSidebar__work-icon" />
                <p className="largeSidebar__work-text">Work</p>
            </NavLink>
            <NavLink
                to="/about"
                className="largeSidebar__about"
                activeClassName="largeSidebar__about-active"
                onClick={props.onPageSelection}
            >
                <AboutIcon className="largeSidebar__about-icon" />
                <p className="largeSidebar__about-text">About</p>
            </NavLink>
            <NavLink
                to="/gear"
                className="largeSidebar__gear"
                activeClassName="largeSidebar__gear-active"
                onClick={props.onPageSelection}
            >
                <GearIcon className="largeSidebar__gear-icon" />
                <p className="largeSidebar__gear-text">Gear</p>
            </NavLink>
            <NavLink
                to="/contact"
                className="largeSidebar__contact"
                activeClassName="largeSidebar__contact-active"
                onClick={props.onPageSelection}
            >
                <ContactIcon className="largeSidebar__contact-icon" />
                <p className="largeSidebar__contact-text">Contact</p>
            </NavLink>
        </div>
    )
}
