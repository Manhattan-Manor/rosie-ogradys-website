import RestaurantMenu from "../classes/RestaurantMenu";

const dessertMenu: RestaurantMenu = {
  name: "DESSERTS",
  categories: [
    {
      name: "DESSERT",
      price: 13,
      subCategory: [
        {
          name: "Crème Brulée",
          dishes: [],
        },
        {
          name: "Homemade Ny Cheesecake",
          dishes: [{ name: "Strawberry Coulis" }],
        },
        {
          name: "Chocolate Molton Cake",
          dishes: [{ name: "Served Warm with Ice Cream or Whipped Cream" }],
        },
        {
          name: "Apple Pie À La Mode",
          dishes: [{ name: "Served warm with Ice Cream" }],
        },
        {
          name: "Chocolate Raspberry Cake",
          dishes: [],
        },
        {
          name: "Ice Cream &Amp; Sorbet (3 Scoops)",
          dishes: [{ name: "Vanilla, Chocolate, Lemon" }],
        },
      ],
    },
    {
      name: "NIGHTCAP",
      price: 18,
      subCategory: [
        {
          name: "White Russian",
          dishes: [{ name: "Kahlúa, Sausage Tree Vodka, Cream" }],
        },
        {
          name: "Last Word",
          dishes: [
            { name: "Gunpowder Gin, Maraschino Liqueur, Chartreuse, Lime" },
          ],
        },
        {
          name: "Expresso Martini",
          dishes: [{ name: "Aspen Vodka, Kahlua, Expresso" }],
        },
        {
          name: "Manhattan",
          dishes: [{ name: "Bulleit Rye, Sweet Vermouth, Angostura Bitters" }],
        },
        {
          name: "20 Year Tawny Porto",
          dishes: [{ name: "Taylor Fladgate – Douro, Portugal" }],
        },
      ],
    },
    {
      name: "Expresso – Cappuccino – Herbal Tea",
      subCategory: [],
    },
  ],
};

export default dessertMenu;
