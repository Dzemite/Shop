import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extraZeros'
})
export class ExtraZerosPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return parseFloat(value);
  }

}
