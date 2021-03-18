import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {mergeMap} from "rxjs/operators";

import * as API from  "../constants/API.json";

const APIKey = API.APIkey;
const weatherAPI = API.weatherAPI;
const units = "&units=imperial";
@Injectable({
  providedIn: 'root'
})
export class WeatherSerivceService {
  cityData$!:Observable<any>;
  cityName!:string;
  constructor(private httpClient: HttpClient) { }

  getForecast(cityName:string):void{
    this.cityData$ = this.httpClient.get<any>(weatherAPI.currentWeather + `q=${cityName}&appid=${APIKey}`)
    .pipe(
      mergeMap(currentWeather =>{
        const {coord} = currentWeather;
        this.cityName = currentWeather.name;
        return this.httpClient.get(weatherAPI.detailWeather + `lat=${coord.lat}&lon=${coord.lon}&appid=${APIKey}&` + units);
      })
    )
  }
  getCityName():string{
    return this.cityName;
  }
  getCityData():Observable<any>{
    return this.cityData$;
  }

}
