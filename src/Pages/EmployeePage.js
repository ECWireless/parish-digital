import React, { Component } from 'react';

const serverUrl = "https://parish-digital-backend.herokuapp.com/graphql"

export default class EmployeePage extends Component {
    state = {
        loggedIn: false,
        token: null,
        userId: null,
        username: 'Keith',
    }

    constructor(props) {
        super(props);
        this.passwordEl = React.createRef();
    }

    componentDidMount() {
		if (localStorage.getItem('myToken')) {
			this.setState({
                token: localStorage.getItem('myToken'),
                loggedIn: true,
            })
		}
    }

    login = (event) => {
        event.preventDefault();
        const password = this.passwordEl.current.value;

        let requestBody = {
            query: `
                query {
                    login(username: "Keith", password: "${password}") {
                        userId
                        token
                        tokenExpiration
                    }
                }
            `
        }

        fetch(serverUrl, {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            return res.json();
        })
        .then(resData => {
            if (resData.errors) {
                this.setState({
                    ...this.state.errorMessage,
                    errorMessage: resData.errors[0].message
                })
            } else if (resData.data.login) {
                localStorage.setItem('myToken', resData.data.login.token);
                localStorage.setItem('userId', resData.data.login.userId);
				this.setState({
                    loggedIn: true,
                    token: resData.data.login.token,
                    userId: resData.data.login.userId,
                })
			}
        })
        .catch(err => {
            console.log(err);
        })
    }

    logout= () => {
        localStorage.removeItem('myToken');
        localStorage.removeItem('userId');
        this.setState({
            token: null,
            errorMessage: null,
            username: null,
            loggedIn: false,
        });
    }

    render() {
        return (
            <React.Fragment>
                {!this.state.loggedIn ? <div>
                    <h3 className="employeePage__header">Employee Login</h3>
                    <form className="employeePage__form" onSubmit={this.login}>
                        <label htmlFor="password" className="employeePage__paragraph">Password:</label>
                        <input required id="password" type="password" className="employeePage__input" ref={this.passwordEl} />
                        <button type="submit" className="employeePage__button">Login</button>
                    </form>
                </div>
                : <div>
                    <p>You are logged in!</p>
                    <button type="button" onClick={this.logout}>Logout</button>
                </div> }
            </React.Fragment>
        )
    }
}
