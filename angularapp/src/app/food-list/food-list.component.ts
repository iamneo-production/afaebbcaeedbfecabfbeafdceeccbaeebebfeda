import { Component } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent {
  // Define foods array and other properties here

  todaysFoods: any[] = [];
  todaysFoodsTotalCalories: number = 0;

  addToTodaysList(food: any) {
    const existingFood = this.todaysFoods.find(f => f.name === food.name);

    if (existingFood) {
      existingFood.quantity += 1;
    } else {
      this.todaysFoods.push({ ...food, quantity: 1 });
    }

    this.todaysFoodsTotalCalories += food.calories;
  }
}
updateTotalCalories() {
  this.todaysFoodsTotalCalories = this.todaysFoods.reduce((total, food) => total + (food.calories * food.quantity), 0);
}

