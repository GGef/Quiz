const quizzes = {
    quiz1: [
        {
            question: "Avant les transistors les ordinateurs fonctionnaient avec des ?",

            a: "Des diodes",
            b: "Des ampoules",
            c: "Tubes à néant",
            d: "Tubes cathodiques"
        },
        {
            question: "L’ordinateur a toujours fonctionné en binaire ?",

            a: "Non",
            b: "Oui",
            c: "Des fois"
        },
        {
            question: "Les ordinateurs que nous connaissons actuellement sont des ?",

            a: "Circuits intégrés",
            b: "Des diodes",
            c: "Mini-ordinateurs",
            d: "Micro-ordinateurs"
        },
        {
            question: "Quel centre de recherche a fabriqué le premier micro-ordinateur avec clavier,moniteur et souris en 1973 ?",

            a: "Le centre de recherche Xerox Parc",
            b: "IBM",
            c: "Intel",
            d: "L'université de Berkeley"
        },
        {
            question: "Quel était l'objectif initial de l'invention de l'ordinateur ?",

            a: "Créer des jeux",
            b: "Stocker des informations",
            c: "Améliorer la précision et économiser le temps de calcul",
            d: "Accélérer la communication "

        },
        {
            question: "Quel était le premier micro-ordinateur fabriqué en 1972 ?",

            a: "L'IBM System 360",
            b: "Le Micral N avec un processeur Intel 8008",
            c: "L'ENIAC",
            d: "Le Xerox Alto",
        },
        {
            question: "Quel était le premier ordinateur rustique ?",

            a: "Le Micral N",
            b: "L'ENIAC",
            c: "L'IBM System 360",
            d: "Le boulier",
        },
        {
            question: "Quel était un exemple notable de la troisième génération des ordinateurs appelés miniordinateurs ?",

            a: "Le boulier",
            b: "Le Micral N",
            c: "L'ENIAC",
            d: "L'IBM System 360"
        },
        {
            question: "Quel ordinateur a marqué la première génération des ordinateurs (1940 - 1950) ?",

            a: "Le Xerox Alto",
            b: "L'ENIAC",
            c: "L'IBM System 360",
            d: "Le Micral N"
        },
        {
            question: "Quelle technologie a révolutionné la deuxième génération des ordinateurs(1953 - 1955) ?",

            a: "Le transistor",
            b: "La souris informatique",
            c: "Le microprocesseur",
            d: "L'écran tactile ",

        },
        {
            question: "Sans transistors les ordinateurs ne se seraient pas développés ?",

            a: "Il fallait des diodes",
            b: "Il fallait des tubes",
            c: "C’est faux",
            d: "Exactement"
        },
        {
            question: "Quel est le composant électronique qui permet de connecter tous les principaux autres composants d’un ordinateur ?",

            a: "Slots",
            b: "Carte mère",
            c: "Microprocesseur",
        },
        {
            question: "Les slots (connecteurs d’extension) :",

            a: "Périphériques permettant d’ajouter des fonctionnalités dans l’ordinateur",
            b: "Permet de décomposer la mémoire d’un ordinateur",
            c: "Permet de réduire la capacité d’un ordinateur",
        },
        {
            question: "Est-il universel ?",

            a: "Non",
            b: "Oui"

        },
        {
            question: "Quel est le composant dont le contenu est supprimé une fois l’ordinateur éteint ?",

            a: "Disque dur",
            b: "Mémoire RAM",
            c: "Mémoire ROM"
        },
        {
            question: "Quel est le rôle du Bios dans un ordinateur ?",

            a: "Supprimer le contenu des mémoire RAM",
            b: "Lancer le système d’exploitation",
            c: "Supprimer le contenu de la mémoire ROM ",

        },
        {
            question: "Avec quel branchement le transfert de l’information vers le disque dur est le plus rapide ?",

            a: "IDE",
            b: "SATA",
            c: "SSD"
        },
        {
            question: "Une sauvegarde à distance peut être effectuée sur l’un des supports de stockage suivants :",

            a: "Disque dur externe",
            b: "Serveur",
            c: "Clé USB"
        },
        {
            question: "Le bus de données permet de transmettre les données :",

            a: "En direction (ou en arrivant) du microprocesseur",
            b: "En direction (ou en arrivant) de la RAM",
            c: "En direction (ou en arrivant) de la ROM",
        },
        {
            question: "La fréquence du microprocesseur détermine :",

            a: "Sa vitesse",
            b: "Sa mémoire",
            c: "Sa capacité",
        },
        {
            question: "La capacité d’une mémoire vive se mesure en :",

            a: "Octet",
            b: "Hertz",
            c: "centimètre",
        },
        {
            question: "Quel est le rôle principal des périphériques informatiques ?",

            a: "Protéger l'ordinateur contre les virus",
            b: "Augmenter la vitesse de l'ordinateur",
            c: "Communiquer avec l'ordinateur",
            d: "Stocker des informations "

        },
        {
            question: "Quel est l'exemple d'un périphérique qui peut à la fois lire et écrire sur un CD/DVD ?",
            a: "Lecteur et graveur CD/DVD",
            b: "Scanner",
            c: "Clé USB",
            d: "Lecteur CD"
        },
        {
            question: "Vrai ou Faux : Le clavier est un périphérique de sortie:",

            a: " Faux",
            b: "Vrai"
        },
        {
            question: "Quel périphérique permet de saisir des informations dans l'ordinateur en utilisant le toucher ?",

            a: "Écran tactile",
            b: "Webcam",
            c: "Scanner",
            d: "Souris"
        },
        {
            question: "Lequel de ces périphériques est considéré comme un périphérique d'entréesortie ?",

            a: "Clé USB",
            b: "Moniteur",
            c: "Microphone",
            d: "Haut-parleurs"
        },
        {
            question: "Comment s'appelle le périphérique utilisé pour la numérisation de documents ou de photos ?",

            a: "Clavier",
            b: "Scanner",
            c: "Webcam",
            d: "Imprimante"
        },
        {
            question: "Vrai ou Faux : Une manette de jeux est un exemple de périphérique d'entrée:",

            a: "Faux",
            b: "Vrai "

        },
        {
            question: "Quel périphérique est principalement utilisé pour les visioconférences ?",

            a: "Imprimante",
            b: "Scanner",
            c: "Webcam",
            d: "Clavier"
        },
        {
            question: "Quel périphérique de sortie est utilisé pour transformer les sorties informatiques en sorties imprimées ?",

            a: "Moniteur",
            b: "Imprimante",
            c: "Scanner",
            d: "Haut-parleurs"
        },
        {
            question: "Vrai ou Faux : Le routeur est un périphérique d'entrée-sortie:",

            a: "Faux",
            b: "Vrai"
        },
        {
            question: "En quelle année le transistor, un composant électronique révolutionnaire, a-t-il été inventé ?",

            a: "1970",
            b: "1955",
            c: "1958",
            d: "1945"
        },
        {
            question: "Quel est le matériel utilisé pour la construction de la plaque des  microprocesseurs ?",

            a: "Silicium",
            b: "Fer",
            c: "Aluminum",
            d: "Magnésium "

        },
        {
            question: "Quel était le nom du premier microprocesseur commercialisé par Intel ?",

            a: "Intel i9-11900K",
            b: "Intel 4004",
            c: "ENIAC",
            d: "TRADIC"
        },
        {
            question: "Quel était le premier ordinateur à transistors ?",

            a: "L'ENIAC",
            b: "L'Intel 4004",
            c: "Le microprocesseur",
            d: "Le TRADIC"
        },
        {
            question: "Quel était le premier ordinateur entièrement électronique créé en 1945 ?",

            a: "Le microprocesseur",
            b: "L'ENIAC",
            c: "Le TRADIC",
            d: "L'Intel 4004"
        },
        {
            question: "Quelle est la finesse de gravure des transistors dans les microprocesseurs modernes ?",

            a: "Moins de 50 nanomètres",
            b: "Moins de 100 nanomètres",
            c: "Moins de 5 nanomètres",
            d: "Moins de 10 nanomètres"
        },
        {
            question: "Qui a créé le premier circuit intégré en 1958 ?",

            a: "Fréderico Fanguin",
            b: "Marcian Hoff",
            c: "Jack Kilby",
            d: "Intel "

        },
        {
            question: "Selon la loi de Moore, quelle était la tendance concernant le nombre de transistors dans les microprocesseurs depuis les années 70 ?",

            a: "Ils augmentaient de dix fois tous les 5 ans",
            b: "Ils diminuaient de moitié tous les 2 ans",
            c: "Ils restaient constants",
            d: "Ils doublaient tous les 2 ans"
        },
        {
            question: "Comment le microprocesseur interprète-t-il les instructions ?",

            a: "Via une interface utilisateur graphique",
            b: "En utilisant des signaux électriques binaires",
            c: "Par transmission radio",
            d: "En utilisant le langage ASCII"
        },
        {
            question: "Pourquoi les microprocesseurs modernes sont-ils plus performants que leurs prédécesseurs ?",

            a: "Ils ont un plus grand nombre de transistors",
            b: "Ils ont une plus grande taille physique",
            c: "Ils utilisent un langage de programmation plus complexe",
            d: "Ils ont une plus grande capacité de stockage"
        },
        {
            question: "Qu'est-ce qu'un transistor dans le contexte d'un microprocesseur ?",

            a: "Un composant qui agit comme un interrupteur électrique",
            b: "Un élément de refroidissement",
            c: "Un dispositif de stockage",
            d: "Un connecteur pour des périphériques externes"
        },
        {
            question: "Qu'est-ce que l'Unité Arithmétique et Logique (UAL) dans un microprocesseur ? ",
            a: "Elle refroidit le processeur",
            b: "Elle contrôle les entrées et sorties",
            c: "Elle stocke les instructions du processeur",
            d: "Elle exécute des calculs basiques et des opérations logiques "

        },
        {
            question: "Quel est le rôle principal d'un microprocesseur dans un ordinateur ?",

            a: "Stocker des données",
            b: "Afficher des informations",
            c: "Exécuter des instructions",
            d: "Connecter des périphériques externes"
        },
        {
            question: "Quelle est la fonction de la mémoire cache dans un microprocesseur ?",

            a: "Stocker des données de façon permanente",
            b: "Gérer les connexions réseau",
            c: "Réduire les délais d'attente pour accéder à la mémoire vive",
            d: "Augmenter la vitesse de l'horloge du processeur"
        },
        {
            question: "Quelle est une des limites futures prévues pour les microprocesseurs classiques ?",
            a: "La limite physique des transistors",
            b: "La saturation du marché des technologies informatiques",
            c: "L'impossibilité d'améliorer l'interface utilisateur",
            d: "Le coût de production des transistors "
        }
    ],

    quiz2: [
        {
            question: "Lequel n’est pas un logiciel d’application ?",

            a: "Windows",
            b: "IOS",
            c: "Unix",
            d: "Yahoo",
        },
        {
            question: "Comment appelle-t-on l'ensemble des programmes assurant la liaison entre les ressources matérielles, l'utilisateur et les applications d'un ordinateur ?",

            a: "Le code source",
            b: "Le langage machine",
            c: "Le cahier des charges",
            d: "Le logiciel propriétaire",
            e: "Le système d'exploitation"
        },
        {
            question: "Un système informatique fait partie du :",

            a: "Matériel",
            b: "Logiciel",
            c: "Les deux"
        },
        {
            question: "Le rôle du noyau de l'OS est de :",

            a: "Gérer les entrées-sorties et la mémoire",
            b: "Permettre l'utilisation de XWindows",
            c: "Gérer l'enchaînement des processus et des tâches"
        },
        {
            question: "La première phase de l’histoire des systèmes d’exploitation est dite la phase de préhistoire qui est caractérisée par :",

            a: "Le constructeur est différent de celui qui fait la programmation",
            b: "Le constructeur de la machine et celui qui fait également la conception, la programmation et en plus c’est lui-même qui opère directement sur la machine:",
            c: "Le concepteur est différent de celui qui opère directement sur la machine"
        },
        {
            question: "Le système d’exploitation est un logiciel qui existe depuis la phase de la préhistoire :",

            a: "Non",
            b: "Oui"
        },
        {
            question: "Les grosses machines de la préhistoire utilisaient des :",

            a: "Tubes à vides",
            b: "Transistors",
            c: "Cartes à puces"
        },
        {
            question: "Les systèmes d’exploitation tels que nous les connaissons aujourd’hui ont commencé avec :",

            a: "L’apparition des cartes à puces",
            b: "L’apparition des cartes perforées",
            c: "L’apparition des cartes numériques"
        },
        {
            question: "L’apparition des transistors a permis la mise en place des :",

            a: "Systèmes par lots",
            b: "Systèmes IBM",
            c: "Systèmes des données"
        },
        {
            question: "La dernière phase des systèmes d’exploitation a commencé avec l’apparition des micro-processeurs qui ont fait apparaitre :",

            a: "Les machines à écrire",
            b: "Les machines en batch",
            c: "Les ordinateurs personnels"
        },
        {
            question: "Le premier système d’exploitation mis en place par IBM, pour le lancement de son ordinateur personnel IBM PC est :",

            a: "MAC",
            b: "MSD DOS",
            c: "Unix",
            d: "WINDOWS"
        },
        {
            question: "Avec l’évolution des systèmes d’exploitation, la ligne de commande et l’interface graphique sont apparues pour faciliter le dialogue entre les OS et les utilisateurs :  Mais quel système est apparu avant l’autre ?",

            a: "L’interface graphique avant la ligne de commande",
            b: "La ligne de commande avant l’interface graphique",
            c: "Les deux sont apparues en même temps"
        },
        {
            question: "La barre des tâches de Windows est apparue avec :",

            a: "Windows Vista",
            b: "Windows 95",
            c: "Windows XP",
            d: "Windows 1"
        },
        {
            question: "La version de Windows qui a constitué un échec pour Microsoft est :",

            a: "Windows Vista",
            b: "Windows 1",
            c: "Windows XP",
            d: "Windows 95"
        },
        {
            question: "MS-DOS signifie :",

            a: "Microsoft Disk Operating System",
            b: "Microsoft Device Open System",
            c: "Microsoft Data Output System"
        },
        {
            question: "Windows 365 est une version de Windows qui :",

            a: "S'installe pour une durée indéterminée sur plusieurs ordinateurs à la fois",
            b: "Désigne un abonnement à la dernière version de Microsoft Office installé dans le Cloud:",
            c: "S'installe pour une durée indéterminée sur un seul ordinateur"
        },
    ],
    quiz3: [
        {
        question : "Quelle est la raison pour laquelle l'ARPANET a été créé ?",
       
        a: "Pour permettre aux chercheurs de mettre en place un système mondiale de communication",
        b: "Pour permettre aux universités de communiquer entre elles",
        c: "Pour permettre aux centres de calcul de communiquer entre eux en cas d'attaque nucléaire"
        },
        {
        question  : "Quel est l'événement qui a marqué l'année 1991 dans l'histoire d'Internet ?",
      
        a: "L'invention de World Wide Web",
        b: "Adoption du mot « Internet »",
        c: "Lancement de Google"
        },
        {
        question : "Qu'est-ce que l'Internet des objets ?",
   
        a: "La capacité des utilisateurs de partager du contenu en temps réel",
        b: "La capacité des appareils mobiles de se connecter à Internet",
        c: "La capacité des appareils et des objets de se connecter à Internet et d'échanger des données entre eux"
        },
        {
        question  : "Qui est l'inventeur du World Wide Web ?",
    
        a: "Ray Tomlinson",
        b: "Tim Berners-Lee",
        c: "Larry Page",
        },
        {
        question  : "Quelle année a marqué l'arrivée de Google ?",
     
        a: "1995",
        b: "1996",
        c: "1997",
        d: "1998"
        },
        {
        question  : "Qu'est-ce que le Web 2.0 ?",
      
        a: "L'évolution du Web vers un espace où les utilisateurs peuvent créer et partager du contenu en temps réel",
        b: "La migration d'Internet vers les appareils mobiles",
        c: "Un nouveau protocole de communication",
        d: "L'ajout de nouvelles fonctionnalités aux navigateurs web"
        },
        {
        question  : "Combien de nombres composent généralement une adresse IP au format IPv4 ?",
   
        a: "Quatre nombres séparés par des points",
        b: "Cinq nombres séparés par des points",
        c: "Trois nombres séparés par des points"
        },
        {
        question  : "Pourquoi IPv6 a-t-il été développé ?",
        
        a: "Pour améliorer la vitesse d'Internet",
        b: "Pour offrir suffisamment d'adresses uniques face à l'épuisement d'IPv4",
        c: "Pour réduire la taille des adresses IP"
        },
        {
        question : "Pourquoi les routeurs sont-ils nécessaires sur Internet ?",
       
        a: "Pour accélérer la vitesse de connexion",
        b: "Pour connecter plusieurs réseaux entre eux et acheminer les données",
        c: "Pour gérer les adresses IP des appareils connectés"
        },
        {
        question  : "Qu'est-ce qu'un serveur de noms (DNS) ?",
      
        a: "Un serveur qui traduit les adresses IP en noms de domaine",
        b: "Un serveur qui gère les adresses IP des routeurs",
        c: "Un serveur qui enregistre les correspondances entre les noms de domaine et les adresses IP"
        },
        {
        question : "Qu'est-ce qu'une adresse IP ?",
       
        a: "Un numéro de téléphone unique attribué à chaque appareil connecté à Internet",
        b: "Un nom de domaine utilisé pour accéder aux sites Web",
        c: "Un identifiant unique qui permet d'identifier un appareil sur Internet",
        },
        {
        question : "Erreur 404 ! Que signifie le code d'erreur 404 dans le protocole HTTP ?",
        
        a: "La ressource n’existe pas sur le serveur",
        b: "La ressource a été déplacée sur un autre serveur",
        c: "Le client ne peut pas communiquer avec le serveur"
        },
        {
        question : "Par quel protocole les clients et serveurs dialoguent-ils ?",
        a: "HTML",
        b: "XML",
        c: "HTTP"
        },
        {
        question : "Qu'est-ce qu'un protocole ?",
       
        a: "Un outil de communication",
        b: "Un ensemble de règles qui définit comment les clients et les serveurs communiquent",
        c: "Un type de langage de programmation"
        },
        {
        question  : "Qu'est-ce qu'une URL ?",
      
        a: "Une ressource",
        b: "L'adresse d'une ressource",
        c: "Un fichier"
        },
        {
        question : "Quelles informations sont indiquées dans une URL ?",
      
        a: "Le protocole utilisé",
        b: "L’adresse du client",
        c: "Le nom d'une ressource",
        d: "Le nom du serveur"
        },
        {
        question : "Dans la création d'une page web basique, quelle est la première étape à réaliser ?",
        
        a: "Rédiger le code HTML",
        b: "Configurer le serveur",
        c: "Créer une feuille de style CSS",
        d: "Écrire du code JavaScript"
        },
        {
        
        question : "Pour modifier la couleur d'un titre dans une page web, quel outil utilise-t-on ?",
        
        a: "CSS",
        b: "JavaScript",
        c: "Un serveur web",
        d: "HTML"
        },
        {
        question : "Qu'est-ce que JavaScript permet d'ajouter à un site web ?",
       
        a: "Feuilles de style pour la mise en page",
        b: "Structure de base des pages web",
        c: "Fonctionnalités interactives et amélioration de l'expérience utilisateur",
        d: "Connexion sécurisée entre le client et le serveur"
        },
        {
        question : "Que permet de faire CSS dans le développement web ?",
  
        a: "Envoyer des requêtes au serveur",
        b: "Ajouter des fonctionnalités interactives",
        c: "Contrôler l'apparence des pages web",
        d: "Structurer le contenu d'une page web"
        },
        {
        question  : "Quel est le rôle du HTML dans le développement web ?",
        
        a: "Ajouter des fonctionnalités interactives aux sites web",
        b: "Structurer le contenu d'une page web",
        c: "Contrôler l'apparence des pages web",
        d: "Gérer la communication entre client et serveur"
        },
        {
        question : "Qu'est-ce qu'un moteur de recherche ? ",
        a: "Un système qui indexe rapidement les pages web existantes",
        b: "Un système logiciel conçu pour rechercher des informations sur le Web",
        c: "Un algorithme unique appelé PageRank",
        d: "Un annuaire web"
        },
        {
        question : "Quel moteur de recherche a été le premier à apparaître ? ",
        a: "Archie",
        b: "AltaVista",
        c: "Lycos",
        d: "Google ",
        },
        {
        question : "Quelle était la fonction principale de Yahoo lors de sa création ? ",
        a: "Utiliser un algorithme unique appelé PageRank",
        b: "Fournir une structure de catégories facile à naviguer",
        c: "Indexer rapidement une grande quantité de pages web",
        d: "Rechercher des informations pertinentes en réponse à une requête spécifique"
        },
        {
        question  : "Quel moteur de recherche a introduit l'algorithme PageRank ?",
        a: "Google",
        b: "Bing",
        c: "Lycos",
        d: "AltaVista"
        },
        {
        question : "Comment PageRank évalue-t-il l'importance d'une page ?",
        a: "En se basant sur le nombre de fois où un mot-clé apparaît sur une page",
        b: "En analysant la popularité du site",
        c: "En évaluant le nombre et la qualité des liens qui pointent vers une page",
        d: "En examinant la pertinence des mots-clés"
        },
        {
        question  : "Quel moteur de recherche est lancé par Microsoft pour rivaliser avec Google ?",
        
        a: "Archie",
        b: "Yahoo",
        c: "Lycos",
        d: "Bing",
        },
        {
        question  : "Qu'est-ce que l'opérateur 'site :' dans Google ?",
     
        a: "Il permet de limiter les résultats à un site web spécifique",
        b: "Il permet de rechercher des sites web similaires à celui spécifié",
        c: "Il permet de filtrer les résultats par langue"
        },
        {
        question : "Comment pouvez-vous rechercher des images similaires à une image donnée sur Google ?",
       
        a: "En utilisant l'opérateur 'similar :'",
        b: "En cliquant sur l'icône de la caméra dans la barre de recherche",
        c: "En utilisant l'opérateur 'image :'" 
        },
        {
        question  : "Qu'est-ce que l'opérateur 'filetype' dans Google ?",
        a: "Il permet de limiter les résultats à un pays spécifique",
        b: "Il permet de filtrer les résultats par type de contenu",
        c: "Il permet de rechercher des fichiers spécifiques sur le web"
        },
        {
        question : "Comment pouvez-vous rechercher une expression exacte dans Google ?",
       
        a: "Utiliser l'opérateur 'phrase :' suivi de l'expression",
        b: "Entourer l'expression de guillemets",
        c: "Utiliser l'opérateur 'exact :' suivi de l'expression:"
 } ],
    quiz4: [
        {
        question : "L'intelligence artificielle est :",
       
        a: "Une intelligence biologique telle qu'on peut le concevoir chez les animaux/insectes(Abeilles, Poissons, oiseaux, …).",
        b: "La qualité qui permet à une entité de fonctionner de manière appropriée et prévoyante dans son environnement.",
        c: "Une Imitation de l'intelligence des êtres vivants.",
        d: "Aucune de ces réponses."
        },
        {
        question  : "L’intelligence artificielle peut être utilisée pour donner une estimation du prix d’acquisition d’une maison selon des critères fournis par l’utilisateur.",
        
        a: "Faux.",
        b: "Aucune de ces réponses.",
        c: "Vrai."
        },
        {
        question  : "La prédiction de la nature des objets d’une base de données sera faite à base de :",
        
        a: "Un apprentissage préalable en utilisant des objets similaires.",
        b: "Aucune de ces réponses.",
        c: "Les deux opérations précédentes.",
        d: "Une programmation explicite."
        },
        {
        question  : "La prédiction est une branche de l’intelligence artificielle qui peut servir à :",
        
        a: "La classification des objets d’une base de données.",
        b: "Les deux opérations précédentes.",
        c: "Aucune de ces réponses.",
        d: "Le contrôle d’un environnement.",
        },
        {
        question  : "Pour pouvoir contrôler un environnement, une prédiction de 100% est nécessaire :", 
        a: "Faux.",
        b: "96% suffira pour le contrôle d’un environnement mais pas pour la classification des objets d’une Base de données.",
        c: "Vrai.",
        d: "Aucune de ces réponses. "
        },
        {
        question  : "Une intelligence artificielle est capable de :",
        
        a: "Faire des calculs rapides.",
        b: "Identifier les courriers indésirables.",
        c: "Contrôler les déplacements d’un robot pour effectuer des opérations de sauvetage.",
        d: "Aucune de ces réponses.",
        e: "Stocker des informations massives"
        },
        {
        question  : "ALAIN TURING a publié ses premiers travaux fondateurs du concept de « Machine de Turing » en :",
        
        a: "1936",
        b: "1950",
        c: "1940"
        },
        {
        question  : "DEEP BLUE a pu remporter la victoire contre le champion du monde en :",
        
        a: "Jeu des Echecs",
        b: "Jeu de Goban",
        c: "Jeu de Dames"
        },
        {
        question : "La machine « Victory » de décryptage des messages de « ENIGMA » a été conçu par :",
        
        a: "Alain Turing",
        b: "Arthur Samuel",
        c: "L’entreprise IBM",
        d: "L’entreprise DeepMind",
        e: "Des chercheurs polonais"
        },
        {
        question : "Le « Test de Turing » a pour but de vérifier si une intelligence artificielle est capable d'imiter une conversation humaine en :",
        
        a: "Mesurant la capacité de l'Intelligence Artificielle à être confondue avec l'intelligence humaine",
        b: "Donnant des réponses crédibles",
        c: "Donnant des réponses exactes "
        },
        {
        
        question : "Le terme de « Premier Hiver de l’intelligence artificielle » fait référence à la période de :",
        
        a: "La Seconde Guerre mondiale",
        b: "Les années 2000.",
        c: "Les années soixante-dix"
        },
        {
        question : "Lesquelles des affirmations suivantes sont correctes :",
        
        a: "Aucune des affirmations précédentes.",
        b: "Le Cloud Computing consiste à fournir des services informatiques, en les hébergeant  dans un centre de données sur des serveurs sur place",
        c: "Les GPU ont été créés afin de libérer l’unité centrale en la déchargeant de la puissance de Stockage",
        d: "Rattachée en 2014 à GOOGLE, L’entreprise « DeepMind» a conçu « DEEP Blue » pour vaincre le champion du mode au jeu de GOBAN"
        },
        {
        question  : "ALAIN Turing a affirmé qu'il y a trois grands temps dans la transformation informatique : Le temps de l'Internet, le temps du mobile et le temps de lʼIA générative",
        
        a: "Aucune réponse",
        b: "Le temps de l'Internet, le temps du PC et le temps de lʼIA",
        c: "Le temps de l'Internet, le temps du mobile et le temps de lʼIA générative",
        d: "Le temps de l'Internet, le temps du PC et le temps de la programmation",
        },
        {
        question : "Dans la vague des réseaux de neurones, la machine arrive à prédire l'image d'un chien :",
        
        a: "A l'aide de la programmation des caractéristiques du chien",
        b: "Sans avoir à programmer auparavant ses caractéristiques en détail"
        },
        {
        question : "Il ne s'agit pas d'IA générative lorsque la sortie est :",
        
        a: "un nombre,",
        b: "Une classe, par exemple : spam ou non-spam, …etc",
        c: "Toutes les réponses précédentes sont correctes",
        d: "une probabilité "
        },
        {
        
        question  : "Il s'agit d’IA générative lorsque le résultat est du langage naturel, de la parole ou, une image par exemple:",
        
        a: "VRAI",
        b: "FAUX",
        },
        {
        question  : "L'apprentissage profond permet de traiter des problèmes complexes grâce à l’usage de :",
        
        a: "Réseaux de neurones artificiels",
        b: "Réseaux de télécommunication",
        c: "Réseaux informatiques"
        },
        {
        question : "Les modèles d'apprentissage profond peuvent être divisés en deux types :",
        
        a: "Les modèles génératifs et les modèles de fondation",
        b: "Les modèles génératifs et les modèles discriminatifs",
        c: "Aucune réponse",
        d: "Les deux réponses précédentes"
        },
        {
        question  : "Les modèles d’images génératifs produisent de nouvelles images. Ils peuvent aussi générer :",
        
        a: "Les deux réponses B et C",
        b: "Générer la complétion d’une image abimée",
        c:"Aucune réponse",
        d: "Les trois réponses précédentes",
        e: "Effectuer une recherche par image",
        f: "Un texte qui correspond à la légende de l’image"
        },
        {
        question  : "Les modèles de langues génératifs apprennent à reconnaître les schémaslinguistiques grâce à des données d'entraînement. Puis, à partir d'un texte, ils prédisent le texte   qui va suivre ou générer des images et vidéos",
        
        a: "VRAI",
        b: "FAUX"
        },
        { 
        
        question : "Si l'intelligence artificielle classique, permet de prédire, classer ou bien encore faire des analyses dans divers domaines, l’intelligence artificielle générative permet",        
        a: "Créer du nouveau contenu",
        b: "Créer des ponts multimodaux",
        c: "Aucune affirmation",
        d: "Créer un nouveau mode de communication",
        e: "Toutes les affirmations précédentes"
        },
        {
        question  : "CHATGPT est affiné grâce à l'utilisation des techniques de :",
        
        a: "Apprentissage par renforcement du modèle GPT uniquement",
        b: "Transformers, Apprentissage supervisé et par renforcement du modèle GPT",
        c: "Apprentissage supervisé uniquement"
        },
        {
        question : "Choisissez la (les) bonne(s) réponse(s):",
        
        a: "GPT est créé initialement par l'entreprise GOOGLE",
        b: "Le concept GPT a été initialement introduit en juin 2020",
        c: "GPT ne prends jamais le contexte pour générer une réponse",
        d: "Aucune des affirmations précédentes.",
        e: "GPT est un modèle de langage qui sert de « cerveau » à l'agent conversationnel ChatGPT"
        },
        {
        question : "Comment appelle-t-on le mécanisme suivant: 'Lorsqu'on demande à GPT de donner plusieurs réponses à une même question (prompt). Puis, des superviseurs classent et évaluent la pertinence de ces réponses en donnant à chaque réponse une récompense'",
        
        a: "Mécanisme d'attention",
        b: "L'IA de récompense",
        c: "Transformers",
        d: "RLHF"
        },
        {
        question : "GPT (Generative Pre-trained Transformer) est un modèle de :",
        
        a: "Traitement et de génération du langage naturel",
        b: "Traitement et de génération du langage informatique",
        c: "Transformation du langage de programmation en langage binaire "
        },
        {
        
        question: "GPT se base sur les « Transformers » pour :",
        
        a: "Les deux affirmations précédentes",
        b: "Une meilleure prise en charge de longues phrases",
        c: "Une meilleure compréhension du contexte",
        d: "Aucune des affirmations précédentes."
        },
        {
        question  : "GPT-2 peut traiter uniquement les inputs sous forme de texte alors que les versions ultérieures de GPT acceptent les images",
        
        a: "FAUX",
        b: "VRAI"
        },
        {

        question : "Les « Transformers » consistent à pondérer les mots d’une phrase qui font partie au même contexte en utilisant le :",
        
        a: "Mécanisme de classification",
        b: "Mécanisme d'apprentissage supervisé",
        c: "Mécanisme d’attention"
        },
        {
        question: "Quelle technologie ChatGPT utilisera-t-il pour capturer les relations entre les mots dans un texte :",
        
        a: "RLHF",
        b: "L'IA de récompense",
        c: "Transformers"} ]

};