// Import necessary modules or classes
import axios from "axios";
import * as dotenv from 'dotenv';
import { CityInfo } from "./types/weather";
dotenv.config({path: "./config.env"});

export class WeatherAlert {
	private _weatherApiKey: string | undefined = process.env.WEATHER_API_KEY;

	private _city: string | undefined;
	private _country: string | undefined;
	private _state: string | undefined;

	constructor(city: string, state: string, country: string) {
		this._city = city;
		this._country = country;
		this._state = state;
	}

	async reuqestWeatherData(): Promise<any> {
		return axios.get(`http://api.airvisual.com/v2/city?city=${this._city}&state=${this._state}&country=${this._country}&key=` + this._weatherApiKey).then(res => {
			const data = res.data.data;
			return <CityInfo> data;
		});
	}
}