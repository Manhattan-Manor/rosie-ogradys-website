import RestaurantMenu from "../classes/RestaurantMenu";

const dinnerMenu: RestaurantMenu = {
    name: "DINNER",
    categories: [
      {
        name: "APPETIZERS",
        subCategory: [
          {
            name: "Rosie’s Caesar Salad",
            price: 16.95,
            description: "Romaine Lettuce, Traditional Dressing Shaved Parmesan and Garlic Croutons"
          },
          {
            name: "Seasonal Garden Greens",
            price: 13.95,
            description: "Mesclun Greens and Tomato Choice of Homemade Dressing"
          },
          {
            name: "Roasted Golden Beet Salad",
            price: 17.95,
            description: "Arugula, Pistachios, Julienne Carrots and Goat Cheese Raspberry Vinaigrette"
          },
          {
            name: "Soup Of The Day",
            price: 11.95,
            description: "Made Fresh Daily. Ask Server"
          },
          {
            name: "French Onion Soup Au Gratin",
            price: 14.95,
            description: "Topped with Toasted Baguette and Melted Mozzarella"
          },
          {
            name: "Fried Calamari",
            price: 18.95,
            description: "Fried to Perfection with Spicy Tomato Sauce"
          },
          {
            name: "Crab Cake Appetizer",
            price: 19.95,
            description: "Select Jumbo Crab Meat, Delicately Pan Fried"
          },
          {
            name: "Jumbo Gulf Shrimp Cocktail",
            price: 20.95,
            description: "Served with Horseradish-Chili Sauce (4)"
          },
          {
            name: "Blue Point Oysters",
            price: 20.95,
            description: "Plump and Pristine Nestled on a Bed of Crushed Ice (6)"
          }
        ]
      },
      {
        name: "ENTRÉE SALADS",
        subCategory: [
          {
            name: "Caesar",
            price: 21.95,
            description: "Romaine Lettuce, Traditional Dressing Shaved Parmesan Cheese and Garlic Croutons"
          },
          {
            name: "Roasted Golden Beet Salad",
            price: 25.95,
            description: "Arugula, Pistachios, Julienne Carrots and Goat Cheese Raspberry Vinaigrette"
          },
          {
            name: "Baby Spinach & Gorgonzola Salad",
            price: 26.95,
            description: "Mushrooms, Bacon, Gorgonzola, Pomegranate Seeds, Pecans, Honey White Balsamic Vinaigrette"
          },
          {
            name: "Spring Salad",
            price: 23.95,
            description: "Asparagus, Apple, Radish, Feta. Avocado, Toasted Walnuts, Roasted Chickpeas, Strawberries with Mesclun and Herb White Balsamic Vinaigrette. ADD: Chicken $8 Salmon $11 Shrimp $12 Steak $13",
          }
        ]
      },
      {
        name: "TRADITIONAL FAVORITES",
        subCategory: [
          {
            name: "Traditional Fried New England Cod",
            price: 27.95,
            description: "Ale Battered Filet of Cod, Deep Fried to a Golden Brown Served with French Fries"
          },
          {
            name: "Shepherd’s Pie",
            price: 27.95,
            description: "Braised Chopped Beef and Veal, Mixed Vegetables Crowned with Mashed Potatoes"
          }
        ]
      },
      {
        name: "BURGERS",
        subCategory: [
          {
            name: "Rosie O’grady’s 10 Oz Burger",
            price: 22.95,
            description: "Lettuce, Tomato and Dill Pickle French Fries or Sweet Potato Fries" 
          },
          {
            name: "California Burger",
            price: 23.95,
            description: "Topped with Melted Monterey Jack and Sliced Avocado Served with Chipotle Aioli & French Fries" 
          },
          {
            name: "Rosie’s Beyond Burger",
            price: 23.95,
            description: "Plant-Based – Served with Sautéed Mushrooms and Onions Sweet Potato Fries" 
          },
          {
            name: "Turkey Burger Classic",
            price: 23.95,
            description: "Topped with Melted Mozzarella, Sautéed Mushrooms and Onions with Sweet Potato Fries" 
          }
        ]
      },
      {
        name: "ENTRÉES",
        subCategory: [
          {
            name: "Norwegian Salmon",
            price: 31.95,
            description: "Broiled. Served with Beurre Blanc, Asparagus and Mashed Potatoes"
          },
          {
            name: "Jumbo Crab Mac And Cheese",
            price: 29.95,
            description: "Macaroni Tossed with Jumbo Crabmeat, Creamy Gruyère and Sharp Cheddar Sauce"
          },
          {
            name: "Lobster Ravioli",
            price: 35.95,
            description: "Served with Pink Vodka Sauce, garnished with Fresh Lobster Meat"
          },
          {
            name: "Shrimp And Scallop Risotto",
            price: 35.95,
            description: "Asparagus Tips, Roasted Peppers, Sweet Peas, Fennel and Wild Mushrooms"
          },
          {
            name: "Seafood Linguini Marinara",
            price: 35.95,
            description: "Mussels, Clams, Shrimps & Scallops in a Tangy Marinara Sauce"
          },
          {
            name: "Day Boat Sea Scallops",
            price: 36.95,
            description: "Pan Seared, Served with Wilted Spinach and Lemon Herb Linguini"
          },
          {
            name: "Maryland Crab Cakes",
            price: 38.95,
            description: "Select Jumbo Crab Meat, Delicately Pan Fried Served with Broccoli and Mashed Potatoes"
          },
          {
            name: "Chicken Florentine",
            price: 29.95,
            description: "Pan Seared Chicken with Wilted Spinach, Mozzarella and Sherry Mushroom Sauce over Linguini"
          },
          {
            name: "Chicken Piccata",
            price: 29.95,
            description: "Sautéed with White Wine, Lemon, Capers Wilted Spinach and Mashed Potatoes"
          },
          {
            name: "Chicken Parmigiana",
            price: 28.95,
            description: "Homemade Zesty Marinara and Melted Mozzarella Served over Linguini"
          },
          {
            name: "Wild Mushroom Ravioli",
            price: 28.95,
            description: "Vodka Sauce and Spinach"
          },
          {
            name: "Fish Of The Day",
            description: "Ask Server"
          }
        ]
      },
      {
        name: "NEW YORK BEST",
        subCategory: [
          {
            name: "Petit Filet Mignon 8 Oz",
            description: "Served with Choice of Potato",
            price: 48.95
          },
          {
            name: "Prime Filet Mignon 12 Oz",
            price: 56.95
          },
          {
            name: "Prime Boneless Rib Steak 16 Oz",
            price: 59.95
          },
          {
            name: "New York Cut Sirloin Steak 14 Oz",
            price: 49.95
          },
          {
            name: "Medallions Of Filet Mignon",
            price: 46.95
          },
          {
            name: "Rack Of Lamb",
            price: 45.95
          },
          {
            name: "Au Poivre Vert",
            description: "Green Peppercorns, Brandy, Touch of Cream"
          }
        ]
      },
    ]
  };

export default dinnerMenu;
