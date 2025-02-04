import RestaurantMenu from "../classes/RestaurantMenu";

const NYCRestaurantDinnerMenu: RestaurantMenu = {
    name: "NYC Restaurant Week® 2025 Dinner",
    categories: [
      {
        name: "Choice of Appetizer",
        subCategory: [
          {
            name: "French Onion Soup",
          },
          {
            name: "Classic Caesar Salad"
          },
          {
            name: "Smoked Salmon Platter",
            dishes: [{name: "toast points, capers, onion, and horseradish cream"}],
          }
        ],
      },
      {
        name: "Choice of Entrée",
        subCategory: [
            {
                name: "Tuna Steak – Grilled or Blackened",
                dishes: [{name: "pineapple salsa, sautéed spinach & mashed potatoes"}]
            },
            {
                name: "Short Rib Bourguignon",
                dishes: [{name:"red wine sauce with vegetable risotto"}]
            },
            {
                name:"Chicken Piccata",
                dishes:[{name: "lemon caper sauce with sautéed spinach & mashed potatoes"}]
            }
        ]
      },
      {
        name: "Choice of Dessert",
        subCategory: [
            {
            name: "Crème Brulée",
            },
            {
                name: "NY Cheesecake with Strawberry Coulis"
            },
            {
                name: "Molton Chocolate Cake à la Mode"
            }
        ]
      }
    ],
    
  };

export default NYCRestaurantDinnerMenu;
