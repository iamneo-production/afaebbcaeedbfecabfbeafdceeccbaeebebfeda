import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'foodFilter'
})
export class FoodFilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter(item => item.name.toLowerCase().includes(searchText));
  }
}

