import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {WeatherApiResponse} from "../../models/weather-api-response";
import {ClearWDA, GetCities} from "./actions/weather.actions";
import {Store} from "@ngrx/store";
import {AppState} from "../app.reducer";

@Injectable({
    providedIn: 'root'
})
export class WeatherService{
  constructor(
    private http: HttpClient,
    private store: Store<AppState>) {
  }

  citiesSubject = new BehaviorSubject<any>('')

  getWeather(cityName: string): Observable<WeatherApiResponse>{
    return this.http.get<WeatherApiResponse>(
      'https://community-open-weather-map.p.rapidapi.com/weather',
      {
        params: {
          q: cityName,
          units: 'metric'
        },
        headers: {
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
          'x-rapidapi-key': 'c07a81ffd9msh1c82a0e303081d4p1e035djsn6fb60a32b162'
        }
      }
    )
  }

  getCities(): Observable<any>{
    this.citiesSubject.next(JSON.parse(localStorage.getItem('places')));
    return this.citiesSubject
  }

  addCity(city:string){
    this.store.dispatch( new ClearWDA())
    if(JSON.parse(localStorage.getItem('places'))) {
      let Arr = JSON.parse(localStorage.getItem('places'));
      Arr.push({name: city})
      localStorage.setItem('places', JSON.stringify(Arr))
    }else{
      localStorage.setItem('places', JSON.stringify([{name: city}]));
    }
    this.store.dispatch(new GetCities())
  }

  metoda(){

  }
}
