import React from 'react'

const ServiceSection1 = () => {
    return (
        <div className="container">
            <div id="service__margin-1" />
            <div className="col-2">
                <div className="flex-column col-2-1" id="service__description-container">
                    <h2 className="h2 uppercase">Share your customers’ successes</h2>
                    <p className="p-m" style={{marginTop: '3rem'}}>Customer Success Stories are a powerful method of capturing and showcasing 
                        the personal journeys of your customers in a polished, engaging manner. 
                        Think of them as testimonials with a cinematic flair— one to two minutes of honest, 
                        non-scripted feedback from your most successful, satisfied or unique customers 
                        packaged in a highly-shareable video narrative.
                    </p>
                    <p className="p-m" style={{marginTop: '3rem'}}>A video testimonial packs more of a punch than a written testimonial. Our Customer 
                        Success Stories inject personality and relatability into the average B2B case study. 
                        We capture your customers interacting with your product or service in their own 
                        environment, creating a compelling case for why potential customers should consider 
                        partnering with you.
                    </p>
                    <button className="button button-m" id="service__button-1">Get a Quote</button>
                </div>
                <div className="flex-column col-2-2" style={{alignItems: 'center', justifyContent: 'flex-start'}}>
                    <iframe
                        title="Customer Success Stories Example"
                        id="service__video-1"
                        src="https://player.vimeo.com/video/427757068?title=0&byline=0&portrait=0"
                        frameBorder={0} allow="autoplay; fullscreen" allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection1
