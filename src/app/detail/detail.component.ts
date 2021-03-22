import { Component, OnInit} from '@angular/core';
import {WeatherSerivceService} from "../service/weather-serivce.service"
import {ActivatedRoute} from "@angular/router"
import { Observable } from 'rxjs';
import {Store} from "@ngrx/store";
import {AppState} from "../app.state";
import * as Constants from "../constants/Constants.json";
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{
  readonly degree:string = Constants.degree;
  cityData$!:Observable<any>;
  cityData!:any;
  cityName!:string;
  isMetric$!:Observable<boolean>;
  constructor(private weatherService: WeatherSerivceService, private activedRoute : ActivatedRoute, private store:Store<AppState>) { 
    this.isMetric$ = store.select("Metric");
  }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(param =>{
      if(param.city){
        this.weatherService.getForecast(param.city);
        this.weatherService.getCityData().subscribe(data =>{
          console.log(data);
          console.log(this.weatherService.getCityName());
          //this.cityData$ = this.weatherService.getCityData();
          this.weatherService.getCityData().subscribe(data => this.cityData = data);
          this.cityName = this.weatherService.getCityName();
        });
      }
    })
  }
}