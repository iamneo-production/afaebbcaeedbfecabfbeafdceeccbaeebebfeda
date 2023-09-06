import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewFoodComponent } from './new-food/new-food.component';
import { TodayComponent } from './today/today.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewFoodComponent,
    TodayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
