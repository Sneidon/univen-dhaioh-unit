export type GalleryPhoto = {
  src: string;
  caption: string;
};

export type GalleryVideo = {
  id: string;
  title: string;
  desc: string;
};

export type GalleryEvent = {
  slug: string;
  title: string;
  description: string;
  photos: GalleryPhoto[];
  cover?: string;
};

const dolomiteMinePhotos: GalleryPhoto[] = [
  { src: "/gallery/dolomite-1.jpg",  caption: "Dolomite Mine — open-pit overview with processing facilities" },
  { src: "/gallery/dolomite-2.jpg",  caption: "Field assessment — researcher and site manager at crane" },
  { src: "/gallery/dolomite-3.jpg",  caption: "DHAIOH team at Dolomite Mine — open pit in background" },
  { src: "/gallery/dolomite-4.jpg",  caption: "Researcher descending mine access stairs" },
  { src: "/gallery/dolomite-5.jpg",  caption: "Site walkthrough — researcher alongside haul truck" },
  { src: "/gallery/dolomite-6.jpg",  caption: "Partnership engagement — researcher and site representative" },
  { src: "/gallery/dolomite-7.jpg",  caption: "Field visit — researcher with XCMG wheel loader" },
  { src: "/gallery/dolomite-8.jpg",  caption: "Active wheel loader operations — dust exposure observation" },
  { src: "/gallery/dolomite-10.jpg", caption: "Researcher conducting walkthrough — mine haulage area" },
  { src: "/gallery/dolomite-17.jpg", caption: "Dust generation during loading operations" },
  { src: "/gallery/dolomite-18.jpg", caption: "Wheel loader at work — material handling and dust exposure" },
  { src: "/gallery/dolomite-19.jpg", caption: "Equipment inspection — welding machinery assessment" },
  { src: "/gallery/dolomite-20.jpg", caption: "Collaborative equipment review inside mine facility" },
  { src: "/gallery/dolomite-21.jpg", caption: "Dolomite Mine — full site panorama with conveyor systems" },
  { src: "/gallery/dolomite-22.jpg", caption: "Terraced open-pit face with haulage and processing infrastructure" },
  { src: "/gallery/dolomite-25.jpg", caption: "Elevated site view — conveyor bridge and haulage routes" },
];

const southDeepPhotos: GalleryPhoto[] = [
  { src: "/gallery/mine-1.jpg", caption: "Underground field visit — South Deep Gold Mine" },
  { src: "/gallery/mine-2.jpg", caption: "Research team underground at South Deep" },
  { src: "/gallery/mine-3.jpg", caption: "DHAIOH Unit team — underground tunnel" },
  { src: "/gallery/mine-4.jpg", caption: "Team engagement during mine visit" },
  { src: "/gallery/mine-5.jpg", caption: "Researchers at the underground rock face" },
  { src: "/gallery/mine-6.jpg", caption: "Underground assessment — deep-level mine" },
  { src: "/gallery/mine-7.jpg", caption: "Research team in the underground shaft" },
  { src: "/gallery/mine-8.jpg", caption: "Mine visit field observation" },
  { src: "/gallery/mine-9.jpg", caption: "Collaborative research — South Deep tunnels" },
  { src: "/gallery/mine-10.jpg", caption: "Occupational health field assessment" },
  { src: "/gallery/mine-11.jpg", caption: "Deep-level mine environment" },
  { src: "/gallery/mine-12.jpg", caption: "Worker health observation underground" },
  { src: "/gallery/mine-13.jpg", caption: "Underground operations site visit" },
  { src: "/gallery/mine-14.jpg", caption: "Surface facility walkthrough — mine visit" },
  { src: "/gallery/mine-15.jpg", caption: "Equipment assessment at the mine site" },
  { src: "/gallery/mine-16.jpg", caption: "Research team at the mine surface facility" },
  { src: "/gallery/mine-17.jpg", caption: "Technical briefing — mining equipment" },
];

const openPitOpsPhotos: GalleryPhoto[] = [
  { src: "/gallery/ops-1.png", caption: "Haulage operations — excavator loading at the mine face" },
  { src: "/gallery/ops-2.png", caption: "Aerial overview of open-pit mine terracing" },
  { src: "/gallery/ops-3.png", caption: "Bird's-eye view of active excavation and haulage routes" },
  { src: "/gallery/ops-4.png", caption: "Worker health observation — mine processing facility" },
  { src: "/gallery/ops-5.png", caption: "Surface mining infrastructure from above" },
  { src: "/gallery/ops-6.png", caption: "Site supervisor at haulage area — open-pit mine" },
  { src: "/gallery/ops-7.png", caption: "Excavator and haul truck operations — surface mine" },
  { src: "/gallery/ops-8.png", caption: "Mine workers conducting site patrol — open-pit operations" },
  { src: "/gallery/ops-9.png", caption: "Mine headframe at dusk — surface winding infrastructure" },
  { src: "/gallery/ops-10.png", caption: "Underground tunnel assessment — deep-level mine" },
  { src: "/gallery/ops-11.png", caption: "Heavy haulage fleet at surface — mine transport operations" },
  { src: "/gallery/ops-12.png", caption: "Wheel loader at the quarry rock face — surface operations" },
];

export const galleryEvents: GalleryEvent[] = [
  {
    slug: "dolomite-mine-field-visit",
    title: "Dolomite Mine Field Visit",
    description:
      "A hands-on research visit to a Dolomite Mine, examining occupational health conditions, dust exposure, equipment hazards, and worker safety in surface mining operations.",
    cover: "/gallery/dolomite-1.jpg",
    photos: dolomiteMinePhotos,
  },
  {
    slug: "open-pit-mining-operations",
    title: "Open-Pit Mining Operations — Field Reconnaissance",
    description:
      "A comprehensive visual documentation of open-pit mining operations, capturing equipment, personnel, and site conditions that inform the DHAIOH Unit's occupational health research in surface and underground mining environments.",
    cover: "/banners/hero-open-pit-ops.png",
    photos: openPitOpsPhotos,
  },
  {
    slug: "south-deep-gold-mine",
    title: "South Deep Gold Mine Field Visit",
    description:
      "A first-hand research visit to South Deep Gold Mine, exploring the frontlines of occupational health in one of the world's deepest gold mines.",
    photos: southDeepPhotos,
  },
];

export const galleryVideos: GalleryVideo[] = [
  {
    id: "4jLevr_hxpo",
    title: "Professor Lindiwe Zungu's Visit to South Deep Gold Mine",
    desc: galleryEvents[0].description,
  },
  {
    id: "9agcYsFIDi8",
    title: "11th SAMRC Scientific Merit Awards — Research Capacity Development",
    desc: "Recognising excellence in research and celebrating the DHAIOH Unit's contribution to advancing occupational health science in South Africa.",
  },
];

export function getGalleryEvent(slug: string) {
  return galleryEvents.find((event) => event.slug === slug);
}
