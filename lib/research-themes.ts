export type ResearchTheme = {
  title: string;
  desc: string;
  short: string;
};

/** Canonical research themes — full copy on /research-themes; home uses `short`. */
export const researchThemes: ResearchTheme[] = [
  {
    title: "Digital Health & Occupational Health Intelligence",
    short: "Real-time surveillance platforms and evidence-based decision support.",
    desc: "Developing integrated digital platforms that support real-time occupational health surveillance, worker monitoring, and evidence-based decision-making.",
  },
  {
    title: "Artificial Intelligence & Predictive Analytics",
    short: "Machine learning to predict risks and enable proactive interventions.",
    desc: "Leveraging machine learning and advanced analytics to predict occupational health risks, identify emerging hazards, and support proactive interventions.",
  },
  {
    title: "Occupational Disease Prevention & Early Detection",
    short: "Digital tools for respiratory disease, cancer, hearing loss, and more.",
    desc: "Creating digital tools and predictive models for the prevention and early detection of occupational diseases, including respiratory diseases, cancers, hearing loss, musculoskeletal disorders, and mental health conditions.",
  },
  {
    title: "Medical Surveillance & Early Warning Systems",
    short: "Intelligent systems that surface emerging occupational health trends.",
    desc: "Designing intelligent surveillance systems that enable rapid identification of health trends, disease outbreaks, and emerging occupational risks.",
  },
  {
    title: "Women in Mining & Gender-Responsive Health Systems",
    short: "Gender-responsive health, safety, and wellbeing solutions for women miners.",
    desc: "Advancing innovative solutions that address the unique occupational health, safety, reproductive health, security, and wellbeing needs of women in mining.",
  },
  {
    title: "Mental Health, Wellbeing & Psychosocial Risk Management",
    short: "Digital approaches to workplace mental health and psychosocial risk.",
    desc: "Developing evidence-based approaches for monitoring, preventing, and managing workplace mental health challenges through digital platforms and predictive systems.",
  },
  {
    title: "Climate Change, Environmental Health & Sustainable Mining",
    short: "Climate-related exposures and sustainable occupational health systems.",
    desc: "Investigating the intersection between environmental exposures, climate-related risks, worker health, and sustainable occupational health systems.",
  },
  {
    title: "Innovation, Commercialisation & Technology Development",
    short: "Patents, digital products, and scalable industry solutions.",
    desc: "Transforming research outputs into patents, digital products, health technologies, decision-support systems, and scalable solutions with industry impact.",
  },
];
