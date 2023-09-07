import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component'; // Import the FoodListComponent
import { FoodFilterPipe } from './food-filter.pipe'; // Import the FoodFilterPipe

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent, // Add FoodListComponent to declarations
    FoodFilterPipe // Add FoodFilterPipe to declarations
  ],
  imports: [
    BrowserModule,
    FormsModule // Add FormsModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
