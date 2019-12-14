import React, { Component } from 'react'
import './App.scss';

// Navigation
import Header from './Navigation/Header';
import Footer from './Navigation/Footer';
import SmallSidebar from './Navigation/SmallSidebar';
import LargeSidebar from './Navigation/LargeSidebar';

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
			<div style={{gridRow: '2 / 3', gridColumn: '2 / -1', textAlign: 'center'}}>Body</div>
			<Footer />
		</div>
		)
	}
}