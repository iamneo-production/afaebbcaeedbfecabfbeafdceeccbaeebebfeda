import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'foodSearch'
})
export class FoodSearchPipe implements PipeTransform {
  transform(foods: any[], searchText: string): any[] {
    if (!searchText) return foods;
    searchText = searchText.toLowerCase();
    return foods.filter(food => food.name.toLowerCase().includes(searchText));
  }
}

