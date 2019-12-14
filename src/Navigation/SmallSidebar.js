import React from 'react'

export default function SmallSidebar() {
    return (
        <div className="smallSidebar">
            <div className="smallSidebar__work">
                <div className="smallSidebar__work-icon">icon</div>
                <p className="smallSidebar__work-text">Work</p>
            </div>
            <div className="smallSidebar__about">
                <div className="smallSidebar__about-icon">icon</div>
                <p className="smallSidebar__about-text">About</p></div>
            <div className="smallSidebar__gear">
                <div className="smallSidebar__gear-icon">icon</div>
                <p className="smallSidebar__gear-text">Gear</p>
            </div>
            <div className="smallSidebar__contact">
                <div className="smallSidebar__contact-icon">icon</div>
                <p className="smallSidebar__contact-text">Contact</p>
            </div>
        </div>
    )
}
