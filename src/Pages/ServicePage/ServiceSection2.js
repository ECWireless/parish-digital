import React from 'react'
import EffectiveIcon from '../../assets/service-page/effective.png';
import AuthenticIcon from '../../assets/service-page/authentic.png';
import PowerfulIcon from '../../assets/service-page/powerful.png';

const ServiceSection2 = () => {
    return (
        <div className="col-3" id="service__qualities-container">
            <a
                className="col-3-1 flex-column"
                id="service__quality-container"
                href="http://nuife.org/index.php/pnap/article/view/338/318"
                target="_blank" rel="noopener noreferrer"
            >
                <img src={EffectiveIcon} alt="Graph" id="service__2-icon" />
                <div className="flex-column" id="service__2-text-container">
                    <h2 className="h2 uppercase white" id="service__quality-text-1">
                        Effective
                    </h2>
                    <p className="p-m white" id="service__quality-text-2">Influence purchasing behavior and decision making</p>
                    <p className="p-s yellow uppercase" style={{marginTop: '1rem'}}>Learn More<span id="service__2-elipsis">...</span></p>
                </div>
            </a>

            <a
                className="col-3-2 flex-column"
                id="service__quality-container-variation"
                href="https://www.sciencedirect.com/science/article/pii/S0960982215006557"
                target="_blank" rel="noopener noreferrer"
            >
                <img src={AuthenticIcon} alt="Checkmark" id="service__2-icon" />
                <div className="flex-column" id="service__2-text-container">
                    <h2 className="h2 white uppercase" id="service__quality-text-1">
                    Authentic
                    </h2>
                    <p className="p-m white" id="service__quality-text-2">Face and personality are compelling tools</p>
                    <p className="p-s yellow uppercase" style={{marginTop: '1rem'}}>Learn More<span id="service__2-elipsis">...</span></p>
                </div>
            </a>

            <a
                className="col-3-3 flex-column"
                id="service__quality-container-variation"
                href="https://www.sciencedirect.com/science/article/pii/S1877050910003832"
                target="_blank" rel="noopener noreferrer"
            >
                <img src={PowerfulIcon} alt="Chess Piece" id="service__2-icon" />
                <div className="flex-column" id="service__2-text-container">
                    <h2 className="h2 white uppercase" id="service__quality-text-1">
                    Powerful
                    </h2>
                    <p className="p-m white" id="service__quality-text-2">A powerful technique for B2B digital marketing</p>
                    <p className="p-s yellow uppercase" style={{marginTop: '1rem'}}>Learn More<span id="service__2-elipsis">...</span></p>
                </div>
            </a>
        </div>
    )
}

export default ServiceSection2
