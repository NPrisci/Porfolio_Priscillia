export interface CertificationItem {
  id: number;
  title: {
    fr: string;
    en: string;
  };
  issuer: string;
  date: {
    fr: string;
    en: string;
  };
  status: 'obtained' | 'in_progress';
  progress?: number;
  emoji: string;
  iconType: string;
  keySkill: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  certificateUrl: string;
  credentialId?: string;
  /** Chemin vers le visuel du certificat, affiché sur sa propre page
   * du livre. Placez le fichier dans /public/certificates/ et
   * remplacez ce chemin — voir /public/certificates/README.txt */
  certificateImage: string;
}

export const certificationsData: CertificationItem[] = [
  {
    id: 1,
    title: {
      fr: "EEIA — École d'Été d'Intelligence Artificielle",
      en: "EEIA — Artificial Intelligence Summer School",
    },
    issuer: "Fondation Vallet / Bénin Excellence",
    date: {
      fr: "Août 2023",
      en: "August 2023",
    },
    status: "obtained",
    emoji: "🧠",
    iconType: "ai",
    keySkill: {
      fr: "Fondamentaux Machine Learning, Réseaux de neurones & Python",
      en: "Machine Learning Fundamentals, Neural Networks & Python",
    },
    description: {
      fr: "Formation d'élite intensive en intelligence artificielle, modélisation prédictive et éthique des algorithmes organisée par la prestigieuse Fondation Vallet.",
      en: "Intensive elite training in artificial intelligence, predictive modeling, and algorithmic ethics organized by the Fondation Vallet.",
    },
    certificateUrl: "https://fondationvallet.org/certificats/eeia-2023-pn",
    credentialId: "EEIA-2023-BJ-8492",
    certificateImage: "/certificates/eeia.jpg",
  },
  {
    id: 2,
    title: {
      fr: "Piscine C — Immersion Algorithmique Intensive",
      en: "C Bootcamp (Piscine) — Intensive Algorithmic Immersion",
    },
    issuer: "Epitech Bénin",
    date: {
      fr: "Décembre 2025",
      en: "December 2025",
    },
    status: "obtained",
    emoji: "⚡",
    iconType: "code",
    keySkill: {
      fr: "Langage C, Allocation mémoire (pointers, malloc), UNIX & Peer-learning",
      en: "C Language, Pointer arithmetic, Memory allocation, UNIX & Peer-learning",
    },
    description: {
      fr: "Épreuve phare d'immersion totale chez Epitech : résolution de problèmes algorithmiques avancés sans librairies externes, gestion rigoureuse de la mémoire et résilience technique.",
      en: "Flagship intensive immersion boot camp at Epitech: advanced algorithmic problem solving from scratch, pointer arithmetic, memory management, and peer-to-peer coding.",
    },
    certificateUrl: "https://epitech.bj/certifications/piscine-c-2025",
    credentialId: "EPITECH-BJ-C2025-104",
    certificateImage: "/certificates/piscine-c.jpg",
  },
  {
    id: 3,
    title: {
      fr: "IndabaX Bénin — Conférence & Ateliers IA",
      en: "IndabaX Benin — AI Conference & Technical Workshops",
    },
    issuer: "Deep Learning Indaba / IndabaX Bénin",
    date: {
      fr: "Septembre 2026",
      en: "September 2026",
    },
    status: "obtained",
    emoji: "🌍",
    iconType: "data",
    keySkill: {
      fr: "IA générative, Vision par ordinateur & Penser les solutions locales",
      en: "Generative AI, Computer Vision & Localized African NLP",
    },
    description: {
      fr: "Immersion technique au sommet national de l'IA au Bénin, avec ateliers pratiques sur les transformers, les modèles multimodaux et l'application aux enjeux africains.",
      en: "National AI summit gathering in Benin with hands-on workshops on transformers, multimodal architectures, and local health/economic impact solutions.",
    },
    certificateUrl: "https://indabaxbenin.bj/attestation-indabax26",
    credentialId: "INDABAX-BJ-2026-773",
    certificateImage: "/certificates/indabax-benin.jpg",
  },
  {
    id: 4,
    title: {
      fr: "Initiation à l'Intelligence Artificielle",
      en: "Introduction to Artificial Intelligence",
    },
    issuer: "OpenClassrooms",
    date: {
      fr: "Mars 2024",
      en: "March 2024",
    },
    status: "obtained",
    emoji: "🎓",
    iconType: "ai",
    keySkill: {
      fr: "Classification supervisée, Arbres de décision & Évaluation des modèles",
      en: "Supervised Classification, Decision Trees & Model Evaluation",
    },
    description: {
      fr: "Compréhension théorique et pratique des architectures d'apprentissage automatique, du prétraitement des données et des métriques de précision (F1-score, matrice de confusion).",
      en: "Theoretical and practical mastery of machine learning workflows, data cleaning, feature engineering, and validation metrics.",
    },
    certificateUrl: "https://openclassrooms.com/certificates/pn-ai-intro-2024",
    credentialId: "OC-74829103",
    certificateImage: "/certificates/openclassrooms-ia.jpg",
  },
  {
    id: 5,
    title: {
      fr: "Vibe Coding & AI-Driven Software Engineering",
      en: "Vibe Coding & AI-Driven Software Engineering",
    },
    issuer: "LinkedIn Learning",
    date: {
      fr: "Janvier 2026",
      en: "January 2026",
    },
    status: "obtained",
    emoji: "🚀",
    iconType: "sparkles",
    keySkill: {
      fr: "Développement assisté par LLM, Prototypage rapide & Prompt Engineering",
      en: "LLM-assisted development, Rapid Prototyping & Prompt Engineering",
    },
    description: {
      fr: "Méthodologie moderne de programmation augmentée par l'IA : concevoir, itérer et tester des architectures logicielles avec des agents et assistants de code de nouvelle génération.",
      en: "Modern AI-augmented engineering methodology: architecting, prototyping, and deploying responsive software using cutting-edge LLM coding workflows.",
    },
    certificateUrl: "https://www.linkedin.com/learning/certificates/vibe-coding-2026",
    credentialId: "LNKD-VB-2026-904",
    certificateImage: "/certificates/linkedin-vibe-coding.jpg",
  },
  {
    id: 6,
    title: {
      fr: "Algorithmique & Structures de Données Web",
      en: "Web Algorithms & Data Structures",
    },
    issuer: "Coursera",
    date: {
      fr: "Juin 2025",
      en: "June 2025",
    },
    status: "obtained",
    emoji: "📊",
    iconType: "code",
    keySkill: {
      fr: "Complexité Big-O, Graphes, Arbres binaires, Tables de hachage & Optimisation",
      en: "Big-O Complexity, Graphs, Binary Trees, Hash Tables & Optimization",
    },
    description: {
      fr: "Approfondissement des structures de données essentielles pour concevoir des applications web réactives, modulaires et capables de monter en charge sans goulot d'étranglement.",
      en: "Deep dive into core data structures for engineering performant, scalable, and memory-efficient web architectures.",
    },
    certificateUrl: "https://coursera.org/verify/algorithmic-structures-pn",
    credentialId: "COURSERA-ALGO-2025",
    certificateImage: "/certificates/coursera-algo.jpg",
  },
  {
    id: 7,
    title: {
      fr: "Développement Front-End Moderne avec React & Tailwind",
      en: "Modern Front-End Engineering with React & Tailwind",
    },
    issuer: "Skills Academy",
    date: {
      fr: "Novembre 2025",
      en: "November 2025",
    },
    status: "obtained",
    emoji: "⚛️",
    iconType: "react",
    keySkill: {
      fr: "Hooks avancés, Gestion d'état globale, Accessibilité & Design Systems",
      en: "Custom Hooks, Global State Management, A11y & Design Systems",
    },
    description: {
      fr: "Conception d'interfaces utilisateurs ergonomiques, réactives et accessibles conformes aux standards d'entreprise modernes, avec Tailwind CSS et architectures de composants réutilisables.",
      en: "Designing responsive, accessible, enterprise-grade user interfaces with React, state machines, and modular Tailwind CSS architectures.",
    },
    certificateUrl: "https://skillsacademy.tech/verify/react-tailwind-pn",
    credentialId: "SKILLS-ACADEMY-2025-RT",
    certificateImage: "/certificates/skills-academy-react.jpg",
  },
  {
    id: 8,
    title: {
      fr: "Ingénierie Full-Stack & Microservices",
      en: "Full-Stack Engineering & Microservices",
    },
    issuer: "Akieni Academy",
    date: {
      fr: "En cours (2026)",
      en: "In Progress (2026)",
    },
    status: "in_progress",
    progress: 60,
    emoji: "🛠️",
    iconType: "server",
    keySkill: {
      fr: "Architectures RESTful, Authentification JWT, Docker & CI/CD",
      en: "RESTful Architecture, JWT Auth, Docker containers & CI/CD pipelines",
    },
    description: {
      fr: "Parcours intensif de spécialisation sur le déploiement continu, la conteneurisation et la structuration des API scalables prêtes pour la production en startup.",
      en: "Intensive specialization focusing on containerized microservices, high-availability RESTful APIs, and CI/CD pipelines for production workloads.",
    },
    certificateUrl: "https://akieni.academy/curriculum/fullstack-engineer",
    credentialId: "AKIENI-2026-FS60",
    certificateImage: "/certificates/akieni-fullstack.jpg",
  },
  {
    id: 9,
    title: {
      fr: "Data Analyst & Data Manipulation avec Python & SQL",
      en: "Data Analyst & Data Manipulation with Python & SQL",
    },
    issuer: "DataCamp",
    date: {
      fr: "En cours (2026)",
      en: "In Progress (2026)",
    },
    status: "in_progress",
    progress: 40,
    emoji: "📈",
    iconType: "database",
    keySkill: {
      fr: "Pandas, NumPy, Requêtes SQL analytiques complexes & Visualisation Seaborn",
      en: "Pandas, NumPy, Advanced Analytical SQL Queries & Data Visualization",
    },
    description: {
      fr: "Spécialisation dans le traitement de données volumineuses, l'extraction de métriques décisionnelles d'entreprise et l'automatisation des pipelines ETL.",
      en: "Career track focusing on large dataset exploration, business metric extraction, advanced SQL window functions, and interactive dashboard storytelling.",
    },
    certificateUrl: "https://datacamp.com/profile/priscilia-noudofinin",
    credentialId: "DATACAMP-DA-2026-40",
    certificateImage: "/certificates/datacamp-data-analyst.jpg",
  }
];
