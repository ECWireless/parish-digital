import React, { Component } from 'react'
import './App.scss';

// Navigation
import Header from './Navigation/Header';
import Footer from './Navigation/Footer';
import SmallSidebar from './Navigation/SmallSidebar';
import LargeSidebar from './Navigation/LargeSidebar';

// pages
import HomePage from './Pages/Home';

export default class App extends Component {
	state = {
		toggleSidebar: false,
	}

	onToggleSidebar = () => {
		this.setState({ toggleSidebar: !this.state.toggleSidebar })
	}

	render() {
		console.log('test')
		return (
			<div className={!this.state.toggleSidebar 
				? 'app-small'
				: 'app-large'}
			>
			<Header onToggleSidebar={this.onToggleSidebar} />
			{!this.state.toggleSidebar 
				? <SmallSidebar />
				: <LargeSidebar />
			}
				<HomePage />			
			<Footer />
		</div>
		)
	}
}