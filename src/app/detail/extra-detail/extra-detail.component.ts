import { Component, Input, OnInit } from '@angular/core';
import * as Constants from "../../constants/Constants.json";
@Component({
  selector: 'app-extra-detail',
  templateUrl: './extra-detail.component.html',
  styleUrls: ['./extra-detail.component.scss']
})
export class ExtraDetailComponent implements OnInit {
  readonly degree:string = Constants.degree;
  @Input()dailySummary!:any;
  @Input()currentDetail!:any;
  @Input()timezone_offset!:number;
  constructor() { }

  ngOnInit(): void {
  }

  metricSpeed(ifMetric:boolean):string{
    if(ifMetric)
      return "m/s";
    else
      return "mph";
  }
}
