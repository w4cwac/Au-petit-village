import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName',
  standalone: true
})
export class FilterByNamePipe implements PipeTransform {

  transform(products: any[], term: string) {
    if (term) {
      return products.filter((p) => p.name.toLowerCase().includes(term.toLowerCase()))
    } else return products;
  }

}
