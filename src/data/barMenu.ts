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
            description: "Traditional Dressing, Shaved Parmesan, Garlic Croutons on Crisp Romaine"
          },
          {
            name: "French Onion Soup Au Gratin",
            price: 14.95,
            description: "With croutons, Topped with Melted Swiss and Mozzarella"
          },
          {
            name: "Blue Point Oysters",
            price: 20.95,
            description: "Half Dozen Nestled on a Bed of Crushed Ice"
          },
          {
            name: "Jumbo Gulf Shrimp Cocktail",
            price: 19.95,
            description: "Four Pieces, Horseradish - Chili Sauce"
          },
          {
            name: "Fried Calamari",
            price: 18.95,
            description: "Served with Spicy Tomato Sauce"
          },
          {
            name: "Buffalo Wings",
            price: 17.95,
            description: "Served with Blue Cheese, Celery and Carrots"
          },
          {
            name: "Chicken Tenders",
            price: 15.95,
            description: "Served with Honey Mustard Sauce" 
          },
          {
            name: "Mozzarella Sticks",
            price: 15.95,
            description: "Served with Marinara Sauce"
          },
          {
            name: "Three Cheese Nachos With Chili",
            price: 18.95,
            description: "With Avocado, Pico de Gallo, Sour Cream, Jalapenos"
          },
          {
            name: "Roasted Golden Beet Salad",
            price: 17.95,
            description: "Arugula, Pistachios, Julienne Carrots and Goat Cheese Raspberry Vinaigrette"
          }
        ]
      },
      {
        name: "BEEF BURGERS",
        subCategory: [
          {
            name: "Rosie’s Beef Burger",
            price: 22.95,
            description: "Lettuce, tomato, and Dill Pickle, French Fries or Sweet Potato Fries"
          },
          {
            name: "California Burger",
            price: 23.95,
            description: "Lettuce, Tomato and Onion Topped w/Melted Pepper Jack and Sliced Avocado"
          },
          {
            name: "Turkey Burger Classic",
            price: 23.95,
            description: "Sautéed Mushrooms and Onions, Topped w/Melted Mozzarella"
          },
          {
            name: "Rosie’s Beyond Burger",
            price: 23.95,
            description: "Plant-Based, Served with Sautéed Mushrooms and Onions & Sweet Potato Fries"
          }
        ]
      },
      {
        name: "SANDWICHES",
        description: "All Sandwiches are served with French Fries",
        subCategory: [
          {
            name: "Grilled Steak",
            price: 28.95,
            description: "Sliced NY Strip Steak served on Ciabatta, Pepper Jack Cheese and Onion Rings"
          },
          {
            name: "California Grilled Chicken",
            price: 23.95,
          },
          {
            name: "House Roasted Turkey Club",
            price: 20.95,
            description: "Double Decker/Lettuce, Tomato & Bacon"
          },
          {
            name: "Maryland Crabcake Brioche-Wich",
            price: 28.95,
            description: "Our Famous Crab Cake Sandwich Served with Tri-Color Slaw, Roasted Garlic Aioli"
          },
          {
            name: "California Grilled Chicken",
            price: 23.95,
            description: "Served on Ciabatta w/Lettuce, Tomato and Onion Topped w/Melted Pepper Jack and Sliced Avocado Our Spicy Chipotle Sauce on the side"
          }
        ]
      },
      {
        name: "SLIDERS",
        subCategory: [
          {
            name: "Angus Mini Cheeseburgers",
            price: 16.95,
            description: "Cheddar Cheese and Barbecue Sauce"
          },
          {
            name: "Chipotle Grilled Chicken",
            price: 17.95,
            description: "Pepper Jack Cheese, Chipotle Mayonnaise & Avocado"
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
            description: "Choice Of Potato"
          },
          {
            name: "New York Cut Sirloin Steak 14 Oz.",
            price: 49.95,
            description: "Choice Of Potato"
          },
          {
            name: "Chicken Parmigiana",
            price: 28.95,
            description: "Served Over Linguine"
          },
          {
            name: "Broiled Norwegian Salmon",
            price: 31.95,
            description: "Beurre Blanc, Asparagus, and Mashed Potatoes"
          },
          {
            name: "Traditional Fried New England Cod",
            price: 27.95,
            description: "French Fries and Tartar Sauce"
          },
          {
            name: "Shepherd’s Pie",
            price: 27.95,
            description: "Braised Ground Beef and Veal with Vegetables. Crowned with Mashed Potatoes"
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
      },
      {
        name:"",
        subCategory: [
          { name: "Please Ask Your Server About Our Daily Menu Specials Please Let Your Server Know If You Have"},
          { name: "A Food Allergy Or Dietary Concern, We Will Try Our Best To Accommodate Your Special Request"},
          { name: "* Gluten Free Menu Items Pastas May Be Substituted With Gluten Free Linguini"},
          { name: "* Prices Include 2.8% Credit Card Merchant Fee, Price Adjusted For Cash And Debit Card Payments."},

        ]
      }
    ]
  };  

export default barMenu;