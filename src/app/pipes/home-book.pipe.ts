import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'homeBook'
})
export class HomeBookPipe implements PipeTransform {

  transform(value: any,limit:number=10): any {
    if(value.length<limit)
      return value;
    return value.substring(0,limit)+"...";
  }

}
