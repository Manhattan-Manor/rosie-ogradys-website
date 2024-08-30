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
        },
        {
          name: "Homemade Ny Cheesecake",
          description: "Strawberry Coulis"
        },
        {
          name: "Chocolate Molton Cake",
          description: "Served Warm with Ice Cream or Whipped Cream"
        },
        {
          name: "Apple Pie À La Mode",
          description: "Served warm with Ice Cream"
        },
        {
          name: "Chocolate Raspberry Cake",
          description: ""
        },
        {
          name: "Ice Cream &Amp; Sorbet (3 Scoops)",
          description: "Vanilla, Chocolate, Lemon"
        },
      ],
    },
    {
      name: "NIGHTCAP",
      price: 18,
      subCategory: [
        {
          name: "White Russian",
          description: "Kahlúa, Sausage Tree Vodka, Cream"
        },
        {
          name: "Last Word",
          description: "Gunpowder Gin, Maraschino Liqueur, Chartreuse, Lime"
        },
        {
          name: "Expresso Martini",
          description: "Aspen Vodka, Kahlua, Expresso"
        },
        {
          name: "Manhattan",
          description: "Bulleit Rye, Sweet Vermouth, Angostura Bitters"
        },
        {
          name: "20 Year Tawny Porto",
          description: "Taylor Fladgate – Douro, Portugal"
        },
      ],
    },
  ],
};

export default dessertMenu;
