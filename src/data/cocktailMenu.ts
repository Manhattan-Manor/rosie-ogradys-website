import RestaurantMenu from "../classes/RestaurantMenu";

const cocktailMenu: RestaurantMenu = {
  name: "COCKTAILS",
  categories: [
    {
      name: "SPECIALTY COCKTAILS - ALL",
      price: 18,
      subCategory: [
        {
          name: "ROSIE’S SPICY MARGARITA",
          dishes: [
            {
              name: "21 Seeds Tequila, Cucumber, Jalapeño",
            },
            {
              name: "Triple Sec, Lime Juice",
            },
          ],
        },
        {
          name: "TIMES SQUARE MANHATTAN",
          dishes: [{ name: "Basil Hayden, Sweet Vermouth, Bitters" }],
        },
        {
          name: "GOLD RUSH",
          dishes: [{ name: "Knob Creek, Lemon, Honey, Drambuie" }],
        },
        {
          name: "POMELO SPRITZ",
          dishes: [{ name: "Gunpowder Orange Citrus Gin, Aperol, Grapefruit" }],
        },
        {
          name: "SPARKLING PEACH MARTINI",
          dishes: [{ name: "Absolute Peach, Passion Fruit, Prosecco" }],
        },
        {
          name: "FRENCH MARTINI",
          dishes: [{ name: "Absolute Vanilla, Chambord, Pineapple" }],
        },
        {
          name: "ROSIE’S OLD FASHIONED",
          dishes: [{ name: "Bulleit Rye, Bitters, Rich Simple Syrup" }],
        },
        {
          name: "FRENCH 75",
          dishes: [{ name: "Tanqueray Gin, Lemon, Prosecco" }],
        },
        {
          name: "PALOMA",
          dishes: [{ name: "Don Julio Reposado, Grapefruit, Lime" }],
        },
        {
          name: "ESPRESSO MARTINI",
          dishes: [{ name: "Sausage Tree Irish Vodka, Kahlua, Espresso" }],
        },
        {
          name: "RED OR WHITE SANGRIA",
          dishes: [
            { name: "Brandy, Apples, Orange, Passion Fruit" },
            { name: "Red or White Wine" },
          ],
        },
      ],
    },
    {
      name: "WINE BY THE GLASS",
    },
    {
      name: "WHITE",
      subCategory: [
        {
          name: "SAUVIGNON BLANC",
          price: 15,
          subCategory: [
            {
              name: "The Crossings",
              dishes: [{ name: "Marlborough, NZ" }],
            },
          ],
        },
        {
          name: "Sancerre",
          price: 19,
          dishes: [
            { name: "Domaine Michel Girard" },
            { name: "Loire, France" },
          ],
        },
        {
          name: "CHARDONNAY",
          subCategory: [
            {
              name: "Rodney Strong",
              price: 18,
              dishes: [{ name: "Sonoma County, CA" }],
            },
            {
              name: "La Crema",
              price: 16,
              dishes: [{ name: "Monterrey, CA" }],
            },
          ],
        },
        {
          name: "PINOT GRIGIO",
          subCategory: [
            {
              name: "Kettmeir",
              price: 16,
              dishes: [{ name: "Alto Adige, Italy" }],
            },
          ],
        },
        {
          name: "ROSÉ",
          subCategory: [
            {
              name: "La Bastide Peyrassol",
              price: 15,
              dishes: [{ name: "Côtes de Provence, France" }],
            },
          ],
        },
        {
          name: "PROSECCO",
          subCategory: [
            {
              name: "Ruffino – 187ml",
              price: 16,
              dishes: [{ name: "Venetta, Italy" }],
            },
          ],
        },
      ],
    },
    {
      name: "RED",
      subCategory: [
        {
          name: "CABERNET SAUVIGNON",
          subCategory: [
            {
              name: "Josh",
              price: 18,
              dishes: [{ name: "California" }],
            },
            {
              name: "The Calling",
              price: 20,
              dishes: [{ name: "Paso Robles, CA" }],
            },
          ],
        },
        {
          name: "PINOT NOIR",
          subCategory: [
            {
              name: "Maison du Grand Pré",
              price: 18,
              dishes: [{ name: "Burgundy, France" }],
            },
          ],
        },
        {
          name: "MERLOT",
          subCategory: [
            {
              name: "Hahn",
              price: 15,
              dishes: [{ name: "Monterrey, California" }],
            },
          ],
        },
        {
          name: "SAINT EMILION",
          subCategory: [
            {
              name: "Château Clos Magne Figeac",
              price: 20,
              dishes: [{ name: "Bordeaux, France" }],
            },
          ],
        },
        {
          name: "TEMPRANILLO",
          subCategory: [
            {
              name: "Bodega Lanzaga",
              price: 16,
              dishes: [{ name: "Rioja, Spain" }],
            },
          ],
        },
      ],
    },
    
    {
        name: "BEER",
        subCategory: [
          {
            name: "DRAUGHT",
            subCategory: [
              { name: "Guiness" },
              { name: "Stella Artois" },
              { name: "Blue Point" },
              { name: "Smithwicks" },
              { name: "Bear Hug Hazy" },
              { name: "Bud Light" },
              { name: "Lagunitas IPA" },
              { name: "Six Point Crisp" },
              { name: "Pilsner" },
              { name: "Harp" },
              { name: "Blue Moon" },
              { name: "Montauk" },
              { name: "Downeast Cider" }
            ]
          },
          {
            name: "BOTTLES",
            subCategory: [
              { name: "Bud Light" },
              { name: "Budweiser" },
              { name: "Heineken" },
              { name: "Michelob Ultra" },
              { name: "Corona" },
              { name: "Amstel Light" },
              { name: "Coors Light" },
              { name: "Duvel" }
            ]
          },
          {
            name: "CANS",
            subCategory: [
              { name: "Strongbow" },
              { name: "Athletic N.A." },
              { name: "White Claw -" },
              { name: "Black Cherry, Lime" },
              { name: "Raspberry, Mango" }
            ]
          }
        ]
    },
    {
        name: "SIDE ORDERS - ALL",
        price: 13.50,
        subCategory: [
          { name: "Steamed Asparagus" },
          { name: "Sweet Potato Fries" },
          { name: "Creamed Spinach" },
          { name: "Steamed Broccoli" },
          { name: "Sautéed Mushrooms" },
          { name: "Onion Rings" },
          { name: "Potato Gratin" },
          { name: "Baked Potato" }
        ]
    }
  ],
};

export default cocktailMenu;
