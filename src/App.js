import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';

// Navigation
import Header from './Navigation/Header';
import Footer from './Navigation/Footer';
import SmallSidebar from './Navigation/SmallSidebar';
import LargeSidebar from './Navigation/LargeSidebar';
import Router from './Navigation/Router';

export default class App extends Component {
	state = {
		toggleSidebar: false,
	}

	onToggleSidebar = () => {
		this.setState({ toggleSidebar: !this.state.toggleSidebar })
	}

	render() {
		return (
			<BrowserRouter>
				<div className={!this.state.toggleSidebar 
					? 'app-small'
					: 'app-large'}
				>
					<Header onToggleSidebar={this.onToggleSidebar} />
					{!this.state.toggleSidebar 
						? <SmallSidebar />
						: <LargeSidebar />
					}
							<Router />		
					<Footer />
				</div>
			</BrowserRouter>
		)
	}
}