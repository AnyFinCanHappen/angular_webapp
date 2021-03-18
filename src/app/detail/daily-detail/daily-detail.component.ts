import { Component, OnInit, Input } from '@angular/core';
import * as API from "../../constants/API.json";
import * as Constants from "../../constants/Constants.json"
@Component({
  selector: 'app-daily-detail',
  templateUrl: './daily-detail.component.html',
  styleUrls: ['./daily-detail.component.scss']
})
export class DailyDetailComponent implements OnInit {
  readonly iconURL:string = API.weatherAPI.images;
  readonly degree:string = Constants.degree; 
  @Input() dailyDetail!: any[];
  @Input() timezone_offset!:number;
  constructor() { }

  ngOnInit(): void {
  }

}
