import RestaurantMenu from "../classes/RestaurantMenu";

const lunchMenu: RestaurantMenu = {
    name: "LUNCH MENU",
    categories: [
      {
        name: "APPETIZERS",
        subCategory: [
          {
            name: "Rosie’s Caesar Salad",
            price: 16.95,
            dishes: [
              {
                name: "Crisp Romaine Lettuce, Traditional Dressing, Shaved Parmesan and Garlic Croutons"
              }
            ]
          },
          {
            name: "Soup Of The Day",
            price: 12.95,
            dishes: [
              {
                name: "Made Fresh Daily. Ask your Server"
              }
            ]
          },
          {
            name: "Seasonal Garden Greens *",
            price: 13.95,
            dishes: [
              {
                name: "Mesclun Greens and Tomato. Made Fresh Daily. Choice of Homemade Dressings"
              }
            ]
          },
          {
            name: "French Onion Soup Au Gratin",
            price: 14.95,
            dishes: [
              {
                name: "Topped with Toasted Baguette and Melted Mozzarella"
              }
            ]
          },
          {
            name: "Jumbo Gulf Shrimp Cocktail *",
            price: 19.95,
            dishes: [
              {
                name: "Served with Horseradish-Chili Sauce (4)"
              }
            ]
          },
          {
            name: "Fried Calamari",
            price: 18.95,
            dishes: [
              {
                name: "Fried to Perfection with Spicy Tomato Sauce"
              }
            ]
          },
          {
            name: "Blue Point Oysters",
            price: 20.95,
            dishes: [
              {
                name: "Plump and Pristine Served on a Bed of Crushed Ice (6)"
              }
            ]
          },
          {
            name: "Beef Or Chicken Sliders",
            price: 20.95,
            dishes: [
              {
                name: "Grilled and Served on Brioche Buns (3)"
              }
            ]
          }
        ]
      },
      {
        name: "LUNCH SPECIALS",
        description: "All Sandwiches served with French Fries, may be substituted for House Salad",
        subCategory: [
          {
            name: "Open Sliced Steak Sandwich",
            price: 28.95,
            dishes: [
              {
                name: "Black Angus Sirloin on a French Baguette, served with Onion Rings"
              }
            ]
          },
          {
            name: "Traditional Turkey Club",
            price: 20.95,
            dishes: [
              {
                name: "Roast Turkey Breast with Lettuce, Tomato and Bacon, served on White Toast"
              }
            ]
          },
          {
            name: "California Grilled Chicken Sandwich",
            price: 23.95,
            dishes: [
              {
                name: "Topped with Sliced Avocado, Lettuce, Tomato and Onion, served on Herb Ciabatta"
              }
            ]
          },
          {
            name: "Maryland Crab Cake Brioche-Wich",
            price: 28.95,
            dishes: [
              {
                name: "Made with Select Jumbo Lump Crabmeat, Served on Brioche with Tri-Color Slaw and Roasted Garlic Aioli on the side"
              }
            ]
          }
        ]
      },
      {
        name: "BURGERS",
        subCategory: [
          {
            name: "Rosie’ O’grady 10 Oz. Burger",
            price: 22.95,
            dishes: [
              {
                name: "Garnished with Lettuce, Tomato and Dill Pickle & French Fries"
              }
            ]
          },
          {
            name: "California Burger",
            price: 23.95,
            dishes: [
              {
                name: "Topped with Melted Pepper Jack and Sliced Avocado Served with Chipotle Aioli & French Fries"
              }
            ]
          },
          {
            name: "ROSIE’S BEYOND BURGER (V)",
            price: 23.95,
            dishes: [
              {
                name: "Plant-Based – Served with Sautéed Mushrooms and Onions Sweet Potato Fries"
              }
            ]
          },
          {
            name: "Turkey Burger Classic",
            price: 23.95,
            dishes: [
              {
                name: "Topped with Melted Mozzarella, Served with Sautéed Onions, Mushrooms, and Sweet Potato Fries"
              }
            ]
          }
        ]
      },
      {
        name: "MAIN COURSE",
        subCategory: [
          {
            name: "Broiled Norwegian Salmon *",
            price: 31.95,
            dishes: [
              {
                name: "Beurre Blanc, Asparagus and Mashed Potatoes"
              }
            ]
          },
          {
            name: "Jumbo Crab Mac And Cheese",
            price: 29.95,
            dishes: [
              {
                name: "Macaroni Tossed with Jumbo Crabmeat, Creamy Gruyère and Sharp Cheddar Sauce"
              }
            ]
          },
          {
            name: "Day Boat Sea Scallops",
            price: 36.95,
            dishes: [
              {
                name: "Pan Seared, Served with Wilted Spinach and Lemon Herb Linguini"
              }
            ]
          },
          {
            name: "Shrimp And Scallop Risotto *",
            price: 36.95,
            dishes: [
              {
                name: "Asparagus Tips, Roasted Peppers, Sweet Peas, Fennel, and Wild Mushrooms"
              }
            ]
          },
          {
            name: "Rosie’s Chicken Parmigiana",
            price: 29.95,
            dishes: [
              {
                name: "Homemade Marinara and Melted Mozzarella Served over Linguini"
              }
            ]
          }
        ]
      },
      {
        name: "TRADITIONAL FAVORITES",
        subCategory: [
          {
            name: "Shepherd’s Pie",
            price: 27.95,
            dishes: [
              {
                name: "Braised Chopped Beef and Veal with Mixed Vegetables Crowned with Mashed Potatoes"
              }
            ]
          },
          {
            name: "Traditional Fried New England Cod",
            price: 27.95,
            dishes: [
              {
                name: "Ale Battered Filet of Cod, Deep Fried to a Golden Brown Served with French Fries"
              }
            ]
          },
          {
            name: "Omelette *",
            price: 19.95,
            dishes: [
              {
                name: "Made with Your Choice of Ham, Cheese, Spinach, Mushrooms and Fines Herbes. Served with French Fries"
              }
            ]
          },
          {
            name: "Avocado Toast",
            price: 17.95,
            dishes: [
              {
                name: "Toasted Artisan Multi-Grain Bread, Topped with Fresh Avocado, Extra Virgin Olive Oil, hint of Lime and Crushed Red Pepper Flakes"
              }
            ]
          }
        ]
      },
      {
        name: "ENTRÉE SALADS",
        subCategory: [
          {
            name: "Caesar",
            price: 21.95,
            dishes: [
              {
                name: "Crisp Romaine Lettuce, Traditional Dressing, Shaved Parmesan and Garlic Croutons"
              }
            ]
          },
          {
            name: "Baby Spinach & Gorgonzola Salad",
            price: 26.95,
            dishes: [
              {
                name: "Bacon, Mushrooms, Gorgonzola, Pecans and Pomegranate Seeds with Honey White Balsamic Vinaigrette"
              }
            ]
          },
          {
            name: "Roasted Golden Beet Salad *",
            price: 25.95,
            dishes: [
              {
                name: "Arugula, Pistachios, Julienne Carrots and Goat Cheese with Raspberry Vinaigrette"
              }
            ]
          },
          {
            name: "Spring Salad",
            price: 22.95,
            dishes: [
              {
                name: "Asparagus, Apple Crisp, Radishes, Feta, Avocado, Toasted Walnuts, Roast Chickpeas, Strawberries with Herb White Balsamic Vinaigrette"
              }
            ]
          }
        ]
      }
    ]
  }
 export default lunchMenu;  