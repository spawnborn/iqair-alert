export interface Location {
  type: string;
  coordinates: [number, number];
}

export interface PollutionData {
  ts: string;
  aqius: number;
  mainus: string;
  aqicn: number;
  maincn: string;
}

export interface WeatherData {
  ts: string;
  tp: number;
  pr: number;
  hu: number;
  ws: number;
  wd: number;
  ic: string;
}

export interface CurrentData {
  pollution: PollutionData;
  weather: WeatherData;
}

export interface CityInfo {
  city: string;
  state: string;
  country: string;
  location: Location;
  current: CurrentData;
}