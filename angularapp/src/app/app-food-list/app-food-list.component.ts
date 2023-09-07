import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './app-food-list.component.html',
  styleUrls: ['./app-food-list.component.css']
})
export class AppFoodListComponent {
  @Input() foods: any[];
  @Input() searchTerm: string;
}
