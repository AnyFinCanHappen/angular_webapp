import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'properCase'
})
export class ProperCasePipe implements PipeTransform {

  transform(value: string): string {
    if (typeof (value) === "string")
      return value.split(" ").map(item => {
        let arr = item.split("");
        arr[0] = arr[0].toUpperCase();
        return arr.join("");
      }).join(" ");
    else
      return value;
  }
}
