// ===== NUEVOS PLATOS / NEW DISHES =====
const newDishesData = {
  es: {
    title: "Nuevos platos 😋",
    subtitle: "Descubre nuestras últimas creaciones, elaboradas con ingredientes frescos y mucho cariño.",
    dishes: [
      {
        img: "img/nuevo_plato_1.jpeg",
        name: "Alitas en barbacoa de pollo con papas fritas 😋",
        desc: "Alitas de pollo marinadas en salsa barbacoa, acompañadas de papas fritas crujientes."
      },
      
      {
        img: "img/nuevo_plato_3.jpeg",
        name: "Codillo de cerdo con papas fritas 😋",
        desc: "Codillo de cerdo asado, servido con papas fritas."
      },
      
      {
        img: "img/nuevo_plato_5.jpeg",
        name: "Albóndigas en salsa de tomate con papas fritas 😋",
        desc: "Albóndigas caseras en salsa de tomate acompañadas de papas fritas."
      }
    ]
  },

  en: {
    title: "New dishes 😋",
    subtitle: "Discover our latest creations, prepared with fresh ingredients and lots of care.",
    dishes: [
      {
        img: "img/nuevo_plato_1.jpeg",
        name: "BBQ chicken wings with french fries 😋",
        desc: "Marinated chicken wings in BBQ sauce, served with crispy french fries."
      },
      
      {
        img: "img/nuevo_plato_3.jpeg",
        name: "Pork knuckle with french fries 😋",
        desc: "Roasted pork knuckle served with french fries."
      },
      
      {
        img: "img/nuevo_plato_5.jpeg",
        name: "Meatballs in tomato sauce with french fries 😋",
        desc: "Homemade meatballs in tomato sauce with french fries."
      }
    ]
  },

  de: {
    title: "Neue Gerichte 😋",
    subtitle: "Entdeckt unsere neuesten Kreationen, täglich frisch und mit viel Liebe zubereitet.",
    dishes: [
      {
        img: "img/nuevo_plato_1.jpeg",
        name: "Hähnchenflügel in Barbecuesauce mit Pommes 😋",
        desc: "Marinierte Hähnchenflügel in Barbecuesauce mit knusprigen Pommes frites."
      },
      
      {
        img: "img/nuevo_plato_3.jpeg",
        name: "Schweinehaxe mit Pommes 😋",
        desc: "Ofengebackene Schweinehaxe, serviert mit Pommes frites."
      },
      
      {
        img: "img/nuevo_plato_5.jpeg",
        name: "Fleischbällchen in Tomatensauce mit Pommes 😋",
        desc: "Hausgemachte Fleischbällchen in Tomatensauce mit Pommes frites."
      }
    ]
  }
    ,
  it: {
    title: "Nuovi piatti 😋",
    subtitle: "Scopri le nostre ultime creazioni, preparate con ingredienti freschi e tanto amore.",
    dishes: [
      {
        img: "img/nuevo_plato_1.jpeg",
        name: "Alette di pollo alla barbecue con patatine fritte 😋",
        desc: "Alette di pollo marinate in salsa barbecue, servite con patatine croccanti."
      },
     
      {
        img: "img/nuevo_plato_3.jpeg",
        name: "Stinco di maiale con patatine fritte 😋",
        desc: "Stinco di maiale arrosto, servito con patatine fritte."
      },

      {
        img: "img/nuevo_plato_5.jpeg",
        name: "Polpette in salsa di pomodoro con patatine 😋",
        desc: "Polpette fatte in casa in salsa di pomodoro, accompagnate da patatine fritte."
      }
    ]
  },
  fr: {
    title: "Nouveaux plats 😋",
    subtitle: "Découvrez nos dernières créations, préparées avec des ingrédients frais et beaucoup de soin.",
    dishes: [
      {
        img: "img/nuevo_plato_1.jpeg",
        name: "Ailes de poulet barbecue avec frites 😋",
        desc: "Ailes de poulet marinées dans une sauce barbecue, servies avec des frites croustillantes."
      },
      
      {
        img: "img/nuevo_plato_3.jpeg",
        name: "Jarret de porc avec frites 😋",
        desc: "Jarret de porc rôti, servi avec des frites."
      },
      
      {
        img: "img/nuevo_plato_5.jpeg",
        name: "Boulettes de viande en sauce tomate avec frites 😋",
        desc: "Boulettes de viande maison en sauce tomate, accompagnées de frites."
      }
    ]
  }
};

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
      { num: 5, name: "Al verde", desc: "Tallarines con pistacho, bacón, nata, leche, pimienta negra, aceite de oliva y queso pecorino.", price: "13,90 €" },
      { num: 6, name: "Delicado", desc: "Raviolis de ricotta y espinacas con salvia, mantequilla y queso parmesano.", price: "12,90 €" },
      { num: 7, name: "Ragú", desc: "Raviolis de carne con salsa de tomate, aceite de oliva, carne de vacuno molida, cebolla, zanahoria y vino tinto.", price: "12,90 €" },
      { num: 8, name: "Sabor de mar y de tierra", desc: "Raviolones de langostinos y calabacín con nata, anchoas, aceite de oliva, ajo y zucchini.", price: "14,00 €" },
      { num: 9, name: "Gorgonzola y nueces", desc: "Raviolis de gorgonzola y nueces con salsa 4 quesos.", price: "12,90 €" },
      { num: 10, name: "A la Genovesa", desc: "Trofie al pesto verde: albahaca, aceite de oliva, piñones, queso pecorino y ajo.", price: "13,90 €" },
      { num: 11, name: "Saquitos", desc: "Fagottini de pera y queso con salsa de gorgonzola.", price: "12,90 €" },
      { num: 12, name: "Emilia", desc: "Tortelloni de carne con salsa boloñesa.", price: "12,90 €" },
    ]},

    { category: "Segundo plato", items: [
      { num: 13, name: "Porqueta", desc: "Porchetta, carne de cerdo enrollada con romero y pimienta negra con papas fritas.", price: "19,90 €" },
      { num: 14, name: "Pollo", desc: "Pechuga de pollo a la plancha o con salsa de soja y champiñones.", price: "9,50 €" },
      { num: 15, name: "Muslo", desc: "Muslo de pollo asado con papas fritas.", price: "10,00 €" },
    ]},

    { category: "Ensaladas", items: [
      { num: 16, name: "De la casa", desc: "Lechuga, tomate, pimiento rojo y atún.", price: "8,00 €" },
      { num: 17, name: "Griega", desc: "Tomate, pepino, cebolla, queso feta y aceitunas negras.", price: "9,00 €" },
    ]},

    { category: "Platos vegetarianos", items: [
      { num: 18, name: "Albóndigas", desc: "Albóndigas de berenjena con salsa de tomate.", price: "11,90 €" },
      { num: 19, name: "Parrillada vegetal", desc: "Asado de pimiento rojo, verde, amarillo, berenjena, champiñones y tomate.", price: "13,90 €" },
    ]},

    { category: "Postres", items: [
      { name: "Postres variados", desc: "", price: "4,50€" },
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
      { num: 5, name: "Al verde", desc: "Tagliatelle with pistachio, bacon, cream, milk, black pepper, olive oil, and pecorino cheese.", price: "13.90 €" },
      { num: 6, name: "Delicate", desc: "Ricotta and spinach ravioli with sage, butter, and parmesan cheese.", price: "12.90 €" },
      { num: 7, name: "Ragù", desc: "Meat ravioli with tomato sauce, olive oil, ground meat, onion, carrots, and red wine.", price: "12.90 €" },
      { num: 8, name: "Sea & land flavor", desc: "Langoustine and zucchini ravioloni with cream, anchovies, olive oil, garlic, and zucchini.", price: "14.00 €" },
      { num: 9, name: "Gorgonzola & walnuts", desc: "Gorgonzola and walnut ravioli with 4 cheese sauce.", price: "12.90 €" },
      { num: 10, name: "Genovese style", desc: "Trofie with green pesto: basil, olive oil, pine nuts, pecorino cheese, and garlic.", price: "13.90 €" },
      { num: 11, name: "Saquitos", desc: "Pear and cheese fagottini with gorgonzola sauce.", price: "12.90 €" },
      { num: 12, name: "Emilia", desc: "Tortelloni with meat in Bolognese sauce.", price: "12.90 €" },
    ]},

    { category: "Second Course", items: [
      { num: 13, name: "Porchetta", desc: "Porchetta pork with rosemary and black pepper, served with french fries.", price: "19.90 €" },
      { num: 14, name: "Chicken breast", desc: "Grilled chicken breast with soy sauce and mushrooms.", price: "9.50 €" },
      { num: 15, name: "Chicken thigh", desc: "Roasted chicken thigh with french fries.", price: "10.00 €" },
    ]},

    { category: "Salads", items: [
      { num: 16, name: "House salad", desc: "Lettuce, tomato, red pepper, and tuna.", price: "8.00 €" },
      { num: 17, name: "Greek salad", desc: "Tomato, cucumber, onion, feta cheese, and black olives.", price: "9.00 €" },
    ]},

    { category: "Vegetarian dishes", items: [
      { num: 18, name: "Eggplant meatballs", desc: "Eggplant meatballs with tomato sauce.", price: "11.90 €" },
      { num: 19, name: "Vegetable grill", desc: "Grilled red, green and yellow peppers, eggplant, mushrooms, and tomato.", price: "13.90 €" },
    ]},

    { category: "Desserts", items: [
      { name: "Assorted desserts", desc: "", price: "4,50€" },
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
      { num: 5, name: "Al verde", desc: "Tagliatelle mit Pistazie, Speck, Sahne, Milch, schwarzem Pfeffer, Olivenöl und Pecorino.", price: "13,90 €" },
      { num: 6, name: "Zart", desc: "Ricotta-Spinat-Ravioli mit Salbei, Butter und Parmesan.", price: "12,90 €" },
      { num: 7, name: "Ragù", desc: "Fleischravioli in Tomatensauce mit Rinderhack, Zwiebel, Karotte und Rotwein.", price: "12,90 €" },
      { num: 8, name: "Geschmack von Meer und Land", desc: "Ravioloni mit Langostinos und Zucchini in Sahnesauce, Sardellen, Olivenöl, Knoblauch und Zucchini.", price: "14,00 €" },
      { num: 9, name: "Gorgonzola & Walnüsse", desc: "Gorgonzola-Walnuss-Ravioli mit 4-Käse-Sauce.", price: "12,90 €" },
      { num: 10, name: "Genueser Art", desc: "Trofie mit grünem Pesto: Basilikum, Olivenöl, Pinienkerne, Pecorino und Knoblauch.", price: "13,90 €" },
      { num: 11, name: "Saquitos", desc: "Birnen-Käse-Fagottini mit Gorgonzola-Sauce.", price: "12,90 €" },
      { num: 12, name: "Emilia", desc: "Fleisch-Tortelloni mit Bolognese-Sauce.", price: "12,90 €" },
    ]},

    { category: "Hauptgerichte", items: [
      { num: 13, name: "Porchetta", desc: "Gerollter Schweinebraten mit Rosmarin und schwarzem Pfeffer, dazu Pommes frites.", price: "19,90 €" },
      { num: 14, name: "Hähnchenbrust", desc: "Gegrillte Hähnchenbrust mit Sojasauce und Champignons.", price: "9,50 €" },
      { num: 15, name: "Hähnchenschenkel", desc: "Gebratener Hähnchenschenkel mit Pommes frites.", price: "10,00 €" },
    ]},

    { category: "Salate", items: [
      { num: 16, name: "Haussalat", desc: "Salat, Tomate, rote Paprika und Thunfisch.", price: "8,00 €" },
      { num: 17, name: "Griechischer Salat", desc: "Tomate, Gurke, Zwiebel, Feta und schwarze Oliven.", price: "9,00 €" },
    ]},

    { category: "Vegetarische Gerichte", items: [
      { num: 18, name: "Auberginenbällchen", desc: "Auberginenbällchen mit Tomatensauce.", price: "11,90 €" },
      { num: 19, name: "Gemüse vom Grill", desc: "Gegrillte rote, grüne und gelbe Paprika, Aubergine, Champignons und Tomate.", price: "13,90 €" },
    ]},

    { category: "Desserts", items: [
      { name: "Verschiedene Desserts", desc: "", price: "4,50€" },
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
      { num: 5, name: "Al verde", desc: "Tagliatelle con pistacchio, pancetta, panna, latte, pepe nero, olio d'oliva e pecorino.", price: "13,90 €" },
      { num: 6, name: "Delicato", desc: "Ravioli di ricotta e spinaci con salvia, burro e parmigiano.", price: "12,90 €" },
      { num: 7, name: "Ragù", desc: "Ravioli di carne con salsa di pomodoro, olio d'oliva, carne di manzo macinata, cipolla, carota e vino rosso.", price: "12,90 €" },
      { num: 8, name: "Sapori di mare e di terra", desc: "Ravioloni di mazzancolle e zucchine con panna, acciughe, olio d'oliva, aglio e zucchine.", price: "14,00 €" },
      { num: 9, name: "Gorgonzola e noci", desc: "Ravioli al gorgonzola e noci con salsa ai 4 formaggi.", price: "12,90 €" },
      { num: 10, name: "Alla genovese", desc: "Trofie al pesto verde: basilico, olio d'oliva, pinoli, pecorino e aglio.", price: "13,90 €" },
      { num: 11, name: "Fagottini di pere e gorgonzola", desc: "Fagottini di pere e formaggio con salsa al gorgonzola.", price: "12,90 €" },
      { num: 12, name: "Emilia", desc: "Tortelloni di carne con salsa alla bolognese.", price: "12,90 €" },
    ]},

    { category: "Secondo piatto", items: [
      { num: 13, name: "Porchetta", desc: "Arrosto di maiale arrotolato con rosmarino e pepe nero, servito con patatine fritte.", price: "19,90 €" },
      { num: 14, name: "Petto di pollo", desc: "Petto di pollo alla griglia con salsa di soia e funghi.", price: "9,50 €" },
      { num: 15, name: "Coscia di pollo", desc: "Coscia di pollo arrosto con patatine fritte.", price: "10,00 €" },
    ]},

    { category: "Insalate", items: [
      { num: 16, name: "Della casa", desc: "Lattuga, pomodoro, peperone rosso e tonno.", price: "8,00 €" },
      { num: 17, name: "Greca", desc: "Pomodoro, cetriolo, cipolla, feta e olive nere.", price: "9,00 €" },
    ]},

    { category: "Piatti vegetariani", items: [
      { num: 18, name: "Polpette di melanzane", desc: "Polpette di melanzane con salsa di pomodoro.", price: "11,90 €" },
      { num: 19, name: "Grigliata di verdure", desc: "Peperone rosso, verde e giallo, melanzane, funghi e pomodoro alla griglia.", price: "13,90 €" },
    ]},

    { category: "Dolci", items: [
      { name: "Dolci assortiti", desc: "", price: "4,50€" },
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
      { num: 5, name: "Al verde", desc: "Tagliatelles au pistache, bacon, crème, lait, poivre noir, huile d'olive et pecorino.", price: "13,90 €" },
      { num: 6, name: "Délicat", desc: "Raviolis ricotta-épinards avec sauge, beurre et parmesan.", price: "12,90 €" },
      { num: 7, name: "Ragù", desc: "Raviolis de viande avec sauce tomate, huile d'olive, viande hachée, oignon, carotte et vin rouge.", price: "12,90 €" },
      { num: 8, name: "Saveurs de mer et de terre", desc: "Ravioloni aux langoustines et courgettes avec crème, anchois, huile d'olive, ail et courgettes.", price: "14,00 €" },
      { num: 9, name: "Gorgonzola et noix", desc: "Raviolis au gorgonzola et noix avec sauce aux 4 fromages.", price: "12,90 €" },
      { num: 10, name: "Façon génoise", desc: "Trofie au pesto vert : basilic, huile d'olive, pignons, pecorino et ail.", price: "13,90 €" },
      { num: 11, name: "Fagottini poire et gorgonzola", desc: "Fagottini de poire et fromage avec sauce au gorgonzola.", price: "12,90 €" },
      { num: 12, name: "Emilia", desc: "Tortelloni de viande avec sauce bolognaise.", price: "12,90 €" },
    ]},

    { category: "Plats principaux", items: [
      { num: 13, name: "Porchetta", desc: "Rôti de porc roulé au romarin et poivre noir, servi avec frites.", price: "19,90 €" },
      { num: 14, name: "Blanc de poulet", desc: "Blanc de poulet grillé avec sauce soja et champignons.", price: "9,50 €" },
      { num: 15, name: "Cuisse de poulet", desc: "Cuisse de poulet rôtie avec frites.", price: "10,00 €" },
    ]},

    { category: "Salades", items: [
      { num: 16, name: "Salade de la maison", desc: "Laitue, tomate, poivron rouge et thon.", price: "8,00 €" },
      { num: 17, name: "Salade grecque", desc: "Tomate, concombre, oignon, feta et olives noires.", price: "9,00 €" },
    ]},

    { category: "Plats végétariens", items: [
      { num: 18, name: "Boulettes d'aubergine", desc: "Boulettes d'aubergine avec sauce tomate.", price: "11,90 €" },
      { num: 19, name: "Grillade de légumes", desc: "Poivrons rouges, verts et jaunes, aubergine, champignons et tomate grillés.", price: "13,90 €" },
    ]},

    { category: "Desserts", items: [
      { name: "Desserts variés", desc: "", price: "4,50€" },
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
      category: "Acqua",
      items: [
        { name: "Acqua naturale (bottiglia 0,5 l)", desc: "Acqua senza gas in bottiglia.", price: "1,20 €" },
        { name: "Acqua naturale (bottiglia 1,5 l)", desc: "Acqua senza gas in bottiglia di plastica.", price: "2,30 €" },
        { name: "Acqua frizzante (bottiglia 0,5 l)", desc: "Acqua frizzante in bottiglia di vetro.", price: "1,30 €" }
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
      category: "Eau",
      items: [
        { name: "Eau plate (bouteille 0,5 l)", desc: "Eau sans gaz en bouteille.", price: "1,20 €" },
        { name: "Eau plate (bouteille 1,5 l)", desc: "Eau sans gaz en bouteille plastique.", price: "2,30 €" },
        { name: "Eau gazeuse (bouteille 0,5 l)", desc: "Eau gazeuse en bouteille en verre.", price: "1,30 €" }
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

function renderNewDishes(lang = "es") {
  const data = newDishesData[lang] || newDishesData.es;
  const section = document.querySelector(".new-dishes");
  if (!section || !data) return;

  const titleEl    = section.querySelector(".new-dishes-header h2");
  const subtitleEl = section.querySelector(".new-dishes-header p");
  const cards      = section.querySelectorAll(".new-dish-card");
  const badges     = section.querySelectorAll(".new-dish-badge");

  if (titleEl)    titleEl.textContent    = data.title;
  if (subtitleEl) subtitleEl.textContent = data.subtitle;

  cards.forEach((card, index) => {
    const dish = data.dishes[index];
    if (!dish) return;

    const img = card.querySelector("img");
    const h3  = card.querySelector("h3");
    const p   = card.querySelector("p");

    if (img && dish.img) {
      img.src = dish.img;
      img.alt = dish.name;
    }
    if (h3) h3.textContent = dish.name;
    if (p)  p.textContent  = dish.desc || "";
  });

  // badge "Nuevo" / "New" / "Neu"
  badges.forEach(badge => {
    if (lang === "es")      badge.textContent = "Nuevo";
    else if (lang === "en") badge.textContent = "New";
    else if (lang === "de") badge.textContent = "Neu";
    else if (lang === "it") badge.textContent = "Nuovo";
    else if (lang === "fr") badge.textContent = "Nouveau";
    else                    badge.textContent = "Nuevo";
  });
}

// ===== MENU PIZZE (via foto) =====
// Quando avrai le locandine tradotte (es. img/A_pizza_en.jpg, img/A_pizza_de.jpg, ...)
// basta aggiungere le voci qui sotto e il sistema fa lo switch automatico in base alla lingua.
const pizzaMenuImages = {
  es: { cover: "img/1_pizza.jpg", pinsa: "img/A_pizza.jpg", pizza: "img/B_pizza.jpg" },
  en: { cover: "img/1_pizza.jpg", pinsa: "img/A_pizza.jpg", pizza: "img/B_pizza.jpg" },
  de: { cover: "img/1_pizza.jpg", pinsa: "img/A_pizza.jpg", pizza: "img/B_pizza.jpg" },
  it: { cover: "img/1_pizza.jpg", pinsa: "img/A_pizza.jpg", pizza: "img/B_pizza.jpg" },
  fr: { cover: "img/1_pizza.jpg", pinsa: "img/A_pizza.jpg", pizza: "img/B_pizza.jpg" }
};

const pizzaMenuTitles = {
  es: "Pizza & Pinsa",
  en: "Pizza & Pinsa",
  de: "Pizza & Pinsa",
  it: "Pizza & Pinsa",
  fr: "Pizza & Pinsa"
};

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
renderNewDishes("es");
renderPizzaMenu("es");
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
      renderNewDishes(lang);
      renderPizzaMenu(lang);
// renderReyes(lang);   // locandina Reyes disattivata
    });
  });

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