import {Action} from "@ngrx/store";
import {HttpErrorResponse} from "@angular/common/http";
import {WeatherApiResponse} from "../../../models/weather-api-response";

export const GET_WEATHER = '[weather] get weather';
export const SUCCESS_GET_WEATHER = '[weather] success get weather';
export const ERROR_GET_WEATHER = '[weather] error get contacts';

export const GET_CITIES = '[cities] get cities';
export const SUCCESS_GET_CITIES = '[cities] success get cities';
export const ERROR_GET_CITIES = '[cities] error get cities';

export const CLEAR_WEATHER_DATA_ARRAY = '[weather] clear weather data array';

export class GetWeather implements Action {
  readonly type = GET_WEATHER;
  constructor(public payload: string) {
  }
}

export class SuccessGetWeather implements Action {
  readonly type = SUCCESS_GET_WEATHER;
  constructor(public payload: WeatherApiResponse) {
  }
}

export class ErrorGetWeather implements Action {
  readonly type = ERROR_GET_WEATHER;
  constructor(public payload: HttpErrorResponse) {
  }
}

export class GetCities implements Action {
  readonly type = GET_CITIES;
}

export class SuccessGetCities implements Action {
  readonly type = SUCCESS_GET_CITIES;
  constructor(public payload: {}) {
  }
}

export class ErrorGetCities implements Action {
  readonly type = ERROR_GET_CITIES;
  constructor(public payload: HttpErrorResponse) {
  }
}

export class ClearWDA implements Action {
  readonly type = CLEAR_WEATHER_DATA_ARRAY;
}
