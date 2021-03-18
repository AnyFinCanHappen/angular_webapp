import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'epochDate'
})
export class EpochDatePipe implements PipeTransform {
  transform(date: number, offset: number): Date{
    let d = new Date(date * 1000);
    let utc  = d.getTime() + (d.getTimezoneOffset() * 60000);
    return new Date(utc + (1000*offset));
  }
}
