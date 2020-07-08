import React, { Component } from 'react'

// Components
import CloseButton from '../../components/CloseButton'
import Snackbar from '../../components/Snackbar'
import Spinner from '../../components/Spinner'

// Images
import PDLogo from '../../assets/navigation/PD-logo-small.png';


export default class ServiceModal extends Component {
    state = {
        name: '',
        email: '',
        message: '',

        loading: false,
        submitted: false,
        success: false,
        downloadable: false,
    }

    setName = (e) => this.setState({ ...this.state, name: e.target.value})
    setEmail = (e) => this.setState({ ...this.state, email: e.target.value})
    setMessage = (e) => this.setState({ ...this.state, message: e.target.value})

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({ loading: true })
        fetch('https://parish-digital-backend.herokuapp.com/service',{
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response)=>{
            if (response.status === 'success'){
                this.resetForm();
                this.setState({ submitted: true, success: true, loading: false, downloadable: true})
            } else if(response.status === 'fail'){
                this.setState({ submitted: true, success: false, loading: false })
            }
        })
        .catch(() => this.setState({ submitted: true, success: false }))

    }

    onCloseSnackbar = () => {
        this.setState({ submitted: false })
    }

    resetForm(){
        this.setState({name: '', email: '', phone: '', message: ''})
    }

    render() {
        return (
            <div className="flex-column" id={this.props.modal ? 'service__modal-container' : 'service__modal-container-false'}>
                <div id="service__modal-icon-container" style={{margin: '0 auto'}}>
                    <CloseButton close={this.props.onModalToggle} />
                </div>
                <img src={PDLogo} alt="PD Logo" id="service__modal-logo" />
                <div id="service__modal-scroll">
                <div className="flex-column container" id="service__modal-text-container">
                    <h1 className="h1 yellow" id="service__modal-heading">Thank you for your interest in a Customer Success Story!</h1>
                    <p className="p-l white" id="service__modal-paragraph-1">Please fill out of the following to download a pricing and process PDF document.
                        If you like what you see, reach out and let’s take the next step together.
                    </p>
                    <p className="p-s white uppercase" id="service__modal-paragraph-2">you will not be signed up for an email list, promotions, or any other annoyances.</p>
                    { !this.state.downloadable ? <form onSubmit={this.onSubmit} className="flex-column" id="service__modal-form">
                        <label htmlFor="service__model-input-name" className="p-m uppercase white" style={{marginBottom: '1rem'}}>
                            Name
                        </label>
                        <input required type="text" className="input" id="service__model-input-name"
                            value={this.state.name} onChange={this.setName.bind(this)}
                        />
                        <label htmlFor="service__model-input-email" className="p-m uppercase white" style={{margin: '3rem 0 1rem'}}>
                            Email
                        </label>
                        <input required type="email" className="input" id="service__model-input-email"
                            value={this.state.email} onChange={this.setEmail.bind(this)}/>
                        <label htmlFor="service__model-input-message" className="p-m uppercase white" style={{margin: '3rem 0 1rem'}}>
                            Message
                        </label>
                        <textarea required id="service__model-input-message" className="textarea"
                            value={this.state.message} onChange={this.setMessage.bind(this)}
                        />
                        <button type="submit" className="b-white b-m" id="service__modal-button">
                            {this.state.loading ? <Spinner /> : 'Submit'}
                        </button>
                    </form> : (
                        <a href="https://drive.google.com/uc?export=download&id=1DD7TmtgpqFXKaqmYYH0-zWoShxePjsM5">
                            <button className="b-white b-m" id="service__modal-button">
                                Download PDF
                            </button>
                        </a>
                    )
                }
                { this.state.submitted && <Snackbar success={this.state.success} onCloseSnackbar={this.onCloseSnackbar} /> }
                </div>
                </div>
            </div>
        )
    }
}
