import React from 'react'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__contact">
                <h3 className="footer__contact-heading">Contact Us</h3>
                <p className="footer__contact-paragraph">We respond within 24 hours, 7 days a week.</p>
                <p className="footer__contact-number">(412) 951-3331</p>
                <div className="footer__contact-social">Social Icons</div>
            </div>
            <form action="" className="footer__form">
                <label htmlFor="" className="footer__form-email-label">Email</label>
                <input type="text" className="footer__form-email-input"/>
                <label htmlFor="" className="footer__form-name-label">Name</label>
                <input type="text" className="footer__form-name-input"/>
                <label htmlFor="" className="footer__form-subject-label">Subject</label>
                <input type="text" className="footer__form-subject-input"/>
                <label htmlFor="" className="footer__form-message-label">Message</label>
                <textarea name="" className="footer__form-message-input"></textarea>
            </form>
            <div className="footer__bottom">

            </div>
        </div>
    )
}
