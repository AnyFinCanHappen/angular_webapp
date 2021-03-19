import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'degreeToCardinal'
})
export class DegreeToCardinalPipe implements PipeTransform {

  transform(degree: number): string{
    if(degree >=0 && degree <= 90){
      if(degree === 0)
        return "E";
      else if(degree === 90)
        return "N";
      return "NE";
    }
    else if(degree > 90 && degree <=180){
      if(degree === 180)
        return "W";
      else
        return "NW";
    }
    else if(degree > 180 && degree <= 270){
      if(degree === 270)
        return "S";
      else 
        return "SW";
    }
    else if(degree > 270 && degree <= 360){
      if(degree === 360)
        return "E";
      else
        return "SE";
    }
    else
      return "Invalid Direction.";
  }

}
