import {Component, Input, OnInit} from '@angular/core';
import {WeatherApiResponse} from "../../../models/weather-api-response";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data: WeatherApiResponse;

  constructor() { }

  ngOnInit(): void {
  }

  stylist(){
    let code: number = this.data.weather[0].id
    if(code == 800){
      //clear
      return {'clear-sky': true};
    }else if(code >= 200 && code <= 232){
      //thunderstorm
      return {'thunder': true};
    }else if(code >= 300 && code <= 321){
      //drizzle
      return {'rain': true};
    }else if(code >= 500 && code <= 531){
      //Rain
      return {'rain': true};
    }else if(code >= 600 && code <= 622){
      //Snow
      return {'snow': true};
    }else if(code >= 700 && code <= 781){
      //Atmosphere
      return {'clouds': true};
    }else if(code >= 801 && code <= 804){
      //Clouds
      return {'clouds': true};
    }else{
      return {'clear-sky': true};
    }
  }

  imagePicker(){
    let code: number = this.data.weather[0].id
    if(code == 800){
      //clear
      return "./../../../../assets/img/sun.svg";
    }else if(code >= 200 && code <= 232){
      //thunderstorm
      return "./../../../../assets/img/ligthning.svg";
    }else if(code >= 300 && code <= 321){
      //drizzle
      return "./../../../../assets/img/drops.svg";
    }else if(code >= 500 && code <= 531){
      //Rain
      return "./../../../../assets/img/drops.svg";
    }else if(code >= 600 && code <= 622){
      //Snow
      return "./../../../../assets/img/snowflakes.svg";
    }else if(code >= 700 && code <= 781){
      //Atmosphere
      return "./../../../../assets/img/mist.svg";
    }else if(code >= 801 && code <= 804){
      //Clouds
      return "./../../../../assets/img/cloud.svg";
    }else{
      return "./../../../../assets/img/sun.svg";
    }
  }

}
