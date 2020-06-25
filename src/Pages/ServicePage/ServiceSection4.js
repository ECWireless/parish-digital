import React from 'react'

const ServiceSection4 = (props) => {
    return (
        <div id="service__4-background">
            <div className="flex-column" id="service__4-container">
                <h2 className="h2 white uppercase">See our pricing and our process</h2>
                <p className="p-m white" id="service__4-paragraph">Click below to find out what a customer success story project includes</p>
                <button onClick={props.onModalToggle} className="b-white b-l" id="service__4-button">PRICING AND PROCESS</button>
            </div>
        </div>
    )
}

export default ServiceSection4
