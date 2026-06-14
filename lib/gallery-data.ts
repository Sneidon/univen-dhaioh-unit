export type GalleryPhoto = {
  src: string;
  caption: string;
};

export type GalleryEvent = {
  slug: string;
  title: string;
  description: string;
  photos: GalleryPhoto[];
};

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

export const galleryEvents: GalleryEvent[] = [
  {
    slug: "south-deep-gold-mine",
    title: "South Deep Gold Mine Field Visit",
    description:
      "A first-hand research visit to South Deep Gold Mine, exploring the frontlines of occupational health in one of the world's deepest gold mines.",
    photos: southDeepPhotos,
  },
];

export function getGalleryEvent(slug: string) {
  return galleryEvents.find((event) => event.slug === slug);
}
