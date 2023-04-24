import RestaurantMenuCategory from "./RestaurantMenuCategory";

class RestaurantMenu {
  name: string;
  categories: RestaurantMenuCategory[];

  constructor(menu?: RestaurantMenu) {
    if (menu) {
      this.name = menu.name;
      this.categories = menu.categories;
    } else {
      this.name = "";
      this.categories = [];
    }
  }
}

export default RestaurantMenu;
