export const extension_2_maths_topics = [
  "good questions",
  "Complex",
  "Proofs",
  "Calculus",
  "Vectors",
  "Mechanics",
];

export const extension_1_maths_topics = [
  "good questions",
  "Functions",
  "Trigonometry",
  "Vectors",
  "Perms and Combs",
  "Proofs",
  "Binomial Distribution",
  "Calculus",
];

export const maths_advanced_topics = [
  "Sequences and Series",
  "Graphs and Equations",
  "Differential Calculus",
  "Integration",
  "Exponential and Log Function",
  "Trig Functions",
  "Motion and Rates",
  "Series and Finance",
  "Descriptive Statistics",
  "Bivariate Data Analysis",
  "Random Variables",
];

export const all_topics = [
  ...new Set([
    ...extension_1_maths_topics,
    ...extension_2_maths_topics,
    ...maths_advanced_topics,
  ]),
];

export const mathsTopics = [
  { topic: "Complex", level: "extension2" },
  { topic: "Proofs", level: "extension2" },
  { topic: "Calculus", level: "extension2" },
  { topic: "Vectors", level: "extension2" },
  { topic: "Mechanics", level: "extension2" },
  { topic: "Functions", level: "extension1" },
  { topic: "Trigonometry", level: "extension1" },
  { topic: "Vectors", level: "extension1" },
  { topic: "Perms and Combs", level: "extension1" },
  { topic: "Proofs", level: "extension1" },
  { topic: "Binomial Distribution", level: "extension1" },
  { topic: "Calculus", level: "extension1" },
  { topic: "Sequences and Series", level: "advanced" },
  { topic: "Graphs and Equations", level: "advanced" },
  { topic: "Differential Calculus", level: "advanced" },
  { topic: "Integration", level: "advanced" },
  { topic: "Exponential and Log Function", level: "advanced" },
  { topic: "Trig Functions", level: "advanced" },
  { topic: "Motion and Rates", level: "advanced" },
  { topic: "Series and Finance", level: "advanced" },
  { topic: "Descriptive Statistics", level: "advanced" },
  { topic: "Bivariate Data Analysis", level: "advanced" },
  { topic: "Random Variables", level: "advanced" },
];

export const physicsTopics = [
  "Module 1: Kinematics",
  "Module 2: Dynamics",
  "Module 3: Waves and Thermodynamics",
  "Module 4: Electric and Magnetic Fields",
  "Module 5: Advanced Mechanics",
  "Module 6: Electromagnetism",
  "Module 7: The Nature of Light",
  "Module 8: From the Universe to the Atom",
];

export const chemistryTopics = [
  "Module 1: Properties and Structure of Matter",
  "Module 2: Introduction to Quantitative Chemistry",
  "Module 3: Reactive Chemistry",
  "Module 4: Drivers of Reactions",
  "Module 5: Equilibrium and Acid Reactions",
  "Module 6: Acid/Base Reactions",
  "Module 7: Organic Chemistry",
  "Module 8: Applying Chemical Ideas",
];

export const levels = ["4U", "3U", "2U"];

export const subjects = ["maths", "chem", "phys"];
