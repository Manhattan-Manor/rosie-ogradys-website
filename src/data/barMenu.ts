import RestaurantMenu from "../classes/RestaurantMenu";

const barMenu: RestaurantMenu = {
    name: "BAR MENU",
    categories: [
      {
        name: "APPETIZERS",
        subCategory: [
          {
            name: "Caesar Salad",
            price: 16.95,
            dishes: [
              { name: "Traditional Dressing, Shaved Parmesan, Garlic Croutons on Crisp Romaine" }
            ]
          },
          {
            name: "French Onion Soup Au Gratin",
            price: 14.95,
            dishes: [
              { name: "With croutons, Topped with Melted Swiss and Mozzarella" }
            ]
          },
          {
            name: "Blue Point Oysters",
            price: 20.95,
            dishes: [
              { name: "Half Dozen Nestled on a Bed of Crushed Ice" }
            ]
          },
          {
            name: "Jumbo Gulf Shrimp Cocktail",
            price: 19.95,
            dishes: [
              { name: "Four Pieces, Horseradish - Chili Sauce" }
            ]
          },
          {
            name: "Fried Calamari",
            price: 18.95,
            dishes: [
              { name: "Served with Spicy Tomato Sauce" }
            ]
          },
          {
            name: "Buffalo Wings",
            price: 17.95,
            dishes: [
              { name: "Served with Blue Cheese, Celery and Carrots" }
            ]
          },
          {
            name: "Chicken Tenders",
            price: 15.95,
            dishes: [
              { name: "Served with Honey Mustard Sauce" }
            ]
          },
          {
            name: "Mozzarella Sticks",
            price: 15.95,
            dishes: [
              { name: "Served with Marinara Sauce" }
            ]
          },
          {
            name: "Three Cheese Nachos With Chili",
            price: 18.95,
            dishes: [
              { name: "With Avocado, Pico de Gallo, Sour Cream, Jalapenos" }
            ]
          },
          {
            name: "Roasted Golden Beet Salad",
            price: 17.95,
            dishes: [
              { name: "Arugula, Pistachios, Julienne Carrots and Goat Cheese Raspberry Vinaigrette" }
            ]
          }
        ]
      },
      {
        name: "BEEF BURGERS",
        subCategory: [
          {
            name: "Rosie’s Beef Burger",
            price: 22.95,
            dishes: [
              { name: "Lettuce, tomato, and Dill Pickle, French Fries or Sweet Potato Fries" }
            ]
          },
          {
            name: "California Burger",
            price: 23.95,
            dishes: [
              { name: "Lettuce, Tomato and Onion Topped w/Melted Pepper Jack and Sliced Avocado" }
            ]
          },
          {
            name: "Turkey Burger Classic",
            price: 23.95,
            dishes: [
              { name: "Sautéed Mushrooms and Onions, Topped w/Melted Mozzarella" }
            ]
          },
          {
            name: "Rosie’s Beyond Burger",
            price: 23.95,
            dishes: [
              { name: "Plant-Based, Served with Sautéed Mushrooms and Onions & Sweet Potato Fries" }
            ]
          }
        ]
      },
      {
        name: "SANDWICHES",
        price: 0,
        description: "All Sandwiches are served with French Fries",
        subCategory: [
          {
            name: "Grilled Steak",
            price: 28.95,
            dishes: [
              { name: "Sliced NY Strip Steak served on Ciabatta, Pepper Jack Cheese and Onion Rings" }
            ]
          },
          {
            name: "California Grilled Chicken",
            price: 23.95,
            dishes: []
          },
          {
            name: "House Roasted Turkey Club",
            price: 20.95,
            dishes: [
              { name: "Double Decker/Lettuce, Tomato & Bacon" }
            ]
          },
          {
            name: "Maryland Crabcake Brioche-Wich",
            price: 28.95,
            dishes: [
              { name: "Our Famous Crab Cake Sandwich Served with Tri-Color Slaw, Roasted Garlic Aioli" }
            ]
          },
          {
            name: "California Grilled Chicken",
            price: 23.95,
            dishes: [
              { name: "Served on Ciabatta w/Lettuce, Tomato and Onion Topped w/Melted Pepper Jack and Sliced Avocado Our Spicy Chipotle Sauce on the side" }
            ]
          }
        ]
      },
      {
        name: "SLIDERS",
        subCategory: [
          {
            name: "Angus Mini Cheeseburgers",
            price: 16.95,
            dishes: [
              { name: "Cheddar Cheese and Barbecue Sauce" }
            ]
          },
          {
            name: "Chipotle Grilled Chicken",
            price: 17.95,
            dishes: [
              { name: "Pepper Jack Cheese, Chipotle Mayonnaise & Avocado" }
            ]
          }
        ]
      },
      {
        name: "SIDES",
        price: 13.50,
        description: "Serves two",
        subCategory: [
          { name: "Onion Rings" },
          { name: "Sweet Potato Fries" },
          { name: "French Fries" },
          { name: "Steamed Broccoli" },
          { name: "Sautéed Mushrooms & Onions" },
          { name: "Creamed Spinach" },
          { name: "Baked Potato" },
          { name: "Potato Gratin" }
        ]
      },
      {
        name: "ENTREES",
        subCategory: [
          {
            name: "Petit Filet Mignon 8 Oz.",
            price: 48.95,
            dishes: [
              { name: "Choice Of Potato" }
            ]
          },
          {
            name: "New York Cut Sirloin Steak 14 Oz.",
            price: 49.95,
            dishes: [
              { name: "Choice Of Potato" }
            ]
          },
          {
            name: "Chicken Parmigiana",
            price: 28.95,
            dishes: [
              { name: "Served Over Linguine" }
            ]
          },
          {
            name: "Broiled Norwegian Salmon",
            price: 31.95,
            dishes: [
              { name: "Beurre Blanc, Asparagus, and Mashed Potatoes" }
            ]
          },
          {
            name: "Traditional Fried New England Cod",
            price: 27.95,
            dishes: [
              { name: "French Fries and Tartar Sauce" }
            ]
          },
          {
            name: "Shepherd’s Pie",
            price: 27.95,
            dishes: [
              { name: "Braised Ground Beef and Veal with Vegetables. Crowned with Mashed Potatoes" }
            ]
          }
        ]
      },
      {
        name: "DESSERTS",
        price: 13,
        description: "All",
        subCategory: [
          { name: "Chocolate Lava Cake À La Mode" },
          { name: "Crème Brulée" },
          { name: "Vanilla + Chocolate Ice Cream" },
          { name: "Apple Pie With Ice Cream" },
          { name: "Chocolate Raspberry Cake" },
          { name: "Lemon Sorbet" },
          { name: "Homemade Ny Cheesecake" }
        ]
      }
    ]
  };  

export default barMenu;