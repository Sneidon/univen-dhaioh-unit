import { assetUrl } from "@/lib/asset-url";

export type CardImage = { src: string; alt: string };

const img = (path: string, alt: string): CardImage => ({ src: assetUrl(path), alt });

export const bannerImages = {
  home: img("/banners/hero-home.jpg", "Open-pit mine with AI risk monitoring"),
  about: img("/banners/hero-about.jpg", "Researchers in mining health laboratory"),
  researchThemes: img("/banners/hero-research-themes.jpg", "Open-pit mine with predictive analytics"),
  researchImpact: img("/banners/hero-research-impact.jpg", "Occupational health command center"),
  impactFramework: img("/banners/hero-impact-framework.jpg", "Connected mining facility at sunset"),
  contact: img("/banners/hero-contact.jpg", "Connected smart mining site"),
  leadership: img("/banners/hero-leadership.jpg", "Mining health excellence team"),
  partners: img("/banners/hero-partners.jpg", "Open-pit mining field operations"),
  innovation: img("/banners/hero-innovation.jpg", "Digital twin mining haul truck"),
  humanCapital: img("/banners/hero-human-capital.jpg", "Mine health doctor with dashboard"),
  gallery: img("/banners/hero-gallery.jpg", "Miner with wearable health sensors"),
} as const;

export const innovationCards = {
  ip: img("/cards/card-innovation-ip-patents.jpg", "Innovation lab team developing mining health IP"),
  sensor: img("/cards/card-innovation-sensor-integration.jpg", "Wearable health sensors on miner in underground tunnel"),
  pathway: img("/cards/card-innovation-impact-pathway.jpg", "Sunset aerial of connected South African mining site"),
  ai: img("/cards/card-innovation-ai-solutions.jpg", "Wireframe digital twin haul truck with AI analytics"),
} as const;

export const themeCards = [
  img("/cards/card-theme-01-digital-health.jpg", "Doctor with holographic worker health visualisation at mine site"),
  img("/cards/card-theme-02-ai-analytics.jpg", "Digital twin mining truck with predictive analytics"),
  img("/cards/card-theme-03-disease-prevention.jpg", "Occupational health screening in mining clinic"),
  img("/cards/card-theme-04-medical-surveillance.jpg", "Underground miner with wearable health monitoring"),
  img("/cards/card-theme-05-women-in-mining.jpg", "Confident woman mining engineer at open-pit site"),
  img("/cards/card-theme-06-mental-health.jpg", "Psychosocial support in mining workplace setting"),
  img("/cards/card-theme-07-climate-environment.jpg", "Environmental health monitoring at mining landscape"),
  img("/cards/card-theme-08-innovation-commercialisation.jpg", "Innovation team developing mining health technology"),
] as const satisfies readonly CardImage[];

export const impactCards = [
  img("/cards/card-impact-policy-influence.jpg", "Health experts and officials reviewing policy evidence"),
  img("/cards/card-impact-codes-of-practice.jpg", "Safety inspector and mine manager reviewing standards"),
  img("/cards/card-impact-women-mining-policy.jpg", "Diverse group of women in mining and health roles"),
  img("/cards/card-impact-government-advisory.jpg", "Advisor presenting occupational health evidence"),
  img("/cards/card-impact-regulatory-reform.jpg", "Department meeting on mining health regulation"),
  img("/cards/card-impact-evidence-to-policy.jpg", "Researcher translating findings into policy"),
] as const satisfies readonly CardImage[];

export const hcdCards = [
  img("/cards/card-hcd-postdoc.jpg", "Postdoctoral fellow in mining health research"),
  img("/cards/card-hcd-phd.jpg", "PhD student with supervisors reviewing AI models"),
  img("/cards/card-hcd-masters.jpg", "Master's student at mine observation point"),
  img("/cards/card-hcd-early-career.jpg", "Young emerging researcher presenting findings"),
  img("/cards/card-hcd-intern.jpg", "Research intern calibrating health sensors"),
  img("/cards/card-hcd-practitioner.jpg", "Occupational health practitioner at mine clinic"),
  img("/cards/card-hcd-future-leaders.jpg", "Mixed group of future leaders in digital health workshop"),
] as const satisfies readonly CardImage[];

export const frameworkPillarImages = [
  img("/cards/card-framework-01-ai-ml.jpg", "AI and machine learning over mining operations"),
  img("/cards/card-framework-02-digital-health.jpg", "Integrated digital health platform"),
  img("/cards/card-framework-03-big-data.jpg", "Data analyst reviewing mining health metrics"),
  img("/cards/card-framework-04-predictive-modelling.jpg", "Risk forecast heatmap over open-pit mine"),
  img("/cards/card-framework-05-medical-surveillance.jpg", "Smart surveillance dashboard for worker health"),
  img("/cards/card-framework-06-wearable-sensors.jpg", "Close-up of wearable health sensors on worker"),
  img("/cards/card-framework-07-early-warning.jpg", "Command center operator at early-warning wall"),
  img("/cards/card-framework-08-disease-prevention.jpg", "Prevention clinic screening in mining facility"),
  img("/cards/card-framework-09-digital-platforms.jpg", "Unified occupational health digital platform"),
  img("/cards/card-framework-10-commercialisation.jpg", "Innovation team commercialising mining health tech"),
] as const satisfies readonly CardImage[];

export const leadershipCards = [
  img("/cards/card-leadership-transdisciplinary.jpg", "Researchers collaborating across health and engineering"),
  img("/cards/card-leadership-dual-approaches.jpg", "Human-centred care alongside AI data systems"),
  img("/cards/card-leadership-academic-industry.jpg", "University campus and mine industry partnership"),
  img("/cards/card-leadership-end-to-end-impact.jpg", "Flow from lab research to field deployment"),
  img("/cards/card-leadership-human-capital.jpg", "Mentor guiding postgraduate students in lab"),
  img("/cards/card-leadership-partnerships.jpg", "Roundtable with academia, government, and mining sector"),
] as const satisfies readonly CardImage[];

export const programmeCards = [
  img("/cards/card-programme-01-early-warning.jpg", "Disease early warning command center"),
  img("/cards/card-programme-02-ai-surveillance.jpg", "AI-powered worker health surveillance"),
  img("/cards/card-programme-03-women-mining-health.jpg", "Women mining health and safety team on site"),
  img("/cards/card-programme-04-mental-health.jpg", "Psychosocial support in mining workplace"),
  img("/cards/card-programme-05-biological-hazards.jpg", "Dust and biological hazard sampling underground"),
  img("/cards/card-programme-06-cancer-prevention.jpg", "Cancer prevention screening in mine health facility"),
  img("/cards/card-programme-07-climate-worker-health.jpg", "Environmental health sensors at mining site"),
  img("/cards/card-programme-08-water-food-health.jpg", "Water quality testing near mining community"),
  img("/cards/card-programme-09-digital-innovation.jpg", "Digital health innovation project development"),
] as const satisfies readonly CardImage[];
