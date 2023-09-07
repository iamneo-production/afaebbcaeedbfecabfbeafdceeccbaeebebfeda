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
    { name: 'Cake', calories: 450, image: 'cake.jpg' }
  ];

  searchTerm = '';
  showForm = false;
  newFood: any = { name: '', calories: 0, image: '' };
  todayFoods: any[] = [];
  totalCalories = 0;

  toggleForm() {
    this.showForm = !this.showForm;
  }

  addFood() {
    this.foods.push({ ...this.newFood, quantity: 1 });
    this.newFood = { name: '', calories: 0, image: '' };
    this.showForm = false;
  }

  addToToday(food: any) {
    const index = this.todayFoods.findIndex(item => item.name === food.name);
    if (index === -1) {
      this.todayFoods.push({ ...food });
    } else {
      this.todayFoods[index].quantity++;
    }
    this.totalCalories += food.calories;
  }

  removeFromToday(food: any) {
    const index = this.todayFoods.findIndex(item => item.name === food.name);
    if (index !== -1) {
      if (this.todayFoods[index].quantity > 1) {
        this.todayFoods[index].quantity--;
      } else {
        this.todayFoods.splice(index, 1);
      }
      this.totalCalories -= food.calories;
    }
  }
}

