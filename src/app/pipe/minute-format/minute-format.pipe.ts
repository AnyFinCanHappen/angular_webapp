import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minuteFormat'
})
export class MinuteFormatPipe implements PipeTransform {

  transform(minute:number): string{
    if(minute === 0){
      return "00";
    }
    else if(minute < 10){
      return "0" + minute;
    }
    else
      return minute.toString();
  }

}
