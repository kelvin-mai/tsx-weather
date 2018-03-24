import * as React from 'react';
import { Component, Fragment } from 'react';
import { autobind } from 'core-decorators';

import { WeatherData } from '../types';
import './WeatherDisplay.css';

const icon = 'https://icons.wxug.com/i/c/i/';

interface Props {
	weatherData: WeatherData;
}

interface State {
	celsius: boolean;
}

@autobind
export default class WeatherDisplay extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			celsius: true
		};
	}

	toggleTemp() {
		const { celsius } = this.state;
		this.setState({ celsius: !celsius });
	}

	render() {
		const { weatherData } = this.props;
		const { celsius } = this.state;
		const degrees = celsius ? (
			<p>{weatherData.temp_c} degrees Celsius</p>
		) : (
			<p>{weatherData.temp_f} degrees Fahrenheit</p>
		);
		const degreesButton = (
			<button onClick={this.toggleTemp}>
				See temperature in {celsius ? `Fahrenheit` : `Celsius`}
			</button>
		);
		return (
			<Fragment>
				<h3>
					Current conditions in {weatherData.display_location.city},{' '}
					{weatherData.display_location.state}
				</h3>
				<img src={`${icon}${weatherData.icon}.gif`} />
				{degrees}
				{degreesButton}
			</Fragment>
		);
	}
}
