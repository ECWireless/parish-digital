import React from 'react'

// // Images
import CSS1 from '../../assets/service-page/CSS1.jpg'
import CSS2 from '../../assets/service-page/CSS2.jpg'

const ServiceSection3 = () => {
    return (
        <>
            <div className="col-2">
                <div className="col-2-1">
                    <img style={{backgroundImage: `url(${CSS1})`}} alt="" id="service__3-photo-1"/>
                </div>
                <div className="col-2-2" id="service__3-text-1">
                    <h2 className="h2 yellow">Get your customers in front of the camera</h2>
                    <p className="p-m" style={{marginTop: '3rem'}}>Your customers’ successes are your successes. By allowing them to speak 
                        on your behalf, you can market your services with an added layer of credibility 
                        and authenticity, demonstrating that you have a proven track record of 
                        successfully addressing customers’ needs.
                    </p>
                </div>
            </div>
            <div className="col-2">
                <div className="col-2-1" id="service__3-text-2">
                    <h2 className="h2 yellow">Adding a face to eWOM</h2>
                    <p className="p-m" style={{marginTop: '3rem'}}>Customers value the opinions of other consumers— and word-of-mouth 
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
                <div className="col-2-2" id="service__3-photo-2">
                    <img style={{backgroundImage: `url(${CSS2})`}} alt="" id="service__3-photo-1"/>
                </div>
            </div>
        </>
    )
}

export default ServiceSection3
