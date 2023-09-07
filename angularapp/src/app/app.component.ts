import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  foods = [
    { name: 'Apple', calories: 52, image: 'path/to/apple.jpg' },
    { name: 'Banana', calories: 89, image: 'path/to/banana.jpg' },
    // Add more food items as needed
  ];
}

