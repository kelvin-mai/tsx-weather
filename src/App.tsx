import * as React from 'react';
import { Component } from 'react';

import './App.css';
import Weather from './components/Weather';

const logo = require('./logo.svg');

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Show Local Weather</h1>
				</header>

				<Weather />
			</div>
		);
	}
}

export default App;
