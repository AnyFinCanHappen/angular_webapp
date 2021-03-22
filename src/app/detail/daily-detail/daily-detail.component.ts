import { Component, OnInit, Input } from '@angular/core';
import * as API from "../../constants/API.json";
import * as Constants from "../../constants/Constants.json"
import { Store } from "@ngrx/store";
import { AppState } from "../../app.state";
import { Observable } from 'rxjs';
@Component({
  selector: 'app-daily-detail',
  templateUrl: './daily-detail.component.html',
  styleUrls: ['./daily-detail.component.scss']
})
export class DailyDetailComponent implements OnInit {
  readonly iconURL: string = API.weatherAPI.images;
  readonly degree: string = Constants.degree;
  @Input() dailyDetail!: any[];
  @Input() timezone_offset!: number;
  isMetric$!: Observable<boolean>
  constructor(store: Store<AppState>) {
    this.isMetric$ = store.select("Metric");
  }

  ngOnInit(): void {
  }

}
