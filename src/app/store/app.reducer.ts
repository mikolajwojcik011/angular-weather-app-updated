import {ActionReducerMap} from "@ngrx/store";
import {weatherDataReducer, weatherDataStateInterface} from "./weather/reducers/weather.reducer";

export interface AppState {
  weather: weatherDataStateInterface;
}

export const appReducer: ActionReducerMap<AppState> = {
  weather: weatherDataReducer,
}
