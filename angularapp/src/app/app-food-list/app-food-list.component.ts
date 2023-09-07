import { Component } from '@angular/core';
import { Food } from '../food';
import { foods } from '../food-list';

@Component({
  selector: 'app-food-list',
  templateUrl: './app-food-list.component.html',
  styleUrls: ['./app-food-list.component.css'],
})
export class AppFoodListComponent {
  foods = foods;
  todaysFoods: Food[] = [];

  addToTodaysFoods(food: Food) {
    this.todaysFoods.push(food);
  }

  getTotalCalories(): number {
    return this.todaysFoods.reduce((total, food) => total + food.calories, 0);
  }
}
