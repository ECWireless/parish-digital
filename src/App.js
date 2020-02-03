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
		if (window.matchMedia('(max-width: 600px)').matches) {
			this.onToggleSidebar()
		} else {
			return;
		}
	}

	render() {
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
							className="router-class"
							windowScroll={this.windowScroll}
						/>
					</div>
					<Footer />
				</div>
			</BrowserRouter>
		)
	}
}