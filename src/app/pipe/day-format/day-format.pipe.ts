import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayFormat'
})
export class DayFormatPipe implements PipeTransform {
  dayMap:any = {
    0:"Sunday",
    1:"Monday",
    2:"Tuesday",
    3: "Wednesday",
    4:"Thursday",
    5:"Friday",
    6: "Saturday"
  }
  transform(day :number): string{
    return this.dayMap[day];
  }

}
