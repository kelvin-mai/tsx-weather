import * as React from 'react';
import { Component } from 'react';
import './App.css';

const logo = require('./logo.svg');

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
			</div>
		);
	}
}

export default App;
