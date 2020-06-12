import React, { Component } from 'react';

import { ReactComponent as Close } from '../assets/navigation/cross.svg';

export default class EmployeePage extends Component {

    render() {
        return (
            <React.Fragment>
                {!this.props.loggedIn 
                    ? <div className="employeePage1">
                        <h3 className="employeePage1__header">Employee Login</h3>
                        <form className="employeePage1__form" onSubmit={this.props.login}>
                            <label htmlFor="password" className="employeePage1__label">Password:</label>
                            <input required id="password" type="password" className="employeePage1__input" ref={this.props.password} />
                            <button type="submit" className="employeePage1__button">Login</button>
                        </form>

                        {this.props.errorMessage && this.props.closeError && (
                            <div className="employeePage1__error-container">
                                <p className="employeePage1__error">Password is incorrect.</p>
                                <button
                                    className="employeePage1__close"
                                    onClick={this.props.onCloseError}
                                >
                                    <Close
                                        className="employeePage1__close-icon"
                                    />
                                </button>
                            </div>
                        )}
                    </div>

                    : <div className="employeePage2">
                        <button className="employeePage2__button" type="button" onClick={this.props.logout}>Logout</button>
                        <a 
                            href="https://docs.google.com/forms/d/e/1FAIpQLSf-4W0DD4Y1uNHuEqMOZhl6octAEvygoybJx-6n2R_JMtfGwQ/viewform"
                            target="_blank" rel="noopener noreferrer"
                            className="employeePage2__link employeePage2__link--1"
                        >Alex Submit Hours</a>
                        <a 
                            href="https://docs.google.com/spreadsheets/d/1DY9Y5gn7SGbA1TTNnrYObsj98x-yWAXqOl74no5krb8/edit#gid=291896954"
                            target="_blank" rel="noopener noreferrer"
                            className="employeePage2__link employeePage2__link--2"
                        >Alex Timesheet</a>
                        <a 
                            href="https://docs.google.com/forms/d/e/1FAIpQLSeslM9O3bNvtccVutnlRPwc_ihRjLN0Ok3rzCtasdZpjpGhrA/viewform"
                            target="_blank" rel="noopener noreferrer"
                            className="employeePage2__link employeePage2__link--3"
                        >Mike Submit Hours</a>
                        <a 
                            href="https://docs.google.com/spreadsheets/d/1YcPn1xzZhRT-Uxp_uCt6m0DvTQ7f_xc_it95LSIxfD4/edit#gid=291896954"
                            target="_blank" rel="noopener noreferrer"
                            className="employeePage2__link employeePage2__link--4"
                        >Mike Timesheet</a>
                    </div> 
                }
            </React.Fragment>
        )
    }
}
