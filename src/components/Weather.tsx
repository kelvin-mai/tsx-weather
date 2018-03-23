import * as React from 'react';
import { Component } from 'react';
import { autobind } from 'core-decorators';

import { API, APIKEY } from '../config';
import { WeatherData } from '../types';
const loader = require('../assets/loader.svg');
// import WeatherDisplay from './WeatherDisplay';

interface Props {}

interface State {
	loading: boolean;
	weatherData?: WeatherData;
	lat: number;
	lon: number;
}

@autobind
export default class Weather extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			loading: true,
			weatherData: undefined,
			lat: 37.776289,
			lon: -122.395234
		};
	}

	componentDidMount() {
		const { lat, lon } = this.state;
		fetch(`${API}${APIKEY}/conditions/q/${lat},${lon}.json`)
			.then(res => res.json())
			.then(data => {
				const {
					display_location,
					temp_f,
					temp_c,
					weather,
					icon
				} = data.current_observation;
				const weatherData = { display_location, temp_c, temp_f, weather, icon };
				this.setState({ weatherData });
			})
			.catch(err => console.log(err));
	}

	render() {
		console.log(this.state);
		return (
			<div>
				<h3>Weather Works</h3>
				{this.state.loading && <img src={loader} />}
				{/* {this.state.data && <WeatherDisplay data={this.state.data} />} */}
			</div>
		);
	}
}
