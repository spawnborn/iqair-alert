// Import necessary modules or classes
import { LineNotification } from './lineNotification';
import { CityInfo } from './types/weather';
import { WeatherAlert } from './weatherAlert';

// Your main entry point logic goes here
function main() {
	const weatherAlert = new WeatherAlert("Sathon", "Bangkok", "Thailand");

	const lineNotification = new LineNotification();

	weatherAlert.reuqestWeatherData().then((res: CityInfo) => {
		lineNotification.notifyUser(`Weather: ${res.current.weather.tp} C, Pollution: ${res.current.pollution.aqius} AQI` + "Time: " + res.current.pollution.ts);
	});
	// Add code to get weather data and trigger alerts
}

main();
