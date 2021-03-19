import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';
import { ProperCasePipe } from './pipe/proper-case/proper-case.pipe';
import { DoubleToIntPipe } from './pipe/doubleToInt/double-to-int.pipe';
import { HourlyDetailComponent } from './detail/hourly-detail/hourly-detail.component';
import { EpochDatePipe } from './pipe/epoch-date/epoch-date.pipe';
import { HourFormatPipe } from './pipe/hour-format/hour-format.pipe';
import { DailyDetailComponent } from './detail/daily-detail/daily-detail.component';
import { DayFormatPipe } from './pipe/day-format/day-format.pipe';
import { ExtraDetailComponent } from './detail/extra-detail/extra-detail.component';
import { HalfDayPipe } from './pipe/half-day/half-day.pipe';
import { MinuteFormatPipe } from './pipe/minute-format/minute-format.pipe';
import { HourFormat2Pipe } from './pipe/hour-format/hour-format2.pipe';
import { DegreeToCardinalPipe } from './pipe/degreeToCardinal/degree-to-cardinal.pipe';
import {StoreModule} from "@ngrx/store";
import {reducers} from "./app.state";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    NavbarComponent,
    DetailComponent,
    ProperCasePipe,
    DoubleToIntPipe,
    HourlyDetailComponent,
    EpochDatePipe,
    HourFormatPipe,
    DailyDetailComponent,
    DayFormatPipe,
    ExtraDetailComponent,
    HalfDayPipe,
    MinuteFormatPipe,
    HourFormat2Pipe,
    DegreeToCardinalPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
