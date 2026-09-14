export const peopleCategories = [
  "Principal Investigator",
  "Graduate Researchers",
  "Research Staff",
  "Undergraduate Researchers",
  "Alumni",
] as const;

export type PeopleCategory = (typeof peopleCategories)[number];
export type AlumniCategory = "Master's Alumni" | "Undergraduate Alumni";

export type LabMember = {
  name: string;
  slug: string;
  role: string;
  category: PeopleCategory;
  email: string | null;
  image: string;
  imagePosition: string;
  researchInterests: string | null;
  biography: string;
  outsideLab: string | null;
  alumniCategory?: AlumniCategory;
};

export const people: LabMember[] = [
  {
    name: "Dr. Sei Higuchi",
    slug: "sei-higuchi",
    role: "Principal Investigator / Assistant Professor",
    category: "Principal Investigator",
    email: null,
    image: "/images/dr-higuchi.jpg",
    imagePosition: "50% 38%",
    researchInterests:
      "His research focuses on bile acids, intestinal lipid sensing, appetite regulation, obesity, inflammation, and metabolic disease.",
    biography:
      "Dr. Sei Higuchi joined St. John's University in Fall 2022 as an Assistant Professor in the Department of Pharmaceutical Sciences. Before joining St. John's, he served as an Associate Research Scientist at Columbia University from 2019 to 2022 and as a postdoctoral research scientist at Columbia University from 2015 to 2019 and Kyoto University from 2011 to 2015. He earned a Ph.D. in Pharmacology from Fukuoka University, Japan.",
    outsideLab: null,
  },
  {
    name: "Afsin Malik",
    slug: "afsin-malik",
    role: "Ph.D. Candidate — Pharmacology",
    category: "Graduate Researchers",
    email: "afsin.malik23@my.stjohns.edu",
    image: "/images/people/afsin-malik.jpg",
    imagePosition: "50% 42%",
    researchInterests:
      "Afsin is interested in identifying molecular mechanisms that can be targeted to improve metabolic health and treat metabolic disease. In the Higuchi Lab, she investigates signaling pathways through which bile acids regulate appetite and energy homeostasis in mammals, with the goal of contributing to therapeutic approaches for obesity and diabetes.",
    biography:
      "Afsin earned her Bachelor's degree in Pharmacy in 2016 and Master's degree in Pharmaceutical Chemistry in 2018 from the University of Dhaka in Bangladesh. Her master's research evaluated bioactive compounds from natural sources for therapeutic potential. She later worked in pharmaceutical marketing and as a research assistant at Duquesne University, where she investigated approaches to improve musculoskeletal health and inhibit breast cancer progression. She joined St. John's University in Fall 2023 and subsequently the Higuchi Lab, where her research examines how 16α-hydroxylated bile acids mediate food intake through intestinal OEA–PPARα signaling.",
    outsideLab: "Interested in world politics, history, and anthropology.",
  },
  {
    name: "Mais Alkyam",
    slug: "mais-alkyam",
    role: "Ph.D. Student — Toxicology",
    category: "Graduate Researchers",
    email: "maisalkyam24@my.stjohns.edu",
    image: "/images/people/mais-alkyam.jpg",
    imagePosition: "50% 38%",
    researchInterests:
      "Her research focuses on toxicology and metabolism, particularly bile acid biology, metabolic disease, and molecular mechanisms underlying obesity. She is also interested in translational toxicology and applying molecular and cellular approaches to understand disease processes and potential therapeutic strategies.",
    biography:
      "Mais Alkyam is a Ph.D. student in the Department of Pharmaceutical Sciences at St. John's University, specializing in Toxicology. She earned a Bachelor of Science in Pharmacy from the School of Pharmacy at Jordan University of Science and Technology and a Master of Science in Analytical Toxicology and Forensic Medicine from the School of Medicine at Jordan University. She also completed a Genetic Counseling diploma through Harvard Medical School. Before beginning her doctoral studies, she worked as a Clinical Cancer Genetic Counselor at King Hussein Cancer Center in Jordan. Her current research combines toxicology, metabolism, and molecular biology to investigate mechanisms underlying metabolic disease.",
    outsideLab:
      "Playing tennis or badminton, exploring New York City, drawing, enjoying a cup of tea, or relaxing with a good K-drama.",
  },
  {
    name: "Sydney O. Idahosa",
    slug: "sydney-idahosa",
    role: "Ph.D. Candidate — Toxicology",
    category: "Graduate Researchers",
    email: "sydney.idahosa19@my.stjohns.edu",
    image: "/images/people/sydney-idahosa.jpg",
    imagePosition: "58% 38%",
    researchInterests:
      "Sydney studies the toxicological effects of bisphenol A (BPA) and the therapeutic potential of bile acids in mitigating BPA-induced liver and neurobehavioral dysfunction. Her work investigates inflammation, bile acid signaling, and the gut–liver–brain axis using animal models and cell culture systems.",
    biography:
      "Sydney O. Idahosa is a Ph.D. student in the Toxicology Program at St. John's University. She earned a Bachelor of Science in Biomedical Sciences in 2023 and a Master of Science in Pharmacology in 2024, both from St. John's University. Her research in the Higuchi Laboratory examines how environmental endocrine disruptors, particularly BPA, affect liver function and neurobehavioral health and investigates the protective effects of bile acids using molecular, cellular, behavioral, and animal approaches.",
    outsideLab:
      "Traveling, discovering new restaurants, spending time with family and friends, or planning her next adventure.",
  },
  {
    name: "Yamin Farabih",
    slug: "yamin-farabih",
    role: "Ph.D. Student — Pharmacology",
    category: "Graduate Researchers",
    email: "Yamin.farabih22@my.stjohns.edu",
    image: "/images/people/yamin-farabih.jpg",
    imagePosition: "50% 35%",
    researchInterests:
      "Yamin's research focuses on metabolism and bile acid biology, particularly taurodeoxycholic acid (TDCA). She studies its effects on cells and organs at cellular and molecular levels to better understand how bile acids regulate metabolism and contribute to health and disease.",
    biography:
      "Yamin Farabih is a Ph.D. student in the Department of Pharmaceutical Sciences at St. John's University, specializing in Pharmacology. She earned a Bachelor of Science in Microbiology and Master of Science in Biotechnology from North South University in Dhaka, Bangladesh, and later earned a Master of Science in Pharmacology from St. John's University. Her research experience includes molecular pharmacology, microbiology, biochemistry, cell culture, Western blotting, PCR, histochemistry, ELISA, and animal studies. Her current work investigates the biological effects of bile acids, particularly TDCA.",
    outsideLab:
      "Spending time with her husband, son, and three cats; listening to music; reading; exploring libraries; and discovering new restaurants and cuisines.",
  },
  {
    name: "Kareena Poonai",
    slug: "kareena-poonai",
    role: "Lab Technician",
    category: "Alumni",
    email: "kareena.poonai@stjohns.edu",
    image: "/images/people/kareena-poonai.jpg",
    imagePosition: "50% 42%",
    researchInterests:
      "Kareena studies the gut–brain axis and how metabolic changes influence neurological and behavioral disorders. Her work uses mouse models of depression and obesity and integrates behavioral responses with molecular and metabolic analyses.",
    biography:
      "Kareena Poonai is a Lab Technician and alumna of St. John's University, where she earned a Bachelor of Science in Biology with a minor in Chemistry in Fall 2025. Her research focuses on the gut–brain axis and how metabolic and molecular pathways contribute to depression and obesity. Her technical experience includes behavioral assessments in mouse models, tissue processing, microtomy, genotyping, qPCR, RNA extraction, cDNA synthesis, and gene-expression analysis. She hopes to continue contributing to biomedical research while pursuing a healthcare career in pediatric medicine.",
    outsideLab:
      "Singing, dancing, acting, playing basketball or badminton, kickboxing, painting, playing piano or guitar, or trying a new creative adventure.",
    alumniCategory: "Undergraduate Alumni",
  },
  {
    name: "Lin Choi",
    slug: "lin-choi",
    role: "M.S. Student — Pharmacology",
    category: "Alumni",
    email: "lin.choi.ms@gmail.com",
    image: "/images/people/lin-choi.jpg",
    imagePosition: "50% 35%",
    researchInterests:
      "Lin's research centers on lipid metabolism and protein analysis. She is interested in bile acid-mediated receptor activation as well as how metabolism influences cancer and neurodegenerative disease.",
    biography:
      "Lin earned a Bachelor's degree in Biomedical Sciences and a Master's degree in Pharmacology. Before becoming a research assistant, she worked for six years as a medical assistant and intern at a Korean primary care clinic in Flushing. She is interested in pursuing medicine and hopes to specialize in endocrinology or neurology. She has also been a cellist for more than 13 years.",
    outsideLab: "In a café, public library, or window shopping around the city.",
    alumniCategory: "Master's Alumni",
  },
  {
    name: "Brianna Blanco",
    slug: "brianna-blanco",
    role: "Undergraduate Researcher — Biomedical Sciences",
    category: "Alumni",
    email: "brianna.blanco22@my.stjohns.edu",
    image: "/images/people/brianna-blanco.jpg",
    imagePosition: "50% 35%",
    researchInterests:
      "Brianna's interests include toxicology, metabolism, molecular biology, and mechanisms through which environmental exposures influence disease progression. She contributes to research examining BPA exposure, hepatic function, bile acid metabolism, inflammatory pathways, and neurobehavioral outcomes.",
    biography:
      "Brianna Blanco is a Biomedical Sciences graduate from St. John's University and a research assistant in the Department of Pharmaceutical Sciences. Her work investigates the effects of environmental toxicants, including BPA, on hepatic function, bile acid metabolism, inflammation, and neurobehavioral outcomes. She has developed experience in molecular techniques, scientific communication, collaborative research, poster presentation, and innovation projects. She plans to pursue medicine and integrate her research experience into patient care.",
    outsideLab:
      "Working out, exploring New York City, volunteering, spending time with loved ones, or trying new coffee shops and restaurants.",
    alumniCategory: "Undergraduate Alumni",
  },
  {
    name: "Gabriella Colella",
    slug: "gabriella-colella",
    role: "Undergraduate Researcher — Biomedical Sciences",
    category: "Alumni",
    email: "gabriella.colella22@my.stjohns.edu",
    image: "/images/people/gabriella-colella.jpg",
    imagePosition: "50% 38%",
    researchInterests: null,
    biography:
      "Gabriella Colella has been an Undergraduate Research Assistant in Dr. Sei Higuchi's laboratory since 2023 while pursuing a Bachelor of Science in Biomedical Sciences at St. John's University. She serves as President of Women in STEM and the Phi Sigma Biological Sciences Honor Society. Outside the university, she works as a Medical Assistant at North Shore Children's Healthcare and as a lifeguard at the YMCA.",
    outsideLab:
      "Working with children, staying active as a lifeguard, or participating in campus organizations and community events.",
    alumniCategory: "Undergraduate Alumni",
  },
  {
    name: "Ludovica Zola",
    slug: "ludovica-zola",
    role: "Undergraduate Researcher — Biomedical Sciences",
    category: "Alumni",
    email: "ludovica.zola22@my.stjohns.edu",
    image: "/images/people/ludovica-zola.jpg",
    imagePosition: "50% 38%",
    researchInterests: null,
    biography:
      "Ludovica Zola has been an Undergraduate Research Assistant in Dr. Sei Higuchi's laboratory since 2023 while pursuing a Bachelor of Science in Biomedical Sciences at St. John's University with a minor in Computer Science. She is also a member of the St. John's Division I Women's Volleyball team and the President's Society, the university's highest honor society. She balances scientific research with academics, athletics, and leadership.",
    outsideLab: "On the volleyball court, staying active, or spending time with friends and family.",
    alumniCategory: "Undergraduate Alumni",
  },
  {
    name: "Jonathan Oh",
    slug: "jonathan-oh",
    role: "Undergraduate Researcher — Biology",
    category: "Undergraduate Researchers",
    email: "Jonathan.oh25@my.stjohns.edu",
    image: "/images/people/jonathan-oh.png",
    imagePosition: "50% 35%",
    researchInterests:
      "Jonathan is interested in translational research and contributes to research exploring potential obesity treatments derived from snake bile acids.",
    biography:
      "Jonathan Oh is a BS/DO student at St. John's University majoring in Biology. He is interested in becoming a primary care physician and gaining experience across healthcare and biomedical research. He graduated from Great Neck South High School, where he competed in cross country and served as co-captain of the track team.",
    outsideLab:
      "Usually in the library during the school year; otherwise playing volleyball, tennis, ping pong, or spending time with friends.",
  },
  {
    name: "Kevin Lee",
    slug: "kevin-lee",
    role: "Research Assistant — Pharm.D. Student",
    category: "Undergraduate Researchers",
    email: "kevin.lee22@my.stjohns.edu",
    image: "/images/people/kevin-lee.jpg",
    imagePosition: "50% 42%",
    researchInterests:
      "Kevin's research focuses on how snake bile acid treatment affects mitochondrial oxygen consumption and mitochondrial proteins in primary hepatocytes. He is interested in defining the mechanistic pathways through which snake bile acids act and how they are synthesized, with the long-term goal of exploring whether snake bile acid synthesis could potentially be induced in humans.",
    biography:
      "Kevin Lee is a fifth-year student in the Doctor of Pharmacy (Pharm.D.) program at St. John's University. He has worked in Dr. Higuchi's lab for two years and developed an interest in how snake bile acid metabolism might be used as a novel treatment for diabetes. As a future pharmacist, he is interested in drug-development research that can lead to new therapeutic treatments and help patients around the world.",
    outsideLab: "Playing chess, walking his dog, or spending time on campus.",
  },
  {
    name: "Kristhel Salvatierra",
    slug: "kristhel-salvatierra",
    role: "Undergraduate Researcher — Biomedical Sciences",
    category: "Undergraduate Researchers",
    email: "Kristhel.salvatierra24@my.stjohns.edu",
    image: "/images/people/kristhel-salvatierra.jpg",
    imagePosition: "50% 38%",
    researchInterests:
      "Kristhel is interested in molecular biology and biotechnology, particularly inflammatory signaling in lung and brain cells exposed to hyperoxia and microglial cells undergoing LPS-induced stress. She is also interested in RNA and DNA technologies.",
    biography:
      "Kristhel Salvatierra is a junior Biomedical Sciences major at St. John's University. Her research interests span molecular biology, inflammation, and biotechnology. In Dr. Mantell's lab she studies inflammatory responses following hyperoxia exposure, while in the Higuchi Lab she performs microglial cell culture experiments involving LPS-induced stress to investigate the anti-inflammatory potential of snake bile acids.",
    outsideLab:
      "Playing tennis, working in the St. John's Undergraduate Admissions Office, watching Formula One, enjoying movies with her sister, or watching K-dramas with her mom.",
  },
  {
    name: "Nganga Eunice Mbawa",
    slug: "eunice-mbawa",
    role: "Undergraduate Researcher — Biomedical Sciences",
    category: "Undergraduate Researchers",
    email: "Nganga.mbawa23@my.stjohns.edu",
    image: "/images/people/eunice-mbawa.jpg",
    imagePosition: "50% 32%",
    researchInterests:
      "Eunice investigates possible therapeutic approaches that influence biological regulatory pathways and genetic trends associated with obesity and liver fat accumulation.",
    biography:
      "Eunice Mbawa is an undergraduate Biomedical Sciences student interested in pursuing graduate education and ultimately improving access to affordable genetic counseling.",
    outsideLab:
      "Helping welcome prospective and current first-year students through St. John's student resource offices in the D'Angelo Center.",
  },
];

export const principalInvestigator = people.find(
  (person) => person.category === "Principal Investigator",
) as LabMember;

export const profileMembers = people.filter(
  (person) => person.category !== "Principal Investigator",
);

export const mastersAlumniWithoutProfiles = [
  { name: "Daniel Madtes", role: "Master's Alumni", image: "/images/people/daniel-madtes.png", imagePosition: "50% 32%" },
] as const;

export const currentUndergraduatesWithoutProfiles = [
  { name: "Jason Harideo", role: "Undergraduate Researcher", image: "/images/people/jason-harideo.jpg", imagePosition: "50% 45%" },
] as const;

export const undergraduateAlumniWithPortraits = [
  { name: "Leonora Shuke", role: "Undergraduate Alumni", image: "/images/people/leonora-shuke.jpg", imagePosition: "50% 35%" },
  { name: "Nyle Farooqi", role: "Undergraduate Alumni", image: "/images/people/nyle-farooqi.jpg", imagePosition: "50% 38%" },
] as const;

export const undergraduateAlumniWithoutProfiles = [
  "Ruqiyah Syed",
  "Nicole Kiaei",
  "Raidah Nasiri",
  "Hernoor Ranu",
  "MD Haque",
] as const;

export function getPeopleByCategory(category: PeopleCategory) {
  return people.filter((person) => person.category === category);
}

export function getProfileMemberBySlug(slug: string) {
  return profileMembers.find((person) => person.slug === slug);
}
