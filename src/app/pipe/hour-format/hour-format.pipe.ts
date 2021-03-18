import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hourFormat'
})
export class HourFormatPipe implements PipeTransform {

  transform(value: number): string {
    if(value <= 23 || value >= 0){
      let half;
      if(Math.floor(value/12) < 1)
        half = "am"
      else
        half = "pm";
      let hour = value % 12;
      if(hour === 0)
        return 12 + half;
      else
        return hour.toString() + half;
    }
    else
      return "Invalid time"
  }

}
