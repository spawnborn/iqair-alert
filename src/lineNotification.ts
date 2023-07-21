import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config({path: "./config.env"});

export class LineNotification {
	private _lineToken: string | undefined = process.env.LINE_NOTIFICATION_TOKEN;
	constructor() {
	}

	notifyUser(str: string): void {
		// console.log("Alerting...");
		axios.post('https://notify-api.line.me/api/notify', {
			message: str
		}, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Authorization': `Bearer ${this._lineToken}`
			}
		})
		
	}
}