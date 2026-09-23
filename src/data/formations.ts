export interface FormationItem {
  id: string;
  diploma: {
    fr: string;
    en: string;
  };
  institution: string;
  location: string;
  period: string;
  status: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  keySubjects: {
    fr: string[];
    en: string[];
  };
}

export const formationsData: FormationItem[] = [
  {
    id: "licence-ig",
    diploma: {
      fr: "Licence en Informatique de Gestion",
      en: "Bachelor's Degree in Business Computing (Information Systems)",
    },
    institution: "ENEAM / UAC (École Nationale d'Économie Appliquée et de Management)",
    location: "Cotonou, Bénin",
    period: "2023 — 2026",
    status: {
      fr: "En cours de finalisation (3ème année)",
      en: "Final Year (Graduating 2026)",
    },
    description: {
      fr: "Formation d'excellence alliant technologies de pointe, gestion des systèmes d'information, analyse de données et management des projets technologiques d'entreprise.",
      en: "Prestigious curriculum combining modern software engineering, enterprise information systems, data modeling, and IT project management.",
    },
    keySubjects: {
      fr: [
        "Génie Logiciel & Programmation Orientée Objet",
        "Conception de Bases de Données (Merise, UML, SQL)",
        "Architecture Web, Frameworks & Sécurité Réseau",
        "Gestion de Projet Agile & Analyse Décisionnelle"
      ],
      en: [
        "Software Engineering & Object-Oriented Programming",
        "Database Architecture (UML, Merise, SQL)",
        "Web Systems Architecture & Cyber Security",
        "Agile Project Management & Business Intelligence"
      ]
    }
  },
  {
    id: "licence-1-maths-info",
    diploma: {
      fr: "Licence 1 — Mathématiques & Informatique Appliquées",
      en: "Undergraduate First Year — Applied Mathematics & Computer Science",
    },
    institution: "FAST / UAC (Faculté des Sciences et Techniques)",
    location: "Abomey-Calavi, Bénin",
    period: "2022 — 2023",
    status: {
      fr: "Validée",
      en: "Completed",
    },
    description: {
      fr: "Fondations théoriques intenses en logique mathématique, analyse, algèbre linéaire et initiation à la programmation procédurale et impérative.",
      en: "Intensive theoretical grounding in mathematical logic, calculus, linear algebra, and procedural algorithmic foundations.",
    },
    keySubjects: {
      fr: [
        "Algèbre Linéaire & Analyse Mathématique",
        "Algorithmique Fondamentale & Structures de données",
        "Probabilités & Statistiques Descriptives",
        "Architecture des Ordinateurs & Systèmes d'Exploitation"
      ],
      en: [
        "Linear Algebra & Mathematical Analysis",
        "Fundamental Algorithms & Computational Complexity",
        "Probability & Descriptive Statistics",
        "Computer Hardware Architecture & Operating Systems"
      ]
    }
  },
  {
    id: "bac-d",
    diploma: {
      fr: "Baccalauréat Scientifique — Série D",
      en: "Scientific High School Diploma (Baccalaureate) — Track D",
    },
    institution: "Lycée / Enseignement Secondaire Général",
    location: "Bénin",
    period: "2022",
    status: {
      fr: "Obtenu avec Mention",
      en: "Graduated with Honors",
    },
    description: {
      fr: "Formation secondaire à dominante scientifique et expérimentale : mathématiques, sciences physiques et sciences de la vie et de la terre.",
      en: "Secondary education focused on rigorous scientific disciplines: advanced mathematics, physics, chemistry, and biological sciences.",
    },
    keySubjects: {
      fr: [
        "Mathématiques Pures",
        "Sciences Physiques & Chimie",
        "Sciences de la Vie et de la Terre",
        "Français & Anglais Technique"
      ],
      en: [
        "Pure Mathematics",
        "Physics & Chemistry",
        "Life & Earth Sciences",
        "French & Technical English"
      ]
    }
  }
];
