export interface SkillItem {
  name: string;
  level?: string;
  iconName: string;
  color?: string;
}

export interface SkillCategory {
  id: string;
  title: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  skills: SkillItem[];
}

export const skillsData: SkillCategory[] = [
  {
    id: "fullstack",
    title: {
      fr: "Développement Full-Stack",
      en: "Full-Stack Engineering",
    },
    description: {
      fr: "Conception d'applications web et mobiles de bout en bout, avec une architecture robuste et une ergonomie soignée.",
      en: "End-to-end web and mobile applications engineered with scalable architectures and crisp UX.",
    },
    skills: [
      { name: "PHP", iconName: "SiPhp", color: "#777BB4" },
      { name: "Laravel", iconName: "SiLaravel", color: "#FF2D20" },
      { name: "JavaScript", iconName: "SiJavascript", color: "#F7DF1E" },
      { name: "React", iconName: "SiReact", color: "#61DAFB" },
      { name: "Vue.js", iconName: "SiVuedotjs", color: "#4FC08D" },
      { name: "React Native", iconName: "TbBrandReactNative", color: "#61DAFB" },
      { name: "HTML5", iconName: "SiHtml5", color: "#E34F26" },
      { name: "CSS3", iconName: "SiCss3", color: "#1572B6" },
      { name: "Tailwind CSS", iconName: "SiTailwindcss", color: "#06B6D4" },
    ]
  },
  {
    id: "ai",
    title: {
      fr: "IA & Création Numérique",
      en: "Generative AI & Digital Media",
    },
    description: {
      fr: "Exploitation d'outils d'IA générative et de médias visuels pour booster la créativité, le branding et la vitesse de production.",
      en: "Harnessing modern generative AI models and visual creative software for high-speed prototyping and asset creation.",
    },
    skills: [
      { name: "Midjourney", iconName: "SiMidjourney", color: "#3B82F6" },
      { name: "DALL-E", iconName: "SiOpenai", color: "#10A37F" },
      { name: "RunwayML", iconName: "BsCameraVideoFill", color: "#8B5CF6" },
      { name: "Kling AI", iconName: "HiSparkles", color: "#F59E0B" },
      { name: "Canva", iconName: "SiCanva", color: "#00C4CC" },
      { name: "CapCut", iconName: "BiMoviePlay", color: "#EC4899" },
    ]
  },
  {
    id: "methods",
    title: {
      fr: "Méthodologies & Bonnes Pratiques",
      en: "Methodologies & Architecture",
    },
    description: {
      fr: "Pratiques collaboratives modernes centrées sur l'efficacité collective, la clarté du code et l'expérience utilisateur.",
      en: "Modern collaborative development standards focused on high team velocity, clean code, and user empathy.",
    },
    skills: [
      { name: "Agile / Scrum", iconName: "TbBrandSpeedtest", color: "#3B7DD8" },
      { name: "UX / UI Design", iconName: "SiFigma", color: "#F24E1E" },
      { name: "Git & GitHub", iconName: "SiGithub", color: "#181717" },
      { name: "CI / CD & Tests", iconName: "VscCheckAll", color: "#10B981" },
    ]
  },
  {
    id: "tools",
    title: {
      fr: "Bureautique & Données",
      en: "Productivity & Data Systems",
    },
    description: {
      fr: "Maîtrise des systèmes de bases de données relationnelles et des suites professionnelles d'analyse et de reporting.",
      en: "Mastery of relational database systems, schema design, analytical reporting, and enterprise office suites.",
    },
    skills: [
      { name: "MySQL", iconName: "SiMysql", color: "#4479A1" },
      { name: "Microsoft Excel (Avancé)", iconName: "SiMicrosoftexcel", color: "#107C41" },
      { name: "Microsoft Word", iconName: "SiMicrosoftword", color: "#2B579A" },
      { name: "Microsoft PowerPoint", iconName: "SiMicrosoftpowerpoint", color: "#D24726" },
      { name: "VS Code", iconName: "VscCode", color: "#007ACC" },
      { name: "Postman", iconName: "SiPostman", color: "#FF6C37" },
    ]
  }
];
