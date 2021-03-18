import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hourFormat2'
})
export class HourFormat2Pipe implements PipeTransform {

  transform(hour:number): string{
    if(!(hour < 0 || hour > 23)){
      if(hour%12 === 0)
        return "12";
      else
        return (hour%12).toString();
    }
    else
      return "Invalid time."
  }
}
