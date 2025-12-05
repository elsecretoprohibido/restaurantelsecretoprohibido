// ===== MENU DATA (con numeri) =====
const menuData = {
  es: [
    { category: "Entrantes", items: [
      { num: 1, name: "Peras cremosas", desc: "Peras con queso y nueces.", price: "6,00 €" },
      { num: 2, name: "Bruchettas al verde", desc: "Bruschettas de anchoa, ajo, perejil triturado y aceite de oliva.", price: "8,00 €" },
      { num: 3, name: "Volcán de queso y setas", desc: "Vol-au-vent con salsa de setas y 4 quesos.", price: "9,00 €" },
      { num: 4, name: "Bocados diferentes en salsa tonnata", desc: "Conchas comestibles con atún, mayonesa, alcaparra, pimiento rojo asado y aceituna verde.", price: "11,00 €" },
    ]},
    { category: "Primer plato · Pasta fresca", items: [
      { num: 5, name: "Aroma de bosque", desc: "Tallarines en salsa de setas, boletus, nata y pimienta negra.", price: "13,90 €" },
      { num: 6, name: "Amatriciana", desc: "Tallarines a la Amatriciana con guanciale de cerdo, aceite de oliva, tomate, ajo, guindilla y queso pecorino romano.", price: "13,00 €" },
      { num: 7, name: "Al verde", desc: "Tallarines con pistacho, bacón, nata, leche, pimienta negra, puerro, aceite de oliva y queso pecorino.", price: "13,90 €" },
      { num: 8, name: "Delicado", desc: "Raviolis de ricotta y espinacas con salvia, mantequilla y queso parmesano.", price: "12,90 €" },
      { num: 9, name: "Ragú", desc: "Raviolis de carne con salsa de tomate, aceite de oliva, carne de vacuno molida, salchicha, cebolla, zanahoria y vino tinto.", price: "13,90 €" },
      { num: 10, name: "Sabor de mar y de tierra", desc: "Raviolones de langostinos y calabacín con nata, anchoas, aceite de oliva, pimienta negra, ajo y zucchini.", price: "14,00 €" },
      { num: 11, name: "Gorgonzola y nueces", desc: "Raviolis de gorgonzola y nueces con salsa 4 quesos.", price: "12,90 €" },
      { num: 12, name: "A la Genovesa", desc: "Trofie al pesto verde: albahaca, aceite de oliva, piñones, queso pecorino y ajo.", price: "13,90 €" },
      { num: 13, name: "Pasta Corta", desc: "Tubitos con salchicha, tomate y aceite de oliva.", price: "12,90 €" },
      { num: 14, name: "Saquitos de peras y gorgonzola", desc: "Fagottini de peras y queso con salsa de gorgonzola.", price: "12,90 €" },
      { num: 15, name: "Emilia", desc: "Tortelloni de carne con salsa boloñesa.", price: "12,90 €" },
    ]},
    { category: "Primer plato · Pasta seca", items: [
      { num: 16, name: "Clásico", desc: "Spaghetti con salsa boloñesa.", price: "12,90 €" },
      { num: 17, name: "Guitarra", desc: "Spaghetti a la guitarra con salsa de tomate, nata, pimienta y queso mozzarella.", price: "12,90 €" },
    ]},
    { category: "Carnes y pollo", items: [
      { num: 18, name: "Porqueta", desc: "Porchetta carne de cerdo enrollada con romero y pimienta negra con papas fritas.", price: "19,90 €" },
      { num: 19, name: "Pollo", desc: "Pechuga de pollo a la plancha o con salsa de soja y champiñones.", price: "9,50 €" },
      { num: 20, name: "Salchicha", desc: "Salchicha con papas fritas.", price: "9,50 €" },
      { num: 21, name: "Muslo", desc: "Muslo de pollo asado con papas fritas.", price: "10,00 €" },
    ]},
    { category: "Ensaladas", items: [
      { num: 22, name: "De la casa", desc: "Lechuga, tomate, pimiento rojo y huevo duro.", price: "7,50 €" },
      { num: 23, name: "Griega", desc: "Tomate, pepino, cebolla, queso feta y aceitunas negras.", price: "9,00 €" },
      { num: 24, name: "Mixta", desc: "Lechuga mixta con atún, tomate y pimiento rojo.", price: "8,00 €" },
    ]},
    { category: "Platos vegetarianos", items: [
      { num: 25, name: "Albóndigas", desc: "Albóndigas de berenjena con salsa de tomate.", price: "11,90 €" },
      { num: 26, name: "Parrillada vegetal", desc: "Asado de pimiento rojo, verde, amarillo, berenjena, champiñones y tomate.", price: "13,90 €" },
    ]},
    { category: "Segundo plato", items: [
      { num: 27, name: "Peras cremosas", desc: "Peras con queso y nueces.", price: "6,00 €" },
      { num: 28, name: "Canapé", desc: "Cuchara comestible con hummus, pimiento rojo asado, aceituna verde y negra.", price: "13,90 €" },
    ]},
    { category: "Postres", items: [
      { name: "Tarta de zanahoria con nueces", desc: "", price: "4,50 €" },
      { name: "Profiteroles de chocolate", desc: "", price: "4,50 €" },
      { name: "Tarta Santiago con almendras", desc: "", price: "4,20 €" },
      { name: "Tarta de manzana", desc: "", price: "4,20 €" },
      { name: "Tarta de queso y pistacho", desc: "", price: "4,50 €" },
      { name: "Tiramisú", desc: "", price: "4,50 €" },
      { name: "Tarta de queso ricotta y pera", desc: "", price: "4,50 €" },
    ]},
  ],

  en: [
    { category: "Appetizers", items: [
      { num: 1, name: "Creamy pears", desc: "Pears with cheese and walnuts.", price: "6.00 €" },
      { num: 2, name: "Bruchettas al verde", desc: "Bruschettas of anchovies, garlic, crushed parsley, and olive oil.", price: "8.00 €" },
      { num: 3, name: "Cheese & mushroom volcano", desc: "Vol-au-vent with mushrooms and 4 cheeses.", price: "9.00 €" },
      { num: 4, name: "Mixed bites in tonnato sauce", desc: "Edible shells with tuna, mayonnaise, caper, roasted red pepper, and green olive.", price: "11.00 €" },
    ]},
    { category: "First Course · Fresh pasta", items: [
      { num: 5, name: "Forest aroma", desc: "Tagliatelle with mushrooms, boletus, cream, and black pepper.", price: "13.90 €" },
      { num: 6, name: "Amatriciana", desc: "Amatriciana tagliatelle with pork cheek, olive oil, tomato, garlic, chili, and pecorino romano.", price: "13.00 €" },
      { num: 7, name: "Al verde", desc: "Tagliatelle with pistachio, bacon, cream, milk, black pepper, leek, olive oil, and pecorino cheese.", price: "13.90 €" },
      { num: 8, name: "Delicate", desc: "Ricotta and spinach ravioli with sage, butter, and parmesan cheese.", price: "12.90 €" },
      { num: 9, name: "Ragù", desc: "Meat ravioli with tomato sauce, olive oil, ground beef, sausage, onion, carrots, and red wine.", price: "13.90 €" },
      { num: 10, name: "Sea & land flavor", desc: "Langoustine and zucchini ravioloni with cream, anchovies, olive oil, black pepper, garlic, and zucchini.", price: "14.00 €" },
      { num: 11, name: "Gorgonzola & walnuts", desc: "Gorgonzola and walnut ravioli with 4 cheese sauce.", price: "12.90 €" },
      { num: 12, name: "Genovese style", desc: "Trofie with green pesto: basil, olive oil, pine nuts, pecorino, and garlic.", price: "13.90 €" },
      { num: 13, name: "Short pasta", desc: "Short pasta tubes with sausage, tomato, and olive oil.", price: "12.90 €" },
      { num: 14, name: "Saquitos pears & gorgonzola", desc: "Pears and cheese fagottini with gorgonzola sauce.", price: "12.90 €" },
      { num: 15, name: "Emilia", desc: "Meat tortelloni with Bolognese sauce.", price: "12.90 €" },
    ]},
    { category: "First Course · Dried pasta", items: [
      { num: 16, name: "Classic", desc: "Spaghetti with Bolognese sauce.", price: "12.90 €" },
      { num: 17, name: "Guitarra", desc: "Spaghetti alla chitarra with tomato, cream, pepper, and mozzarella cheese sauce.", price: "12.90 €" },
    ]},
    { category: "Meat & chicken", items: [
      { num: 18, name: "Porchetta", desc: "Rolled pork with rosemary and black pepper, served with french fries.", price: "19.90 €" },
      { num: 19, name: "Chicken breast", desc: "Grilled chicken breast, plain or with soy sauce and mushrooms.", price: "9.50 €" },
      { num: 20, name: "Sausage", desc: "Sausage with french fries.", price: "9.50 €" },
      { num: 21, name: "Chicken thigh", desc: "Roasted chicken thigh with french fries.", price: "10.00 €" },
    ]},
    { category: "Salads", items: [
      { num: 22, name: "House salad", desc: "Lettuce, tomato, red pepper, and hard-boiled egg.", price: "7.50 €" },
      { num: 23, name: "Greek salad", desc: "Tomato, cucumber, onion, feta cheese, and black olives.", price: "9.00 €" },
      { num: 24, name: "Mixed salad", desc: "Mixed lettuce with tuna, tomato, and red pepper.", price: "8.00 €" },
    ]},
    { category: "Vegetarian dishes", items: [
      { num: 25, name: "Eggplant meatballs", desc: "Eggplant meatballs with tomato sauce.", price: "11.90 €" },
      { num: 26, name: "Vegetable grill", desc: "Grilled red, green and yellow peppers, eggplant, mushrooms, and tomato.", price: "13.90 €" },
    ]},
    { category: "Second Course", items: [
      { num: 27, name: "Creamy pears", desc: "Pears with cheese and walnuts.", price: "6.00 €" },
      { num: 28, name: "Canapé", desc: "Edible spoon with hummus, roasted red pepper, green and black olives.", price: "13.90 €" },
    ]},
    { category: "Desserts", items: [
      { name: "Carrot and walnut cake", desc: "", price: "4.50 €" },
      { name: "Chocolate profiteroles", desc: "", price: "4.50 €" },
      { name: "Tarta de Santiago with almonds", desc: "", price: "4.20 €" },
      { name: "Apple pie", desc: "", price: "4.20 €" },
      { name: "Pistachio cheesecake", desc: "", price: "4.50 €" },
      { name: "Tiramisu", desc: "", price: "4.50 €" },
      { name: "Ricotta and pear cheesecake", desc: "", price: "4.50 €" },
    ]},
  ],

  de: [
    { category: "Vorspeisen", items: [
      { num: 1, name: "Cremige Birnen", desc: "Birnen mit Käse und Walnüssen.", price: "6,00 €" },
      { num: 2, name: "Bruschettas al verde", desc: "Bruschettas mit Sardellen, Knoblauch, zerstoßener Petersilie und Olivenöl.", price: "8,00 €" },
      { num: 3, name: "Käse-Pilz-Vulkan", desc: "Vol-au-vent mit Pilzsauce und 4 Käsesorten.", price: "9,00 €" },
      { num: 4, name: "Verschiedene Häppchen in Tonnato-Sauce", desc: "Essbare Muschelschalen mit Thunfisch, Mayonnaise, Kapern, gerösteter roter Paprika und grüner Olive.", price: "11,00 €" },
    ]},
    { category: "Erster Gang · Frische Pasta", items: [
      { num: 5, name: "Waldaroma", desc: "Tagliatelle mit Pilzen, Steinpilzen, Sahne und schwarzem Pfeffer.", price: "13,90 €" },
      { num: 6, name: "Amatriciana", desc: "Tagliatelle Amatriciana mit Guanciale, Olivenöl, Tomate, Knoblauch, Chili und Pecorino Romano.", price: "13,00 €" },
      { num: 7, name: "Al verde", desc: "Tagliatelle mit Pistazie, Speck, Sahne, Milch, schwarzem Pfeffer, Lauch, Olivenöl und Pecorino.", price: "13,90 €" },
      { num: 8, name: "Zart", desc: "Ricotta-Spinat-Ravioli mit Salbei, Butter und Parmesan.", price: "12,90 €" },
      { num: 9, name: "Ragù", desc: "Fleischravioli in Tomatensauce mit Rinderhack, Wurst, Zwiebel, Karotte und Rotwein.", price: "13,90 €" },
      { num: 10, name: "Geschmack von Meer und Land", desc: "Ravioloni mit Langostinos und Zucchini in Sahnesauce, Sardellen, Olivenöl, schwarzer Pfeffer, Knoblauch und Zucchini.", price: "14,00 €" },
      { num: 11, name: "Gorgonzola & Walnüsse", desc: "Gorgonzola-Walnuss-Ravioli mit 4-Käse-Sauce.", price: "12,90 €" },
      { num: 12, name: "Genueser Art", desc: "Trofie mit grünem Pesto: Basilikum, Olivenöl, Pinienkerne, Pecorino und Knoblauch.", price: "13,90 €" },
      { num: 13, name: "Kurze Pasta", desc: "Röhrchenpasta mit Wurst, Tomate und Olivenöl.", price: "12,90 €" },
      { num: 14, name: "Saquitos", desc: "Birnen-Käse-Fagottini mit Gorgonzola-Sauce.", price: "12,90 €" },
      { num: 15, name: "Emilia", desc: "Fleisch-Tortelloni mit Bolognese-Sauce.", price: "12,90 €" },
    ]},
    { category: "Erster Gang · Getrocknete Pasta", items: [
      { num: 16, name: "Klassisch", desc: "Spaghetti mit Bolognese-Sauce.", price: "12,90 €" },
      { num: 17, name: "Guitarra", desc: "Spaghetti alla chitarra mit Tomaten-Sahne-Sauce, Pfeffer und Mozarella.", price: "12,90 €" },
    ]},
    { category: "Fleisch & Hähnchen", items: [
      { num: 18, name: "Porchetta", desc: "Gerollter Schweinebraten mit Rosmarin und schwarzem Pfeffer, dazu Pommes frites.", price: "19,90 €" },
      { num: 19, name: "Hähnchenbrust", desc: "Gegrillte Hähnchenbrust, natur oder mit Sojasauce und Champignons.", price: "9,50 €" },
      { num: 20, name: "Wurst", desc: "Wurst mit Pommes frites.", price: "9,50 €" },
      { num: 21, name: "Hähnchenschenkel", desc: "Gebratener Hähnchenschenkel mit Pommes frites.", price: "10,00 €" },
    ]},
    { category: "Salate", items: [
      { num: 22, name: "Haussalat", desc: "Salat, Tomate, rote Paprika und hartgekochtes Ei.", price: "7,50 €" },
      { num: 23, name: "Griechischer Salat", desc: "Tomate, Gurke, Zwiebel, Feta und schwarze Oliven.", price: "9,00 €" },
      { num: 24, name: "Gemischter Salat", desc: "Gemischter Salat mit Thunfisch, Tomate und roter Paprika.", price: "8,00 €" },
    ]},
    { category: "Vegetarische Gerichte", items: [
      { num: 25, name: "Auberginenbällchen", desc: "Auberginenbällchen mit Tomatensauce.", price: "11,90 €" },
      { num: 26, name: "Gemüse vom Grill", desc: "Gegrillte rote, grüne und gelbe Paprika, Aubergine, Champignons und Tomate.", price: "13,90 €" },
    ]},
    { category: "Zweiter Gang", items: [
      { num: 27, name: "Cremige Birnen", desc: "Birnen mit Käse und Walnüssen.", price: "6,00 €" },
      { num: 28, name: "Canapé", desc: "Essbarer Löffel mit Hummus, gerösteter roter Paprika sowie grünen und schwarzen Oliven.", price: "13,90 €" },
    ]},
    { category: "Desserts", items: [
      { name: "Karotten-Walnuss-Kuchen", desc: "", price: "4,50 €" },
      { name: "Schokoladen-Profiteroles", desc: "", price: "4,50 €" },
      { name: "Tarta de Santiago mit Mandeln", desc: "", price: "4,20 €" },
      { name: "Apfelkuchen", desc: "", price: "4,20 €" },
      { name: "Pistazien-Käsekuchen", desc: "", price: "4,50 €" },
      { name: "Tiramisù", desc: "", price: "4,50 €" },
      { name: "Ricotta-Birnen-Käsekuchen", desc: "", price: "4,50 €" },
    ]},
  ]
};

// ===== DRINKS MENU DATA =====
const drinksData = {
  es: [
    {
      category: "Vinos · Botella (tinto)",
      items: [
        { name: "Conde de Leizao Crianza 2021", desc: "", price: "15,00 €" },
        { name: "Mi Isla Tinto 2024", desc: "", price: "18,90 €" },
        { name: "Listán Tinto", desc: "", price: "17,50 €" },
        { name: "Flor de Chasna Tinto Barrica", desc: "", price: "22,00 €" },
        { name: "Barbera d'Asti", desc: "", price: "20,00 €" },
        { name: "Barbera d'Asti Superiore", desc: "", price: "22,50 €" },
        { name: "Chianti", desc: "", price: "20,00 €" },
        { name: "Chianti Riserva", desc: "", price: "22,50 €" }
      ]
    },
    {
      category: "Vinos · Botella (blanco)",
      items: [
        { name: "Laundum Chardonnay Organic", desc: "", price: "19,90 €" },
        { name: "Testamento Blanco medalla de oro", desc: "", price: "22,00 €" }
      ]
    },
    {
      category: "Vinos · Botella (blanco afrutado)",
      items: [
        { name: "Mi Isla Blanco Afrutado 2024", desc: "", price: "19,90 €" }
      ]
    },
    {
      category: "Vino de la casa",
      items: [
        { name: "Vino de la casa (copa)", desc: "", price: "2,50 €" },
        { name: "Vino de la casa (1/4)", desc: "", price: "3,20 €" },
        { name: "Vino de la casa (1/2)", desc: "", price: "6,00 €" },
        { name: "Vino de la casa (1 L)", desc: "", price: "11,50 €" }
      ]
    },
    {
      category: "Refrescos",
      items: [
        { name: "Coca-Cola", desc: "", price: "2,50 €" },
        { name: "Coca-Cola Zero", desc: "", price: "2,50 €" },
        { name: "Fanta Naranja", desc: "", price: "2,50 €" },
        { name: "Fanta Limón", desc: "", price: "2,50 €" },
        { name: "Tónica Schweppes", desc: "", price: "2,50 €" },
        { name: "7Up", desc: "", price: "2,50 €" },
        { name: "Nestea Limón", desc: "", price: "2,80 €" },
        { name: "Nestea Melocotón", desc: "", price: "2,80 €" },
        { name: "Nestea Mango-Piña", desc: "", price: "2,80 €" },
        { name: "Appletiser", desc: "", price: "2,80 €" },
        { name: "Aquarius Naranja", desc: "", price: "2,80 €" },
        { name: "Red Bull", desc: "", price: "3,00 €" },
        { name: "Zumo de melocotón", desc: "Batido de melocotón.", price: "2,50 €" },
        { name: "Zumo de pera piña", desc: "Batido de pera y piña.", price: "2,50 €" }
      ]
    },
    {
      category: "Agua",
      items: [
        { name: "Agua natural en botella (0,50 l)", desc: "Agua sin gas en botella.", price: "1,20 €" },
        { name: "Agua natural en botella (1,50 l)", desc: "Agua sin gas en botella de plástico.", price: "2,30 €" },
        { name: "Agua con gas en botella (0,50 l)", desc: "Agua con gas en botella de cristal.", price: "1,30 €" }
      ]
    },
    {
      category: "Cerveza",
      items: [
        { name: "Dorada Pilsen", desc: "", price: "1,80 €" },
        { name: "Dorada Especial", desc: "", price: "2,30 €" },
        { name: "Dorada Sin Alcohol", desc: "", price: "2,00 €" },
        { name: "Dorada Sin con Limón", desc: "", price: "2,30 €" },
        { name: "1906 Estrella Galicia", desc: "", price: "3,00 €" }
      ]
    }
  ],

  en: [
    {
      category: "Red wine · Bottle",
      items: [
        { name: "Conde de Leizao Crianza 2021", desc: "", price: "15.00 €" },
        { name: "Mi Isla Tinto 2024", desc: "", price: "18.90 €" },
        { name: "Listán Tinto", desc: "", price: "17.50 €" },
        { name: "Flor de Chasna Tinto Barrica", desc: "", price: "22.00 €" },
        { name: "Barbera d'Asti", desc: "", price: "20.00 €" },
        { name: "Barbera d'Asti Superiore", desc: "", price: "22.50 €" },
        { name: "Chianti", desc: "", price: "20.00 €" },
        { name: "Chianti Riserva", desc: "", price: "22.50 €" }
      ]
    },
    {
      category: "White wine · Bottle",
      items: [
        { name: "Laundum Chardonnay Organic", desc: "", price: "19.90 €" },
        { name: "Testamento Blanco gold medal", desc: "", price: "22.00 €" }
      ]
    },
    {
      category: "Fruity white wine · Bottle",
      items: [
        { name: "Mi Isla Blanco Afrutado 2024", desc: "", price: "19.90 €" }
      ]
    },
    {
      category: "House wine",
      items: [
        { name: "House wine (glass)", desc: "", price: "2.50 €" },
        { name: "House wine (1/4 l)", desc: "", price: "3.20 €" },
        { name: "House wine (1/2 l)", desc: "", price: "6.00 €" },
        { name: "House wine (1 l)", desc: "", price: "11.50 €" }
      ]
    },
    {
      category: "Soft drinks",
      items: [
        { name: "Coca-Cola", desc: "", price: "2.50 €" },
        { name: "Coca-Cola Zero", desc: "", price: "2.50 €" },
        { name: "Fanta Orange", desc: "", price: "2.50 €" },
        { name: "Fanta Lemon", desc: "", price: "2.50 €" },
        { name: "Schweppes Tonic", desc: "", price: "2.50 €" },
        { name: "7Up", desc: "", price: "2.50 €" },
        { name: "Nestea Lemon", desc: "", price: "2.80 €" },
        { name: "Nestea Peach", desc: "", price: "2.80 €" },
        { name: "Nestea Mango-Pineapple", desc: "", price: "2.80 €" },
        { name: "Appletiser", desc: "", price: "2.80 €" },
        { name: "Aquarius Orange", desc: "", price: "2.80 €" },
        { name: "Red Bull", desc: "", price: "3.00 €" },
        { name: "Peach juice", desc: "Peach smoothie.", price: "2.50 €" },
        { name: "Pear & pineapple juice", desc: "Pear and pineapple smoothie.", price: "2.50 €" }
      ]
    },
    {
      category: "Water",
      items: [
        { name: "Still water (0.5 l bottle)", desc: "Still water in a bottle.", price: "1.20 €" },
        { name: "Still water (1.5 l bottle)", desc: "Still water in a plastic bottle.", price: "2.30 €" },
        { name: "Sparkling water (0.5 l bottle)", desc: "Sparkling water in a glass bottle.", price: "1.30 €" }
      ]
    },
    {
      category: "Beer",
      items: [
        { name: "Dorada Pilsen", desc: "", price: "1.80 €" },
        { name: "Dorada Especial", desc: "", price: "2.30 €" },
        { name: "Dorada Alcohol Free", desc: "", price: "2.00 €" },
        { name: "Dorada Alcohol Free with Lemon", desc: "", price: "2.30 €" },
        { name: "1906 Estrella Galicia", desc: "", price: "3.00 €" }
      ]
    }
  ],

  de: [
    {
      category: "Rotwein · Flasche",
      items: [
        { name: "Conde de Leizao Crianza 2021", desc: "", price: "15,00 €" },
        { name: "Mi Isla Tinto 2024", desc: "", price: "18,90 €" },
        { name: "Listán Tinto", desc: "", price: "17,50 €" },
        { name: "Flor de Chasna Tinto Barrica", desc: "", price: "22,00 €" },
        { name: "Barbera d'Asti", desc: "", price: "20,00 €" },
        { name: "Barbera d'Asti Superiore", desc: "", price: "22,50 €" },
        { name: "Chianti", desc: "", price: "20,00 €" },
        { name: "Chianti Riserva", desc: "", price: "22,50 €" }
      ]
    },
    {
      category: "Weißwein · Flasche",
      items: [
        { name: "Laundum Chardonnay Organic", desc: "", price: "19,90 €" },
        { name: "Testamento Blanco Goldmedaille", desc: "", price: "22,00 €" }
      ]
    },
    {
      category: "Fruchtiger Weißwein · Flasche",
      items: [
        { name: "Mi Isla Blanco Afrutado 2024", desc: "", price: "19,90 €" }
      ]
    },
    {
      category: "Hauswein",
      items: [
        { name: "Hauswein (Glas)", desc: "", price: "2,50 €" },
        { name: "Hauswein (1/4 l)", desc: "", price: "3,20 €" },
        { name: "Hauswein (1/2 l)", desc: "", price: "6,00 €" },
        { name: "Hauswein (1 l)", desc: "", price: "11,50 €" }
      ]
    },
    {
      category: "Erfrischungsgetränke",
      items: [
        { name: "Coca-Cola", desc: "", price: "2,50 €" },
        { name: "Coca-Cola Zero", desc: "", price: "2,50 €" },
        { name: "Fanta Orange", desc: "", price: "2,50 €" },
        { name: "Fanta Zitrone", desc: "", price: "2,50 €" },
        { name: "Schweppes Tonic", desc: "", price: "2,50 €" },
        { name: "7Up", desc: "", price: "2,50 €" },
        { name: "Nestea Zitrone", desc: "", price: "2,80 €" },
        { name: "Nestea Pfirsich", desc: "", price: "2,80 €" },
        { name: "Nestea Mango-Ananas", desc: "", price: "2,80 €" },
        { name: "Appletiser", desc: "", price: "2,80 €" },
        { name: "Aquarius Orange", desc: "", price: "2,80 €" },
        { name: "Red Bull", desc: "", price: "3,00 €" },
        { name: "Pfirsichsaft", desc: "Pfirsich-Smoothie.", price: "2,50 €" },
        { name: "Birnen-Ananas-Saft", desc: "Birnen-Ananas-Smoothie.", price: "2,50 €" }
      ]
    },
    {
      category: "Wasser",
      items: [
        { name: "Stilles Wasser (0,5 l Flasche)", desc: "Stilles Wasser in einer Flasche.", price: "1,20 €" },
        { name: "Stilles Wasser (1,5 l Flasche)", desc: "Stilles Wasser in einer Plastikflasche.", price: "2,30 €" },
        { name: "Mineralwasser mit Kohlensäure (0,5 l Flasche)", desc: "Sprudelwasser in einer Glasflasche.", price: "1,30 €" }
      ]
    },
    {
      category: "Bier",
      items: [
        { name: "Dorada Pilsen", desc: "", price: "1,80 €" },
        { name: "Dorada Especial", desc: "", price: "2,30 €" },
        { name: "Dorada Alkoholfrei", desc: "", price: "2,00 €" },
        { name: "Dorada Alkoholfrei mit Zitrone", desc: "", price: "2,30 €" },
        { name: "1906 Estrella Galicia", desc: "", price: "3,00 €" }
      ]
    }
  ]
};

// Unisco bevande al menu principale
Object.keys(drinksData).forEach(lang => {
  if (menuData[lang]) {
    menuData[lang] = menuData[lang].concat(drinksData[lang]);
  }
});

// ===== ABOUT TEXT =====
const aboutData = {
  es: {
    title: "Bienvenidos",
    text: `En El Secreto Prohibido os animamos a descubrir una experiencia gastronómica única e inigualable, donde la tradición y la innovación se dan la mano. Nuestra cocina casera, elaborada con productos frescos y saludables, viaja desde Italia del Norte hasta Canarias, fusionando dos culturas culinarias que despiertan los sentidos y abren las puertas a un universo mágico de sabores.

Cada receta nace de una antigua tradición alpina y se enriquece con el alma canaria, nuestra segunda tierra amada.

Del campo a la mesa, cada ingrediente cuenta una historia. Cada plato es una invitación a descubrir, a disfrutar, a dejarse sorprender.`
  },
  en: {
    title: "Welcome",
    text: `At El Secreto Prohibido we invite you to discover a unique and unforgettable gastronomic experience, where tradition and innovation go hand in hand. Our homemade cuisine, prepared with fresh and healthy products, travels from Northern Italy to the Canary Islands, blending two culinary cultures that awaken the senses and open the doors to a magical universe of flavors.

Each recipe is born from an ancient Alpine tradition and is enriched with the Canarian soul, our second beloved home.

From farm to table, every ingredient tells a story. Every dish is an invitation to explore, to enjoy, and to be surprised.`
  },
  de: {
    title: "Willkommen",
    text: `Im El Secreto Prohibido laden wir euch ein, ein einzigartiges und unvergleichliches kulinarisches Erlebnis zu entdecken, bei dem Tradition und Innovation Hand in Hand gehen. Unsere hausgemachte Küche, zubereitet mit frischen und gesunden Produkten, reist von Norditalien bis zu den Kanarischen Inseln und verbindet zwei kulinarische Kulturen, die die Sinne wecken und die Türen zu einem magischen Universum voller Aromen öffnen.

Jedes Rezept entspringt einer alten alpinen Tradition und wird mit der kanarischen Seele bereichert – unserer zweiten geliebten Heimat.

Vom Feld auf den Tisch erzählt jede Zutat eine Geschichte. Jedes Gericht ist eine Einladung zu entdecken, zu genießen und sich überraschen zu lassen.`
  }
};

// ===== ALLERGENS TEXT =====
const allergensData = {
  es: {
    title: "Alérgenos",
    text: "Información obligatoria: si tienes alergias o intolerancias, consulta a nuestro personal."
  },
  en: {
    title: "Allergens",
    text: "Mandatory information: if you have any allergies or intolerances, please ask our staff."
  },
  de: {
    title: "Allergene",
    text: "Pflichtinformation: Wenn Sie Allergien oder Unverträglichkeiten haben, fragen Sie bitte unser Personal."
  }
};

// ===== HERO TEXT =====
const heroData = {
  es: {
    text: "Cocina con alma. Sabores que no se olvidan.",
    cta: "Ver Menú"
  },
  en: {
    text: "Food with soul. Flavours you’ll never forget.",
    cta: "View Menu"
  },
  de: {
    text: "Küche mit Seele. Aromen, die man nicht vergisst.",
    cta: "Menü ansehen"
  }
};

// ===== CONTACT / BIZUM TEXT =====
const contactData = {
  es: { bizum: "(Reservar por Bizum, 20 euro por persona)" },
  en: { bizum: "(Reserve via Bizum, 20 € per person)" },
  de: { bizum: "(Über Bizum reservieren, 20 € pro Person)" }
};

// ===== RENDER FUNCTIONS =====
function renderMenu(lang = "es") {
  const menuContainer = document.getElementById("menu-container");
  if (!menuContainer) return;

  menuContainer.innerHTML = "";

  menuData[lang].forEach(section => {
    const categoryCard = document.createElement("div");
    categoryCard.className = "menu-card";
    categoryCard.innerHTML = `<h3>${section.category}</h3>`;

    section.items.forEach(item => {
      const itemRow = document.createElement("div");
      itemRow.className = "menu-item";
      itemRow.innerHTML = `
        <h3>
          <span>${item.num ? item.num + ". " : ""}${item.name}</span>
          <span>${item.price}</span>
        </h3>
        <p>${item.desc || ""}</p>
      `;
      categoryCard.appendChild(itemRow);
    });

    menuContainer.appendChild(categoryCard);
  });
}

function renderAllergens(lang = "es") {
  const allergensTitle = document.getElementById("allergens-title");
  const allergensText  = document.getElementById("allergens-text");
  if (!allergensTitle || !allergensText) return;

  allergensTitle.textContent = allergensData[lang].title;
  allergensText.textContent  = allergensData[lang].text;
}

function renderAbout(lang = "es") {
  const aboutTitle = document.getElementById("about-title");
  const aboutText  = document.getElementById("about-text");
  if (!aboutTitle || !aboutText) return;

  aboutTitle.textContent = aboutData[lang].title;
  aboutText.textContent  = aboutData[lang].text;
}

function renderHero(lang = "es") {
  const heroText = document.getElementById("hero-text");
  const heroBtn  = document.getElementById("hero-btn");
  if (!heroText || !heroBtn) return;

  heroText.textContent = heroData[lang].text;
  heroBtn.textContent  = heroData[lang].cta;
}

function renderContact(lang = "es") {
  const bizumText = document.getElementById("bizum-text");
  if (!bizumText) return;
  bizumText.textContent = contactData[lang].bizum;
}

// ===== HERO SLIDESHOW =====
const heroImages = [
  "img/IMG_3779.JPG",
  "img/IMG_3803.JPG",
  "img/IMG_3839.JPG",
  "img/IMG_3868.JPG",
  "img/IMG_3928.JPG",
  "img/IMG_3947.JPG"
];

let currentHeroIndex = 0;

function rotateHeroBackground(){
  const hero = document.querySelector(".hero");
  if (!hero || heroImages.length === 0) return;

  hero.style.backgroundImage = `url('${heroImages[currentHeroIndex]}')`;
  currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
}

// ===== GALLERY AUTO-SCROLL (desktop + mobile) =====
function initGalleryAutoScroll() {
  const slider = document.querySelector(".gallery-slider");
  if (!slider) return;

  let isUserInteracting  = false;
  let interactionTimeout = null;

  function pauseAutoScroll() {
    isUserInteracting = true;
    if (interactionTimeout) clearTimeout(interactionTimeout);
    interactionTimeout = setTimeout(() => {
      isUserInteracting = false;
    }, 3000);
  }

  slider.addEventListener("touchstart", pauseAutoScroll, { passive: true });
  slider.addEventListener("touchmove",  pauseAutoScroll, { passive: true });
  slider.addEventListener("mousedown",  pauseAutoScroll);
  slider.addEventListener("wheel",      pauseAutoScroll, { passive: true });

  const speed = 0.8; // puoi aumentare se lo vuoi ancora più veloce

  function step() {
    const maxScroll = slider.scrollWidth - slider.clientWidth;

    if (!isUserInteracting && maxScroll > 0) {
      if (slider.scrollLeft >= maxScroll - 1) {
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft += speed;
      }
    }

    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

// ===== INIT PAGINA =====
function initPage(){
  renderMenu("es");
  renderAbout("es");
  renderAllergens("es");
  renderHero("es");
  renderContact("es");

  // Cambio lingua
  const langButtons = document.querySelectorAll(".lang-btn");
  langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      langButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const lang = btn.dataset.lang;

      renderMenu(lang);
      renderAbout(lang);
      renderAllergens(lang);
      renderHero(lang);
      renderContact(lang);
    });
  });

  // Mobile nav
  const burger   = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");
  if (burger && navLinks) {
    burger.addEventListener("click", () => navLinks.classList.toggle("open"));
  }

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Hero slideshow
  rotateHeroBackground();
  setInterval(rotateHeroBackground, 4000);

  // Galleria auto-scroll
  initGalleryAutoScroll();
}

// Avvio quando il DOM è pronto
document.addEventListener("DOMContentLoaded", initPage);