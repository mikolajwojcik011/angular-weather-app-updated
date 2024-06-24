import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../store/app.reducer";
import {GetCities, GetWeather} from "../../../store/weather/actions/weather.actions";
import {Observable} from "rxjs";
import {citiesSelector, weatherDataSelector} from "../../../store/weather/reducers/weather.reducer";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  cities$: Observable<{}>
  forecastArray$: Observable<{}>
  hide: boolean = true;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new GetCities())
    this.cities$ = this.store.pipe(select(citiesSelector))
    this.cities$.subscribe( cities => {
      for (let i in cities){
        this.store.dispatch(new GetWeather(cities[i].name))
      }
    })
   this.forecastArray$ = this.store.pipe(select(weatherDataSelector))

  }

  hideCard(hide) {
    this.hide = !this.hide;
    console.log(this.hide)
  }
}
