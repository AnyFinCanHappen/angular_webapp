import { Component, OnInit, Input } from '@angular/core';
import * as Constants from "../../constants/Constants.json";
import * as API from "../../constants/API.json";
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
  constructor() { }

  ngOnInit(): void {
  }
}
