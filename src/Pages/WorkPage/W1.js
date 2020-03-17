import React from 'react'

export default function W1(props) {
    return (
        <div className="w1">
            <div className="w1__background" />
            <div className="w1__photo" />
            
            <h1 className="w1__heading">Our Work</h1>
            <div className="w1__line" />
            <p className="w1__paragraph-1">We’re a small team but we’ve produced thousands of 
                successful video projects for Pittsburgh-based, national, 
                and international clients.</p>
            <p className="w1__paragraph-2">See some of our favorites below.</p>
            <button className="w1__button" onClick={props.scrollDown}>View Projects</button>
        </div>
    )
}
