import React from 'react';
import { NavLink } from 'react-router-dom';

// SVGs
import { ReactComponent as WorkIcon } from '../assets/navigation/film.svg';
import { ReactComponent as HomeIcon } from '../assets/navigation/home.svg';
import { ReactComponent as TeamIcon } from '../assets/navigation/users.svg';
import { ReactComponent as GearIcon } from '../assets/navigation/video-camera.svg';
import { ReactComponent as ServiceIcon } from '../assets/navigation/briefcase.svg';

export default function SmallSidebar() {
    return (
        <div className="smallSidebar">
            <NavLink
                to="/" exact
                className="smallSidebar__home"
                activeClassName="smallSidebar__home-active"
                >
                <HomeIcon className="smallSidebar__home-icon"/>
            </NavLink>
            <NavLink
                to="/work"
                className="smallSidebar__work"
                activeClassName="smallSidebar__work-active"
                >
                <WorkIcon className="smallSidebar__work-icon"/>
            </NavLink>
            <NavLink
                to="/team"
                className="smallSidebar__team"
                activeClassName="smallSidebar__team-active"
            >
                <TeamIcon className="smallSidebar__team-icon"/>
            </NavLink>
            <NavLink
                to="./gear"
                className="smallSidebar__gear"
                activeClassName="smallSidebar__gear-active"
            >
                <GearIcon className="smallSidebar__gear-icon"/>
            </NavLink>
            <NavLink
                to="./service"
                className="smallSidebar__service"
                activeClassName="smallSidebar__service-active"
            >
                <ServiceIcon className="smallSidebar__service-icon"/>
            </NavLink>
        </div>
    )
}
