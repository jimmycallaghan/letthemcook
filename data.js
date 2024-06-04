var recipes = [
    {
        category: "mexican",
        name: "Burrito",
        desc: "Ein saftiges Gaumenschmaus für unterwegs",
        infos: {
            cookingTime: 20,
            difficulty: "normal",
            dateAdded: "01.06.2024"
        },
        img: {
          src: "img/burrito.jpg",
          alt: "Image of a Burrito"
        },
        ingredients: [
            {
                "name" : "Tomaten",
                "amount" : "200",
                "unit" : "g"
            },{
                "name" : "Maiskörner",
                "amount" : "125",
                "unit" : "g"
            },{
                "name" : "Paprikaschote(n), rote",
                "amount" : "1",
                "unit" : "ganze"
            },{
                "name" : "Paprikaschote(n), grüne",
                "amount" : "1",
                "unit" : "ganze"
            },{
                "name" : "Zwiebeln",
                "amount" : "2",
                "unit" : "große"
            },{
                "name" : "Olivenöl",
                "amount" : "4",
                "unit" : "EL"
            },{
                "name" : "Hackfleisch",
                "amount" : "400",
                "unit" : "g"
            },{
                "name" : "salz und Pfeffer",
                "amount": "1",
                "unit" : "Prise(n)"
            },{
                "name" : "Cayennepfeffer",
                   "amount" : "1",
                "unit" : "prise(n)"
            },{
                "name" : "Kreuzkümmelpulver",
                "amount" : "1/2",
                "unit" : "TL"
            },{
                "name" : "Tomatenmarkt",
                "amount" : "1",
                "unit" : "EL"
            },{
                "name" : "Zucker",
                "amount" : "1",
                "unit" : "Prise(n)"
            },{
                "name" : "Weizentrtoilla(s)",
                "amount" : "6",
                "unit" : "große"
            },{
                "name" : "Crème fraîche",
                "amount" : "6",
                "unit" : "EL"
            },{
                "name" : "Käse, gerieben",
                "amount" : "200",
                "unit" : "g"
            }
        ],
        nutrition: [
            {
                    "name": "kcal",
                    "amount" : "900"
            },{
                    "name" : "Fett",
                    "amount" : "38,8g"
            },{
                    "name" : "Kohlenhydrate",
                    "amount" : "67,3g"
            },{
                    "name" : "Eiweiß",
                    "amount" : "6g"
            }
        ],
        cooktime: {
            worktime: 20,
            oventime: 15,
            cookingTime: 35,
            },
        method: [
            "Die Tomaten fein hacken und wieder in den Saft zurückgeben. Den Mais auf einem " +
            "Sieb abtropfen lassen. Die Paprikaschoten putzen, entkernen, waschen, trocknen " +
            "und in kleine Stücke schneiden. Die Zwiebeln schälen und würfeln.",
            
            "Das Olivenöl in einer Pfanne erhitzen und das Hackfleisch darin scharf anbraten. " +
            "Zwiebeln und Paprika dazugeben und alles etwa 5 Minuten garen, bis das Fleisch " +
            "durchgebraten ist. Mit Salz, Pfeffer, Cayennepfeffer und Kreuzkümmel kräftig würzen " +
            "Das Tomatenmark dazugeben, kurz mitrösten, dann die gehackten Tomaten mit dem Saft " +
            "und den Mais unterrühren. Die Masse einige Minuten einkochen lassen, bis fast die " +
            "gesamte Flüssigkeit verdampft ist.",
            
            "Mit den Gewürzen und etwas Zucker abschmecken. Die Tortillas mit der Crème fraîche " +
            "bestreichen und die Hackfleischmasse gleichmäßig darauf verteilen. Mit etwas geriebenem " +
            "Käse bestreuen. Die Tortillas zu Burritos aufrollen und in eine Auflaufform legen. " +
            "Mit dem restlichen geriebenen Käse bestreuen.",
            
            "Bei 200 °C Ober-/Unterhitze im vorgeheizten Backofen ca. 4 - 5 Minuten überbacken, " +
            "bis der Käse zerlaufen ist. Sofort servieren. "
        ]
    },{
        category: "mexican",
        name: "Tacos",
        desc: "El Numero uno -unsere Nummer ein!",
        infos: {
            cookingTime: 45,
            difficulty: "easy",
            dateAdded: "02.06.2024"
        },
        img: {
            src: "img/tacos.jpg",
            alt: "Image of Tacos"
        },
        ingredients: [
                {    
                "name" : "Öl",
                "amount" : "1",
                "unit" : "EL"
            },{
                "name" : "Zwiebel(n)",
                "amount" : "1",
                "unit" : "große"
            },{
                "name" : "Knoblauchzehe(n)",
                "amount" : "2",
                "unit" : "große"
            },{
                "name" : "Tinderhackfleisch, mageres",
                "amount" : "500",
                "unit" : "g"
            },{
                "name" : "Tomatenmark",
                "amount" : "2",
                "unit" : "EL"
            },{
                "name" : "Chilipulver",
                "amount" : "1/2",
                "unit" : "EL"
            },{
                "name" : "Paprikapulver",
                "amount" : "1",
                "unit" : "TL"
            },{
                "name" : "Kreuzkümmelpulver",
                "amount": "1",
                "unit" : "TL"
            },{
                "name" : "Korianderpulver",
                "amount" : "1",
                "unit" : "TL"
            },{
                "name" : "Oregano",
                "amount" : "1/2",
                "unit" : "TL"
            },{
                "name" : "Zucker",
                "amount" : "1",
                "unit" : "TL"
            },{
                "name" : "Salz",
                "amount" : "1",
                "unit" : "Prise"
            },{
                "name" : "Tacos (schalen)",
                "amount" : "12",
                "unit" : "kleine"
            },{
                "name" : "Eisbergsalat (große Blätter), zerkleinert",
                "amount" : "4",
                "unit" : "Blätter"
            },{
                "name" : "Cheddarkäse, geriebener",
                "amount" : "190",
                "unit" : "g"
            },{
                "name" : "Salsa (Tomatensalsa)",
                "amount" : "100",
                "unit" : "g"
            }
        ],
        nutrition: [
            {
                "name": "kcal",
                "amount" : "114"
            },{
                "name" : "Eiweiß",
                "amount" : "9g"
            },{
                "name" : "Fett",
                "amount" : "4g"
            },{
                "name" : "Kohlenhydrate",
                "amount" : "10g"
    }
        ],
        cooktime: {
            worktime: 5,
            oventime: 15,
            cookingTime: 20
            },
        method: [
            "Reis, Kokosmilch und Brühe in einen Topf geben und aufkochen. Hitze reduzieren und " +
            "bei geschlossenem Deckel 10 Min. köcheln lassen. Limette und Koriander waschen " +
            "und trocknen. Von der Limette die Schale fein abreiben und den Saft auspressen. " +
            "Koriander hacken. Cashewkerne ebenfalls grob hacken. Alles unter den Reis rühren. " +
            "Tomaten grob würfeln.",
            
            "Etwas Öl in einer Pfanne erhitzen. Das Hackfleisch darin bei starker Hitze rundherum " +
            "krümelig braten. Mit Salz, Pfeffer und Cayennepfeffer würzen.",
            
            "Tacoschalen mit Reis, Tomaten und dem Hackfleisch füllen, einen Klecks Crème" +
            "fraîche dazugeben."
        ]
    },{   
        category: "mexican", 
        name: "Quesadilla",
        desc: "Was mexikanisches für Käseliebhaber",
        infos: {
            cookingTime: 30,
            difficulty: "normal",
            dateAdded: "03.06.2024"
        },
        img: {
            src: "img/quesadillo.jpg",
            alt: "Image of a Quesadillo"
        },
        ingredients: [
            {
                "name" : "Hähnchenbrustfilet(s)",
                "amount" : "400",
                "unit" : "g"
            },{
                "name" : "Kreuzkümmelpulver",
                "amount" : "1",
                "unit" : "TL"
            },{
                "name" : "Salz",
                "amount" : "2",
                "unit" : "TL"
            },{
                "name" : "Pfeffer",
                "amount" : "1/2",
                "unit" : "TL"
            },{
                "name" : "Paprikapulver",
                "amount" : "1",
                "unit" : "EL"
            },{
                "name" : "Öl",
                "amount" : "3",
                "unit" : "EL"
            },{
                "name" : "Paprikaschote(n), rote und grüne",
                "amount" : "2",
                "unit" : "größe"
            },{
                "name" : "Zwiebel(n), rot",
                "amount": "1",
                "unit" : "große"
            },{
                "name" : "Knoblauchzehe(n)",
                "amount" : "1",
                "unit" : "große"
            },{
                "name" : "Limette(n), saft",
                "amount" : "1",
                "unit" : "große"
            },{
                "name" : "Käse, geriebener",
                "amount" : "200",
                "unit" : "g"
            },{
                "name" : "Weizentortilla(s)",
                "amount" : "6",
                "unit" : "große"
            },{
                "name" : "Butter, geschmolzen",
                "amount" : "2",
                "unit" : "EL"
            }
        ],
        nutrition: [
            {
                "name": "kcal",
                "amount" : "340"
            },{
                "name" : "Eiweiß",
                "amount" : "14g"
            },{
                "name" : "Fett",
                "amount" : "14g"
            },{
                "name" : "Kohlenhydrate",
                "amount" : "27g"
            }
        ],
        cooktime: {
            worktime: 20,
            oventime: 15,
            cookingTime: 35,
            },
        method: [
            "Das Hähnchenfleisch klein würfeln, mit Kreuzkümmel, Paprikapulver, " +
            "Salz und Pfeffer würzen und vermischen.",
            "Paprikaschoten und Zwiebel ebenfalls fein würfeln und die " +
            "Knoblauchzehe fein reiben.",

            "In einer beschichteten Pfanne 2 EL Öl erhitzen und das " +
            "Hähnchenfleisch unter Rühren braten und anschließend in eine " +
            "Schüssel geben. In derselben Pfanne 1 EL Öl erhitzen und Paprika, " +
            "Zwiebel und Knoblauchzehe andünsten. Gemüse herausnehmen und " +
            "zum Hähnchenfleisch geben. Limettensaft dazugeben und verrühren.",

            "Eine Hälfte der Tortillas mit geschmolzener Butter bestreichen. Die " +
            "Fleischpfanne kurz auswischen und erhitzen. Eine Tortilla in die " +
            "Pfanne geben (mit Butter bestrichene Seite sollte unten sein). Fleisch- " +
            "Gemüse-Mischung auf der Hälfte verteilen und Käse darüberstreuen." +
            "Andere Tortillahälfte darüber klappen. Von beiden Seiten knusprig braten.",

            "Mit Guacamole servieren."
        ]
    },{
        category: "mexican",
        name: "BBQ-Chicken-Nachos",
        desc: "Perfekt für einen Kinoabend bei dir zu Hause!",
        infos: {
            cookingTime: 20,
            difficulty: "normal",
            dateAdded: "04.06.2024"
        },
        img: {
            src: "img/nachos.jpg",
            alt: "Image of Nachos"
        },
        ingredients: [
            {
            "name": "Oel",
            "amount": "1",
            "unit": "TL"
        }, {
            "name": "Huehnerbrustfilet(s)",
            "amount": "2",
            "unit": "große"
        }, {
            "name": "Salz, grob",
            "amount": "1/2",
            "unit": "TL"
        }, {
            "name": "Pfeffer",
            "amount": "1/2",
            "unit": "TL"
        }, {
            "name": "Knoblauchpulver",
            "amount": "1",
            "unit": "TL"
        }, {
            "name": "Chilipulver",
            "amount": "1",
            "unit": "TL"
        }, {
            "name": "Barbecuesauce",
            "amount": "200",
            "unit": "ml"
        }, {
            "name": "Tortillachips",
            "amount": "1",
            "unit": "Pck."
        }, {
            "name": "Käse, geriebener, z.B. Gouda, Cheddar",
            "amount": "200",
            "unit": "g"
        }, {
            "name": "Zwiebel(n), rote, gewürfelt",
            "amount": "1/2",
            "unit": "große"
        }, {
            "name": "Tomate(n), gewürfelt",
            "amount": "1",
            "unit": "große"
        }, {
            "name": "Schicken, gewürfelt",
            "amount": "8",
            "unit": "Scheibe/n"
        }, {
            "name": "Petersilie, gehackt",
            "amount": "2",
            "unit": "TL"
        }, {
            "name": "saure Sahne",
            "amount": "120",
            "unit": "ml"
        }
        ],
        nutrition: [
        {
            "name": "kcal",
            "amount": "306"
        }, {
            "name": "Eiweiß",
            "amount": "17g"
        }, {
            "name": "Fett",
            "amount": "34g"
        }, {
            "name": "Kohlenhydrate",
            "amount": "58g"
        }
        ],
        cooktime: {
            worktime: 20,
            oventime: 15,
            cookingTime: 35,
            },
        method: [
            "Öl in einer Pfanne stark erhitzen. Zuerst Hühnerbrust-Würfel anbraten, dann Salz, " +
            "Pfeffer, Knoblauchpulver und Chilipulver hinzufügen. Gut umrühren.Barbecuesauce hinzufügen " +
            "und 5 Minuten köcheln lassen.",

            "In einer tiefen Bratpfanne 2 Hände voll Tortilla-Chips verteilen und mit der Hälfte " +
            "des marinierten Hühnchens belegen. Käse, Zwiebel, Tomate, Schinken und " +
            "Petersilie darüber verteilen. Anschließend den Vorgang nochmal wiederholen.",

            "Bei 175 °C Ober-/Unterhitze für 15 Minuten backen.",

            "Zum Servieren saure Sahne darauf geben."
        ]
    },{
        category: "italien",
        name: "Penne al arrabiata",
        desc: "Ein Gericht für jeden",
        infos: {
            cookingTime:20,
            difficulty: "normal",
            dateAdded: "o4.06.2024"
        },
        img: {
            src: "img/penne al arrabiata.png",
            alt: "Image o Penne al arrabiata"
        },
        ingredients: [
        {
            "name" : "Penne",
            "amount" : "400",
            "unit" : "g"
        },{
            "name" : "Speck, durchwachsener",
            "amount" : "100",
            "unit" : "g"
        },{
            "name" : "Tomate(n), frisch oder 1 große Dose Pelati",
            "amount" : "500",
            "unit" : "g"
        },{
            "name" : "Petersilie, glatte",
            "amount" : "1",
            "unit" : "Bund"
        },{
            "name" : "Chilischote(n), rote",
            "amount" : "2",
            "unit" : "kleine"
        },{
            "name" : "Parmesan oder Pecorino, frisch gerieben",
            "amount" : "50",
            "unit" : "g"
        },{
            "name" : "Zwiebel(n)",
            "amount" : "1",
            "unit" : "große"
        },{
            "name" : "Knoblauch",
            "amount": "2",
            "unit" : "Zehe/n"
        },{
            "name" : "Butter",
            "amount" : "2",
            "unit" : "EL"
        },{
            "name" : "Salz und Pfeffer, frisch gemahlen",
            "amount" : "1",
            "unit" : "prise"
        }
        ],
        nutrition: [
        {
            "name": "kcal",
            "amount": "704"
        },{
            "name": "Eiweiß",
            "amount": "20,15g"
        },{
            "name": "Fett",
            "amount": "32,33g"
        },{
            "name": "Kohlenhydrate",
            "amount": "80,93g"
        }
        ],
        cooktime: {
            worktime: 20,
            oventime: 15,
            cookingTime: 35,
            },
        method: [
            "Den Speck in feine Streifen schneiden. Die Tomaten enthäuten, entkernen, das " +
            "Fruchtfleisch klein schneiden und durch ein Sieb streichen. Die Petersilie und die " +
    	    "Zwiebel fein hacken. Knoblauchzehen in feine Scheiben schneiden.",
            
            "In einem Topf 4 Liter Salzwasser aufkochen, 400 g Penne darin 5 Minuten vorgaren. " +
            "In einer großen Pfanne 2 EL Butter erwärmen. Speck und Zwiebeln hineingeben und " +
            "auf kleiner Hitze unter Rühren dünsten ohne Farbe nehmen zu lassen. Knoblauch, " +
            "passierte Tomaten und die Chilischoten unterrühren, mit Salz und Pfeffer würzen. Auf " +
            "kleiner Hitze weiter köcheln lassen.",
        
            "Penne abgießen, vom heißen Kochwasser einige EL zurückbehalten. Penne nur kurz " +
            "abtropfen lassen und unter die Sauce mischen. Auf kleiner Flamme weiter köcheln " +
            "lassen, bis die Nudeln al dente sind. Wenn nötig vom Kochwasser nachgießen. Evtl. " +
            "die Chilischoten entfernen. Nochmals mit Salz und Pfeffer abschmecken.",
        
            "Je nach Belieben mit dem Käse mischen, in einer vorgewärmten Schüssel oder tiefen " +
            "Tellern anrichten und mit der Petersilie bestreuen. Oder den frisch geriebenen Käse " +
            "separat dazu servieren, damit sich jeder Gast nach seinem Bedarf bedienen kann.",
        
            "Wichtig: Der Käse sollte erst kurz vor Gebrauch gerieben werden, denn schon nach " +
            "zehn Minuten fängt er an der Luft an zu oxidieren. Das heißt, er verändert seinen " +
            "feinen Geschmack. " +
            "Ich mache dieses Gericht meist ohne Speck, dafür mit etwas mehr Butter. " +
            "So schmeckt es auch sehr gut.",
        ]
    },{
        category: "italien",
        name: "Spaghetti Cabonara",
        desc: "Ein leckeres Nudelgericht ganz nach deinen Wünschen",
        infos: {
            cookingTime: 5,
            difficulty: "simpel",
            dateAdded: "26.05.2024"
        },
        img: {
            src: "img/spaghetti cabonara.jpg",
            alt: "Image of Spaghetti cabonara"
        },
        ingredients: [
        {
            "name" : "Spaghetti oder Tortellini",
            "amount" : "400",
            "unit" : "g"
        },{
            "name" : "Schinken, roher",
            "amount" : "200",
            "unit" : "g"
        },{
            "name" : "Eigelb",
            "amount" : "4",
            "unit" : "große"
        },{
            "name" : "Butter",
            "amount" : "50",
            "unit" : "g"
        },{
            "name" : "Salz und Pfeffer",
            "amount" : "1",
            "unit" : "Prise(n)"
        },{
            "name" : "Muskat",
            "amount" : "1",
            "unit" : "Prise(n)"
        },{
            "name" : "Parmesan, frisch geriebener",
            "amount" : "n.",
            "unit" : "B."
        }
        ],
        nutrition: [
        {
            "name": "kcal",
            "amount": "582"
        },{
            "name": "Eiweiß",
            "amount": "27,67g"
        },{
            "name": "Fett",
            "amount": "20,45g"
        },{
            "name": "Kohlenhydrate",
            "amount": "71,14g"
        }
        ],
        cooktime: {
            worktime: 20,
            oventime: 15,
            cookingTime: 35,
            },
        method: [
            "Die Pasta in reichlich Salzwasser bissfest kochen. Den Schinken in Würfel " +
            "schneiden und in wenig Butter anbraten.",

            "Eigelb in einer großen Schüssel mit Salz, Pfeffer und Muskat verquirlen. Die " +
            "Butter schaumig rühren und gut unter das Eigelb mischen. Die Schinkenwürfel " +
            "und den geriebenen Käse gründlich unterrühren.",

            "Wenn die Nudeln gar sind, abgießen, sofort zu der Mischung in die Schüssel geben, " +
            "nochmal alles gründlich durchmischen, dann sogleich servieren.",
        ]
    },{
        category: "italien",
        name: "Spaghetti Bolognese",
        desc: "Da kriegt dein inneres Kind Hunger :)",
        infos: {
            cookingTime: 20,
            difficulty: "normal",
            dateAdded: "26.05.2024"
        },
        img: {
            src: "img/spaghetti bolognese.jpg",
            alt: "Image of Spaghetti Bolognese"
        },
        ingredients: [
        {
            "name" : "Zwiebel(n)",
            "amount" : "1",
            "unit" : "große"
        },{
            "name" : "Knoblauch",
            "amount" : "1",
            "unit" : "Zehe(n)"
        },{
            "name" : "Möhre(n)",
            "amount" : "1",
            "unit" : "große"
        },{
            "name" : "Rinderhackfleisch oder Tartar",
            "amount" : "500",
            "unit" : "g"
        },{
            "name" : "Salz und Pfeffer",
            "amount" : "1",
            "unit" : "Prise(n)"
        },{
            "name" : "Gemüsebrühe (Instant)",
            "amount" : "200",
            "unit" : "ml"
        },{
            "name" : "Tomatenmark",
            "amount" : "70",
            "unit" : "g"
        },{
            "name" : "Oregano",
            "amount" : "1",
            "unit" : "TL"
        },{
            "name" : "Tomaten, stückige, mit Kräutern, z.B. aus dem Tetrapck",
            "amount" : "400",
            "unit" : "g"
        },{
            "name" : "Tomatenketchup",
            "amount" : "2",
            "unit" : "EL"
        },{
            "name" : "Spaghetti",
            "amount" : "500",
            "unit" : "g"
        }
        ],
        nutrition: [
        {
            "name": "kcal",
            "amount": "845"
        },{
            "name": "Eiweiß",
            "amount": "42,00g"
        },{
            "name": "Fett",
            "amount": "30,88g"
        },{
            "name": "Kohlenhydrate",
            "amount": "98,31g"
        }
        ],
        cooktime: {
            worktime: 20,
            oventime: 15,
            cookingTime: 35,
            },
        method: [
            "Zwiebel, Knoblauch und Möhre schälen und in feine Würfel schneiden.",

            "Hackfleisch in die Pfanne geben, langsam erhitzen und im eigenen Fett unter " +
            "Rühren anbraten. Salzen und pfeffern. Zwiebeln, Knoblauch und Möhren  " +
            "dazugeben und kurz mitbraten. Mit der Brühe ablöschen. Dann Tomatenmark,  " +
            "Oregano, die stückigen Tomaten und Tomatenketchup unterrühren. Etwa 40  " +
            "Minuten einkochen lassen.",

            "Spaghetti in Salzwasser bissfest kochen. Durch ein Sieb abgießen, mit kaltem  " +
            "Wasser abschrecken und zusammen mit der Sauce servieren.",

        ]
    },{
        category: "italien",
        name: "Pizza Margherita",
        desc: "Klassisch - aber trotzdem geil",
        infos: {
            cookingTime: 30,
            difficulty: "normal",
            dateAdded: "02.06.2024"
        },
        img: {
            src: "img/pizza margherita.jpg",
            alt: "Image of Pizza Margherita"
        },
        ingredients: [
        {
            "name" : "Frischhefe",
            "amount" : "20",
            "unit" : "g"
        },{
            "name" : "Wasser, lauwarmes",
            "amount" : "125",
            "unit" : "ml"
        },{
            "name" : "Mehl",
            "amount" : "250",
            "unit" : "g"
        },{
            "name" : "Olivenöl",
            "amount" : "4",
            "unit" : "EL"
        },{
            "name" : "Salz und Pfeffer, weißer",
            "amount" : "1",
            "unit" : "Prise(n)"
        },{
            "name" : "Thymian, getrockneter",
            "amount" : "1",
            "unit" : "TL"
        },{
            "name" : "Tomaten",
            "amount" : "400",
            "unit" : "g"
        },{
            "name" : "Knoblauch",
            "amount" : "2",
            "unit" : "Zehe(n)"
        },{
            "name" : "Mozzarella",
            "amount" : "150",
            "unit" : "g"
        },{
            "name" : "Basilikum",
            "amount" : "1/2",
            "unit" : "Bund"
        }
        ],
        nutrition: [
        {
            "name": "kcal",
            "amount": "858"
        },{
            "name": "Eiweiß",
            "amount": "29,01g"
        },{
            "name": "Fett",
            "amount": "38,57g"
        },{
            "name": "Kohlenhydrate",
            "amount": "96,54g"
        }
        ],
        cooktime: {
            worktime: 20,
            oventime: 15,
            cookingTime: 35,
            },
        method: [
            "Das Mehl in eine Schüssel geben und in der Mitte eine Mulde bilden Die Hefe " +
            "zerkrümeln und mit etwas Wasser verrühren. In die Mulde geben, mit Mehl " +
            "bestäuben und zugedeckt 15 Minuten ruhen lassen. Das restliche Wasser, Salz " +
            "und Öl dazugeben und alles zu einem geschmeidigen, glatten Teig verarbeiten. " +
            "Den Teig zugedeckt an einem warmen Ort etwa 1 Stunde gehen lassen, bis sich " +
            "sein Volumen fast verdoppelt hat.",

            "Inzwischen die Tomaten mit kochendem Wasser überbrühen, kurz ziehen lassen, " +
            "abschrecken und häuten. Dann in kleine Würfel schneiden, mit 1 EL Öl in einen " +
            "Topf geben und bei starker Hitze offen etwa 5 Minuten etwas einkochen lassen. " +
            "Tomaten mit Thymian, Salz und Pfeffer abschmecken. Den Knoblauch fein " +
            "hacken und untermischen. Mozzarella in Scheiben schneiden. Basilikum " +
            "waschen, trocken schwenken und die Blättchen von den Stielen zupfen." +

            "Die Pizzaform mit etwas Öl ausstreichen. Den Teig noch einmal gut durchkneten, " +
            "auf wenig Mehl ausrollen, dann in die Pizzaform geben. Den Rand etwas dicker " +
            "formen und mit Öl bestreichen.",

            "Backofen auf 250 °C Ober-/Unterhitze vorheizen.",

            "Die Tomatensauce auf dem Teig verteilen. Mit Mozzarella und Basilikum belegen " +
            "und mit dem restlichen Olivenöl beträufeln.",

            "Die Pizza im heißen Ofen etwa 15 Minuten backen, bis der Teig gebräunt und der " +
            "Käse zerlaufen ist.",

        ]
    },{
        category: "asiatisch",
        name: "ramen",
        desc: "nudeln",
        infos: {
            cookingTime: 30,
            difficulty: "simpel",
            dateAdded: "01.06.2024"
        },
        img: {
            src: "img/ramen.jpg",
            alt: "Image of Ramen"
        },
        ingredients: [
        {
            "name" : "Hühnerbrühepulver",
            "amount" : "2",
            "unit" : "TL"
        },{
            "name" : "Wasser, heißes",
            "amount" : "1/2",
            "unit" : "Liter"
        },{
            "name" : "Ingwer",
            "amount" : "ein",
            "unit" : "bischen"
        },{
            "name" : "Knoblauchzehe(n)",
            "amount" : "1",
            "unit" : "große"
        },{
            "name" : "Sojasauce",
            "amount" : "1",
            "unit" : "EL"
        },{
            "name" : "Mirin",
            "amount" : "2",
            "unit" : "EL"
        },{
            "name" : "Mie-Nudeln, instant",
            "amount" : "100",
            "unit" : "g"
        },{
            "name" : "Pak Choi",
            "amount" : "1",
            "unit" : "ganze"
        },{
            "name" : "Champignons oder andere Pilze",
            "amount" : "5",
            "unit" : "große"
        },{
            "name" : "Hähnchenbrustfilet(s)",
            "amount" : "1",
            "unit" : "ganze"
        },{
            "name" : "Ei(er)",
            "amount" : "1",
            "unit" : "große"
        }
        ],
        nutrition: [
        {
            "name": "kcal",
            "amount": "291"
        },{
            "name": "Eiweiß",
            "amount": "9,1g"
        },{
            "name": "Fett",
            "amount": "0,9g"
        },{
            "name": "Kohlenhydrate",
            "amount": "60,2g"
        }
        ],
        cooktime: {
            worktime: 20,
            oventime: 15,
            cookingTime: 35,
            },
        method: [
            "Das Hühnerbrühepulver mit dem heißen Wasser verrühren. Den Ingwer und die " +
            "Knoblauchzehe klein schneiden in Sojasauce und Mirin erhitzen. Das Ei kochen  " +
            "und die Nudeln in der Hühnerbrühe nach Packungsanweisung garen.",

            "Danach die Hühnerbrühe mit Nudeln durch ein Sieb über Sojasauce, Mirin, " +
            "Ingwer und Knoblauchzehe abgießen, sodass sich beides miteinander vermischt.",

            "Das Hähnchenbrustfilet in ca. 1 cm dicke Scheiben schneiden und in ein wenig " +
            "Fett, Sojasauce und Mirin anbraten. Den Pak Choi und die Pilze kleinschneiden " +
            "und anschwitzen.",

            "Die Nudeln in eine Schüssel geben, den Pak Choi und die Pilze sowie das " +
            "gekochte halbierte Ei und Hähnchenbrustfilet darauf anrichten und die Brühe " +
            "darübergießen.",

        ]
    },{
        category: "asiatisch",
        name: "Gebratener Reis mit Ei",
        desc: "Reis",
        infos: {
            cookingTime: 10,
            difficulty: "simpel",
            dateAdded: "01.06.2024"
        },
        img: {
            src: "img/egg fried rice.jpeg",
            alt: "Image of Egg Fried Rice"
        },
        ingredients: [
        {
            "name" : "Reis, gekocht, kalt, vom Vortag",
            "amount" : "1",
            "unit" : "Port."
        },{
            "name" : "Ei(er)",
            "amount" : "1",
            "unit" : "große"
        },{
            "name" : "Schalotte(n)",
            "amount" : "1",
            "unit" : "große"
        },{
            "name" : "Chillischote(n)",
            "amount" : "1",
            "unit" : "große"
        },{
            "name" : "Knoblauchzehe(n)",
            "amount" : "2",
            "unit" : "große"
        },{
            "name" : "Frühlingszwiebel(n)",
            "amount" : "1",
            "unit" : "große"
        },{
            "name" : "Pflanzenöl, geröstet",
            "amount" : "2",
            "unit" : "EL"
        },{
            "name" : "Sesamöl",
            "amount" : "1",
            "unit" : "EL"
        },{
            "name" : "Sojasauce",
            "amount" : "1",
            "unit" : "EL"
        },{
            "name" : "Glutamat",
            "amount" : "1",
            "unit" : "TL"
        },{
            "name" : "Pfeffer, weißer",
            "amount" : "1",
            "unit" : "Prise(n)"
        }
        ],
        nutrition: [
        {
            "name": "kcal",
            "amount": "187"
        },{
            "name": "Eiweiß",
            "amount": "4,6g"
        },{
            "name": "Fett",
            "amount": "5,8g"
        },{
            "name": "Kohlenhydrate",
            "amount": "28,1g"
        }
        ],
        cooktime: {
            worktime: 20,
            oventime: 15,
            cookingTime: 35,
            },
        method: [
            "Frühlingszwiebel, Schalotte, Knoblauch und Chili klein hacken.",

            "Pflanzenöl im Wok erhitzen, Schalotten, Knoblauch und Chili hinzufügen und " +
            "scharf anbraten. Ei hinzufügen und verrühren. Reis, Sesamöl, Sojasauce, " +
            "Glutamat und Pfeffer hinzufügen und weiter unter ständigem Rühren braten. " +
            "Wenn der gewünschte Bräunungsgrad erreicht ist, Frühlingszwiebeln hinzufügen " +
            "und servieren.",

            "Optional können zu dem Basisrezept noch Extras dem Reis hinzugefügt " +
            "werden wie bzw. Erbsen, Karotten (gewürfelt), Paprika, Tofu oder Garnelen.",
        ]
    },{
        category: "asiatisch",
        name: "Sushi Variationen",
        desc: "Makis, Nigiris und California Roll",
        infos: {
            cookingTime: 45,
            difficulty: "pfiffig",
            dateAdded: "01.06.2024"
        },
        img: {
            src: "img/sushi.jpeg",
            alt: "Image of Sushi"
        },
        ingredients: [
        {
            "name" : "Reis (Sushireis) ungekocht",
            "amount" : "450",
            "unit" : "g"
        },{
            "name" : "Avocado(s)",
            "amount" : "1",
            "unit" : "große"
        },{
            "name" : "Gurke(n)",
            "amount" : "1",
            "unit" : "große"
        },{
            "name" : "Mayonnaise",
            "amount" : "1",
            "unit" : "EL"
        },{
            "name" : "Sesam, geröstet",
            "amount" : "2",
            "unit" : "EL"
        },{
            "name" : "Lachs",
            "amount" : "150",
            "unit" : "g"
        },{
            "name" : "Surimi (Krebsfleischimitat)",
            "amount" : "1",
            "unit" : "Pck."
        },{
            "name" : "Garnele(n)",
            "amount" : "6",
            "unit" : "große"
        },{
            "name" : "Thunfischfilet(s)",
            "amount" : "150",
            "unit" : "g"
        },{
            "name" : "Wasabipaste",
            "amount" : "ein",
            "unit" : "bisschen"
        },{
            "name" : "Noriblätter",
            "amount" : "ein",
            "unit" : "paar"
        },{
            "name" : "Ingwer, eingelegter (Gari)",
            "amount" : "ein",
            "unit" : "bisschen"
        },{
            "name" : "Sojasauce",
            "amount" : "3",
            "unit" : "EL"
        },{
            "name" : "Salat - Blätter, z.B. Lollo Rosso",
            "amount" : "ein",
            "unit" : "bisschen"
        }
        ],
        nutrition: [
        {
            "name": "kcal",
            "amount": "349"
        },{
            "name": "Eiweiß",
            "amount": "7,8g"
        },{
            "name": "Fett",
            "amount": "19g"
        },{
            "name": "Kohlenhydrate",
            "amount": "33g"
        }
        ],
        cooktime: {
            worktime: 20,
            oventime: 15,
            cookingTime: 35,
            },
        method: [
            "Bevor es losgeht, die Sushi-Matte mit Klarsichtfolie einwickeln, so bleibt die " +
            "Matte sauber und der Reis kann sich nicht in den Zwischenräumen der dünnen " +
            "Bambusstangen verkleben.",

            "Maki mit Lachs" +
            "Ein Noriblatt nehmen und mit einem Messer halbieren. Das Blatt mit der rauen " +
            "Seite nach oben auf die Bambusmatte legen, so bleibt der Reis besser daran " +
            "haften. Nun die Finger in einer Schale mit Wasser leicht befeuchten und eine " +
            "Menge abgekühlten Reis auf dem Noriblatt so verteilen, dass das Algenblatt mit " +
            "Reis bedeckt ist, nur unten sollte ein freier Rand bleiben, damit man später die " +
            "Rolle kleben kann. Nun den Lachs in Stiftform schneiden und der Länge nach auf " +
            "den Reis legen. Den Lachs mit Wasabi bestreichen, aber nur dünn, denn Wasabi " +
            "ist recht scharf. Dann den unbedeckten Rand des Noriblattes anfeuchten, und " +
            "von der anderen Seite beginnend die Bambusmatte einschlagen, sodass eine " +
            "Rolle entsteht. Drückt man die eingerollte Bambusmatte von oben und den  " +
            "Seiten an, erhält man eine viereckige Form.",

            "California Roll oder Inside-Out " +
            "Ein halbes Algenblatt nehmen, auf den vorderen Bereich der Matte legen und die " +
            "raue Seite komplett mit Reis bedecken, Sesam auf den Reis streuen. Die freie " +
            "Seite der Bambusmatte nehmen, über das Algenblatt mit dem Reis schlagen, " +
            "andrücken und umdrehen, so haben wir nun die andere Seite des Algenblattes " +
            "vor uns liegen, der Reis ist unten. Ein wenig Mayonnaise längs auf dem Algenblatt " +
            "verteilen, Surimi ebenfalls längs auf die Mayo geben, Gurke und Avocado in Stifte " +
            "schneiden und dazu geben. Mit etwas Wasabi bestreichen und zum Schluss ein " +
            "wenig Lollo Rosso obenauf legen. Nun das Ganze mit Hilfe der Bambusmatte einrollen.",

            "Nigiris mit Thunfisch und Garnelen " + 
            "Dafür den Thunfisch in mundgerechte dünne Scheiben schneiden, Garnelen von " +
            "ihrem Panzer befreien. Beides mit etwas Wasabi einstreichen. Die Hände " +
            "befeuchten, etwas Reis nehmen und diesen erst oval im Handrücken rollen und " +
            "dann zu einer Kastenform drücken. Den Fisch auf dem Reis platzieren. " +
            "Die Anzahl der Nigiris im Verhältnis zu den Makis hängt ganz von Ihren " +
            "Präferenzen ab, mögen Sie lieber Makis, machen Sie einfach mehr Sushirollen. " +
            "Hier kann eine Rolle selbstverständlich auch komplett vegetarisch werden, z.B. " +
            "mit nur Avocado oder Shiitake Pilzen oder nach eigenem Gusto auch bunt variiert " +
            "mit Gemüse und Fisch. Natürlich können Sie auch andere Meeresbewohner für " +
            "die Nigiris verwenden, z.B. Lachs, Oktopus, Makrele, Jacobsmuschel etc. " +
            "Bedenken Sie nur vorab beim Einkauf, die Menge der Meereszutaten Ihren " +
            "Wünschen anzupassen. Und achten Sie darauf immer frischen Fisch zu kaufen, " +
            "am besten sagen Sie dazu, dass Sie Sushi machen wollen.",

            "Zum Anrichten die Rollen nun in ca. 6 bis 8 Stücke schneiden, dafür ein scharfes " +
            "Messer nehmen und vor jedem Schnitt leicht befeuchten, so hat man saubere " +
            "Schnitte und keinen Reis überall an den Rändern der Rolle kleben. Die Stücke mit " +
            "den Nigiris auf einem Teller anrichten. Den eingelegten Ingwer und die Sojasauce " +
            "in separaten Schalen dazu reichen. Sowohl Nigiris als auch Makis können in die " +
            "Sojasauce getunkt werden, das gibt nochmal zusätzlichen Geschmack, ebenso kann die " +
            "Wasabipaste nochmals extra dazu gereicht werden. Der Ingwer dient zur " +
            "Geschmacksneutralisation zwischen zwei verschiedenen Sushihäppchen, manch " +
            "einer isst ihn aber auch einfach dazu.",
        ]
    },{
        category: "asiatisch",
        name: "Stir fry",
        desc: "stir fry",
        infos: {
            cookingTime: 15,
            difficulty: "simpel",
            dateAdded: "01.06.2024"
        },
        img: {
            src: "img/stir fry.jpeg",
            alt: "Image of stir fry"
        },
        ingredients: [
        {
            "name" : "Hähnchenbrustfilet(s) oder Putenbrustfilet",
            "amount" : "500",
            "unit" : "g"
        },{
            "name" : "Olivenöl",
            "amount" : "ein",
            "unit" : "bisschen"
        },{
            "name" : "Zuckerschote(n), ca. 200g",
            "amount" : "1",
            "unit" : "Pck."
        },{
            "name" : "Brokkoli, ca. 500g",
            "amount" : "1",
            "unit" : "Kopf"
        },{
            "name" : "Karotte(n)",
            "amount" : "2",
            "unit" : "große"
        },{
            "name" : "Zucchini",
            "amount" : "2",
            "unit" : "kleine"
        },{
            "name" : "Paprikaschote(n)",
            "amount" : "1",
            "unit" : "große"
        },{
            "name" : "Champignons, optional",
            "amount" : "ein",
            "unit" : "wenig"
        },{
            "name" : "Sojasauce",
            "amount" : "2",
            "unit" : "EL"
        },{
            "name" : "Sweet Chilli Sauce",
            "amount" : "1",
            "unit" : "EL"
        },{
            "name" : "Honig, flüssiger",
            "amount" : "2",
            "unit" : "EL"
        },{
            "name" : "Salz und Pfeffer",
            "amount" : "n.",
            "unit" : "B."
        }
        ],
        nutrition: [
        {
            "name": "kcal",
            "amount": "52"
        },{
            "name": "Eiweiß",
            "amount": "1,9g"
        },{
            "name": "Fett",
            "amount": "2,7g"
        },{
            "name": "Kohlenhydrate",
            "amount": "3,3g"
        }
        ],
        cooktime: {
            worktime: 20,
            oventime: 15,
            cookingTime: 35,
            },
        method: [
            "Das Gemüse und das Fleisch in mundgerechte Stückchen schneiden. Die Zutaten " +
            "für die Sauce in einer Schüssel zusammenrühren.",

            "Die Hähnchenstücke in etwas Öl anbraten. Wenn diese gebräunt sind, die " +
            "Gemüsestückchen dazugeben. Jetzt die Sauce darübergießen und alles gut " +
            "umrühren. Anschließend köcheln, bis das Gemüse gar, aber nicht matschig ist, " +
            "zwischendurch ab und zu umrühren.",
            
            "Bei Bedarf mit Salz und Pfeffer nachwürzen (mir persönlich reicht es durch die " +
            "Sauce).",

            "Mit Reis servieren.",
        ]
    }
]