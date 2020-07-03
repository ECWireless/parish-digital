import React from 'react'

// // Images
import CSS1 from '../../assets/service-page/CSS1.jpg'
import CSS2 from '../../assets/service-page/CSS2.jpg'

const ServiceSection3 = () => {
    return (
        <div id="service__3-flip-container">
            <div className="col-2" id="service__3-container">
                <div className="col-2-1">
                    <div style={{backgroundImage: `url(${CSS1})`}} id="service__3-photo"/>
                    <div id="service__3-gradient" />
                </div>
                <div className="col-2-2" id="service__3-text-container">
                    <div className="flex" id="service__3-heading-container">
                        <div className="l--yellow" id="service__3-line" />
                        <h3 className="h3 black uppercase" id="service__3-heading">Get your customers in front of the camera</h3>
                        <div className="l--yellow" id="service__3-line" />
                    </div>
                    <div className="card" id="service__3-paragraph-container">
                        <p className="p-m" id="service__3-paragraph">Your customers’ successes are your successes. By allowing them to speak 
                            on your behalf, you can market your services with an added layer of credibility 
                            and authenticity, demonstrating that you have a proven track record of 
                            successfully addressing customers’ needs.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-2" id="service__3-container-2">
                <div className="col-2-1" id="service__3-text-container">
                    <div className="flex" id="service__3-heading-container-2">
                        <div className="l--yellow" id="service__3-line" />
                        <h3 className="h3 black uppercase" id="service__3-heading">Adding a face to eWOM</h3>
                        <div className="l--yellow" id="service__3-line" />
                    </div>
                    <div className="card" id="service__3-paragraph-container-2">
                        <p className="p-m">Customers value the opinions of other consumers— and word-of-mouth 
                            recommendations aren’t limited to personal conversations. Electronic word 
                            of mouth marketing, or eWOM, has become an increasingly important determining 
                            factor for online and in-person sales. The growing popularity of eWOM has prompted 
                            companies like Amazon to create online review platforms for their consumers, 
                            allowing for immediate, unfiltered customer feedback.
                        </p>
                        <p className="p-m" style={{marginTop: '3rem'}}>The downside of eWOM is the lack of human interaction. With customer testimonial 
                            videos, you can add a face, personality, and a sense of emotion to the review. 
                            Done right, this adds another layer of credibility to the testimonial.
                        </p>
                    </div>
                    <p className="p-m" id="service__3-paragraph-2">Word-of-mouth recommendations aren’t limited to personal 
                        conversations. The growing popularity of eWOM has prompted 
                        companies like Amazon to create online review platforms for 
                        immediate, unfiltered customer feedback.
                    </p>
                </div>
                <div className="col-2-2">
                    <div style={{backgroundImage: `url(${CSS2})`}} id="service__3-photo"/>
                    <div id="service__3-gradient" />
                </div>
            </div>
        </div>
    )
}

export default ServiceSection3
