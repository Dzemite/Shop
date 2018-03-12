import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundPrice'
})
export class RoundPricePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return /[0-9]+[.,]*[0-9]{1,2}/.exec(value);
  }

}
