import { programmeCards } from "@/lib/card-images";

export type FlagshipProgramme = {
  n: string;
  tag: string;
  subTag: string;
  title: string;
  image: string;
  imageAlt: string;
};

export const flagshipProgrammes: FlagshipProgramme[] = [
  {
    n: "01",
    tag: "ACTIVE",
    subTag: "Flagship Programme",
    title: "Occupational Disease Early Warning Systems",
    image: programmeCards[0].src,
    imageAlt: programmeCards[0].alt,
  },
  {
    n: "02",
    tag: "STRATEGIC",
    subTag: "Multi-year Study",
    title: "AI-Powered Worker Health Surveillance",
    image: programmeCards[1].src,
    imageAlt: programmeCards[1].alt,
  },
  {
    n: "03",
    tag: "ACTIVE",
    subTag: "Gender-Responsive",
    title: "Women in Mining Health & Safety",
    image: programmeCards[2].src,
    imageAlt: programmeCards[2].alt,
  },
  {
    n: "04",
    tag: "STRATEGIC",
    subTag: "Psychosocial Research",
    title: "Mental Health in Mining",
    image: programmeCards[3].src,
    imageAlt: programmeCards[3].alt,
  },
  {
    n: "05",
    tag: "ACTIVE",
    subTag: "Hazard Research",
    title: "Biological Hazards in Mining",
    image: programmeCards[4].src,
    imageAlt: programmeCards[4].alt,
  },
  {
    n: "06",
    tag: "STRATEGIC",
    subTag: "Prevention Focus",
    title: "Occupational Cancer Prevention",
    image: programmeCards[5].src,
    imageAlt: programmeCards[5].alt,
  },
  {
    n: "07",
    tag: "ACTIVE",
    subTag: "Environmental Health",
    title: "Climate Change & Worker Health",
    image: programmeCards[6].src,
    imageAlt: programmeCards[6].alt,
  },
  {
    n: "08",
    tag: "ACTIVE",
    subTag: "Water-Food-Health",
    title: "Water-Food-Health Nexus Research",
    image: programmeCards[7].src,
    imageAlt: programmeCards[7].alt,
  },
  {
    n: "09",
    tag: "INNOVATION",
    subTag: "Technology Development",
    title: "Digital Health Innovation Projects",
    image: programmeCards[8].src,
    imageAlt: programmeCards[8].alt,
  },
];
