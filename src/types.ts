type DisplayLocation = {
	full: string;
	city: string;
	state: string;
	country: string;
	country_iso3166: string;
	zip: string;
	magic: string;
	latitude: string;
	elevation: string;
};

export type WeatherData = {
	display_location: DisplayLocation;
	temp_f: number;
	temp_c: number;
	weather: string;
	icon: string;
};

export type Geolocation = {
	latitude: number;
	longitude: number;
};
