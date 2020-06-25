import React, { Component } from 'react'

// Components
import CloseButton from '../../components/CloseButton'

// Images
import PDLogo from '../../assets/navigation/PD-logo-small.png';


export default class ServiceModal extends Component {

    onSubmit = (e) => {
        e.preventDefault();
        console.log('Submit')
    }

    render() {
        return (
            <div className="flex-column" id={this.props.modal ? 'service__modal-container' : 'service__modal-container-false'}>
                <div id="service__modal-icon-container" style={{margin: '0 auto'}}>
                    <CloseButton close={this.props.onModalToggle} />
                </div>
                <img src={PDLogo} alt="PD Logo" id="service__modal-logo" />
                <div className="flex-column container" id="service__modal-text-container">
                    <h2 className="h2 yellow" id="service__modal-heading">Thank you for your interest in a Customer Success Story!</h2>
                    <p className="p-m white" id="service__modal-paragraph-1">Please fill out of the following to download a pricing and process PDF document.
                        If you like what you see, reach out and let’s take the next step together.
                    </p>
                    <p className="p-s white uppercase" id="service__modal-paragraph-2">you will not be signed up for an email list, promotions, or any other annoyances.</p>
                    <form onSubmit={this.onSubmit} className="flex-column" id="service__modal-form">
                        <label htmlFor="service__model-input-name" className="p-m uppercase white" style={{marginBottom: '1rem'}}>
                            Name
                        </label>
                        <input required type="text" className="input" id="service__model-input-name" />
                        <label htmlFor="service__model-input-email" className="p-m uppercase white" style={{marginBottom: '1rem'}}>
                            Email
                        </label>
                        <input required type="email" className="input" id="service__model-input-email" />
                        <label htmlFor="service__model-input-message" className="p-m uppercase white" style={{marginBottom: '1rem'}}>
                            Message
                        </label>
                        <textarea required id="service__model-input-message" className="textarea" />
                        <button type="submit" className="b-white b-m" id="service__modal-button">Download PDF</button>
                    </form>
                </div>
            </div>
        )
    }
}
