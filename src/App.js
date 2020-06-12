import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import "scroll-behavior-polyfill";

// Navigation
import Header from './Navigation/Header';
import Footer from './Navigation/Footer';
import SmallSidebar from './Navigation/SmallSidebar';
import LargeSidebar from './Navigation/LargeSidebar';
import Router from './Navigation/Router';

const serverUrl = "https://parish-digital-backend.herokuapp.com/graphql"

export default class App extends Component {
	state = {
		errorMessage: false,
        closeError: false,
		toggleSidebar: false,
        loggedIn: false,
        token: null,
        userId: null,
		username: 'Keith',
		location: '',
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
					errorMessage: true,
					closeError: true,
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

	onCloseError = () => {
        this.setState({
            ...this.state,
            errorMessage: false,
            closeError: false,
        })
    }
	
	logout = () => {
        localStorage.removeItem('myToken');
        localStorage.removeItem('userId');
        this.setState({
            token: null,
            errorMessage: null,
            username: null,
            loggedIn: false,
        });
    }

	scrollToTop = () => {
		window.scroll({
            top: 0
		});
	}

	windowScroll = (location) => {
		window.scroll({
            top: location,
            behavior: 'smooth'
		});
	}

	onToggleSidebar = () => {
		this.setState({ toggleSidebar: !this.state.toggleSidebar })
	}

	onPageSelection = () => {
		if (window.matchMedia('(max-width: 900px)').matches) {
			this.onToggleSidebar();
		} else {
			return;
		}
	}

	render() {
		console.log(this.state.location)
		return (
			<BrowserRouter>
				<div className={!this.state.toggleSidebar 
					? 'app-small'
					: 'app-large'}
				>
					<Header
						onToggleSidebar={this.onToggleSidebar}
						windowScroll={this.windowScroll}
					/>
					<SmallSidebar />
					<LargeSidebar
						loggedIn={this.state.loggedIn}
						location={this.state.location}

						toggleSidebar={this.state.toggleSidebar}
						onToggleSidebar={this.onToggleSidebar}
						onPageSelection={this.onPageSelection}
						largeSidebarClass={!this.state.toggleSidebar ? 'largeSidebar' : 'largeSidebar largeSidebar__active'}
					/>
					<div
						className={this.state.toggleSidebar ? 'backdrop backdrop__fadeIn' : 'backdrop backdrop__fadeOut'}
						onClick={this.onToggleSidebar}
					/>
					<div className="main">
						<Router
							errorMessage={this.state.errorMessage}
							closeError={this.state.closeError}
							onCloseError={this.onCloseError}
							
							login={this.login}
							logout={this.logout}
							loggedIn={this.state.loggedIn}
							password={this.passwordEl}

							className="router-class"
							windowScroll={this.windowScroll}
							scrollToTop={this.scrollToTop}
						/>
					</div>
					<Footer />
				</div>
			</BrowserRouter>
		)
	}
}