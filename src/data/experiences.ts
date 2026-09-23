export interface ExperienceItem {
  id: string;
  role: {
    fr: string;
    en: string;
  };
  company: string;
  location: string;
  period: {
    fr: string;
    en: string;
  };
  type: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  achievements: {
    fr: string[];
    en: string[];
  };
  technologies: string[];
}

export const experiencesData: ExperienceItem[] = [
  {
    id: "neutraderm",
    role: {
      fr: "Designer IA & Créatrice de Contenu Visuel",
      en: "AI Designer & Digital Visual Strategist",
    },
    company: "Neutraderm",
    location: "Cotonou, Bénin",
    period: {
      fr: "2026",
      en: "2026",
    },
    type: {
      fr: "Mission Freelance",
      en: "Freelance Engagement",
    },
    description: {
      fr: "Conception et génération d'actifs visuels de marque et de maquettes publicitaires haut de gamme assistées par les modèles d'intelligence artificielle générative les plus récents.",
      en: "Creation and generation of high-converting brand visual assets and creative advertising prototypes assisted by state-of-the-art generative AI image synthesis models.",
    },
    achievements: {
      fr: [
        "Création de visuels photoréalistes de produits cosmétiques avec Midjourney et DALL-E",
        "Réalisation de capsules promotionnelles dynamiques avec RunwayML et CapCut",
        "Amélioration sensible de l'engagement sur les canaux digitaux de la marque"
      ],
      en: [
        "Generated photorealistic cosmetic product visual assets utilizing Midjourney and DALL-E",
        "Directed dynamic promotional video motion shorts using RunwayML and CapCut",
        "Measurably enhanced customer engagement metrics across branded digital social channels"
      ]
    },
    technologies: ["Midjourney", "DALL-E", "RunwayML", "CapCut", "Canva", "Photoshop"]
  },
  {
    id: "cliffa-services",
    role: {
      fr: "Stagiaire Développeuse Full-Stack",
      en: "Full-Stack Software Engineering Intern",
    },
    company: "CLIFFA Services",
    location: "Cotonou, Bénin",
    period: {
      fr: "Février 2026",
      en: "February 2026",
    },
    type: {
      fr: "Stage Pratique",
      en: "Engineering Internship",
    },
    description: {
      fr: "Contribution active au développement et à l'optimisation de modules web de gestion interne et de portails clients au sein d'une équipe technique agile.",
      en: "Contributed actively to the engineering, performance optimization, and testing of customer-facing portals and internal management software within an agile team.",
    },
    achievements: {
      fr: [
        "Intégration d'interfaces réactives avec React et Tailwind CSS",
        "Développement d'endpoints API sécurisés et gestion de bases de données relationnelles",
        "Résolution de tickets de bugs et amélioration des temps de réponse des pages"
      ],
      en: [
        "Built responsive user interfaces utilizing React and modern Tailwind CSS systems",
        "Engineered secure API endpoints and managed relational query structures",
        "Resolved critical bug tickets and optimized page load performance for end users"
      ]
    },
    technologies: ["React", "JavaScript", "Tailwind CSS", "Node.js", "MySQL", "Git"]
  },
  {
    id: "marktech",
    role: {
      fr: "Stagiaire Développeuse Web",
      en: "Web Development Intern",
    },
    company: "MARKTECH",
    location: "Cotonou, Bénin",
    period: {
      fr: "Août — Septembre 2025",
      en: "August — September 2025",
    },
    type: {
      fr: "Stage Technique",
      en: "Technical Internship",
    },
    description: {
      fr: "Immersion dans la production de sites vitrines et d'applications web personnalisées pour des PME locales, de la maquette au déploiement.",
      en: "Hands-on immersion developing responsive showcase web applications and custom business portals for regional SMB clients from design mockup to deployment.",
    },
    achievements: {
      fr: [
        "Conception de maquettes ergonomiques et intégration fidèle mobile-first",
        "Mise en place de formulaires interactifs avec validation de données côté client et serveur",
        "Sensibilisation des clients à l'administration de leurs contenus web"
      ],
      en: [
        "Designed ergonomic wireframes and translated them into mobile-first responsive web pages",
        "Implemented interactive web forms with both client-side and server-side validation",
        "Provided client onboarding and user documentation for portal administration"
      ]
    },
    technologies: ["PHP", "JavaScript", "HTML5/CSS3", "Bootstrap", "MySQL", "cPanel"]
  },
  {
    id: "ministere-defense",
    role: {
      fr: "Stagiaire Développeuse Full-Stack",
      en: "Full-Stack Engineering Intern",
    },
    company: "Ministère de la Défense Nationale",
    location: "Cotonou, Bénin",
    period: {
      fr: "Juin — Août 2025",
      en: "June — August 2025",
    },
    type: {
      fr: "Stage Institutionnel",
      en: "Institutional Internship",
    },
    description: {
      fr: "Conception et implémentation du système informatisé de gestion des notes et d'édition automatique des bulletins scolaires au Prytanée Militaire.",
      en: "Designed and implemented the mission-critical automated grading and student transcript generation application for the Military Academy of Benin.",
    },
    achievements: {
      fr: [
        "Modélisation complète de la base de données relationnelle (MCD/MLD) sur MySQL",
        "Automatisation du calcul des moyennes trimestrielles pondérées et des rangs de mérite",
        "Génération instantanée en PDF des bulletins officiels conformes aux exigences de l'armée"
      ],
      en: [
        "Modeled normalized relational database schemas (ERD/Relational) in MySQL",
        "Automated weighted quarterly GPA calculation and cohort merit rankings without human error",
        "Engineered instant batch PDF rendering of official academic transcripts meeting defense protocols"
      ]
    },
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "FPDF"]
  }
];
