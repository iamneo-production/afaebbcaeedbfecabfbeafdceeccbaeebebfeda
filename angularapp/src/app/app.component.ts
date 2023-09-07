import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  foods = [
    {
      name: 'Banana',
      calories: 105,
      image: 'banana.jpg'
    },
    {
      name: 'Salmon',
      calories: 367,
      image: 'salmon.jpg'
    },
    {
      name: 'Cake',
      calories: 225,
      image: 'cake.jpg'
    }
    // Add more food items as needed
  ];
}
newFood: any = {};
showAddForm: boolean = false;

addFood() {
  this.foods.push(this.newFood);
  this.newFood = {};
  this.showAddForm = false;
}


