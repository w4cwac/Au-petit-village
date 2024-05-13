import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice',
  standalone: true
})
export class SortByPricePipe implements PipeTransform {

  transform(products: any[], asc: boolean): any[] {
    return products.sort((a: any, b: any) => {
      return (a.price < b.price) ? (asc ? -1 : 1) : (a.price > b.price) ? (asc ? 1 : -1) : 0;
    });
  }

}
