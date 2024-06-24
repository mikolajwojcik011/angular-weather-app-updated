import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from "./main/main.component";
import { CardComponent } from '../shared/card/card.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { AddCardComponent } from './add-card/add-card.component';
import {MatIconModule} from '@angular/material/icon';
import { FormCardComponent } from './form-card/form-card.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    MainComponent,
    CardComponent,
    AddCardComponent,
    FormCardComponent,
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    MainComponent,
  ]
})
export class WeatherCardModule { }
