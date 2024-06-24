import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {WeatherService} from "./weather.service";
import {
  ErrorGetCities,
  ErrorGetWeather,
  GET_CITIES,
  GET_WEATHER,
  GetWeather,
  SuccessGetCities,
  SuccessGetWeather
} from "./actions/weather.actions";
import {catchError, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherEffects{

  constructor(
    private action$: Actions,
    private httpService: WeatherService,
  ) {}

  GetWeather = createEffect( () =>
  this.action$.pipe(
    ofType(GET_WEATHER),
    map( (action:GetWeather) => action.payload),
    mergeMap( cityName =>
    this.httpService.getWeather(cityName).pipe(
      map((payload: any) =>  new SuccessGetWeather(payload)),
      catchError(err => of(new ErrorGetWeather(err)))
    ))
  ))

  GetCities = createEffect( () =>
  this.action$.pipe(
    ofType(GET_CITIES),
    mergeMap( () =>
    this.httpService.getCities().pipe(
      map( (payload:[{name: string}]) => new SuccessGetCities(payload)),
      catchError(err => of(new ErrorGetCities(err)))
    ))
  ))
}
