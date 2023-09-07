newFood: any = {};
showAddForm: boolean = false;

addFood() {
  this.foods.push(this.newFood);
  this.newFood = {};
  this.showAddForm = false;
}

