import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'halfDay'
})
export class HalfDayPipe implements PipeTransform {

  transform(hour:number):string{
    if(!(hour < 0 || hour > 23)){
      if(Math.floor(hour/12) === 0)
        return "am";
      else
        return "pm"
    }
    else
      return "Invalid Time."
  }
}
