import React, { Component } from 'react';
import { ReactComponent as VimeoIcon } from '../assets/footer/vimeo.svg';

export default class Footer extends Component {
    state = {
        email: '',
        labelEmailActive: true,
        name: '',
        subject: '',
        message: '',
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        console.log('message sent');
    }

    render() {
        return (
            <div className="footer">
                <div className="footer__contact">
                    <h3 className="footer__contact-heading">Contact Us</h3>
                    <p className="footer__contact-paragraph">We respond within 24 hours, 7 days a week.</p>
                    <a href="tel:+4129513331" className="footer__contact-number">
                        <p>(412) 951-3331</p>
                    </a>
                    <div className="footer__contact-social">
                        <VimeoIcon className="footer__contact-vimeo-icon" />
                    </div>
                </div>

                <form onSubmit={this.onFormSubmit} className="footer__form">
                    <input
                        type="text" id="email"
                        value={this.state.email}
                        onChange={(e) => this.setState({ ...this.state, email: e.target.value})}
                    />
                    <label
                        htmlFor="email"
                        className={this.state.email === '' 
                        ? 'footer__form-label footer__form-label--email'
                        : 'footer__form-inactive'
                    }
                    >Email:</label>
                    <input
                        type="text" id="name"
                        value={this.state.name}
                        onChange={(e) => this.setState({ ...this.state, name: e.target.value})}
                    />
                    <label
                        htmlFor="name"
                        className={this.state.name === '' 
                        ? 'footer__form-label footer__form-label--name'
                        : 'footer__form-inactive'
                    }
                    >Name:</label>
                    <input
                        type="text" id="subject"
                        value={this.state.subject}
                        onChange={(e) => this.setState({ ...this.state, subject: e.target.value})}
                    />
                    <label
                        htmlFor="subject"
                        className={this.state.subject === ''
                        ? 'footer__form-label footer__form-label--subject'
                        : 'footer__form-inactive'
                    }
                    >Subject:</label>
                    <textarea
                        name="" id="message"
                        value={this.state.message}
                        onChange={(e) => this.setState({ ...this.state, message: e.target.value})}
                    />
                    <label
                        htmlFor="message"
                        className={this.state.message === '' 
                        ? 'footer__form-label footer__form-label--message'
                        : 'footer__form-inactive'}
                    >Message:</label>
                    <button className="footer__form-button">Send</button>
                </form>

                <div className="footer__bottom">
                    <a className="footer__bottom-location" rel="noopener noreferrer" target="_blank" href="https://goo.gl/maps/qhhMuRLxNFhGTA7h6">
                        <h3>Pittsburgh, Pennsylvania</h3>
                    </a>
                    <div className="footer__bottom-line footer__bottom-line--1" />
                    <a className="footer__bottom-email" href="mailto: keith@parishdigital.com">
                        <h3>Keith@parishdigital.com</h3>
                    </a>
                    <div className="footer__bottom-line footer__bottom-line--2" />
                    <a className="footer__bottom-number" href="tel:+4129513331">
                        <h3>(412) 951-3331</h3>
                    </a>
                    <h3 className="footer__bottom-login">PD Employee Login</h3>
                </div>
            </div>
        )
    }
}
