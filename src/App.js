import React from 'react';
import './App.scss';

// Navigation
import Header from './Navigation/Header';
import Footer from './Navigation/Footer';

function App() {
	return (
		<div className="App">
			<Header />
			<div style={{height: '600px', textAlign: 'center'}}>Body</div>
			<Footer />
		</div>
	);
}

export default App;
