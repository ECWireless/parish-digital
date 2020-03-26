import React from 'react'

export default function G1(props) {
    return (
        <div className="g1">
            <div className="g1__background" />
            <div className="g1__photo" />
            <h1 className="g1__heading">Our Gear</h1>
            <div className="g1__line" />
            <p className="g1__paragraph-1">Four equipment is versatile, practical, and professional.</p>
            <p className="g1__paragraph-2">We’ll create your project exactly how you want without the hoo-ha.</p>
            <button className="g1__button" onClick={props.scrollDown}>View Gear</button>
        </div>
    )
}
