import Dish from "./Dish";

class RestaurantMenuCategory {
  name: string;
  dishes: Dish[];

  constructor(category?: RestaurantMenuCategory) {
    if (category) {
      this.name = category.name;
      this.dishes = category.dishes;
    } else {
      this.name = "";
      this.dishes = [];
    }
  }
}

export default RestaurantMenuCategory;
