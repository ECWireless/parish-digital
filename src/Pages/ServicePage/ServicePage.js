import React from 'react'

// Sections
import ServiceSection1 from './ServiceSection1'
import ServiceSection2 from './ServiceSection2'
import ServiceSection3 from './ServiceSection3'
import ServiceSection4 from './ServiceSection4'

const ServicePage = () => {
    return (
        <>
            <ServiceSection1 />
                <div id="service__flip-section">
                    <ServiceSection2 />
                    <ServiceSection3 />
                </div>
            <ServiceSection4 />
        </>
    )
}

export default ServicePage
