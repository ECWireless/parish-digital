import React from 'react'

export default function G1(props) {
    return (
        <div className="g1">
            <div className="g1__background" />
            <div className="g1__photo" />
            <h1 className="g1__heading">Our Gear</h1>
            <div className="g1__line" />
            <p className="g1__paragraph-1">Our equipment is versatile, practical, and professional.</p>
            <p className="g1__paragraph-2">From GoPros to 4K Cinema Cameras like the Canon C300 mk ii, our wide range of camera, stabilizers, lighting and audio gear provides optimal flexibility for any project.</p>
            <button className="g1__button" onClick={props.scrollDown}>View Gear</button>
        </div>
    )
}
