class Dish {
  name: string;
  description?: string;

  constructor(dish?: Dish) {
    if (dish) {
      this.name = dish.name;
      this.description = dish.description;
    } else {
      this.name = "";
      this.description = "";
    }
  }
}

export default Dish;
