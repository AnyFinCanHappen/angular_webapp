import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import {WeatherSerivceService} from "../service/weather-serivce.service";
import {Router} from "@angular/router"
import { Store } from '@ngrx/store';
import {AppState} from "../app.state";
import * as MetricActions from "../ngrx/actions/MetricActions"
import { Observable } from 'rxjs';
import { Metric } from '../ngrx/model/Metric';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  form:FormGroup = this.formBuilder.group({
    city: ['', [Validators.required]]
  });
  test: Observable<boolean>;
  constructor(private formBuilder:FormBuilder, private router : Router, private store :Store<AppState>) {
    this.test = store.select("Metric");
  }

  ngOnInit(): void {
  }
  onSubmit():void{
    if(this.form.value.city.replace(" ", "") !== "")
      this.router.navigateByUrl(`detail/${this.form.value.city}`);
  }
  changeToMetric():void{
    this.store.dispatch(new MetricActions.ChangeMetric(true));
  }
  changeToImperial():void{
    this.store.dispatch(new MetricActions.ChangeMetric(false));
  }
}
