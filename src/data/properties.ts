export interface Property {
  id: string;
  slug: string;
  title: string;
  type: "maison" | "appartement" | "terrain" | "autre";
  city: string;
  postalCode: string;
  price: number;
  surface: number;
  rooms: number;
  bedrooms: number;
  bathrooms: number;
  showerRooms: number;
  toilets: number;
  landSurface?: number;
  parking: number;
  features: string[];
  dpe: "A" | "B" | "C" | "D" | "E" | "F" | "G" | "N/A";
  ges: "A" | "B" | "C" | "D" | "E" | "F" | "G" | "N/A";
  reference: string;
  mandate: string;
  mainImage: string;
  images: string[];
  description: string;
  shortDescription: string;
  address?: string;
  status: "disponible" | "sous-compromis" | "vendu";
}

export const properties: Property[] = [
  {
    id: "1",
    slug: "maison-familiale-marines",
    title: "Maison familiale 8 pièces - Marines",
    type: "maison",
    city: "Marines",
    postalCode: "95640",
    price: 579000,
    surface: 196.87,
    rooms: 8,
    bedrooms: 5,
    bathrooms: 1,
    showerRooms: 1,
    toilets: 2,
    landSurface: 606,
    parking: 2,
    features: [
      "Piscine",
      "Cheminée",
      "Système d'alarme",
      "Double vitrage",
      "Cuisine américaine",
      "Vue dégagée",
      "Tout à l'égout",
      "Garage",
    ],
    dpe: "C",
    ges: "C",
    reference: "VM37522",
    mandate: "16091",
    mainImage: "/biens/maison-marines/maison-ext.jpeg",
    images: [
      "/biens/maison-marines/maison-ext.jpeg",
      "/biens/maison-marines/maison-ext1.jpeg",
      "/biens/maison-marines/salon.jpeg",
      "/biens/maison-marines/piece.jpeg",
      "/biens/maison-marines/cuisine.jpeg",
      "/biens/maison-marines/chambre.jpeg",
      "/biens/maison-marines/chbre.jpeg",
      "/biens/maison-marines/sdb.jpeg",
      "/biens/maison-marines/douche.jpeg",
      "/biens/maison-marines/entree.jpeg",
      "/biens/maison-marines/terrasse.jpeg",
    ],
    address: "31 Rue Claude Mantel, Marines 95640",
    status: "disponible",
    shortDescription:
      "Magnifique maison familiale de 197 m² avec 8 pièces, piscine et jardin sans vis-à-vis au cœur de Marines.",
    description: `La maison pensée pour les grandes familles – 8 pièces – 197 m² – Marines centre

6 chambres, des volumes à revendre et tout à portée de main

Bienvenue à Marines, où cette maison généreuse et bien pensée coche toutes les cases pour accueillir une grande famille sans compromis.

Avec près de 200 m² habitables, chacun y trouvera sa place : 6 vraies chambres, dont une suite parentale en rez-de-chaussée avec salle d'eau pour les parents, les grands-parents ou les invités, dressing.

Un bureau pour télétravailler au calme (ou éviter la guerre des devoirs à la table du salon), et des combles aménageables pour inventer un cocon en plus : salle de jeux, studio d'ado, coin lecture… à vous de voir !

Côté vie commune, la pièce de vie de plus de 50 m² offre un espace central parfait pour rassembler toute la tribu : grande cuisine ouverte récente et fonctionnelle, salle à manger conviviale, séjour lumineux… On y vit, on y rit, on y grandit.

Le jardin sans vis-à-vis, sécurisé et au calme, est l'endroit rêvé pour les après-midis piscine hors sol, les jeux d'enfants et les barbecues du dimanche.

Ajoutez à cela un garage, des places de stationnement privatives, une cave et un grand atelier jardin, pour tout ce qu'on ne veut pas voir traîner dans la maison – et vous avez là une maison aussi pratique qu'accueillante.

Bien située dans Marines, tout se fait à pied : écoles, centre-ville, commerces, activités… Fini les allers-retours en voiture !

C'est une maison évolutive, fonctionnelle, chaleureuse, qui accompagnera chaque étape de votre vie de famille, de la poussette aux clés du scooter.

État impeccable. À visiter immédiatement.

Honoraires à la charge du vendeur.

Classe énergie C, Classe climat C

Montant estimé des dépenses annuelles d'énergie pour un usage standard : entre 2 400 € et 3 260 € sur les années 2021, 2022 et 2023 (abonnements compris).`,
  },
  {
    id: "2",
    slug: "terrain-constructible-labbeville",
    title: "Terrain arboré constructible - Labbeville",
    type: "terrain",
    city: "Labbeville",
    postalCode: "95690",
    price: 169000,
    surface: 1885, // 18 a 85 ca = 1885 m²
    rooms: 0,
    bedrooms: 0,
    bathrooms: 0,
    showerRooms: 0,
    toilets: 0,
    landSurface: 1885,
    parking: 0,
    features: [
      "Calme",
      "Arbres fruitiers",
      "Plat",
      "Lot arrière",
      "Presque viabilisé",
    ],
    dpe: "N/A",
    ges: "N/A",
    reference: "VT2617",
    mandate: "16878",
    mainImage: "/biens/terrain2617/ext.jpeg",
    images: [
      "/biens/terrain2617/ext.jpeg",
      "/biens/terrain2617/ext1.jpeg",
      "/biens/terrain2617/ext2.jpeg",
      "/biens/terrain2617/ext3.jpeg",
    ],
    address: "44 rue du grand biard, Labbeville 95690",
    status: "disponible",
    shortDescription:
      "À 5 minutes de Vallangoujard, beau terrain constructible plat et arboré de 1885 m², au calme.",
    description: `Terrain constructible à vendre – Labbeville (95690)

À 5 minutes de Vallangoujard, au calme, terrain constructible en lot arrière.

Beau terrain plat et arboré, idéal pour construire la maison de vos rêves dans un environnement paisible.

Points forts :
• Terrain plat, facile à aménager
• Arboré avec arbres fruitiers
• Au calme, lot arrière
• Presque viabilisé : canalisation prévue, juste à raccorder

Caractéristiques techniques :
• Surface totale : 18 a 85 ca (1885 m²)
• Surface constructible : 04 a 63 ca (463 m²)
• Emprise au sol : 116 m²
• Servitude : Droit de passage

À savoir :
• Permis de construire : Non obtenu
• Viabilisation : Non (presque viabilisé)
• Assainissement : Non
• Raccordement eau/électricité/gaz/télécoms : Non

Honoraires à la charge du vendeur.

Les informations sur les risques auxquels ce bien est exposé sont disponibles sur le site Géorisques : georisques.gouv.fr.`,
  },
  {
    id: "3",
    slug: "maison-ville-chaumont-en-vexin",
    title: "Maison de ville à saisir - Chaumont-en-Vexin",
    type: "maison",
    city: "Chaumont-en-Vexin",
    postalCode: "60240",
    price: 130000,
    surface: 59.93,
    rooms: 4,
    bedrooms: 2,
    bathrooms: 0,
    showerRooms: 1,
    toilets: 1,
    landSurface: undefined,
    parking: 1,
    features: [
      "Double vitrage",
      "Garage",
      "3 niveaux",
      "Village de charme",
      "À rafraîchir",
    ],
    dpe: "F",
    ges: "C",
    reference: "VM9696",
    mandate: "14654",
    mainImage: "/biens/maison-fresneaux/salon.jpeg",
    images: [
      "/biens/maison-fresneaux/salon.jpeg",
      "/biens/maison-fresneaux/piece.jpeg",
      "/biens/maison-fresneaux/piece2.jpeg",
      "/biens/maison-fresneaux/cuisine.jpeg",
      "/biens/maison-fresneaux/chbre.jpeg",
      "/biens/maison-fresneaux/douche.jpeg",
      "/biens/maison-fresneaux/entree.jpeg",
    ],
    address: "6 Rue du Becquet, Chaumont-en-Vexin 60240",
    status: "disponible",
    shortDescription:
      "Maison de ville pleine de potentiel à 10 min de Chaumont-en-Vexin. Idéale premier achat ou investissement. 130 000 € seulement !",
    description: `Maison de ville à saisir – 130 000 € seulement !

À 10 minutes de Chaumont-en-Vexin, découvrez cette maison de ville pleine de potentiel, idéale pour un premier achat ou un investissement malin.

Au rez-de-chaussée :
• Une pièce de vie conviviale avec son coin cuisine
• Un coin buanderie
• Une salle de bain avec WC

Au 1er étage :
• Un palier pouvant accueillir un bureau ou une petite chambre
• Une chambre

Au 2ème étage :
• Une grande chambre sous les toits, pleine de charme

La maison demande une rénovation, mais c'est justement ce qui en fait une belle opportunité à ce prix imbattable ! Vous pourrez la façonner selon vos envies et créer un cocon qui vous ressemble.

Située dans un village plein de charme, à la campagne, elle n'attend plus que vous pour lui redonner vie.

Prix : 130 000 € – une opportunité rare à ne pas manquer !

Contactez-moi pour organiser une visite et laissez-vous séduire par son potentiel.

Honoraires à la charge du vendeur.

Classe énergie F, Classe climat C

Logement à consommation énergétique excessive.

Montant estimé des dépenses annuelles d'énergie pour un usage standard : entre 2 250 € et 3 100 € sur les années 2021, 2022 et 2023 (abonnements compris).`,
  },
  {
    id: "4",
    slug: "domaine-equestre-chars",
    title: "Domaine équestre d'exception - Chars",
    type: "maison",
    city: "Chars",
    postalCode: "95750",
    price: 1700000,
    surface: 395,
    rooms: 14,
    bedrooms: 6,
    bathrooms: 2,
    showerRooms: 2,
    toilets: 4,
    landSurface: 52300, // 5,23 hectares
    parking: 10,
    features: [
      "5,23 hectares",
      "22 boxes",
      "Manège 40x20m",
      "Carrière 70x40m",
      "Marcheur 6 places",
      "Piscine",
      "2 maisons",
      "7 paddocks",
      "Vue dégagée",
    ],
    dpe: "F",
    ges: "F",
    reference: "VM7632",
    mandate: "13292",
    mainImage: "/biens/maison-chars/domaine.jpeg",
    images: [
      "/biens/maison-chars/domaine.jpeg",
      "/biens/maison-chars/domaine-equestre.jpeg",
      "/biens/maison-chars/facade.jpeg",
      "/biens/maison-chars/ext-facade.jpeg",
      "/biens/maison-chars/ecurie.jpeg",
      "/biens/maison-chars/ecurie1.jpeg",
      "/biens/maison-chars/training.jpeg",
      "/biens/maison-chars/camp.jpeg",
      "/biens/maison-chars/pre.jpeg",
      "/biens/maison-chars/pre1.jpeg",
    ],
    address: "16 Rue de la Groue, Chars 95750",
    status: "disponible",
    shortDescription:
      "Domaine équestre d'exception de 5,23 hectares avec 2 maisons, 22 boxes, manège, carrières et installations professionnelles.",
    description: `Domaine équestre d'exception – Chars (95750)

Situé en lisière d'une charmante petite ville, ce domaine équestre d'exception s'étend sur plus de 5,23 hectares boisés et parfaitement aménagés.

Il comprend deux maisons d'habitation et des installations équestres complètes, conçues pour optimiser le travail des chevaux dans les meilleures conditions, quelle que soit la météo ou la discipline pratiquée.

INFRASTRUCTURES ÉQUESTRES DE QUALITÉ :

• Manège aéré et lumineux de 40x20 mètres avec sol BordSol refait récemment
• Carrière principale de 70x40 m en sol Toubin & Clément, avec lices arrondies
• Deuxième carrière de 58x38 mètres, intégrant un marcheur couvert 6 places, récent
• Rond de longe de 17 mètres avec sol T&C

Les chevaux sont logés dans une grande cour d'écuries composée de 22 boxes en bois, selleries, graineterie, douche, zones de préparation et espace de stockage. Les aménagements sont pensés pour réduire les déplacements et faciliter l'entretien quotidien.

EXTÉRIEURS :
• 7 paddocks récemment créés et bien clôturés
• Grande pâture de 6 000 m² pouvant être divisée

DEUX MAISONS CONFORTABLES ET INDÉPENDANTES :

La première maison (141 m²) offre un intérieur chaleureux avec tomettes, cheminées, salle à manger, salon, bureau (ou chambre), deux chambres à l'étage et une grande salle de bain. Terrasse avec vue dominante, jardin et piscine.

La seconde maison (255 m²), actuellement divisée en plusieurs logements (3 appartements + 3 studios), est idéale pour du personnel, des gîtes ou des stages. Une grande pièce avec kitchenette et poêle à bois peut faire office de club-house.

Les deux maisons peuvent être rafraîchies et mériteraient une meilleure isolation. Chauffage au gaz.

LOCALISATION STRATÉGIQUE :
À seulement 10-15 minutes de Magny-en-Vexin ou de Gisors, et à 1h de Paris (périphérique), ce domaine est un véritable outil de travail opérationnel.

Il conviendra parfaitement à un cavalier professionnel, une écurie de propriétaires ou un projet de développement équestre. De nombreux chemins alentour raviront les amateurs d'extérieur.

POTENTIEL :
Possibilité de créer d'autres boxes ou d'aménager les parcelles d'herbage pour étendre l'activité.

Un cadre de vie rare, au calme, où travail et bien-être se conjuguent au quotidien.

Honoraires à la charge du vendeur.

Classe énergie F, Classe climat F

Logement à consommation énergétique excessive.

Montant estimé des dépenses annuelles d'énergie pour un usage standard : entre 3 230 € et 4 400 € sur les années 2021, 2022 et 2023 (abonnements compris).`,
  },
  {
    id: "5",
    slug: "terrain-constructible-conflans",
    title: "Terrain plat constructible - Conflans-Sainte-Honorine",
    type: "terrain",
    city: "Conflans-Sainte-Honorine",
    postalCode: "78700",
    price: 180000,
    surface: 379,
    rooms: 0,
    bedrooms: 0,
    bathrooms: 0,
    showerRooms: 0,
    toilets: 0,
    landSurface: 379,
    parking: 0,
    features: [
      "Exclusivité",
      "Terrain plat",
      "Libre de constructeur",
      "Lot arrière",
      "Possibilité maison 140m²",
      "Annexe 70m² à rénover",
    ],
    dpe: "N/A",
    ges: "N/A",
    reference: "VT1088",
    mandate: "8747",
    mainImage: "/biens/maison-conflans/ext.jpeg",
    images: [
      "/biens/maison-conflans/ext.jpeg",
      "/biens/maison-conflans/entree.jpeg",
      "/biens/maison-conflans/garage.jpeg",
    ],
    address: "18bis Rue Française, Conflans-Sainte-Honorine 78700",
    status: "disponible",
    shortDescription:
      "Exclusivité ! Terrain plat constructible de 379 m² libre de constructeur. Possibilité maison 140m² ou annexe 70m² à rénover.",
    description: `Exclusivité – Terrain constructible à Conflans-Sainte-Honorine (78700)

À vendre terrain plat constructible, libre de constructeur, 379 m², non viabilisé. Lot arrière.

OPTION 1 : Construction neuve
Possibilité de construire une maison de 140 m² avec 4 chambres.

OPTION 2 : Rénovation
Annexe de 70 m² à rénover selon vos envies.

Caractéristiques :
• Surface : 03 a 79 ca (379 m²)
• Terrain plat
• Lot arrière, au calme
• Libre de constructeur
• Non viabilisé

Prix : 180 000 € (honoraires inclus de 4.17% TTC à la charge de l'acquéreur)
Prix hors honoraires : 172 800 €

Les informations sur les risques auxquels ce bien est exposé sont disponibles sur le site Géorisques : georisques.gouv.fr.`,
  },
  {
    id: "6",
    slug: "maison-familiale-mesnil-theribus",
    title: "Maison familiale sans vis-à-vis - Le Mesnil-Théribus",
    type: "maison",
    city: "Le Mesnil-Théribus",
    postalCode: "60240",
    price: 332800,
    surface: 153,
    rooms: 7,
    bedrooms: 4,
    bathrooms: 1,
    showerRooms: 1,
    toilets: 2,
    landSurface: 2633,
    parking: 2,
    features: [
      "Sans vis-à-vis",
      "Jardin clos 2600 m²",
      "Terrasse",
      "Séjour cathédrale",
      "Cuisine américaine",
      "Bureau",
      "Mezzanine bureau",
      "Chambres avec dressing",
      "Garage double",
      "Exposition Sud-Ouest",
      "Chauffage électrique",
    ],
    dpe: "D",
    ges: "B",
    reference: "VM6578",
    mandate: "12410",
    mainImage: "/biens/maison-chaumont/facade.jpeg",
    images: [
      "/biens/maison-chaumont/facade.jpeg",
      "/biens/maison-chaumont/arriere.jpeg",
      "/biens/maison-chaumont/salon.jpeg",
      "/biens/maison-chaumont/cuisine.jpeg",
      "/biens/maison-chaumont/entrée.jpeg",
      "/biens/maison-chaumont/bureau.jpeg",
      "/biens/maison-chaumont/chambre.jpeg",
      "/biens/maison-chaumont/chambre2.jpeg",
      "/biens/maison-chaumont/chambre3.jpeg",
      "/biens/maison-chaumont/sdb.jpeg",
    ],
    address: "1 Sente du Tour de Ville, Le Mesnil-Théribus 60240",
    status: "disponible",
    shortDescription:
      "Maison familiale sans vis-à-vis nichée dans un écrin de verdure à 5 min de Chaumont-en-Vexin. 7 pièces, 153 m², jardin clos 2600 m², garage double.",
    description: `Le Mesnil-Théribus à 5 minutes de Chaumont-en-Vexin – Maison familiale sans vis-à-vis nichée dans un écrin de verdure.

Elle vous offre au rez-de-chaussée un séjour cathédrale baigné de lumière donnant sur une terrasse, une cuisine américaine ouverte sur la salle à manger et le séjour, deux chambres, une salle d'eau, wc séparés et un bureau.

À l'étage, la mezzanine est aménagée en espace bureau, deux chambres avec dressing intégré et une pièce supplémentaire offrant la possibilité de créer une deuxième salle d'eau.

Ce bien se complète d'un jardin clos de plus de 2600 m², parfait pour profiter des beaux jours, et d'un garage double. Venez découvrir ce havre de paix à quelques minutes des commodités.

Honoraires inclus de 4 % TTC à la charge de l'acquéreur. Prix hors honoraires : 320 000 €.

Classe énergie D, Classe climat B.

Montant estimé des dépenses annuelles d'énergie pour un usage standard : entre 2 700 € et 3 680 € sur les années 2021, 2022 et 2023 (abonnements compris).

Les informations sur les risques auxquels ce bien est exposé sont disponibles sur le site Géorisques : georisques.gouv.fr.`,
  },
  {
    id: "7",
    slug: "appartement-pontoise",
    title: "Appartement 2 pièces très bien situé - Pontoise",
    type: "appartement",
    city: "Pontoise",
    postalCode: "95000",
    price: 132900,
    surface: 46.12,
    rooms: 2,
    bedrooms: 1,
    bathrooms: 0,
    showerRooms: 1,
    toilets: 1,
    landSurface: undefined,
    parking: 0,
    features: [
      "Rez-de-chaussée",
      "Cuisine aménagée",
      "Cave",
      "Local vélo",
      "Digicode",
      "Copropriété 2 lots",
      "Proximité commerces",
      "Stationnement facile",
    ],
    dpe: "F",
    ges: "F",
    reference: "VA9764",
    mandate: "",
    mainImage: "/biens/appartement_pontoise/pieces-vue.jpeg",
    images: [
      "/biens/appartement_pontoise/pieces-vue.jpeg",
      "/biens/appartement_pontoise/pièce1.jpeg",
      "/biens/appartement_pontoise/cuisine.jpeg",
      "/biens/appartement_pontoise/lit.jpeg",
      "/biens/appartement_pontoise/douche.jpeg",
      "/biens/appartement_pontoise/console.jpeg",
      "/biens/appartement_pontoise/exterieur.jpeg",
      "/biens/appartement_pontoise/hall-immeuble.jpeg",
    ],
    address: "Pontoise 95000",
    status: "disponible",
    shortDescription:
      "Idéal pour un couple ou une personne seule, appartement au RDC de 46 m² à Pontoise. Séjour, cuisine aménagée, chambre, salle d'eau, WC séparés, cave et local vélo.",
    description: `Idéal pour un couple ou une personne seule, découvrez cet appartement au rez-de-chaussée de 46 m² situé à Pontoise, une ville dynamique.

Cet espace de vie offre tout le confort nécessaire pour un cadre de vie agréable : un séjour, une cuisine aménagée, une chambre, une salle d'eau et des WC séparés.

Ce bien est complété par une cave et un local à vélo. Vous apprécierez la proximité des services et des commodités locales, facilitant ainsi votre quotidien.

L'appartement dispose également d'un digicode, garantissant une sécurité optimale et une tranquillité d'esprit pour ses habitants. Possibilité de se garer facilement.

Honoraires inclus de 3.99% TTC à la charge de l'acquéreur. Prix hors honoraires : 127 800 €.

Dans une copropriété de 2 lots. Quote-part moyenne du budget prévisionnel : 1 900 €/an. Aucune procédure n'est en cours.

Classe énergie F, Classe climat F - Logement à consommation énergétique excessive.

Montant estimé des dépenses annuelles d'énergie pour un usage standard : entre 940 € et 1 310 € sur les années 2021, 2022 et 2023 (abonnements compris).

Les informations sur les risques auxquels ce bien est exposé sont disponibles sur le site Géorisques : georisques.gouv.fr.`,
  },
  {
    id: "8",
    slug: "appartement-saint-ouen-laumone",
    title: "Appartement 3 pièces en excellent état - Saint-Ouen-l'Aumône",
    type: "appartement",
    city: "Saint-Ouen-l'Aumône",
    postalCode: "95310",
    price: 239000,
    surface: 68.14,
    rooms: 3,
    bedrooms: 2,
    bathrooms: 0,
    showerRooms: 1,
    toilets: 1,
    landSurface: undefined,
    parking: 2,
    features: [
      "Exclusivité",
      "Excellent état",
      "Balcon 10 m²",
      "Box double (9m)",
      "Parking sous-sol",
      "Cuisine américaine équipée",
      "Buanderie",
      "Copropriété 232 lots",
      "Proximité commerces",
    ],
    dpe: "C",
    ges: "A",
    reference: "VA31680",
    mandate: "",
    mainImage: "/biens/appt saint-ouen/salon.jpeg",
    images: [
      "/biens/appt saint-ouen/salon.jpeg",
      "/biens/appt saint-ouen/salon1.jpeg",
      "/biens/appt saint-ouen/cuisine.jpeg",
      "/biens/appt saint-ouen/chambre.jpeg",
      "/biens/appt saint-ouen/chmbre.jpeg",
      "/biens/appt saint-ouen/sdb.jpeg",
      "/biens/appt saint-ouen/terrasse.jpeg",
    ],
    address: "Saint-Ouen-l'Aumône 95310",
    status: "disponible",
    shortDescription:
      "En exclusivité, appartement 3 pièces en excellent état de 68 m² avec balcon 10 m², box double et parking. Proche toutes commodités.",
    description: `En exclusivité, appartement 3 pièces en excellent état de 68 m² avec séjour et cuisine américaine équipée, deux chambres, une salle d'eau, WC avec buanderie, agrémenté d'un balcon de 10 m².

Ce bien se complète d'un box double (9 mètres de long) et d'un parking en sous-sol, proche de toutes commodités.

Honoraires inclus de 4.17% TTC à la charge de l'acquéreur. Prix hors honoraires : 229 440 €.

Dans une copropriété de 232 lots. Quote-part moyenne du budget prévisionnel : 1 712 €/an. Aucune procédure n'est en cours.

Classe énergie C, Classe climat A.

Montant estimé des dépenses annuelles d'énergie pour un usage standard : entre 960 € et 1 340 € sur les années 2021, 2022 et 2023 (abonnements compris).

Les informations sur les risques auxquels ce bien est exposé sont disponibles sur le site Géorisques : georisques.gouv.fr.`,
  },
  {
    id: "9",
    slug: "maison-lumineuse-gournay-en-bray",
    title: "Maison lumineuse avec espace extérieur généreux - Gournay-en-Bray",
    type: "maison",
    city: "Gournay-en-Bray",
    postalCode: "76220",
    price: 219000,
    surface: 122,
    rooms: 5,
    bedrooms: 3,
    bathrooms: 0,
    showerRooms: 1,
    toilets: 1,
    landSurface: 500,
    parking: 1,
    features: [
      "Entièrement rénovée",
      "Terrasse vue dégagée",
      "Jardin 500 m²",
      "Garage",
      "Buanderie",
      "Dépendance avec pièce supplémentaire",
      "Insert bois",
      "Cuisine équipée",
      "Placards",
      "Exposition Sud",
      "Vue dégagée",
      "Cheminée",
      "Assainissement individuel",
    ],
    dpe: "D",
    ges: "B",
    reference: "VM37242",
    mandate: "16067",
    mainImage: "/biens/maison-lumineuse/ext-1erephoto.jpeg",
    images: [
      "/biens/maison-lumineuse/ext-1erephoto.jpeg",
      "/biens/maison-lumineuse/ext.jpeg",
      "/biens/maison-lumineuse/salon.jpeg",
      "/biens/maison-lumineuse/salon2.jpeg",
      "/biens/maison-lumineuse/salon3.jpeg",
      "/biens/maison-lumineuse/cuisine.jpeg",
      "/biens/maison-lumineuse/chambre.jpeg",
      "/biens/maison-lumineuse/chambre2.jpeg",
      "/biens/maison-lumineuse/sdb.jpeg",
    ],
    address: "20 Les Bruyères, Gournay-en-Bray 76220",
    status: "disponible",
    shortDescription:
      "Maison lumineuse entièrement rénovée de 122 m² sur 500 m² de terrain. 5 pièces, terrasse vue dégagée, garage et dépendance. À 30 min de Gisors.",
    description: `À seulement quelques minutes de Gournay-en-Bray, à 30 minutes de Gisors et environ une heure du littoral, cette maison idéalement située à proximité des commerces et services vous attend.

Entièrement rénovée avec soin, elle est prête à vous accueillir.

Le rez-de-chaussée se compose d'une entrée avec rangement, d'une cuisine aménagée et équipée, ainsi que d'une vaste pièce de vie regroupant salon et salle à manger (45 m²), agrémentée d'un insert bois.

À l'étage, un palier mène à trois chambres, dont deux pourvues de placards, ainsi qu'à une salle d'eau et un WC indépendant.

Vous profiterez également d'une terrasse offrant une vue dégagée sur la nature.

En dépendance, un garage, une buanderie et, à l'étage, une grande pièce pouvant faire office de chambre d'amis complètent l'ensemble.

Le tout est implanté sur un terrain d'environ 500 m². Une visite suffit pour en tomber amoureux.

Taxe foncière : 729 €/an.

Classe énergie D, Classe climat B.

Montant moyen estimé des dépenses annuelles d'énergie pour un usage standard : entre 1 750 € et 2 380 €.

Les informations sur les risques auxquels ce bien est exposé sont disponibles sur le site Géorisques : georisques.gouv.fr.`,
  },
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function getAvailableProperties(): Property[] {
  return properties.filter((p) => p.status === "disponible");
}

export function getAllProperties(): Property[] {
  return properties;
}
