// ===== MENU DATA (con numeri) =====
const menuData = {
  es: [
    { category: "Entrantes", items: [
      { num: 1, name: "Peras cremosas", desc: "Peras con queso y nueces.", price: "6,00 €" },
      { num: 2, name: "Bruschetta al verde", desc: "Bruschetta de anchoa, ajo, perejil triturado y aceite de oliva.", price: "8,00 €" },
      { num: 3, name: "Volcán de queso y setas", desc: "Vol-au-vent con salsa de setas y 4 quesos.", price: "9,00 €" },
    ]},

    { category: "Primer plato · Pasta fresca", items: [
      { num: 4, name: "Aroma de bosque", desc: "Tallarines en salsa de setas, boletus, nata y pimienta negra.", price: "13,90 €" },
      { num: 5, name: "Al verde", desc: "Tallarines con pistacho, bacón, nata, leche, pimienta negra, aceite de oliva y queso pecorino.", price: "13,90 €", img: "img/piatto_7.jpeg" },
      { num: 6, name: "Delicado", desc: "Raviolis de ricotta y espinacas con salvia, mantequilla y queso parmesano.", price: "12,90 €", img: "img/pasta_5.jpeg" },
      { num: 7, name: "Ragú", desc: "Raviolis de carne con salsa de tomate, aceite de oliva, carne de vacuno molida, cebolla, zanahoria y vino tinto.", price: "12,90 €", img: "img/pasta_3.jpeg" },
      { num: 8, name: "Sabor de mar y de tierra", desc: "Raviolones de langostinos y calabacín con nata, anchoas, aceite de oliva, ajo y zucchini.", price: "14,00 €" },
      { num: 9, name: "Gorgonzola y nueces", desc: "Raviolis de gorgonzola y nueces con salsa 4 quesos.", price: "12,90 €", img: "img/pasta_1.jpeg" },
      { num: 10, name: "A la Genovesa", desc: "Trofie al pesto verde: albahaca, aceite de oliva, piñones, queso pecorino y ajo.", price: "13,90 €", img: "img/pasta_4.jpeg" },
      { num: 11, name: "Saquitos", desc: "Fagottini de pera y queso con salsa de gorgonzola.", price: "12,90 €", img: "img/pasta_2.jpeg" },
      { num: 12, name: "Emilia", desc: "Tortelloni de carne con salsa boloñesa.", price: "12,90 €" },
    ]},

    { category: "Segundo plato", items: [
      { num: 13, name: "Porqueta", desc: "Porchetta, carne de cerdo enrollada con romero y pimienta negra con papas fritas.", price: "19,90 €" },
      { num: 14, name: "Pollo", desc: "Pechuga de pollo a la plancha o con salsa de soja y champiñones.", price: "9,50 €" },
      { num: 15, name: "Muslo", desc: "Muslo de pollo asado con papas fritas.", price: "10,00 €" },
    ]},

    { category: "Platos vegetarianos", items: [
      { num: 18, name: "Albóndigas", desc: "Albóndigas de berenjena con salsa de tomate.", price: "11,90 €" },
      { num: 19, name: "Parrillada vegetal", desc: "Asado de pimiento rojo, verde, amarillo, berenjena, champiñones y tomate.", price: "13,90 €" },
    ]},

    { category: "Ensaladas", items: [
      { num: 16, name: "De la casa", desc: "Lechuga, tomate, pimiento rojo y atún.", price: "8,00 €" },
      { num: 17, name: "Griega", desc: "Tomate, pepino, cebolla, queso feta y aceitunas negras.", price: "9,00 €" },
    ]},

    { category: "Postres", items: [
      { name: "Postres variados", desc: "", price: "4,50€", img: "img/gelato_2.jpeg" },
    ]},
  ],

  en: [
    { category: "Appetizers", items: [
      { num: 1, name: "Creamy pears", desc: "Pears with cheese and walnuts.", price: "6.00 €" },
      { num: 2, name: "Bruschetta al verde", desc: "Bruschetta of anchovies, garlic, crushed parsley, and olive oil.", price: "8.00 €" },
      { num: 3, name: "Cheese & mushroom volcano", desc: "Vol-au-vent with mushrooms and 4 cheeses.", price: "9.00 €" },
    ]},

    { category: "First Course · Fresh pasta", items: [
      { num: 4, name: "Forest aroma", desc: "Tagliatelle with mushrooms, boletus, cream, and black pepper.", price: "13.90 €" },
      { num: 5, name: "Al verde", desc: "Tagliatelle with pistachio, bacon, cream, milk, black pepper, olive oil, and pecorino cheese.", price: "13.90 €", img: "img/piatto_7.jpeg" },
      { num: 6, name: "Delicate", desc: "Ricotta and spinach ravioli with sage, butter, and parmesan cheese.", price: "12.90 €", img: "img/pasta_5.jpeg" },
      { num: 7, name: "Ragù", desc: "Meat ravioli with tomato sauce, olive oil, ground meat, onion, carrots, and red wine.", price: "12.90 €", img: "img/pasta_3.jpeg" },
      { num: 8, name: "Sea & land flavor", desc: "Langoustine and zucchini ravioloni with cream, anchovies, olive oil, garlic, and zucchini.", price: "14.00 €" },
      { num: 9, name: "Gorgonzola & walnuts", desc: "Gorgonzola and walnut ravioli with 4 cheese sauce.", price: "12.90 €", img: "img/pasta_1.jpeg" },
      { num: 10, name: "Genovese style", desc: "Trofie with green pesto: basil, olive oil, pine nuts, pecorino cheese, and garlic.", price: "13.90 €", img: "img/pasta_4.jpeg" },
      { num: 11, name: "Saquitos", desc: "Pear and cheese fagottini with gorgonzola sauce.", price: "12.90 €", img: "img/pasta_2.jpeg" },
      { num: 12, name: "Emilia", desc: "Tortelloni with meat in Bolognese sauce.", price: "12.90 €" },
    ]},

    { category: "Second Course", items: [
      { num: 13, name: "Porchetta", desc: "Porchetta pork with rosemary and black pepper, served with french fries.", price: "19.90 €" },
      { num: 14, name: "Chicken breast", desc: "Grilled chicken breast with soy sauce and mushrooms.", price: "9.50 €" },
      { num: 15, name: "Chicken thigh", desc: "Roasted chicken thigh with french fries.", price: "10.00 €" },
    ]},

    { category: "Vegetarian dishes", items: [
      { num: 18, name: "Eggplant meatballs", desc: "Eggplant meatballs with tomato sauce.", price: "11.90 €" },
      { num: 19, name: "Vegetable grill", desc: "Grilled red, green and yellow peppers, eggplant, mushrooms, and tomato.", price: "13.90 €" },
    ]},

    { category: "Salads", items: [
      { num: 16, name: "House salad", desc: "Lettuce, tomato, red pepper, and tuna.", price: "8.00 €" },
      { num: 17, name: "Greek salad", desc: "Tomato, cucumber, onion, feta cheese, and black olives.", price: "9.00 €" },
    ]},

    { category: "Desserts", items: [
      { name: "Assorted desserts", desc: "", price: "4,50€", img: "img/gelato_2.jpeg" },
    ]},
  ],

  de: [
    { category: "Vorspeisen", items: [
      { num: 1, name: "Cremige Birnen", desc: "Birnen mit Käse und Walnüssen.", price: "6,00 €" },
      { num: 2, name: "Bruschetta al verde", desc: "Bruschetta mit Sardellen, Knoblauch, zerstoßener Petersilie und Olivenöl.", price: "8,00 €" },
      { num: 3, name: "Käse-Pilz-Vulkan", desc: "Vol-au-vent mit Pilzsauce und 4 Käsesorten.", price: "9,00 €" },
    ]},

    { category: "Erster Gang · Frische Pasta", items: [
      { num: 4, name: "Waldaroma", desc: "Tagliatelle mit Pilzen, Steinpilzen, Sahne und schwarzem Pfeffer.", price: "13,90 €" },
      { num: 5, name: "Al verde", desc: "Tagliatelle mit Pistazie, Speck, Sahne, Milch, schwarzem Pfeffer, Olivenöl und Pecorino.", price: "13,90 €", img: "img/piatto_7.jpeg" },
      { num: 6, name: "Zart", desc: "Ricotta-Spinat-Ravioli mit Salbei, Butter und Parmesan.", price: "12,90 €", img: "img/pasta_5.jpeg" },
      { num: 7, name: "Ragù", desc: "Fleischravioli in Tomatensauce mit Rinderhack, Zwiebel, Karotte und Rotwein.", price: "12,90 €", img: "img/pasta_3.jpeg" },
      { num: 8, name: "Geschmack von Meer und Land", desc: "Ravioloni mit Langostinos und Zucchini in Sahnesauce, Sardellen, Olivenöl, Knoblauch und Zucchini.", price: "14,00 €" },
      { num: 9, name: "Gorgonzola & Walnüsse", desc: "Gorgonzola-Walnuss-Ravioli mit 4-Käse-Sauce.", price: "12,90 €", img: "img/pasta_1.jpeg" },
      { num: 10, name: "Genueser Art", desc: "Trofie mit grünem Pesto: Basilikum, Olivenöl, Pinienkerne, Pecorino und Knoblauch.", price: "13,90 €", img: "img/pasta_4.jpeg" },
      { num: 11, name: "Saquitos", desc: "Birnen-Käse-Fagottini mit Gorgonzola-Sauce.", price: "12,90 €", img: "img/pasta_2.jpeg" },
      { num: 12, name: "Emilia", desc: "Fleisch-Tortelloni mit Bolognese-Sauce.", price: "12,90 €" },
    ]},

    { category: "Hauptgerichte", items: [
      { num: 13, name: "Porchetta", desc: "Gerollter Schweinebraten mit Rosmarin und schwarzem Pfeffer, dazu Pommes frites.", price: "19,90 €" },
      { num: 14, name: "Hähnchenbrust", desc: "Gegrillte Hähnchenbrust mit Sojasauce und Champignons.", price: "9,50 €" },
      { num: 15, name: "Hähnchenschenkel", desc: "Gebratener Hähnchenschenkel mit Pommes frites.", price: "10,00 €" },
    ]},

    { category: "Vegetarische Gerichte", items: [
      { num: 18, name: "Auberginenbällchen", desc: "Auberginenbällchen mit Tomatensauce.", price: "11,90 €" },
      { num: 19, name: "Gemüse vom Grill", desc: "Gegrillte rote, grüne und gelbe Paprika, Aubergine, Champignons und Tomate.", price: "13,90 €" },
    ]},

    { category: "Salate", items: [
      { num: 16, name: "Haussalat", desc: "Salat, Tomate, rote Paprika und Thunfisch.", price: "8,00 €" },
      { num: 17, name: "Griechischer Salat", desc: "Tomate, Gurke, Zwiebel, Feta und schwarze Oliven.", price: "9,00 €" },
    ]},

    { category: "Desserts", items: [
      { name: "Verschiedene Desserts", desc: "", price: "4,50€", img: "img/gelato_2.jpeg" },
    ]},
  ],

  it: [
    { category: "Antipasti", items: [
      { num: 1, name: "Pere cremose", desc: "Pere con formaggio e noci.", price: "6,00 €" },
      { num: 2, name: "Bruschetta al verde", desc: "Bruschetta con acciughe, aglio, prezzemolo tritato e olio d'oliva.", price: "8,00 €" },
      { num: 3, name: "Vulcano di formaggio e funghi", desc: "Vol-au-vent con salsa di funghi e 4 formaggi.", price: "9,00 €" },
    ]},

    { category: "Primo piatto · Pasta fresca", items: [
      { num: 4, name: "Profumo di bosco", desc: "Tagliatelle con funghi, porcini, panna e pepe nero.", price: "13,90 €" },
      { num: 5, name: "Al verde", desc: "Tagliatelle con pistacchio, pancetta, panna, latte, pepe nero, olio d'oliva e pecorino.", price: "13,90 €", img: "img/piatto_7.jpeg" },
      { num: 6, name: "Delicato", desc: "Ravioli di ricotta e spinaci con salvia, burro e parmigiano.", price: "12,90 €", img: "img/pasta_5.jpeg" },
      { num: 7, name: "Ragù", desc: "Ravioli di carne con salsa di pomodoro, olio d'oliva, carne di manzo macinata, cipolla, carota e vino rosso.", price: "12,90 €", img: "img/pasta_3.jpeg" },
      { num: 8, name: "Sapori di mare e di terra", desc: "Ravioloni di mazzancolle e zucchine con panna, acciughe, olio d'oliva, aglio e zucchine.", price: "14,00 €" },
      { num: 9, name: "Gorgonzola e noci", desc: "Ravioli al gorgonzola e noci con salsa ai 4 formaggi.", price: "12,90 €", img: "img/pasta_1.jpeg" },
      { num: 10, name: "Alla genovese", desc: "Trofie al pesto verde: basilico, olio d'oliva, pinoli, pecorino e aglio.", price: "13,90 €", img: "img/pasta_4.jpeg" },
      { num: 11, name: "Fagottini di pere e gorgonzola", desc: "Fagottini di pere e formaggio con salsa al gorgonzola.", price: "12,90 €", img: "img/pasta_2.jpeg" },
      { num: 12, name: "Emilia", desc: "Tortelloni di carne con salsa alla bolognese.", price: "12,90 €" },
    ]},

    { category: "Secondo piatto", items: [
      { num: 13, name: "Porchetta", desc: "Arrosto di maiale arrotolato con rosmarino e pepe nero, servito con patatine fritte.", price: "19,90 €" },
      { num: 14, name: "Petto di pollo", desc: "Petto di pollo alla griglia con salsa di soia e funghi.", price: "9,50 €" },
      { num: 15, name: "Coscia di pollo", desc: "Coscia di pollo arrosto con patatine fritte.", price: "10,00 €" },
    ]},

    { category: "Piatti vegetariani", items: [
      { num: 18, name: "Polpette di melanzane", desc: "Polpette di melanzane con salsa di pomodoro.", price: "11,90 €" },
      { num: 19, name: "Grigliata di verdure", desc: "Peperone rosso, verde e giallo, melanzane, funghi e pomodoro alla griglia.", price: "13,90 €" },
    ]},

    { category: "Insalate", items: [
      { num: 16, name: "Della casa", desc: "Lattuga, pomodoro, peperone rosso e tonno.", price: "8,00 €" },
      { num: 17, name: "Greca", desc: "Pomodoro, cetriolo, cipolla, feta e olive nere.", price: "9,00 €" },
    ]},

    { category: "Dolci", items: [
      { name: "Dolci assortiti", desc: "", price: "4,50€", img: "img/gelato_2.jpeg" },
    ]},
  ],

  fr: [
    { category: "Entrées", items: [
      { num: 1, name: "Poires crémeuses", desc: "Poires avec fromage et noix.", price: "6,00 €" },
      { num: 2, name: "Bruschetta al verde", desc: "Bruschetta aux anchois, ail, persil haché et huile d'olive.", price: "8,00 €" },
      { num: 3, name: "Volcan de fromage et champignons", desc: "Vol-au-vent avec sauce aux champignons et 4 fromages.", price: "9,00 €" },
    ]},

    { category: "Premier plat · Pâtes fraîches", items: [
      { num: 4, name: "Arôme de forêt", desc: "Tagliatelles aux champignons, cèpes, crème et poivre noir.", price: "13,90 €" },
      { num: 5, name: "Al verde", desc: "Tagliatelles au pistache, bacon, crème, lait, poivre noir, huile d'olive et pecorino.", price: "13,90 €", img: "img/piatto_7.jpeg" },
      { num: 6, name: "Délicat", desc: "Raviolis ricotta-épinards avec sauge, beurre et parmesan.", price: "12,90 €", img: "img/pasta_5.jpeg" },
      { num: 7, name: "Ragù", desc: "Raviolis de viande avec sauce tomate, huile d'olive, viande hachée, oignon, carotte et vin rouge.", price: "12,90 €", img: "img/pasta_3.jpeg" },
      { num: 8, name: "Saveurs de mer et de terre", desc: "Ravioloni aux langoustines et courgettes avec crème, anchois, huile d'olive, ail et courgettes.", price: "14,00 €" },
      { num: 9, name: "Gorgonzola et noix", desc: "Raviolis au gorgonzola et noix avec sauce aux 4 fromages.", price: "12,90 €", img: "img/pasta_1.jpeg" },
      { num: 10, name: "Façon génoise", desc: "Trofie au pesto vert : basilic, huile d'olive, pignons, pecorino et ail.", price: "13,90 €", img: "img/pasta_4.jpeg" },
      { num: 11, name: "Fagottini poire et gorgonzola", desc: "Fagottini de poire et fromage avec sauce au gorgonzola.", price: "12,90 €", img: "img/pasta_2.jpeg" },
      { num: 12, name: "Emilia", desc: "Tortelloni de viande avec sauce bolognaise.", price: "12,90 €" },
    ]},

    { category: "Plats principaux", items: [
      { num: 13, name: "Porchetta", desc: "Rôti de porc roulé au romarin et poivre noir, servi avec frites.", price: "19,90 €" },
      { num: 14, name: "Blanc de poulet", desc: "Blanc de poulet grillé avec sauce soja et champignons.", price: "9,50 €" },
      { num: 15, name: "Cuisse de poulet", desc: "Cuisse de poulet rôtie avec frites.", price: "10,00 €" },
    ]},

    { category: "Plats végétariens", items: [
      { num: 18, name: "Boulettes d'aubergine", desc: "Boulettes d'aubergine avec sauce tomate.", price: "11,90 €" },
      { num: 19, name: "Grillade de légumes", desc: "Poivrons rouges, verts et jaunes, aubergine, champignons et tomate grillés.", price: "13,90 €" },
    ]},

    { category: "Salades", items: [
      { num: 16, name: "Salade de la maison", desc: "Laitue, tomate, poivron rouge et thon.", price: "8,00 €" },
      { num: 17, name: "Salade grecque", desc: "Tomate, concombre, oignon, feta et olives noires.", price: "9,00 €" },
    ]},

    { category: "Desserts", items: [
      { name: "Desserts variés", desc: "", price: "4,50€", img: "img/gelato_2.jpeg" },
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
      category: "Bier",
      items: [
        { name: "Dorada Pilsen", desc: "", price: "1,80 €" },
        { name: "Dorada Especial", desc: "", price: "2,30 €" },
        { name: "Dorada Alkoholfrei", desc: "", price: "2,00 €" },
        { name: "Dorada Alkoholfrei mit Zitrone", desc: "", price: "2,30 €" },
        { name: "1906 Estrella Galicia", desc: "", price: "3,00 €" }
      ]
    }
  ],

  it: [
    {
      category: "Vini · Bottiglia (rossi)",
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
      category: "Vini · Bottiglia (bianchi)",
      items: [
        { name: "Laundum Chardonnay Organic", desc: "", price: "19,90 €" },
        { name: "Testamento Blanco medaglia d'oro", desc: "", price: "22,00 €" }
      ]
    },
    {
      category: "Vini · Bottiglia (bianchi fruttati)",
      items: [
        { name: "Mi Isla Blanco Afrutado 2024", desc: "", price: "19,90 €" }
      ]
    },
    {
      category: "Vino della casa",
      items: [
        { name: "Vino della casa (bicchiere)", desc: "", price: "2,50 €" },
        { name: "Vino della casa (1/4 l)", desc: "", price: "3,20 €" },
        { name: "Vino della casa (1/2 l)", desc: "", price: "6,00 €" },
        { name: "Vino della casa (1 l)", desc: "", price: "11,50 €" }
      ]
    },
    {
      category: "Bibite",
      items: [
        { name: "Coca-Cola", desc: "", price: "2,50 €" },
        { name: "Coca-Cola Zero", desc: "", price: "2,50 €" },
        { name: "Fanta Arancia", desc: "", price: "2,50 €" },
        { name: "Fanta Limone", desc: "", price: "2,50 €" },
        { name: "Schweppes Tonica", desc: "", price: "2,50 €" },
        { name: "7Up", desc: "", price: "2,50 €" },
        { name: "Nestea Limone", desc: "", price: "2,80 €" },
        { name: "Nestea Pesca", desc: "", price: "2,80 €" },
        { name: "Nestea Mango-Ananas", desc: "", price: "2,80 €" },
        { name: "Appletiser", desc: "", price: "2,80 €" },
        { name: "Aquarius Arancia", desc: "", price: "2,80 €" },
        { name: "Red Bull", desc: "", price: "3,00 €" },
        { name: "Succo di pesca", desc: "Frullato di pesca.", price: "2,50 €" },
        { name: "Succo pera-ananas", desc: "Frullato di pera e ananas.", price: "2,50 €" }
      ]
    },
    {
      category: "Birra",
      items: [
        { name: "Dorada Pilsen", desc: "", price: "1,80 €" },
        { name: "Dorada Especial", desc: "", price: "2,30 €" },
        { name: "Dorada Analcolica", desc: "", price: "2,00 €" },
        { name: "Dorada Analcolica al Limone", desc: "", price: "2,30 €" },
        { name: "1906 Estrella Galicia", desc: "", price: "3,00 €" }
      ]
    }
  ],

  fr: [
    {
      category: "Vins · Bouteille (rouges)",
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
      category: "Vins · Bouteille (blancs)",
      items: [
        { name: "Laundum Chardonnay Organic", desc: "", price: "19,90 €" },
        { name: "Testamento Blanco médaille d'or", desc: "", price: "22,00 €" }
      ]
    },
    {
      category: "Vins · Bouteille (blancs fruités)",
      items: [
        { name: "Mi Isla Blanco Afrutado 2024", desc: "", price: "19,90 €" }
      ]
    },
    {
      category: "Vin de la maison",
      items: [
        { name: "Vin de la maison (verre)", desc: "", price: "2,50 €" },
        { name: "Vin de la maison (1/4 l)", desc: "", price: "3,20 €" },
        { name: "Vin de la maison (1/2 l)", desc: "", price: "6,00 €" },
        { name: "Vin de la maison (1 l)", desc: "", price: "11,50 €" }
      ]
    },
    {
      category: "Boissons sans alcool",
      items: [
        { name: "Coca-Cola", desc: "", price: "2,50 €" },
        { name: "Coca-Cola Zero", desc: "", price: "2,50 €" },
        { name: "Fanta Orange", desc: "", price: "2,50 €" },
        { name: "Fanta Citron", desc: "", price: "2,50 €" },
        { name: "Schweppes Tonic", desc: "", price: "2,50 €" },
        { name: "7Up", desc: "", price: "2,50 €" },
        { name: "Nestea Citron", desc: "", price: "2,80 €" },
        { name: "Nestea Pêche", desc: "", price: "2,80 €" },
        { name: "Nestea Mangue-Ananas", desc: "", price: "2,80 €" },
        { name: "Appletiser", desc: "", price: "2,80 €" },
        { name: "Aquarius Orange", desc: "", price: "2,80 €" },
        { name: "Red Bull", desc: "", price: "3,00 €" },
        { name: "Jus de pêche", desc: "Smoothie à la pêche.", price: "2,50 €" },
        { name: "Jus poire-ananas", desc: "Smoothie poire-ananas.", price: "2,50 €" }
      ]
    },
    {
      category: "Bière",
      items: [
        { name: "Dorada Pilsen", desc: "", price: "1,80 €" },
        { name: "Dorada Especial", desc: "", price: "2,30 €" },
        { name: "Dorada Sans Alcool", desc: "", price: "2,00 €" },
        { name: "Dorada Sans Alcool au Citron", desc: "", price: "2,30 €" },
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
  },
  it: {
    title: "Benvenuti",
    text: `Al El Secreto Prohibido vi invitiamo a scoprire un'esperienza gastronomica unica, dove tradizione e innovazione vanno di pari passo. La nostra cucina casalinga, preparata con prodotti freschi e genuini, viaggia dal Nord Italia alle Isole Canarie, fondendo due culture culinarie che risvegliano i sensi e aprono le porte a un universo magico di sapori.

Ogni ricetta nasce da un'antica tradizione alpina e si arricchisce dell'anima canaria, la nostra seconda terra amata.

Dalla terra alla tavola, ogni ingrediente racconta una storia. Ogni piatto è un invito a scoprire, godere e lasciarsi sorprendere.`
  },
  fr: {
    title: "Bienvenue",
    text: `Au El Secreto Prohibido, nous vous invitons à découvrir une expérience gastronomique unique, où tradition et innovation vont de pair. Notre cuisine maison, préparée avec des produits frais et sains, voyage du nord de l’Italie jusqu’aux îles Canaries, en fusionnant deux cultures culinaires qui éveillent les sens et ouvrent les portes à un univers magique de saveurs.

Chaque recette est née d’une ancienne tradition alpine et s’enrichit de l’âme canarienne, notre deuxième terre adoptive.

Du champ à la table, chaque ingrédient raconte une histoire. Chaque plat est une invitation à découvrir, à savourer et à se laisser surprendre.`
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
  },
   it: {
    title: "Allergeni",
    text: "Informazione obbligatoria: se hai allergie o intolleranze, chiedi al nostro personale."
  },
  fr: {
    title: "Allergènes",
    text: "Information obligatoire : si vous avez des allergies ou intolérances, veuillez consulter notre personnel."
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
  },
  it: {
    text: "Cucina con anima. Sapori che non si dimenticano.",
    cta: "Vedi il menù"
  },
  fr: {
    text: "Cuisine avec âme. Des saveurs inoubliables.",
    cta: "Voir le menu"
  },
};

// ===== CONTACT / BIZUM TEXT =====
const contactData = {
  es: {
    bizum: "(Reservar llamando o por WhatsApp al número indicado)",
    wednesday: "Miércoles: cerrado"
  },
  en: {
    bizum: "(Book by calling or via WhatsApp at the number below)",
    wednesday: "Wednesday: closed"
  },
  de: {
    bizum: "(Reservierung telefonisch oder per WhatsApp unter der untenstehenden Nummer)",
    wednesday: "Mittwoch: geschlossen"
  },
  it: {
    bizum: "(Prenotare chiamando o via WhatsApp al numero indicato)",
    wednesday: "Mercoledì: chiuso"
  },
  fr: {
    bizum: "(Réserver en appelant ou par WhatsApp au numéro indiqué)",
    wednesday: "Mercredi : fermé"
  }
};

// ===== SPECIAL MENU · NOCHEBUENA =====
const nocheBuenaData = {
  es: {
    title: "Menú Nochebuena",
    price: "69,00 €",
    body: `
      <div class="special-menu-block">
        <h3>Entrantes</h3>
        <ul>
          <li>Vol-au-vent de queso y setas</li>
          <li>Grissini con jamón serrano curado</li>
        </ul>
      </div>
      <div class="special-menu-block">
        <h3>Primer plato</h3>
        <ul>
          <li>Ravioli de espinaca con salsa de salvia y mantequilla</li>
        </ul>
      </div>
      <div class="special-menu-block">
        <h3>Segundo plato</h3>
        <ul>
          <li>Polenta de harina de maíz con longaniza en salsa de tomate</li>
        </ul>
      </div>
      <div class="special-menu-block">
        <h3>Postre</h3>
        <ul>
          <li>1 Tarta Santiago</li>
        </ul>
      </div>
      <div class="special-menu-block">
        <h3>Bebida</h3>
        <ul>
          <li>Vino y café</li>
        </ul>
      </div>
    `,
    note: "IMPORTANTE: Reservar por WhatsApp al número 697 218 364 con una reserva de 20 € por persona."
  },

  en: {
    title: "Christmas Eve Menu",
    price: "€69.00",
    body: `
      <div class="special-menu-block">
        <h3>Starters</h3>
        <ul>
          <li>Cheese and mushroom vol-au-vent</li>
          <li>Grissini with cured Serrano ham</li>
        </ul>
      </div>
      <div class="special-menu-block">
        <h3>First course</h3>
        <ul>
          <li>Spinach ravioli with sage and butter sauce</li>
        </ul>
      </div>
      <div class="special-menu-block">
        <h3>Second course</h3>
        <ul>
          <li>Corn polenta with longaniza sausage in tomato sauce</li>
        </ul>
      </div>
      <div class="special-menu-block">
        <h3>Dessert</h3>
        <ul>
          <li>1 slice of Tarta de Santiago</li>
        </ul>
      </div>
      <div class="special-menu-block">
        <h3>Drinks</h3>
        <ul>
          <li>Wine and coffee</li>
        </ul>
      </div>
    `,
    note: "IMPORTANT: Book via WhatsApp at 697 218 364 with a €20 deposit per person."
  },

  de: {
    title: "Heiligabend-Menü",
    price: "69,00 €",
    body: `
      <div class="special-menu-block">
        <h3>Vorspeisen</h3>
        <ul>
          <li>Blätterteigküchlein mit Käse und Pilzen (Vol-au-vent)</li>
          <li>Grissini mit gereiftem Serrano-Schinken</li>
        </ul>
      </div>
      <div class="special-menu-block">
        <h3>Erster Gang</h3>
        <ul>
          <li>Spinat-Ravioli mit Salbei-Butter-Sauce</li>
        </ul>
      </div>
      <div class="special-menu-block">
        <h3>Zweiter Gang</h3>
        <ul>
          <li>Maispolenta mit Longaniza-Wurst in Tomatensauce</li>
        </ul>
      </div>
      <div class="special-menu-block">
        <h3>Dessert</h3>
        <ul>
          <li>1 Stück Tarta de Santiago</li>
        </ul>
      </div>
      <div class="special-menu-block">
        <h3>Getränke</h3>
        <ul>
          <li>Wein und Kaffee</li>
        </ul>
      </div>
    `,
    note: "WICHTIG: Reservierung per WhatsApp unter 697 218 364 mit 20 € Anzahlung pro Person."
  }
};

// ===== SPECIAL MENU · NOCHEVIEJA =====
const nocheViejaData = {
  es: {
    title: "Menú NocheVieja",
    price: "89,00 €",
    body: `
      <div class="special-menu-block ny-block">
        <h3>Entrantes</h3>
        <ul>
          <li>Tulipa con salsa tonnata</li>
          <li>Tosta de burrata con aguacate, anchoas, pistacho y tomate</li>
        </ul>
      </div>
      <div class="special-menu-block ny-block">
        <h3>Primer plato</h3>
        <ul>
          <li>Trofie (pasta fresca) a la Genovesa con pesto verde</li>
        </ul>
      </div>
      <div class="special-menu-block ny-block">
        <h3>Segundo plato</h3>
        <ul>
          <li>Cotechino de cerdo con lentejas</li>
        </ul>
      </div>
      <div class="special-menu-block ny-block">
        <h3>Postres</h3>
        <ul>
          <li>Tarta de zanahoria</li>
        </ul>
      </div>
      <div class="special-menu-block ny-block">
        <h3>Bebidas · Vino · Café</h3>
        <ul>
          <li>1 botella de Cava Brut (uva blanca)</li>
        </ul>
      </div>
    `,
    note:
      "Reservar por Bizum al 621 247 182 (20 € por persona) y por más información al 697 218 364."
  },

  en: {
    title: "New Year's Eve Menu",
    price: "€79.00",
    body: `
      <div class="special-menu-block ny-block">
        <h3>Starters</h3>
        <ul>
          <li>Tulip pastry with tonnato sauce</li>
          <li>Burrata toast with avocado, anchovies, pistachio and tomato</li>
        </ul>
      </div>
      <div class="special-menu-block ny-block">
        <h3>First course</h3>
        <ul>
          <li>Fresh trofie pasta Genovese style with green pesto</li>
        </ul>
      </div>
      <div class="special-menu-block ny-block">
        <h3>Second course</h3>
        <ul>
          <li>Pork cotechino with lentils</li>
        </ul>
      </div>
      <div class="special-menu-block ny-block">
        <h3>Dessert</h3>
        <ul>
          <li>Carrot cake</li>
        </ul>
      </div>
      <div class="special-menu-block ny-block">
        <h3>Drinks · Wine · Coffee</h3>
        <ul>
          <li>1 bottle of Cava Brut (white grape)</li>
        </ul>
      </div>
    `,
    note:
      "Reserve via Bizum at +34 621 247 182 (€20 per person) and for more information call +34 697 218 364."
  },

  de: {
    title: "Silvester-Menü",
    price: "79,00 €",
    body: `
      <div class="special-menu-block ny-block">
        <h3>Vorspeisen</h3>
        <ul>
          <li>Blätterteig-Tulpe mit Thunfischsauce (Tonnato)</li>
          <li>Toast mit Burrata, Avocado, Sardellen, Pistazien und Tomate</li>
        </ul>
      </div>
      <div class="special-menu-block ny-block">
        <h3>Erster Gang</h3>
        <ul>
          <li>Frische Trofie-Pasta Genueser Art mit grünem Pesto</li>
        </ul>
      </div>
      <div class="special-menu-block ny-block">
        <h3>Zweiter Gang</h3>
        <ul>
          <li>Schweine-Cotechino mit Linsen</li>
        </ul>
      </div>
      <div class="special-menu-block ny-block">
        <h3>Dessert</h3>
        <ul>
          <li>Karottenkuchen</li>
        </ul>
      </div>
      <div class="special-menu-block ny-block">
        <h3>Getränke · Wein · Kaffee</h3>
        <ul>
          <li>1 Flasche Cava Brut (weiße Traube)</li>
        </ul>
      </div>
    `,
    note:
      "Reservierung per Bizum unter +34 621 247 182 (20 € pro Person) und für weitere Informationen +34 697 218 364."
  }
};

// ===== RENDER FUNCTIONS =====
function renderMenu(lang = "es") {
  const menuContainer = document.getElementById("menu-container");
  if (!menuContainer) return;

  // Detach dei due blocchi pizze (info + galleria) prima dello svuotamento,
  // così sopravvivono al re-render e li possiamo riposizionare in mezzo al menù
  const pinsaInfo    = document.getElementById("pinsa-pizza-info");
  const pizzaGallery = document.getElementById("pizza-menu");
  if (pinsaInfo    && pinsaInfo.parentNode)    pinsaInfo.parentNode.removeChild(pinsaInfo);
  if (pizzaGallery && pizzaGallery.parentNode) pizzaGallery.parentNode.removeChild(pizzaGallery);

  menuContainer.innerHTML = "";

  // ---- NAV CATEGORIE ----
  const nav = document.createElement("nav");
  nav.className = "menu-nav";
  nav.setAttribute("aria-label", "Categorías del menú");

  menuData[lang].forEach((section, idx) => {
    const btn = document.createElement("button");
    btn.className = "menu-nav-btn";
    btn.type = "button";
    btn.dataset.target = "menu-cat-" + idx;
    // Su mobile (e dovunque) il testo del bottone è la versione breve se mappata,
    // altrimenti il nome completo della categoria.
    btn.textContent = categoryNavLabel[section.category] || section.category;
    nav.appendChild(btn);

    // Subito dopo "Segundo plato" (indice 2) inserisco il pulsante Pizza & Pinsa
    if (idx === 2) {
      const pizzaBtn = document.createElement("button");
      pizzaBtn.className = "menu-nav-btn menu-nav-btn--special";
      pizzaBtn.type = "button";
      pizzaBtn.dataset.target = "pizza-menu";
      pizzaBtn.textContent = pizzaNavLabel[lang] || pizzaNavLabel.es;
      nav.appendChild(pizzaBtn);
    }
  });

  menuContainer.appendChild(nav);

  // ---- CATEGORIE ----
  menuData[lang].forEach((section, idx) => {
    const categoryCard = document.createElement("div");
    categoryCard.className = "menu-card";
    categoryCard.id = "menu-cat-" + idx;
    categoryCard.innerHTML = `<h3 class="menu-card-title">${section.category}</h3>`;

    section.items.forEach(item => {
      const itemRow = document.createElement("div");
      itemRow.className = "menu-item" + (item.img ? " menu-item--with-img" : "");

      const imgHTML = item.img
        ? `<img src="${item.img}" alt="${item.name}" class="menu-item-img" loading="lazy">`
        : "";

      itemRow.innerHTML = `
        ${imgHTML}
        <div class="menu-item-body">
          <h3>
            <span class="menu-item-name">${item.num ? item.num + ". " : ""}${item.name}</span>
            <span class="menu-item-price">${item.price}</span>
          </h3>
          <p>${item.desc || ""}</p>
        </div>
      `;
      categoryCard.appendChild(itemRow);
    });

    menuContainer.appendChild(categoryCard);
  });

  // ---- INSERIMENTO BLOCCHI PIZZE TRA SECONDI E INSALATE ----
  // L'indice 2 corrisponde sempre alla categoria "Secondi/Segundo/Hauptgerichte/Secondo/Plats principaux"
  const PIZZA_BLOCK_AFTER = 2;
  const anchorCategory = document.getElementById("menu-cat-" + PIZZA_BLOCK_AFTER);
  if (anchorCategory && pinsaInfo && pizzaGallery) {
    anchorCategory.insertAdjacentElement("afterend", pinsaInfo);
    pinsaInfo.insertAdjacentElement("afterend", pizzaGallery);
  } else {
    // fallback: in coda al container (se per qualche motivo non trovo l'ancora)
    if (pinsaInfo)    menuContainer.appendChild(pinsaInfo);
    if (pizzaGallery) menuContainer.appendChild(pizzaGallery);
  }
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
  const bizumText    = document.getElementById("bizum-text");
  const scheduleText = document.getElementById("schedule-text");
  const data         = contactData[lang] || contactData.es;

  // Testo Bizum / prenotazioni
  if (bizumText) {
    bizumText.textContent = data.bizum || "";
  }

  // Lasciamo vuota questa riga (non la usiamo)
  if (scheduleText) {
    scheduleText.textContent = "";
  }

  // 🔁 Traduzione di "Miércoles: cerrado" mantenendo l'HTML identico
  const horarioCard = document.querySelector('#contact .contact-grid .contact-card:nth-of-type(2)');
  if (horarioCard) {
    const wednesdayStrong = horarioCard.querySelector('p:last-of-type strong');
    if (wednesdayStrong) {
      wednesdayStrong.textContent = data.wednesday || contactData.es.wednesday;
    }
  }
}

function renderNocheBuena(lang = "es") {
  const titleEl = document.getElementById("nochebuena-title");
  const bodyEl  = document.getElementById("nochebuena-body");
  const noteEl  = document.getElementById("nochebuena-note");
  const priceEl = document.getElementById("nochebuena-price");

  if (!titleEl || !bodyEl || !noteEl || !priceEl) return;

  const data = nocheBuenaData[lang] || nocheBuenaData.es;
  titleEl.textContent = data.title;
  bodyEl.innerHTML    = data.body;
  noteEl.textContent  = data.note;
  priceEl.textContent = data.price;
}

function renderNocheVieja(lang = "es") {
  const titleEl = document.getElementById("nochevieja-title");
  const bodyEl  = document.getElementById("nochevieja-body");
  const noteEl  = document.getElementById("nochevieja-note");
  const priceEl = document.getElementById("nochevieja-price");

  if (!titleEl || !bodyEl || !noteEl || !priceEl) return;

  const data = nocheViejaData[lang] || nocheViejaData.es;
  titleEl.textContent = data.title;
  bodyEl.innerHTML    = data.body;
  noteEl.textContent  = data.note;
  priceEl.textContent = data.price;
}

// ===== INFO "¿PINSA O PIZZA?" =====
const pinsaPizzaInfoData = {
  es: {
    title: "¿Pinsa o Pizza?",
    body: "La pinsa romana es una receta mucho más antigua que la pizza napolitana: ya la preparaban los antiguos romanos con ingredientes muy sencillos, y se menciona incluso en la Eneida de Virgilio. La principal diferencia está en la masa: para la pinsa usamos una mezcla de harinas y una hidratación más alta, lo que da una base crujiente por fuera y suave por dentro."
  },
  en: {
    title: "Pinsa or Pizza?",
    body: "Roman pinsa is a much older recipe than Neapolitan pizza: the ancient Romans were already making it with very simple ingredients, and it is even mentioned in Virgil's Aeneid. The main difference lies in the dough: for pinsa we use a blend of flours and a higher hydration, which gives a base that is crispy outside and soft inside."
  },
  de: {
    title: "Pinsa oder Pizza?",
    body: "Die römische Pinsa ist ein viel älteres Rezept als die neapolitanische Pizza: schon die alten Römer bereiteten sie mit sehr einfachen Zutaten zu, und sie wird sogar in Vergils Aeneis erwähnt. Der Hauptunterschied liegt im Teig: für die Pinsa verwenden wir eine Mehlmischung und eine höhere Hydratation, was einen außen knusprigen und innen weichen Boden ergibt."
  },
  it: {
    title: "Pinsa o Pizza?",
    body: "La pinsa romana è una ricetta molto più antica della pizza napoletana: la preparavano già gli antichi Romani con ingredienti molto semplici, e ne parla persino l'Eneide di Virgilio. La differenza principale sta nell'impasto: per la pinsa usiamo una miscela di farine e un'idratazione più alta, così la base risulta croccante fuori e morbida dentro."
  },
  fr: {
    title: "Pinsa ou Pizza ?",
    body: "La pinsa romaine est une recette bien plus ancienne que la pizza napolitaine : les Romains la préparaient déjà avec des ingrédients très simples, et elle est même évoquée dans l'Énéide de Virgile. La principale différence se trouve dans la pâte : pour la pinsa nous utilisons un mélange de farines et une hydratation plus élevée, ce qui donne une base croustillante à l'extérieur et moelleuse à l'intérieur."
  }
};

function renderPinsaPizzaInfo(lang = "es") {
  const titleEl = document.getElementById("pinsa-pizza-info-title");
  const bodyEl  = document.getElementById("pinsa-pizza-info-body");
  if (!titleEl || !bodyEl) return;
  const data = pinsaPizzaInfoData[lang] || pinsaPizzaInfoData.es;
  titleEl.textContent = data.title;
  bodyEl.textContent  = data.body;
}

// Etichetta del pulsante "Pizza & Pinsa" nella nav del menù
const pizzaNavLabel = {
  es: "Pizza & Pinsa",
  en: "Pizza & Pinsa",
  de: "Pizza & Pinsa",
  it: "Pizza & Pinsa",
  fr: "Pizza & Pinsa"
};

// Mapping: categorie con nome lungo → etichetta breve per i pulsanti
// della nav (solo nei pulsanti, NON nei titoli delle sezioni dentro il menù).
// Se la categoria non è in questo mapping, viene usato il nome originale.
const categoryNavLabel = {
  // ES
  "Primer plato · Pasta fresca":         "Primer plato",
  "Platos vegetarianos":                 "Vegetariano",
  "Vinos · Botella (tinto)":             "Vino tinto",
  "Vinos · Botella (blanco)":            "Vino blanco",
  "Vinos · Botella (blanco afrutado)":   "Vino afrutado",
  "Vino de la casa":                     "Vino casa",
  // EN
  "First Course · Fresh pasta":          "First course",
  "Vegetarian dishes":                   "Vegetarian",
  "Red wine · Bottle":                   "Red wine",
  "White wine · Bottle":                 "White wine",
  "Fruity white wine · Bottle":          "Fruity wine",
  "Soft drinks":                         "Soft drinks",
  // DE
  "Erster Gang · Frische Pasta":         "Erster Gang",
  "Vegetarische Gerichte":               "Vegetarisch",
  "Rotwein · Flasche":                   "Rotwein",
  "Weißwein · Flasche":                  "Weißwein",
  "Fruchtiger Weißwein · Flasche":       "Fruchtwein",
  "Erfrischungsgetränke":                "Erfrischung",
  // IT
  "Primo piatto · Pasta fresca":         "Primo piatto",
  "Piatti vegetariani":                  "Vegetariano",
  "Vini · Bottiglia (rossi)":            "Vino rosso",
  "Vini · Bottiglia (bianchi)":          "Vino bianco",
  "Vini · Bottiglia (bianchi fruttati)": "Vino fruttato",
  "Vino della casa":                     "Vino casa",
  // FR
  "Premier plat · Pâtes fraîches":       "Premier plat",
  "Plats végétariens":                   "Végétarien",
  "Vins · Bouteille (rouges)":           "Vin rouge",
  "Vins · Bouteille (blancs)":           "Vin blanc",
  "Vins · Bouteille (blancs fruités)":   "Vin fruité",
  "Vin de la maison":                    "Vin maison",
  "Boissons sans alcool":                "Boissons"
};

// ===== MENU PIZZE (via foto) =====
// Le locandine fotografiche sono solo in spagnolo (sono la "vetrina grafica" della carta).
// La traduzione degli ingredienti viene mostrata come elenco testuale sotto le foto
// tramite pizzaMenuListData + renderPizzaMenuList.
const pizzaMenuImages = {
  es: { cover: "img/pizza_1.jpg", pinsa: "img/pizza_2.jpg", pizza: "img/pizza_3.jpg" },
  en: { cover: "img/pizza_1.jpg", pinsa: "img/pizza_2.jpg", pizza: "img/pizza_3.jpg" },
  de: { cover: "img/pizza_1.jpg", pinsa: "img/pizza_2.jpg", pizza: "img/pizza_3.jpg" },
  it: { cover: "img/pizza_1.jpg", pinsa: "img/pizza_2.jpg", pizza: "img/pizza_3.jpg" },
  fr: { cover: "img/pizza_1.jpg", pinsa: "img/pizza_2.jpg", pizza: "img/pizza_3.jpg" }
};

const pizzaMenuTitles = {
  es: "Pizza & Pinsa",
  en: "Pizza & Pinsa",
  de: "Pizza & Pinsa",
  it: "Pizza & Pinsa",
  fr: "Pizza & Pinsa"
};

// ===== ELENCO TESTUALE TRADOTTO sotto le foto (legenda multilingua) =====
const pizzaMenuListData = {
  es: {
    pinsaTitle: "Pinsa",
    pizzaTitle: "Pizza",
    extra: "Suplemento ingrediente extra: +1,50 €",
    pinsa: [
      { code: "A", name: "Atún",                       desc: "Tomate, mozzarella, atún y alcachofa.",                                                       price: "10,90 €" },
      { code: "B", name: "Vegetariana",                desc: "Tomate, mozzarella, pimiento rojo asado, calabacín y champiñones.",                          price: "10,90 €" },
      { code: "C", name: "La Porchetta ✨ Novedad",    desc: "Tomate, mozzarella y porchetta de cerdo especiada con romero y pimienta negra.",             price: "11,90 €" },
      { code: "D", name: "Sobrasada ✨ Novedad",       desc: "Tomate, mozzarella y sobrasada (chorizo untable).",                                           price: "9,00 €"  },
      { code: "E", name: "Serrano",                    desc: "Tomate, mozzarella, jamón serrano curado y escamas de parmesano.",                           price: "11,90 €" },
      { code: "F", name: "Hawaiana",                   desc: "Tomate, mozzarella, piña, maíz, pistacho y cebolla caramelizada.",                           price: "10,90 €" }
    ],
    pizza: [
      { code: "G", name: "Margarita",                  desc: "Tomate y mozzarella.",                                                                       price: "6,90 €"  },
      { code: "H", name: "Silvestre York",             desc: "Tomate, mozzarella, jamón cocido y champiñones.",                                             price: "9,00 €"  },
      { code: "L", name: "Diablo",                     desc: "Tomate, mozzarella y chorizo picante.",                                                       price: "9,00 €"  },
      { code: "M", name: "Vivaldi",                    desc: "Tomate, mozzarella, jamón cocido, champiñones, alcachofa y aceituna negra.",                 price: "9,95 €"  },
      { code: "N", name: "BBQ",                        desc: "Tomate, mozzarella, pechuga de pollo, salsa barbacoa y cebolla roja.",                       price: "9,50 €"  },
      { code: "P", name: "Cuatro Quesos",              desc: "Tomate, mozzarella, emmental, provolone y queso azul.",                                      price: "9,00 €"  },
      { code: "R", name: "El Secreto",                 desc: "Tomate, mozzarella, queso de cabra, manzana y cebolla caramelizada.",                        price: "9,00 €"  }
    ]
  },
  en: {
    pinsaTitle: "Pinsa",
    pizzaTitle: "Pizza",
    extra: "Extra topping: +1.50 €",
    pinsa: [
      { code: "A", name: "Tuna",                       desc: "Tomato, mozzarella, tuna and artichoke.",                                                    price: "10.90 €" },
      { code: "B", name: "Vegetarian",                 desc: "Tomato, mozzarella, roasted red pepper, courgette and mushrooms.",                           price: "10.90 €" },
      { code: "C", name: "La Porchetta ✨ New",        desc: "Tomato, mozzarella and spiced pork porchetta with rosemary and black pepper.",               price: "11.90 €" },
      { code: "D", name: "Sobrasada ✨ New",           desc: "Tomato, mozzarella and sobrasada (spreadable chorizo).",                                     price: "9.00 €"  },
      { code: "E", name: "Serrano",                    desc: "Tomato, mozzarella, cured Serrano ham and Parmesan flakes.",                                 price: "11.90 €" },
      { code: "F", name: "Hawaiian",                   desc: "Tomato, mozzarella, pineapple, sweetcorn, pistachio and caramelised onion.",                 price: "10.90 €" }
    ],
    pizza: [
      { code: "G", name: "Margherita",                 desc: "Tomato and mozzarella.",                                                                     price: "6.90 €"  },
      { code: "H", name: "Silvestre York",             desc: "Tomato, mozzarella, cooked ham and mushrooms.",                                              price: "9.00 €"  },
      { code: "L", name: "Diablo",                     desc: "Tomato, mozzarella and spicy chorizo.",                                                      price: "9.00 €"  },
      { code: "M", name: "Vivaldi",                    desc: "Tomato, mozzarella, cooked ham, mushrooms, artichoke and black olives.",                     price: "9.95 €"  },
      { code: "N", name: "BBQ",                        desc: "Tomato, mozzarella, chicken breast, barbecue sauce and red onion.",                          price: "9.50 €"  },
      { code: "P", name: "Four Cheeses",               desc: "Tomato, mozzarella, emmental, provolone and blue cheese.",                                   price: "9.00 €"  },
      { code: "R", name: "El Secreto",                 desc: "Tomato, mozzarella, goat cheese, apple and caramelised onion.",                              price: "9.00 €"  }
    ]
  },
  de: {
    pinsaTitle: "Pinsa",
    pizzaTitle: "Pizza",
    extra: "Extra-Zutat: +1,50 €",
    pinsa: [
      { code: "A", name: "Thunfisch",                  desc: "Tomate, Mozzarella, Thunfisch und Artischocke.",                                              price: "10,90 €" },
      { code: "B", name: "Vegetarisch",                desc: "Tomate, Mozzarella, gerösteter roter Paprika, Zucchini und Champignons.",                    price: "10,90 €" },
      { code: "C", name: "La Porchetta ✨ Neu",        desc: "Tomate, Mozzarella und gewürzter Schweine-Porchetta mit Rosmarin und schwarzem Pfeffer.",     price: "11,90 €" },
      { code: "D", name: "Sobrasada ✨ Neu",           desc: "Tomate, Mozzarella und Sobrasada (streichfähige Chorizo).",                                   price: "9,00 €"  },
      { code: "E", name: "Serrano",                    desc: "Tomate, Mozzarella, luftgetrockneter Serrano-Schinken und Parmesanflocken.",                  price: "11,90 €" },
      { code: "F", name: "Hawaii",                     desc: "Tomate, Mozzarella, Ananas, Mais, Pistazie und karamellisierte Zwiebel.",                     price: "10,90 €" }
    ],
    pizza: [
      { code: "G", name: "Margherita",                 desc: "Tomate und Mozzarella.",                                                                     price: "6,90 €"  },
      { code: "H", name: "Silvestre York",             desc: "Tomate, Mozzarella, Kochschinken und Champignons.",                                          price: "9,00 €"  },
      { code: "L", name: "Diablo",                     desc: "Tomate, Mozzarella und scharfer Chorizo.",                                                   price: "9,00 €"  },
      { code: "M", name: "Vivaldi",                    desc: "Tomate, Mozzarella, Kochschinken, Champignons, Artischocke und schwarze Oliven.",            price: "9,95 €"  },
      { code: "N", name: "BBQ",                        desc: "Tomate, Mozzarella, Hähnchenbrust, Barbecuesauce und rote Zwiebel.",                         price: "9,50 €"  },
      { code: "P", name: "Vier Käse",                  desc: "Tomate, Mozzarella, Emmentaler, Provolone und Blauschimmelkäse.",                            price: "9,00 €"  },
      { code: "R", name: "El Secreto",                 desc: "Tomate, Mozzarella, Ziegenkäse, Apfel und karamellisierte Zwiebel.",                         price: "9,00 €"  }
    ]
  },
  it: {
    pinsaTitle: "Pinsa",
    pizzaTitle: "Pizza",
    extra: "Ingrediente extra: +1,50 €",
    pinsa: [
      { code: "A", name: "Tonno",                      desc: "Pomodoro, mozzarella, tonno e carciofi.",                                                    price: "10,90 €" },
      { code: "B", name: "Vegetariana",                desc: "Pomodoro, mozzarella, peperone rosso arrostito, zucchine e funghi champignon.",              price: "10,90 €" },
      { code: "C", name: "La Porchetta ✨ Novità",     desc: "Pomodoro, mozzarella e porchetta di maiale speziata con rosmarino e pepe nero.",             price: "11,90 €" },
      { code: "D", name: "Sobrasada ✨ Novità",        desc: "Pomodoro, mozzarella e sobrasada (chorizo spalmabile).",                                     price: "9,00 €"  },
      { code: "E", name: "Serrano",                    desc: "Pomodoro, mozzarella, prosciutto serrano stagionato e scaglie di parmigiano.",               price: "11,90 €" },
      { code: "F", name: "Hawaiana",                   desc: "Pomodoro, mozzarella, ananas, mais, pistacchio e cipolla caramellata.",                      price: "10,90 €" }
    ],
    pizza: [
      { code: "G", name: "Margherita",                 desc: "Pomodoro e mozzarella.",                                                                     price: "6,90 €"  },
      { code: "H", name: "Silvestre York",             desc: "Pomodoro, mozzarella, prosciutto cotto e funghi.",                                            price: "9,00 €"  },
      { code: "L", name: "Diablo",                     desc: "Pomodoro, mozzarella e chorizo piccante.",                                                    price: "9,00 €"  },
      { code: "M", name: "Vivaldi",                    desc: "Pomodoro, mozzarella, prosciutto cotto, funghi, carciofi e olive nere.",                     price: "9,95 €"  },
      { code: "N", name: "BBQ",                        desc: "Pomodoro, mozzarella, petto di pollo, salsa barbecue e cipolla rossa.",                      price: "9,50 €"  },
      { code: "P", name: "Quattro Formaggi",           desc: "Pomodoro, mozzarella, emmental, provolone e formaggio erborinato.",                          price: "9,00 €"  },
      { code: "R", name: "El Secreto",                 desc: "Pomodoro, mozzarella, formaggio di capra, mela e cipolla caramellata.",                      price: "9,00 €"  }
    ]
  },
  fr: {
    pinsaTitle: "Pinsa",
    pizzaTitle: "Pizza",
    extra: "Supplément ingrédient extra : +1,50 €",
    pinsa: [
      { code: "A", name: "Thon",                       desc: "Tomate, mozzarella, thon et artichaut.",                                                     price: "10,90 €" },
      { code: "B", name: "Végétarienne",               desc: "Tomate, mozzarella, poivron rouge rôti, courgette et champignons.",                          price: "10,90 €" },
      { code: "C", name: "La Porchetta ✨ Nouveau",    desc: "Tomate, mozzarella et porchetta de porc épicée au romarin et poivre noir.",                  price: "11,90 €" },
      { code: "D", name: "Sobrasada ✨ Nouveau",       desc: "Tomate, mozzarella et sobrasada (chorizo à tartiner).",                                       price: "9,00 €"  },
      { code: "E", name: "Serrano",                    desc: "Tomate, mozzarella, jambon serrano affiné et copeaux de parmesan.",                          price: "11,90 €" },
      { code: "F", name: "Hawaïenne",                  desc: "Tomate, mozzarella, ananas, maïs, pistache et oignon caramélisé.",                           price: "10,90 €" }
    ],
    pizza: [
      { code: "G", name: "Margherita",                 desc: "Tomate et mozzarella.",                                                                      price: "6,90 €"  },
      { code: "H", name: "Silvestre York",             desc: "Tomate, mozzarella, jambon cuit et champignons.",                                             price: "9,00 €"  },
      { code: "L", name: "Diablo",                     desc: "Tomate, mozzarella et chorizo piquant.",                                                      price: "9,00 €"  },
      { code: "M", name: "Vivaldi",                    desc: "Tomate, mozzarella, jambon cuit, champignons, artichaut et olives noires.",                  price: "9,95 €"  },
      { code: "N", name: "BBQ",                        desc: "Tomate, mozzarella, blanc de poulet, sauce barbecue et oignon rouge.",                       price: "9,50 €"  },
      { code: "P", name: "Quatre Fromages",            desc: "Tomate, mozzarella, emmental, provolone et fromage bleu.",                                   price: "9,00 €"  },
      { code: "R", name: "El Secreto",                 desc: "Tomate, mozzarella, fromage de chèvre, pomme et oignon caramélisé.",                         price: "9,00 €"  }
    ]
  }
};

function renderPizzaMenuList(lang = "es") {
  const data = pizzaMenuListData[lang] || pizzaMenuListData.es;
  const pinsaTitleEl = document.getElementById("pizza-list-pinsa-title");
  const pizzaTitleEl = document.getElementById("pizza-list-pizza-title");
  const pinsaEl      = document.getElementById("pizza-list-pinsa");
  const pizzaEl      = document.getElementById("pizza-list-pizza");
  const extraEl      = document.getElementById("pizza-list-extra");
  if (!pinsaEl || !pizzaEl) return;

  if (pinsaTitleEl) pinsaTitleEl.textContent = data.pinsaTitle;
  if (pizzaTitleEl) pizzaTitleEl.textContent = data.pizzaTitle;
  if (extraEl)      extraEl.textContent      = data.extra;

  const renderItems = (items) => items.map(item => `
    <div class="pizza-menu-list-item">
      <h5>
        <span><strong class="pizza-menu-list-code">${item.code}</strong> · ${item.name}</span>
        <span class="pizza-menu-list-price">${item.price}</span>
      </h5>
      <p>${item.desc}</p>
    </div>
  `).join("");

  pinsaEl.innerHTML = renderItems(data.pinsa);
  pizzaEl.innerHTML = renderItems(data.pizza);
}

function renderPizzaMenu(lang = "es") {
  const titleEl = document.getElementById("pizza-menu-title");
  const coverEl = document.getElementById("pizza-menu-cover");
  const pinsaEl = document.getElementById("pizza-menu-pinsa");
  const pizzaEl = document.getElementById("pizza-menu-pizza");
  if (!titleEl || !coverEl || !pinsaEl || !pizzaEl) return;

  const imgs = pizzaMenuImages[lang] || pizzaMenuImages.es;
  titleEl.textContent = pizzaMenuTitles[lang] || pizzaMenuTitles.es;
  coverEl.src = imgs.cover;
  pinsaEl.src = imgs.pinsa;
  pizzaEl.src = imgs.pizza;
}

function renderReyes(lang = "es") {
  const flyers = document.querySelectorAll(".reyes-flyer");
  if (!flyers.length) return;

  flyers.forEach(img => {
    const imgLang = img.dataset.lang || "es";
    img.classList.toggle("active", imgLang === lang);
  });
}

// ===== HERO BACKGROUND (se vuoi tenerlo, metti foto reali) =====
const heroImages = [
  "img/IMG_3812.JPG"
];

let currentHeroIndex = 0;

function rotateHeroBackground(){
  const hero = document.querySelector(".hero");
  if (!hero || heroImages.length === 0) return;

  hero.style.backgroundImage = `url('${heroImages[currentHeroIndex]}')`;
  currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
}

// ===== VIDEO GALLERIA (autoplay forzato) =====
function initGalleryVideo() {
  const video = document.getElementById("gallery-video");
  if (!video) return;

  video.muted = true; // richiesto per l’autoplay

  const tryPlay = () => {
    const p = video.play();
    if (p && p.then) {
      p.catch(err => {
        console.log("Autoplay bloccato dal browser:", err);
      });
    }
  };

  // Se la pagina è già visibile
  if (document.visibilityState === "visible") {
    tryPlay();
  }

  // Se viene aperta in background, riproviamo quando diventa visibile
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible" && video.paused) {
      tryPlay();
    }
  });
}

// ===== INIT PAGINA =====
function initPage(){
  // Contenuto iniziale (spagnolo)
  renderMenu("es");
  renderAbout("es");
  renderAllergens("es");
  renderHero("es");
  renderContact("es");
  renderNocheBuena("es");
  renderNocheVieja("es");
renderPizzaMenu("es");
renderPizzaMenuList("es");
renderPinsaPizzaInfo("es");
// renderReyes("es");   // locandina Reyes disattivata

  // Cambio lingua (pulsanti sotto "Galería del local")
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
      renderNocheBuena(lang);
      renderNocheVieja(lang);
      renderPizzaMenu(lang);
      renderPizzaMenuList(lang);
      renderPinsaPizzaInfo(lang);
// renderReyes(lang);   // locandina Reyes disattivata
    });
  });

  // Delegato: click sui pulsanti nav del menù → scroll smooth alla categoria
  const menuContainer = document.getElementById("menu-container");
  if (menuContainer) {
    menuContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".menu-nav-btn");
      if (!btn) return;
      const targetId = btn.dataset.target;
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  // Mobile nav (se un giorno vorrai riattivare il burger)
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

  // Hero slideshow (facoltativo)
  rotateHeroBackground();
  setInterval(rotateHeroBackground, 8000);

  // Video galleria
  initGalleryVideo();
}

// Avvio quando tutta la pagina (DOM + immagini) è caricata
window.addEventListener("load", initPage);