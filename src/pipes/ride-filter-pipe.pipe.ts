import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rideFilterPipe',
})
export class RideFilterPipePipe implements PipeTransform {
  transform(
    value: {
      id: number;
      offerId: string;
      name: string;
      car: string;
      seatsLeft: number;
      pickup: string;
      destination: string;
    }[],
    args: string
  ): {
    id: number;
    offerId: string;
    name: string;
    car: string;
    seatsLeft: number;
    pickup: string;
    destination: string;
  }[] {

    if(args =="To Lucknow")
      return value.filter(v=>v.destination == "Lucknow");
    else if(args =="From Lucknow")
      return value.filter(v=>v.pickup == "Lucknow");
    else
      return value;
  }
}
