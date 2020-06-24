import React from 'react'

const ServiceSection2 = () => {
    return (
        <div className="col-3" id="service__qualities-container">
            <a
                className="col-3-1 flex-column"
                id="service__quality-container"
                href="http://nuife.org/index.php/pnap/article/view/338/318"
                target="_blank" rel="noopener noreferrer"
            >
                <h2 className="h2 uppercase" id="service__quality-text">
                    Effective
                </h2>
                <p className="p-m" id="service__quality-text" style={{marginTop: '1rem'}}>Influence purchasing behavior and decision making</p>
            </a>

            <a
                className="col-3-2 flex-column"
                id="service__quality-container"
                href="https://www.sciencedirect.com/science/article/pii/S0960982215006557"
                target="_blank" rel="noopener noreferrer"
            >
                <h2 className="h2 white uppercase" id="service__quality-text">
                    Authentic
                </h2>
                <p className="p-m white" id="service__quality-text" style={{marginTop: '1rem'}}>Face and personality are compelling tools</p>
            </a>

            <a
                className="col-3-3 flex-column"
                id="service__quality-container"
                href="https://www.sciencedirect.com/science/article/pii/S1877050910003832"
                target="_blank" rel="noopener noreferrer"
            >
                <h2 className="h2 white uppercase" id="service__quality-text">
                    Powerful
                </h2>
                <p className="p-m white" id="service__quality-text" style={{marginTop: '1rem'}}>A powerful technique for B2B digital marketing</p>
            </a>
        </div>
    )
}

export default ServiceSection2
