import React from 'react';
import { NavLink } from 'react-router-dom';

// Images
import PDLogo from '../assets/navigation/PD-logo-small.png';

// SVGs
import { ReactComponent as MenuButton } from '../assets/navigation/menu.svg';
import { ReactComponent as Email } from '../assets/navigation/envelop.svg';
import { ReactComponent as Phone } from '../assets/navigation/phone.svg';

export default function Header(props) {
    return (
        <div className="header">
			<button
                className="header__menu"
                onClick={props.onToggleSidebar}
            >
                <MenuButton className="header__menu-icon"/>
            </button>
            <NavLink
                to="/"
                className="header__logo">
                <img className="header__logo-image" src={PDLogo} alt="Logo"/>
            </NavLink>
            <div className="header__email">
                <Email className="header__email-icon"/>
            </div>
            <div className="header__phone">
                <Phone className="header__phone-icon"/>
            </div>
        </div>
    )
}
