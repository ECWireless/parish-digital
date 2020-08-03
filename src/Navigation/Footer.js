import React from 'react'

export default function Footer() {
    return (
        <div className="footer">
            <h2 className="footer__heading">Contact Us</h2>
            <p className="footer__paragraph">We respond within 24 hours, 7 days a week.</p>
            <a href="tel:412-951-3331" className="footer__number">(412) 951-3331</a>
            <a className="footer__badge-link" href="https://upcity.com/local-marketing-agencies/lists/top-video-production-companies-in-the-united-states">
                <img className="footer__badge" alt="badge" src="https://upcity-marketplace.s3.amazonaws.com/badges/43f09c0f05c5717ea1aa9aa0533ce196.png" />
            </a>

        </div>
    )
}
