import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {WeatherService} from "../../../store/weather/weather.service";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../store/app.reducer";
import {list} from "../../../store/weather/reducers/weather.reducer";
import {Observable} from "rxjs";
import {startWith, withLatestFrom} from "rxjs/operators";

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.css']
})
export class FormCardComponent implements OnInit {
  @Output() hide = new EventEmitter<boolean>();
    autocompleateList$: Observable<any>;
    filteredCities: any;
    city = new FormControl();


  constructor(
    private form: FormBuilder,
    private service: WeatherService,
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.autocompleateList$ = this.store.pipe(select(list));
    this.city.valueChanges.pipe(
      startWith(''),
      withLatestFrom(this.autocompleateList$),
    ).subscribe( ([filterValue ,list]) => {
        this.filteredCities = list.filter((city) => city.name.includes(filterValue))
      }
    )
  }

  hideCard(){
    this.hide.emit(true);
  }

  sendFromData() {
    console.log(this.city.value);
    this.service.addCity(this.city.value);
  }
}
