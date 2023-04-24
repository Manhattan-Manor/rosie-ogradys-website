import RestaurantMenu from "../classes/RestaurantMenu";

const generalMenu: RestaurantMenu = {
  name: "Menu",
  categories: [
    {
      name: "Appetizer",
      dishes: [
        {
          name: "Maryland Crab Cake",
          description: "Tangy Remoulade Sauce",
        },
      ],
    },
    {
      name: "Salad",
      dishes: [
        {
          name: "Golden Beets",
          description:
            "Arugula, Pistachios, Goat Cheese, Blackberry Vinaigrette",
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
            "Rock Shrimp, Beurre Blanc, Garlic Mashed Potatoes , Asparagus",
        },
        {
          name: "Chicken Oscar",
          description: "Crabmeat, Hollandaise, Asparagus & Wild Rice",
        },
      ],
    },
    {
      name: "Dessert",
      dishes: [
        {
          name: "White Chocolate Mousse",
          description: "Dark Chocolate Shell, Raspberry Coulis",
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

export default generalMenu;
