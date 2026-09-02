export type NewsArticle = {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  summary: string;
  cover: string;
  coverAlt: string;
  pdfHref: string;
  gallerySlug: string;
  videoId: string;
  body: string[];
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "women-in-mining-indaba-2026",
    title:
      "UNIVEN Faculty of Health Sciences Scholars Contribute to the 2026 National Women in Mining Indaba",
    date: "2026-08-21",
    dateLabel: "20–21 August 2026",
    summary:
      "Professors Lindiwe Zungu and Tshilidzi Mulaudzi represented the University of Venda at the MHSC National Women in Mining Indaba at Emperors Palace, advancing gender-responsive health, safety, and dignity for women in mining.",
    cover: "/gallery/women-in-mining-indaba-2026/delegates-speakers-stage.jpg",
    coverAlt:
      "Delegates and speakers at the MHSC National Women in Mining Indaba stage backdrop",
    pdfHref: "/docs/news/univen-faculty-women-in-mining-indaba-2026.pdf",
    gallerySlug: "women-in-mining-indaba-2026",
    videoId: "UB_Fn2aw_T8",
    body: [
      "UNIVEN, represented by Professor Lindiwe Zungu (OHS in Mining Research Institute / DHAIOH Unit) and Professor Tshilidzi Mulaudzi (Faculty Executive Dean), joined national stakeholders at the MHSC Women in Mining Indaba held from 20–21 August 2026 at Emperors Palace, Johannesburg. The gathering advanced conversations on women’s health, safety, and inclusion in the South African mining industry under the theme “Reinvigorating the Integration of Health and Safety for Women in the SAMI.”",
      "The two-day Indaba brought together women in mining and key industry stakeholders to engage practical solutions that strengthen safety, participation, and advancement in the sector. The programme also featured a keynote address by the Deputy Minister of Mineral and Petroleum Resources, Honourable Ms Phumzile Mgcina.",
      "On Day 1, Professor Zungu’s presentation From PPE to Infrastructure: Designing Mining Environments for Women highlighted the need for gender-responsive mining environments historically designed around male workers. Inclusive mining design, she argued, must extend to tools and machinery, sanitation and change facilities, and supportive infrastructure — alongside digital tools and environmental sensors that strengthen proactive occupational health surveillance. Her message was clear: every woman at work should return home not merely alive, but healthy, uninjured, and free from harm.",
      "On Day 2, 21 August 2026, Professor Zungu shifted focus to Gender-Based Violence and Femicide (GBVF) in the South African Mining Industry, presenting on the MHSC-funded research project MHSC030/2025/26. She highlighted how GBVF risks — including harassment, intimidation, and fear — can emerge across the broader mining ecosystem, from underground and surface operations to commuting and accommodation settings. The sector now has the 2024 MHSC Guidance Note for managing GBVF-related safety and security; the current research project will deepen evidence on GBVF prevalence and risk to move from policy commitment to implementation.",
      "Across both days, Professor Zungu advanced a consistent Zero Harm message: achieving safer workplaces means every woman in mining should be able to return home healthy, safe, unharmed, and treated with dignity. She also emphasised designated Women in Mining representatives or focal persons across mining operations to strengthen coordination and implementation of Women in Mining initiatives.",
      "The participation of Professors Zungu and Mulaudzi provided an important opportunity for UNIVEN and the DHAIOH Unit to contribute to national conversations on creating safer, healthier, more inclusive, and gender-responsive mining workplaces — reinforcing UNIVEN’s growing impact in mining health and safety research and transformation.",
    ],
  },
];

export function getNewsArticle(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}
