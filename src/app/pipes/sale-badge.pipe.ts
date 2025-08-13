import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'saleBadgePipe'
})
export class SaleBadgePipe implements PipeTransform {

  transform(value: boolean, text: string): string {
    return value ? text ? text : 'Em Promoção!' : '';
  }
}
