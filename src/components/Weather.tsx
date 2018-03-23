import * as React from 'react';
import { Component } from 'react';
import { autobind } from 'core-decorators';

import { API, APIKEY } from '../config';

interface Props {}

interface State {
	loading: boolean;
	data: any;
}

@autobind
export default class Weather extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			loading: true,
			data: null
		};
	}

	componentDidMount() {
		fetch(`http://${API}lat=35&lon=139&appid=${APIKEY}`)
			.then(res => res.json())
			.then(data => this.setState({ data, loading: false }))
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div>
				<h3>Weather Works</h3>
				{this.state.data && this.state.data.main.temp}
			</div>
		);
	}
}
