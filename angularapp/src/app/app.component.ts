import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  foods: any[] = [
    { name: 'Banana', calories: 105, image: 'https://example.com/banana.jpg', quantity: 1 },
    { name: 'Salmon', calories: 367, image: 'https://example.com/salmon.jpg', quantity: 1 },
    { name: 'Cake', calories: 225, image: 'https://example.com/cake.jpg', quantity: 1 }
    // Add more initial foods as needed
  ];

  newFood: any = { name: '', calories: 0, image: '', quantity: 1 };
  showForm: boolean = false;
  searchTerm: string = '';
  todaysFoods: any[] = [];

  // Toggle the form for adding new foods
  toggleForm() {
    this.showForm = !this.showForm;
  }

  // Add a new food to the list
  addFood() {
    if (this.newFood.name && this.newFood.calories && this.newFood.image) {
      this.foods.push({ ...this.newFood });
      this.newFood = { name: '', calories: 0, image: '', quantity: 1 };
      this.showForm = false;
    }
  }

  // Filter foods based on the search term
  get filteredFoods() {
    return this.foods.filter(food => food.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

  // Add a food to today's foods
  addToTodaysFoods(food: any) {
    const existingFood = this.todaysFoods.find(f => f.name === food.name);
    if (existingFood) {
      existingFood.quantity += food.quantity;
    } else {
      this.todaysFoods.push({ ...food });
    }
  }

  // Calculate the total calories for today's foods
  calculateTotalCalories() {
    return this.todaysFoods.reduce((total, food) => total + food.calories * food.quantity, 0);
  }
}

