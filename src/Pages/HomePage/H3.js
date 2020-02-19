import React from 'react';

// Photo
import Photo from '../../assets/home-page/mike.png'

export default function H3() {
    return (
        <div className="h3">
            <img className="h3__photo" src={Photo} alt=""/>
            <h2 className="h3__heading">Parish Digital</h2>
            <p className="h3__paragraph">Since 2007, we've consistently produced top-notch videos and happy clients.</p>
            <button className="h3__button">Located in Pittsburgh, PA</button>
            <div className="h3__line" />
        </div>
    )
}
