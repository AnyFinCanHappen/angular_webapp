import { Component, OnInit, Input } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../app.state";
import * as Constants from "../../constants/Constants.json";
import * as API from "../../constants/API.json";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hourly-detail',
  templateUrl: './hourly-detail.component.html',
  styleUrls: ['./hourly-detail.component.scss']
})
export class HourlyDetailComponent implements OnInit {
  readonly degree:string = Constants.degree;
  readonly iconURL:string = API.weatherAPI.images;
  @Input() hourlyDetail!:any[];
  @Input() timezone_offset!:number;
  isMetric$!:Observable<boolean>;
  constructor(private store:Store<AppState>) {
    this.isMetric$ = store.select("Metric");
  }

  ngOnInit(): void {
  }
}
