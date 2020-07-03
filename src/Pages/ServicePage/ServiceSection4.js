import React from 'react'
import Section4Background from '../../assets/service-page/Section4Background.jpg'

const ServiceSection4 = (props) => {
    return (
        <div id="service__4-background" style={{backgroundImage: `url(${Section4Background})`}}>
            <div id="service__4-filter" />
            <div className="flex-column" id="service__4-container">
                <h1 className="h1 white uppercase" id="service__4-heading">See our pricing and our process</h1>
                <button onClick={props.onModalToggle} className="b-white b-l" id="service__4-button">Click to learn more</button>
            </div>
        </div>
    )
}

export default ServiceSection4
