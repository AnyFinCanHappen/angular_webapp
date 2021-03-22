import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'metric'
})
export class MetricPipe implements PipeTransform {

  transform(degree: number, isMetric:boolean): number{
    if(isMetric){
      return ((degree - 32) * 5)/9;
    }
    else
      return degree;
  }

}
