import RestaurantMenu from "../classes/RestaurantMenu";

const glutenFreeMenu: RestaurantMenu = {
  name: "Gluten - Free Menu",
  categories: [
    {
      name: "Appetizer",
      dishes: [
        { name: "Jumbo Shrimp Cocktail", description: "Spicy Chili Sauce" },
      ],
    },
    {
      name: "Salad",
      dishes: [
        {
          name: "Golden Beets",
          description:
            "Arugula, Pistachios, Goat Cheese and Blackberry Vinaigrette",
        },
      ],
    },
    {
      name: "Main Course (Choose one)",
      dishes: [
        {
          name: "Prime Filet Mignon",
          description:
            "Green Peppercorn Sauce, Scalloped Potatoes, Haricot Verts",
        },
        {
          name: "Wild Salmon",
          description:
            "Rock Shrimp, Beurre Blanc, Garlic Mashed Potatoes, Asparagus",
        },
        {
          name: "Grilled Chicken Oscar",
          description: "Crabmeat, Hollandaise, Asparagus & Wild Rice",
        },
      ],
    },
    {
      name: "Dessert",
      dishes: [
        {
          name: "White Chocolate Mousse",
          description: "In a Dark Chocolate Shell with Raspberry Coulis",
        },
      ],
    },
    {
      name: "After Dinner",
      dishes: [
        {
          name: "Petit Fours",
        },
      ],
    },
  ],
};

export default glutenFreeMenu;
