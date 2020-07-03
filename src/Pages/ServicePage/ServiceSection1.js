import React from 'react'

const ServiceSection1 = (props) => {
    return (
        <div className="container">
            <div className="flex" id="service__1-heading-container">
                <div className="l--yellow" id="service__1-line-1" />
                <h1 className="h1 uppercase" id="service__1-heading">Share your customers’ successes</h1>
                <div className="l--yellow" id="service__1-line-2" />
            </div>
            <div className="col-2 card" id="service__1-card-container">
                <div className="flex-column col-2-1" style={{alignItems: 'center', justifyContent: 'center'}}>
                    <iframe
                        title="Customer Success Stories Example"
                        id="service__video-1"
                        src="https://player.vimeo.com/video/427757068?title=0&byline=0&portrait=0"
                        frameBorder={0} allow="autoplay; fullscreen" allowFullScreen>
                    </iframe>
                </div>
                <div className="flex-column col-2-2" id="service__description-container">
                    <p className="p-m">Customer Success Stories are a powerful method of capturing and showcasing 
                        the personal journeys of your customers in a polished, engaging manner. 
                        Think of them as testimonials with a cinematic flair— one to two minutes of honest, 
                        non-scripted feedback from your most successful, satisfied or unique customers 
                        packaged in a highly-shareable video narrative. Check out our example <span id="service__1-text-variation-1">to the left.</span><span id="service__1-text-variation-2">below.</span>
                    </p>
                    <p className="p-m" style={{marginTop: '3rem'}}>A video testimonial packs more of a punch more than a written testimonial. Our Customer 
                        Success Stories inject personality and relatability into the average B2B case study. 
                        We capture your customers interacting with your product or service in their own 
                        environment, creating a compelling case for why potential customers should consider 
                        partnering with you.
                    </p>
                    <button onClick={props.onModalToggle} className="b b-m" id="service__button-1">Get a Quote</button>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection1
