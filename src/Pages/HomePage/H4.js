import React from 'react'

export default function H4() {
    return (
        <div className="h4">
            <div className="h4__photo-container">
                <div className="h4__photo" />
            </div>
            <div className="h4__heading-container">
                <h2 className="h4__heading">What we do</h2>
            </div>
            <div className="h4__line" />

            <h3 className="h4__sub-heading h4__sub-heading--1">Corporate Video</h3>
            <p className="h4__paragraph h4__paragraph--1">We've worked with everyone from international Fortune 500 corporations to small businesses.</p>
            <h3 className="h4__sub-heading h4__sub-heading--2">Commercial Video</h3>
            <p className="h4__paragraph h4__paragraph--2">Whether for TV, web or soical, we can help your brand reach a wider audience.</p>
            <h3 className="h4__sub-heading h4__sub-heading--3">Informational Video</h3>
            <p className="h4__paragraph h4__paragraph--3">Need to train new employees or create a "how to" video for your products? We can help!</p>
        </div>
    )
}
