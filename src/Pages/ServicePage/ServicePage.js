import React from 'react'

// Sections
import ServiceSection1 from './ServiceSection1'
import ServiceSection2 from './ServiceSection2'
import ServiceSection3 from './ServiceSection3'
import ServiceSection4 from './ServiceSection4'
import ServiceModal from './ServiceModal'

const ServicePage = (props) => {

    return (
        <>
            { props.modal && (
                <>
                    <ServiceModal />
                </>
            )}
            <ServiceSection1 onModalToggle={props.onModalToggle} />
                <div id="service__flip-section">
                    <ServiceSection2 />
                    <ServiceSection3 />
                </div>
            <ServiceSection4 onModalToggle={props.onModalToggle} />
        </>
    )
}

export default ServicePage
