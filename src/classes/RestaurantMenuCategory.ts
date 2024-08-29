import Dish from "./Dish";

class RestaurantMenuCategory {
  name: string;
  dishes?: Dish[];
  subCategory?: RestaurantMenuCategory[];
  price?: number;
  description?: string

  constructor(category?: RestaurantMenuCategory) {
    if (category) {
      this.name = category.name;
      this.dishes = category.dishes;
      this.subCategory = category.subCategory;
      this.price = category.price
      this.description = category.description;
    } else {
      this.name = "";
      this.dishes = [];
      this.subCategory = [];
      this.price = 0;
      this.description = "";
    }
  }
}

export default RestaurantMenuCategory;
