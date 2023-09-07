import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Add FormsModule

import { AppComponent } from './app.component';
import { AppFoodListComponent } from './app-food-list/app-food-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppFoodListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Import FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
