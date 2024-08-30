import RestaurantMenu from "../classes/RestaurantMenu";

const childrenMenu: RestaurantMenu = {
  name: "CHILDREN's MENU ",
  categories: [
    {
      name: "",
      subCategory: [
        {
          name: "ANGUS BEEF SLIDERS",
          price: 14.95,
          dishes: [{ name: "Two Cheese Sliders, Served with Fries" }],
        },
        {
          name: "GRILLED CHICKEN SLIDERS",
          price: 14.95,
          dishes: [{ name: "Two on Brioche Bun, Served with Fries" }],
        },
        {
          name: "CHICKEN TENDERS & FRIES",
          price: 14.95,
          dishes: [],
        },
        {
          name: "FISH & CHIPS",
          price: 16.95,
          dishes: [],
        },
        {
          name: "MOZZARELLA STICKS",
          price: 14.95,
          dishes: [{ name: "Served with Marinara Sauce and Fries" }],
        },
        {
          name: "FLATBREAD PIZZA",
          price: 11.95,
          dishes: [{ name: "Tomato, Basil & Mozzarella" }],
        },
        {
          name: "PASTA",
          price: 14.95,
          dishes: [{ name: "Alfredo, Marinara or Butter" }],
        },
      ],
    },
  ],
};

export default childrenMenu;
