import RestaurantMenu from "../classes/RestaurantMenu";

const wineMenu: RestaurantMenu = {
  name: "WINE by the BOTTLE",
  categories: [
    {
      name: "WHITE WINE",
      subCategory: [
        {
            name: "SAUVIGNON BLANC",
            subCategory: [
                {
                name: "DAVIS BYNUM – Virginia’s Block 2021",
                price: 70,
                dishes: [
                    { name: "Russian River Valley, CA (34)" },
                    { name: "Bright citrus and lingering tropical tones" },
                ],
                },
                {
                    name: "LE TRIBORDAIS DE LOIRE– Pouilly Fumé 2022",
                    price: 75,
                    dishes: [
                        { name: "Loire Valley, FR (36)" },
                        { name: "A perfumed wine with ripe fruits and acidity" },
                    ],
                },
                {
                    name: "DOMAINE MICHEL GIRARD – Sancerre 2022",
                    price: 75,
                    dishes: [
                        { name: "Loire Valley, FR (37)" },
                        { name: "Peach & citrus aromas with round, mineral finish" },
                    ],
                },
                {
                    name: "CHÂTEAU LYNCH BAGES– Bordeaux 2022",
                    price: 52,
                    dishes: [
                        { name: "Gironde, FR (41)" },
                        { name: "Expressive nose, bright aromas & white peach" },
                    ],
                },
                {
                    name: "CHÂTEAU LARRIVET HÂUT BRION – 2019",
                    price: 115,
                    dishes: [
                    { name: "Pessac-Léognan, FR (42)" },
                    { name: "Full round, aromatic with structured acidic finish" },
                    ],
                },
                {
                    name: "THE CROSSINGS 2012",
                    price: 45,
                    dishes: [
                        { name: "Marlborough, NZ (47)" },
                        { name: "Intense tropical with hints of citrus & brilliant acidity" },
                    ],
                },
                {
                    name: "KIM CRAWFORD 2022",
                    price: 52,
                    dishes: [
                        { name: "Marlborough, NZ (48)" },
                        { name: "Fresh & juicy with tropical flavors long finish" },
                    ],
                },
            ],
            
        },
        {
            name: "CHARDONNAY",
            subCategory: [
                {
                    name: "FORCE & GRACE 2022",
                    price: 77,
                    dishes: [
                        { name: "Carneros, CA (31)" },
                        { name: "Full flavor, aromatic nose of apples, melon & citrus" },
                    ],
                },
                {
                    name: "RODNEY STRONG – Chalk Hill 2021",
                    price: 60,
                    dishes: [
                        { name: "Sonoma County, CA (32)" },
                        { name: "Big and plush with rich apple, vanilla & cream flavors" },
                    ],
                }
            ],
        },
        {
            name: "CHARDONNAY",
            subCategory: [
                {
                    name: "LA CREMA 2022",
                    price: 45,
                    dishes: [
                        { name: "Sonoma Coast, CA (33)" },
                        { name: "Tropical array of flavors touched with spicy aromas" },
                    ],
                },
                {
                    name: "DOMAINE DE LA MEULIÈRE– Chablis 2022",
                    price: 77,
                    dishes: [
                        { name: "Chablis, FR (38)" },
                        { name: "Fresh, balanced, elegant white flowers & minerals" },
                    ],
                },
                {
                    name: "CAVE DE LUGNY – Les Charmes 2022",
                    price: 45,
                    dishes: [
                        { name: "Mácon Lugny, FR (39)" },
                        { name: "Medium body with notes of nuts, honey, and citrus" },
                    ],
                },
                {
                    name: "DOMAINE SEBASTIEN DAMPT – Chablis 2022",
                    price: 129,
                    dishes: [
                        { name: "Chablis, FR (40)" },
                        { name: "Fully dry, chalky with notes of apple & citrus" },
                    ],
                }
            ],
        },
        {
            name: "PINOT GRIGIO",
            subCategory: [
                {
                    name: "LIVIO FELLUGA 2022",
                    price: 88,
                    dishes: [
                        { name: "Friuli-Venezia, IT (43)" },
                        { name: "Full bodied, elegantly fruity with hints of acacia flower" },
                    ],
                },
                {
                    name: "KETTMEIR 2022",
                    price: 88,
                    dishes: [
                        { name: "Alto Adige, IT (44)" },
                        { name: "Pristine and refreshing with crisp apple and pear" },
                    ],
                },
            ],
        },
        {
            name: "ALVARINHO",
            subCategory: [
                {
                    name: "QUINTA DE AVELEDA - Loureiro 2022",
                    price: 38,
                    dishes: [
                        { name: "Vinho Verde, PO (45)" },
                        { name: "Crisp, elegant, citrus-drenched & delicious" },
                    ],
                },
                {
                    name: "QUINTA DE AVELEDA – Solos de Granito 2022",
                    price: 48,
                    dishes: [
                        { name: "Vinho Verde, PO (46)" },
                        { name: "Well-structured with green apple and mineral notes" },
                    ],
                },
            ],
        },
        {
            name: "RIESLING",
            subCategory: [
                {
                    name: "KENDALL JACKSON – Vintner’s Reserve 2022",
                    price: 42,
                    dishes: [
                        { name: "Monterey County, CA (35)" },
                        { name: "Crisp, near dry with stone fruit and aromatic jasmin" },
                    ],
                }
            ],
        },
        {
            name: "ROSÉ",
            subCategory: [
                {
                    name: "PEYRASSOL – La Bastide 2021",
                    price: 53,
                    dishes: [
                        { name: "Provence, FR (30)" },
                        { name: "Juicy, animated with cherry and blood orange notes" },
                    ],
                },
                {
                    name: "CHÂTEAU D’ESCLANS – Whispering Angels 2023",
                    price: 67,
                    dishes: [
                        { name: "Provence, FR (31)" },
                        { name: "Full and lush with bone dry smooth finish" },
                    ],
                }
            ],
        },
      ],
      
    },
    {
        name: "CHAMPAGNE & SPARKLING",
        subCategory: [
        {
            name: "CHAMPAGNE & SPARKLING is",
            subCategory: [
                {
                    name: "DOM PERIGNON",
                    price: 580,
                    dishes: [
                        { name: "Champagne FR 2013 (32)" },
                        { name: "Sleek, sophisticate and powerful with sharp minerality" },
                ],
                },
                {
                    name: "MOËT ET CHANDON",
                    price: 190,
                    dishes: [
                        { name: "Champagne, FR (33)Seductive, richly flavored and crisp" },
                    ],
                },
                {
                    name: "VEUVE CLICQUOT",
                    price: 210,
                    dishes: [
                        { name: "Champagne, FR (35) " },
                        { name: "Perfect balance of fruity aromas and toasty notes" },
                    ],
                },
                {
                    name: "MUMM – Napa Blanc de Blancs",
                    price: 82,
                    dishes: [
                        { name: "Napa Valley, CA (28)" },
                        { name: "Crisp acidity and flora undertones" },
                    ],
                },
                {
                    name: "MUMM – Napa Brut Rosé Blancs)",
                    price: 82,
                    dishes: [
                        { name: "Napa Valley, CA (29)" },
                        { name: "Robust red fruit flavor and elegant finish" },
                    ],
                },
            ],
        },
        ],
    },
    {
        name: "RED WINE",
        subCategory: [
          {
            name: "CABERNET SAUVIGNON",
            subCategory: [
              {
                name: "THE CALLING – 2021",
                price: 70,
                dishes: [
                  { name: "Paso Robles, CA (2)" },
                  { name: "Rich and complex with blackberry, mocha and vanilla" }
                ]
              },
              {
                name: "JOSH 2020",
                price: 52,
                dishes: [
                  { name: "California (3)" },
                  { name: "Round and juicy with hints of hazelnut and blackberry" }
                ]
              },
              {
                name: "RODNEY STRONG 2020",
                price: 75,
                dishes: [
                  { name: "Alexander Valley, CA (4)" },
                  { name: "Red plum, black berries, hints of cassis and chocolate" }
                ]
              },
              {
                name: "JORDAN 2019",
                price: 210,
                dishes: [
                  { name: "Alexander Valley, CA (6)" },
                  { name: "Intense aroma of black cherry with delicate acidity" }
                ]
              },
              {
                name: "BEAULIEU VINEYARD RUTHERFORD RESERVE 2020",
                price: 196,
                dishes: [
                  { name: "Napa Valley, CA (9)" },
                  { name: "Soft bouquet with beautiful depth and richness" }
                ]
              }
            ]
          },
          {
            name: "PINOT NOIR",
            subCategory: [
              {
                name: "DAVID BYNUM 2021",
                price: 94,
                dishes: [
                  { name: "Russian River Valley, CA (5)" },
                  { name: "Hints of minerality followed by strawberry and cherry" }
                ]
              },
              {
                name: "MURPHY GOODE 2022",
                price: 38,
                dishes: [
                  { name: "Sonoma County, CA (7)" },
                  { name: "Notes of vanilla add the intense black cherry aromas" }
                ]
              },
              {
                name: "LA CREMA – Willamette Valley 2021",
                price: 88,
                dishes: [
                  { name: "Willamette Valley, OR (8)" },
                  { name: "Red fruit & blood orange notes with pie crust aromas" }
                ]
              },
              {
                name: "DOMAINE D’ARDHUY – 2022",
                price: 89,
                dishes: [
                  { name: "Chablis, FR (15)" },
                  { name: "Delightful, fruity, soft in the mouth with hint of cherry" }
                ]
              }
            ]
          },
          {
            name: "ZINFANDEL & PETITE SIRAH",
            subCategory: [
              {
                name: "KUNDE FAMILY WINERY 2021",
                price: 48,
                dishes: [
                  { name: "Sonoma County, CA (10)" },
                  { name: "Full bodied with ripe flavors and zesty peppery notes" }
                ]
              },
              {
                name: "ROMBAUER VINEYARDS – 2021",
                price: 94,
                dishes: [
                  { name: "CA (11)" },
                  { name: "Rich and smooth with ripe blackberry flavor" }
                ]
              },
              {
                name: "GIRARD 2021 – Petite Sirah",
                price: 95,
                dishes: [
                  { name: "Napa Valley, CA (1)" },
                  { name: "Medium bodied, juicy and grapey with hint of berry" }
                ]
              }
            ]
          },
          {
            name: "MERLOT",
            subCategory: [
              {
                name: "STAGS LEAP 2020",
                price: 89,
                dishes: [
                  { name: "Napa Valley, CA (12)" },
                  { name: "Sumptuous, creamy, and round with fresh acidity" }
                ]
              },
              {
                name: "HAHN 2021",
                price: 88,
                dishes: [
                  { name: "CA (13)" },
                  { name: "Full bodied, approachable with aromas of black cherry" }
                ]
              }
            ]
          },
          {
            name: "CHÂTEAUNEUF-DU-PAPE",
            subCategory: [
              {
                name: "DOMAINE DES SÉNÉCHAUX 2019",
                price: 165,
                dishes: [
                  { name: "Côtes du Rhône, FR (14)" },
                  { name: "Round, opulent with ripe fruit and silky tannins" }
                ]
              }
            ]
          },
          {
            name: "SAINT-EMILION",
            subCategory: [
              {
                name: "CHÂTEAU CLOS MAGNE FIGEAC 2020",
                price: 68,
                dishes: [
                  { name: "Bordeaux, FR (16)" },
                  { name: "Crushed forest fruit notes and soft tannins" }
                ]
              },
              {
                name: "CHÂTEAU DE FONBEL GRAND CRU 2015",
                price: 112,
                dishes: [
                  { name: "Bordeaux, FR (17)" },
                  { name: "Complex rich bouquet and crisp black-currant flavors" }
                ]
              }
            ]
          },
          {
            name: "ITALY",
            subCategory: [
              {
                name: "LA FORNACE – Brunello di Montalcino 2018",
                price: 227,
                dishes: [
                  { name: "Tuscany, IT (18)" },
                  { name: "Intense but balanced with hints of spice and vanilla" }
                ]
              },
              {
                name: "MOSCONE – Barolo Bussia 2016",
                price: 182,
                dishes: [
                  { name: "Piedmont, IT (19)" },
                  { name: "Heady and forward aromas of licorice and dark berries" }
                ]
              },
              {
                name: "LA SALA Campo All’Albero 2019",
                price: 105,
                dishes: [
                  { name: "Tuscany, IT (20)" },
                  { name: "Elegant and structured with soft and pleasant tannins" }
                ]
              }
            ]
          },
          {
            name: "SPAIN & PORTUGAL",
            subCategory: [
              {
                name: "BODEGA LANZAGA – Tempranillo 2020",
                price: 59,
                dishes: [
                  { name: "Rioja, SP (22)" },
                  { name: "Expressive, complex with hint of flowers and berries" }
                ]
              },
              {
                name: "ESPORÃO – Reserve Alentejo 2020",
                price: 59,
                dishes: [
                  { name: "PO (23)" },
                  { name: "Aromatic with blackberry & chocolate notes" }
                ]
              },
              {
                name: "QUINTA DOS MURCAS – 2019",
                price: 52,
                dishes: [
                  { name: "Douro, PO (24)" },
                  { name: "Intense with violet hues with dominant ripe red fruit" }
                ]
              }
            ]
          },
          {
            name: "AUSTRALIA & ARGENTINA",
            subCategory: [
              {
                name: "PENFOLDS BIN 28 – Shiraz 2021",
                price: 75,
                dishes: [
                  { name: "AU (25)" },
                  { name: "Rich and velvety with dark fruit and chocolate" }
                ]
              },
              {
                name: "CLOS DE LOS SIETE – Malbec 2020",
                price: 56,
                dishes: [
                  { name: "Valle de Uco, AR (26)" },
                  { name: "Opulent black fruit and spices with round finish" }
                ]
              },
              {
                name: "TRIVENTO– Golden Reserve Malbec 2020",
                price: 49,
                dishes: [
                  { name: "Mendoza, AR (27)" },
                  { name: "Full-bodied, deep intense nose, and juicy finish" }
                ]
              }
            ]
          }
        ]
      }
  ],
};

export default wineMenu;
