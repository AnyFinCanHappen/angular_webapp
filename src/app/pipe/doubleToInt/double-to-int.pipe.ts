import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doubleToInt'
})
export class DoubleToIntPipe implements PipeTransform {

  transform(value: number ):number {
    if(typeof(value) === "number"){
      return value | 0;
    }
    else
      return value;
  }

}
