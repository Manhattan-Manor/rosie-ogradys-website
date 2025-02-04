import RestaurantMenu from "../classes/RestaurantMenu";

const NYCRestaurantLunchMenu: RestaurantMenu = {
    name: "NYC Restaurant Week® 2025",
    categories: [
      {
        name: "Choice of Appetizer",
        subCategory: [
          {
            name: "Classic Caesar Salad"
          },
          {
            name: "Soup of the Day",
          },
          {
            name: "House Salad"
          }
        ],
      },
      {
        name: "Choice of Entrée",
        subCategory: [
            {
                name: "Mediterranean Grilled Salmon",
                dishes: [{name: "olives, mushrooms, artichoke hearts and tomatoes with broccoli & mashed potatoes"}]
            },
            {
                name: "Chicken Saltimbocca",
                dishes: [{name:"filled with prosciutto, sage, and mozzarella over linguine"}]
            }
        ]
      },
      {
        name: "Choice of Dessert",
        subCategory: [
            {
                name: "NY Cheesecake with Strawberry Coulis",
            },
            {
                name: "Chocolate Raspberry Cake"
            }
        ]
      }
    ],
    
  };

export default NYCRestaurantLunchMenu;
