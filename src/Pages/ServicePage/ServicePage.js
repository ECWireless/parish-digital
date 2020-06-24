import React from 'react'

// Sections
import ServiceSection1 from './ServiceSection1'
import ServiceSection2 from './ServiceSection2'
import ServiceSection3 from './ServiceSection3'

const ServicePage = () => {
    return (
        <>
            <ServiceSection1 />
            <div id="service__flip-section">
                <ServiceSection2 />
                <ServiceSection3 />
            </div>
        </>
    )
}

export default ServicePage
