import * as React from 'react';
import { Component } from 'react';
import { autobind } from 'core-decorators';

import { API, APIKEY } from '../config';
import { WeatherData, Geolocation } from '../types';
import WeatherDisplay from './WeatherDisplay';

const loader = require('../assets/loader.svg');

interface Props {}

interface State {
	loading: boolean;
	weatherData?: WeatherData;
}

@autobind
export default class Weather extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			loading: true,
			weatherData: undefined
		};
	}

	getCurrentPosition(): Promise<Geolocation> {
		return new Promise((resolve, reject) => {
			if (!navigator.geolocation) {
				reject('Geolocation is not supported');
			} else {
				console.log('Getting current location...');

				navigator.geolocation.watchPosition(
					position => {
						resolve({
							latitude: position.coords.latitude,
							longitude: position.coords.longitude
						});
					},
					err => {
						reject(`Can't get current location: ${err.message}`);
					}
				);
			}
		});
	}

	getCurrentWeather(geolocation: Geolocation): void {
		const { latitude, longitude } = geolocation;
		fetch(`${API}${APIKEY}/conditions/q/${latitude},${longitude}.json`)
			.then(res => res.json())
			.then(data => {
				const {
					display_location,
					temp_f,
					temp_c,
					weather,
					icon
				} = data.current_observation;
				const weatherData = {
					display_location,
					temp_c,
					temp_f,
					weather,
					icon
				};
				this.setState({ weatherData, loading: false });
			})
			.catch(err => console.log(err));
	}

	componentDidMount() {
		this.getCurrentPosition()
			.then(geolocation => this.getCurrentWeather(geolocation))
			.catch(err => console.log(err));
	}

	render() {
		const loading = this.state.loading && <img src={loader} />;

		const weatherDisplay = this.state.weatherData && (
			<WeatherDisplay weatherData={this.state.weatherData} />
		);

		return (
			<div>
				{loading}
				{weatherDisplay}
			</div>
		);
	}
}
