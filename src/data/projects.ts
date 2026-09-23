export interface ProjectItem {
  id: string;
  title: {
    fr: string;
    en: string;
  };
  subtitle: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  image: string;
  technologies: string[];
  features: {
    fr: string[];
    en: string[];
  };
  category: {
    fr: string;
    en: string;
  };
  demoUrl?: string;
  githubUrl?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "beninsante",
    title: {
      fr: "BéninSanté",
      en: "BeninSante",
    },
    subtitle: {
      fr: "Application de gestion intégrée du parcours patient & dossiers médicaux",
      en: "Integrated patient journey & digital health records management platform",
    },
    description: {
      fr: "Plateforme web complète conçue pour moderniser et fluidifier la prise en charge des patients dans les centres hospitaliers et cliniques. Elle centralise les dossiers médicaux informatisés, la prise de rendez-vous en ligne, les ordonnances électroniques et la coordination des équipes soignantes.",
      en: "A comprehensive web platform engineered to modernize patient care in healthcare clinics and hospitals. It centralizes electronic health records, online appointments, digital prescriptions, and clinical team workflows.",
    },
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    technologies: ["Laravel", "React", "MySQL", "Tailwind CSS", "REST API", "Chart.js"],
    category: {
      fr: "Santé & Numérique Médical",
      en: "Healthcare & MedTech",
    },
    features: {
      fr: [
        "Dossier médical patient informatisé (DPI) hautement sécurisé et horodaté",
        "Module de prise de rendez-vous en temps réel avec notifications par SMS/Email",
        "Génération et signature d'ordonnances numériques avec QR code d'authenticité",
        "Tableau de bord statistique d'occupation des lits et de flux de consultations"
      ],
      en: [
        "High-security timestamped Electronic Health Record (EHR) system",
        "Real-time patient appointment booking module with automated notifications",
        "Digital prescription generation and validation with verification QR codes",
        "Analytical dashboard for hospital bed occupancy and patient intake statistics"
      ]
    },
    demoUrl: "https://beninsante-preview.example.com",
    githubUrl: "https://github.com/priscilia-noudofinin/benin-sante"
  },
  {
    id: "femiempire",
    title: {
      fr: "FemiEmpire",
      en: "FemiEmpire",
    },
    subtitle: {
      fr: "Plateforme digitale de salon de beauté premium & académie de formation",
      en: "Digital beauty lounge & apprenticeships management portal",
    },
    description: {
      fr: "Solution logicielle sur mesure combinant une vitrine e-commerce pour les prestations cosmétiques haut de gamme et un portail SaaS de gestion pédagogique pour les apprenantes de l'académie de coiffure et d'esthétique.",
      en: "Custom web software combining a high-end service booking showroom and a SaaS educational portal for tracking cosmetology apprentices, attendance, and certification progress.",
    },
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Framer Motion"],
    category: {
      fr: "E-Commerce & SaaS Gestion",
      en: "E-Commerce & SaaS Portal",
    },
    features: {
      fr: [
        "Réservation de soins avec calendrier interactif et gestion d'acomptes en ligne",
        "Espace apprenant dédié : suivi des modules de formation et validation des acquis",
        "Gestion d'inventaire des produits cosmétiques et alertes de réapprovisionnement",
        "Interface administrateur avec rapports de ventes et fidélisation client"
      ],
      en: [
        "Interactive service scheduling calendar with online deposit handling",
        "Dedicated student portal: syllabus tracking, assignment grading, and skills log",
        "Cosmetic inventory monitoring with automated restock alerts",
        "Administrative dashboard with revenue analytics and loyalty reward workflows"
      ]
    },
    demoUrl: "https://femiempire-beauty.example.com",
    githubUrl: "https://github.com/priscilia-noudofinin/femiempire-app"
  },
  {
    id: "gestionnotes",
    title: {
      fr: "GestionNotes — Prytanée Militaire",
      en: "GestionNotes — Military Academy",
    },
    subtitle: {
      fr: "Système académique de gestion des notes et bulletins pour enfants de troupe",
      en: "Academic grading & automated report card generation system",
    },
    description: {
      fr: "Application web robuste développée pour automatiser le calcul des moyennes pondérées, le classement au mérite et la génération des bulletins scolaires trimestriels pour les écoles militaires d'excellence (enfants de troupe).",
      en: "A robust academic grading system designed to automate weighted GPA computations, merit-based class rankings, and one-click PDF report card generation for military academy students.",
    },
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap & Tailwind", "FPDF", "Ajax"],
    category: {
      fr: "Éducation & Système Académique",
      en: "EdTech & Academic ERP",
    },
    features: {
      fr: [
        "Saisie rapide et décentralisée des notes par matière et coefficient",
        "Calcul instantané des moyennes générales et rangs de mérite sans marge d'erreur",
        "Génération automatisée en un clic des bulletins scolaires officiels au format PDF",
        "Gestion fine des accès par rôles (Professeur, Surveillant Général, Direction)"
      ],
      en: [
        "Decentralized grade entry by subject teachers with custom coefficient formulas",
        "Instant, error-free weighted GPA calculations and cohort merit rankings",
        "One-click batch generation of official academic transcripts in printable PDF format",
        "Role-based access control (Instructors, Head of Discipline, School Command)"
      ]
    },
    demoUrl: "https://gestion-notes-prytanee.example.com",
    githubUrl: "https://github.com/priscilia-noudofinin/gestion-notes-ecole"
  },
  {
    id: "calculatrice-delta",
    title: {
      fr: "Calculatrice Delta",
      en: "Delta Calculator",
    },
    subtitle: {
      fr: "Application de calcul du discriminant et résolution d'équations du second degré",
      en: "Discriminant calculator and quadratic equation solver",
    },
    description: {
      fr: "Application web développée avec Python permettant de calculer le discriminant (Δ) d'une équation du second degré et de déterminer automatiquement ses solutions selon la nature des racines.",
      en: "A web application built with Python that calculates the discriminant (Δ) of quadratic equations and automatically determines their solutions based on the nature of the roots.",
    },
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1000&q=80",
    technologies: ["Python"],
    category: {
      fr: "Python & Mathématiques",
      en: "Python & Mathematics",
    },
    features: {
      fr: [
        "Calcul automatique du discriminant (Δ)",
        "Détermination des solutions d'une équation du second degré",
        "Gestion des différents cas selon la valeur du discriminant",
        "Interface web simple et intuitive"
      ],
      en: [
        "Automatic discriminant (Δ) calculation",
        "Quadratic equation solution computation",
        "Handling of different cases based on the discriminant value",
        "Simple and intuitive web interface"
      ]
    },
    demoUrl: "https://calculatrice-delta.vercel.app/"
  },
  {
    id: "devinette",
    title: {
      fr: "Jeu de Devinette",
      en: "Guessing Game",
    },
    subtitle: {
      fr: "Jeu interactif de devinettes développé avec Python",
      en: "Interactive guessing game built with Python",
    },
    description: {
      fr: "Petit jeu interactif développé avec Python dans lequel le joueur doit deviner un nombre ou une valeur générée par le programme. L'application fournit des indications pour guider le joueur jusqu'à la bonne réponse.",
      en: "An interactive game built with Python where the player has to guess a number or value generated by the program. The application provides hints to guide the player toward the correct answer.",
    },
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1000&q=80",
    technologies: ["Python"],
    category: {
      fr: "Python & Jeu",
      en: "Python & Game",
    },
    features: {
      fr: [
        "Génération aléatoire du nombre à deviner",
        "Système d'indices pour guider le joueur",
        "Vérification automatique des propositions",
        "Interface simple et interactive"
      ],
      en: [
        "Random number generation",
        "Hint system to guide the player",
        "Automatic guess validation",
        "Simple and interactive interface"
      ]
    },
    demoUrl: "https://devinette-jet.vercel.app/deviner"
  }
];
