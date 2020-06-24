import React from 'react';
import { NavLink } from 'react-router-dom';

// SVGs
import { ReactComponent as Close } from '../assets/navigation/cross.svg';
import { ReactComponent as HomeIcon } from '../assets/navigation/home.svg';
import { ReactComponent as WorkIcon } from '../assets/navigation/film.svg';
import { ReactComponent as TeamIcon } from '../assets/navigation/users.svg';
import { ReactComponent as GearIcon } from '../assets/navigation/video-camera.svg';
import { ReactComponent as ServiceIcon } from '../assets/navigation/briefcase.svg';

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
                to="/" exact
                className="largeSidebar__home"
                activeClassName="largeSidebar__home-active"
                onClick={props.onPageSelection}
            >
                <HomeIcon className="largeSidebar__home-icon" />
                <p className={props.toggleSidebar ? "largeSidebar__home-text": ''}>Home</p>
            </NavLink>
            <NavLink
                to="/work"
                className="largeSidebar__work"
                activeClassName="largeSidebar__work-active"
                onClick={props.onPageSelection}
            >
                <WorkIcon className="largeSidebar__work-icon" />
                <p className={props.toggleSidebar ? "largeSidebar__work-text": ''}>Work</p>
            </NavLink>
            <NavLink
                to="/team"
                className="largeSidebar__team"
                activeClassName="largeSidebar__team-active"
                onClick={props.onPageSelection}
            >
                <TeamIcon className="largeSidebar__team-icon" />
                <p className={props.toggleSidebar ? "largeSidebar__team-text": ''}>Team</p>
            </NavLink>
            <NavLink
                to="/gear"
                className="largeSidebar__gear"
                activeClassName="largeSidebar__gear-active"
                onClick={props.onPageSelection}
            >
                <GearIcon className="largeSidebar__gear-icon" />
                <p className={props.toggleSidebar ? "largeSidebar__gear-text": ''}>Gear</p>
            </NavLink>
            <NavLink
                to="/service"
                className="largeSidebar__service"
                activeClassName="largeSidebar__service-active"
                onClick={props.onPageSelection}
            >
                <ServiceIcon className="largeSidebar__service-icon" />
                <p className={props.toggleSidebar ? "largeSidebar__service-text": ''}>Service</p>
            </NavLink>

            <NavLink
                to="/employee"
                className="largeSidebar__employee"
                onClick={props.onPageSelection}
            >
                {
                    !props.loggedIn
                    ? <button className="largeSidebar__button">Login</button>
                    : <button className="largeSidebar__button">Profile</button>
                }
            </NavLink>
        </div>
    )
}
