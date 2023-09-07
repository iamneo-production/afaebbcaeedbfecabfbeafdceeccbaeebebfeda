import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  foods = [
    { name: 'Banana', calories: 105, image: 'banana.jpg' },
    { name: 'Salmon', calories: 367, image: 'salmon.jpg' },
    { name: 'Cake', calories: 225, image: 'cake.jpg' }
  ];

  todayFoods = [];

  searchText = '';

  showAddForm = false;

  newFood = {
    name: '',
    calories: 0,
    image: '',
    quantity: 1
  };

  addFood() {
    if (this.newFood.name && this.newFood.calories && this.newFood.image) {
      this.foods.push({ ...this.newFood });
      this.newFood.name = '';
      this.newFood.calories = 0;
      this.newFood.image = '';
      this.newFood.quantity = 1;
      this.showAddForm = false;
    }
  }

  addToToday(food) {
    const existingFood = this.todayFoods.find(item => item.name === food.name);

    if (existingFood) {
      existingFood.quantity += food.quantity;
    } else {
      this.todayFoods.push({ ...food });
    }
  }

  removeFromToday(food) {
    const index = this.todayFoods.indexOf(food);
    if (index !== -1) {
      this.todayFoods.splice(index, 1);
    }
  }
}

