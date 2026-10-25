/**
 * data.js — Source unique de contenu du portfolio
 * ───────────────────────────────────────────────
 * Pour ajouter un projet, une expérience ou un événement :
 * 1. Copiez un bloc existant dans le tableau concerné
 * 2. Modifiez les valeurs (id unique)
 * 3. Enregistrez — aucune modification HTML requise
 */

const portfolioData = {

  /* ── Informations personnelles ── */
  personal: {
    firstName: "Abdoul Rachid",
    lastName: "BONSA",
    fullName: "BONSA Abdoul Rachid",
    title: {
      fr: "Développeur full-stack · Étudiant en Réseaux & Télécoms · Président du Club Informatique de l'IST",
      en: "Full-stack developer · Networks & Telecoms student · President of the IST Computer Club"
    },
    email: "rachidbonsa.ai@gmail.com",
    phone: "+226 64 93 15 57",
    github: "https://github.com/RBonsa404",
    location: {
      fr: "Ouagadougou, Burkina Faso",
      en: "Ouagadougou, Burkina Faso"
    },
    cvPath: "assets/cv/CV_BONSA_Abdoul_Rachid.pdf"
  },

  /* ── Hero ── */
  hero: {
    tagline: {
      fr: "Je conçois et mets en ligne des plateformes web et mobiles complètes, du cahier des charges au déploiement, avec la rigueur d'une formation réseau.",
      en: "I design and ship complete web and mobile platforms, from specifications to deployment, with the rigour of a networking background."
    },
    profileImage: "assets/img/profile.jpg",
    profileAlt: {
      fr: "Photo de profil de BONSA Abdoul Rachid",
      en: "Profile photo of BONSA Abdoul Rachid"
    }
  },

  /* ── Chiffres clés (sous le hero) ── */
  stats: [
    { value: "3", label: { fr: "plateformes mises en ligne en 2026", en: "platforms shipped in 2026" } },
    { value: "12+", label: { fr: "projets logiciels conçus ou réalisés", en: "software projects designed or built" } },
    { value: "320+", label: { fr: "tests automatisés sur la plateforme du club", en: "automated tests on the club platform" } },
    { value: "4", label: { fr: "domaines : web, mobile, réseaux, embarqué", en: "fields: web, mobile, networks, embedded" } }
  ],

  /* ── À propos ── */
  about: {
    fr: [
      "Étudiant en troisième année de Réseaux Informatiques et Télécommunications à l'Institut Supérieur de Technologie (IST, campus de Gounghin), vice-major de promotion en première et en deuxième année, je mène de front une formation réseau et une pratique soutenue du développement full-stack, du mobile et de l'embarqué.",
      "Président du Club Informatique de l'IST, j'ai relancé ses activités avec mon bureau, organisé la masterclass « Voyage en Terre Tech » et noué des partenariats avec la MIA-BF, Africa Data Entry et Aiobi. J'ai fondé le Collectif Dedsec pour réaliser FasoGuardian, un projet né de mon idée.",
      "Je recherche un CDI, un CDD, un stage, une alternance ou une mission où mettre ces compétences au service de projets à fort impact."
    ],
    en: [
      "Third-year Computer Networks & Telecommunications student at the Institut Supérieur de Technologie (IST, Gounghin campus), ranked second in my class in both first and second year, I combine a networking curriculum with sustained practice in full-stack, mobile and embedded development.",
      "As President of the IST Computer Club, I revived its activities with my board, organised the “Voyage en Terre Tech” masterclass and built partnerships with MIA-BF, Africa Data Entry and Aiobi. I founded the Dedsec Collective to build FasoGuardian, a project born from my own idea.",
      "I am looking for a permanent or fixed-term position, an internship, a work-study programme or a freelance mission on high-impact projects."
    ]
  },

  /* ── Expérience professionnelle ── */
  experience: [
    {
      id: "bioconversion",
      role: { fr: "Développeur full-stack — plateforme BioConversion", en: "Full-stack developer — BioConversion platform" },
      company: { fr: "Projet client DunordSmart · parcours Full-Stack d'Orange Digital Center", en: "Client project for DunordSmart · Orange Digital Center Full-Stack programme" },
      period: { fr: "2026", en: "2026" },
      bullets: {
        fr: [
          "Reprise, consolidation et livraison d'une plateforme de valorisation des déchets organiques par bioconversion.",
          "Supervision IoT des capteurs, place de marché d'engrais bio, paiement Orange Money, facturation, cartographie des producteurs.",
          "Dossier d'architecture, étude des risques, diagrammes UML ; mise en production sur Railway."
        ],
        en: [
          "Took over, consolidated and delivered an organic-waste bioconversion platform.",
          "IoT sensor monitoring, organic fertiliser marketplace, Orange Money payments, invoicing, producer mapping.",
          "Architecture document, risk study, UML diagrams; production deployment on Railway."
        ]
      },
      stack: ["Java 17", "Spring Boot", "PostgreSQL", "Angular", "Docker"]
    },
    {
      id: "revelateur",
      role: { fr: "Stagiaire Ingénieur IT", en: "IT Engineering Intern" },
      company: { fr: "Révélateur Burkina", en: "Révélateur Burkina" },
      period: { fr: "juin – déc. 2025", en: "Jun – Dec 2025" },
      bullets: {
        fr: [
          "Contribution au service informatique sur SuccèsCo, plateforme de gestion scolaire déployée dans les établissements burkinabè.",
          "Développement, maintenance évolutive, intégrations, mises à jour et support technique."
        ],
        en: [
          "Contributed to the IT department on SuccèsCo, a school management platform used across Burkinabè schools.",
          "Development, evolutive maintenance, integrations, updates and technical support."
        ]
      },
      stack: ["Flutter", "Dart", "Web services"]
    }
  ],

  /* ── Engagement associatif ── */
  engagement: [
    {
      id: "club-president",
      role: { fr: "Président du Club Informatique de l'IST", en: "President of the IST Computer Club" },
      company: { fr: "Institut Supérieur de Technologie, campus de Gounghin", en: "Institut Supérieur de Technologie, Gounghin campus" },
      period: { fr: "2026 – aujourd'hui", en: "2026 – present" },
      bullets: {
        fr: [
          "Relance d'un club resté longtemps peu actif : nouvelle équipe, programme d'activités et identité visuelle.",
          "Partenariats avec la Maison de l'Intelligence Artificielle du Burkina Faso (MIA-BF), Africa Data Entry et Aiobi.",
          "Conception de l'écosystème numérique du club : plateforme web, application mobile, site de billetterie."
        ],
        en: [
          "Revived a long-dormant club: new team, activity programme and visual identity.",
          "Partnerships with the Burkina Faso House of Artificial Intelligence (MIA-BF), Africa Data Entry and Aiobi.",
          "Designed the club's digital ecosystem: web platform, mobile app, ticketing website."
        ]
      }
    },
    {
      id: "dedsec-founder",
      role: { fr: "Fondateur du Collectif Dedsec", en: "Founder of the Dedsec Collective" },
      company: { fr: "Collectif de jeunes développeurs, Ouagadougou", en: "Young developers' collective, Ouagadougou" },
      period: { fr: "2026 – aujourd'hui", en: "2026 – present" },
      bullets: {
        fr: [
          "Concepteur de FasoGuardian : idée originale, puis constitution et direction d'une équipe de jeunes pour la réaliser.",
          "Conception de Dedsec, la plateforme interne de gestion de projets du collectif."
        ],
        en: [
          "Creator of FasoGuardian: original idea, then built and led a team of young developers to make it real.",
          "Designed Dedsec, the collective's internal project management platform."
        ]
      }
    }
  ],

  /* ── Événements organisés et participations ──
   * status : "done" | "upcoming"
   */
  events: [
    {
      id: "masterclass",
      title: { fr: "Masterclass « Voyage en Terre Tech »", en: "“Voyage en Terre Tech” masterclass" },
      role: { fr: "Coordinateur général", en: "General coordinator" },
      place: { fr: "Amphithéâtre de l'UBS, Ouagadougou", en: "UBS amphitheatre, Ouagadougou" },
      period: { fr: "17 oct. 2026", en: "17 Oct 2026" },
      status: "done",
      text: {
        fr: "Premier grand événement du club : 200 places, un panel de sept experts (télécoms et réseaux ; IA, data et cybersécurité ; deep-tech et développement), sous le parrainage du DSI de l'IST. Site d'inscription et billetterie à code QR développés pour l'occasion.",
        en: "The club's first major event: 200 seats, a panel of seven experts (telecoms and networks; AI, data and cybersecurity; deep-tech and development), sponsored by the IST CIO. Registration site and QR-code ticketing built for the occasion."
      }
    },
    {
      id: "forum-cyber",
      title: { fr: "Forum africain de la cybersécurité humaine", en: "African Forum on Human Cybersecurity" },
      role: { fr: "Responsable des bénévoles (Club)", en: "Volunteer lead (Club)" },
      place: { fr: "Initié par Balkiss OUEDRAOGO (Adja Digital)", en: "Initiated by Balkiss OUEDRAOGO (Adja Digital)" },
      period: { fr: "févr. 2027", en: "Feb 2027" },
      status: "upcoming",
      text: {
        fr: "Prise de contact avec l'initiatrice du forum, engagement officiel de notre équipe et coordination d'un groupe de bénévoles pour l'organisation.",
        en: "Reached out to the forum's initiator, secured our team's official involvement and coordinate a group of volunteers for the organisation."
      }
    },
    {
      id: "aiobi-workspace",
      title: { fr: "Lancement officiel d'Aiobi Workspace", en: "Official launch of Aiobi Workspace" },
      role: { fr: "Équipe d'organisation", en: "Organising team" },
      place: { fr: "Centre Culturel du Faso, Ouagadougou", en: "Centre Culturel du Faso, Ouagadougou" },
      period: { fr: "oct. 2026", en: "Oct 2026" },
      status: "done",
      text: {
        fr: "Organisation de la cérémonie aux côtés de l'équipe d'Aiobi : accueil et placement des invités, appui à la coordination le jour J.",
        en: "Organised the ceremony alongside the Aiobi team: guest reception and seating, on-site coordination support."
      }
    },
    {
      id: "faso-digital",
      title: { fr: "Faso Digital, édition 2026", en: "Faso Digital 2026" },
      role: { fr: "Candidat", en: "Contestant" },
      place: { fr: "Concours national de l'innovation numérique", en: "National digital innovation contest" },
      period: { fr: "2026", en: "2026" },
      status: "done",
      text: {
        fr: "Présentation d'Ambawbio Suite, mon ERP pour PME. Non lauréat, le projet a suscité l'intérêt de plusieurs entreprises pour une adaptation.",
        en: "Pitched Ambawbio Suite, my ERP for SMEs. Not among the winners, but it drew interest from several companies looking to adapt it."
      }
    },
    {
      id: "digicoop",
      title: { fr: "Hackathon National CIF DigiCoop-WA+ 2026", en: "CIF DigiCoop-WA+ 2026 National Hackathon" },
      role: { fr: "Participant", en: "Participant" },
      place: { fr: "Finance coopérative, zone UEMOA", en: "Cooperative finance, WAEMU zone" },
      period: { fr: "2026", en: "2026" },
      status: "done",
      text: {
        fr: "Conception de FarafinaCoop, plateforme de conformité KYC / LBC-FT pour les coopératives financières.",
        en: "Designed FarafinaCoop, a KYC / AML-CFT compliance platform for cooperative financial institutions."
      }
    },
    {
      id: "village-24h",
      title: { fr: "Festival « 24h au Village »", en: "“24h au Village” festival" },
      role: { fr: "Consultant informatique, équipe de coordination", en: "IT consultant, coordination team" },
      place: { fr: "24h au Village / APPART", en: "24h au Village / APPART" },
      period: { fr: "juil. 2026", en: "Jul 2026" },
      status: "done",
      text: {
        fr: "Conseil sur les choix techniques, gestion des médias, direction artistique des affiches et conception de la plateforme événementielle.",
        en: "Technical advice, media management, poster art direction and design of the event platform."
      }
    },
    {
      id: "gsda",
      title: { fr: "Grand Salon de la Data en Afrique", en: "Grand Salon de la Data en Afrique" },
      role: { fr: "Équipe logistique · attestation obtenue", en: "Logistics team · certificate awarded" },
      place: { fr: "Ouagadougou", en: "Ouagadougou" },
      period: { fr: "juil. 2026", en: "Jul 2026" },
      status: "done",
      text: {
        fr: "Organisation logistique et appui à la coordination technique du rassemblement des acteurs de la data en Afrique.",
        en: "Logistics and technical coordination support for the gathering of Africa's data community."
      }
    },
    {
      id: "quinzaine",
      title: { fr: "Quinzaine de l'Innovation", en: "Innovation Fortnight" },
      role: { fr: "Projet retenu", en: "Project selected" },
      place: { fr: "IST", en: "IST" },
      period: { fr: "juil. 2026 – aujourd'hui", en: "Jul 2026 – present" },
      status: "done",
      text: {
        fr: "Projet d'innovation technologique retenu pour la phase de réalisation, présentation devant jury.",
        en: "Technology innovation project selected for the build phase, presented to a jury."
      }
    }
  ],

  /* ── Formation académique ── */
  academicEducation: [
    {
      id: "rit-ist",
      degree: { fr: "Licence en Réseaux Informatiques et Télécommunications", en: "Bachelor in Computer Networks & Telecommunications" },
      institution: { fr: "Institut Supérieur de Technologie (IST), Ouagadougou", en: "Institut Supérieur de Technologie (IST), Ouagadougou" },
      period: { fr: "2024 → en cours · 3ᵉ année", en: "2024 → present · 3rd year" },
      highlight: { fr: "Vice-major de promotion en 1ʳᵉ et 2ᵉ année · moyenne de 15/20", en: "Ranked 2nd in class in 1st and 2nd year · 15/20 average" },
      detail: {
        fr: "Administration réseau sous Linux et Windows Server, routage Cisco, téléphonie, transmission de signaux, sécurité informatique, programmation et modélisation orientées objet.",
        en: "Linux and Windows Server network administration, Cisco routing, telephony, signal transmission, IT security, object-oriented programming and modelling."
      }
    },
    {
      id: "bac-d",
      degree: { fr: "Baccalauréat scientifique (série D), avec mention", en: "Scientific baccalaureate (Series D), with honours" },
      institution: { fr: "École LaSalle de Tounouma, Bobo-Dioulasso", en: "École LaSalle de Tounouma, Bobo-Dioulasso" },
      period: { fr: "2023 – 2024", en: "2023 – 2024" }
    }
  ],

  /* ── Formations complémentaires ── */
  complementaryTraining: [
    {
      id: "odc-fullstack",
      title: { fr: "Développement Full-Stack", en: "Full-Stack Development" },
      provider: { fr: "Orange Digital Center · Angular, Java / Spring", en: "Orange Digital Center · Angular, Java / Spring" },
      status: "in_progress",
      date: { fr: "2025 – en cours", en: "2025 – present" }
    },
    {
      id: "odc-flutter",
      title: { fr: "Développement mobile Flutter", en: "Flutter mobile development" },
      provider: { fr: "Orange Digital Center", en: "Orange Digital Center" },
      status: "completed",
      date: { fr: "nov. 2025", en: "Nov 2025" }
    },
    {
      id: "odc-excel",
      title: { fr: "Analyse de données sur Excel", en: "Data analysis with Excel" },
      provider: { fr: "Orange Digital Center", en: "Orange Digital Center" },
      status: "completed",
      date: { fr: "déc. 2025", en: "Dec 2025" }
    },
    {
      id: "softskills",
      title: { fr: "Entrepreneuriat et soft skills", en: "Entrepreneurship and soft skills" },
      provider: { fr: "Ateliers et parcours pratiques", en: "Workshops and practical tracks" },
      status: "completed",
      date: { fr: "2026", en: "2026" }
    }
  ],

  /* ── Compétences par catégorie ── */
  skills: [
    { label: { fr: "Développement web", en: "Web development" }, items: ["Java", "Spring Boot", "TypeScript", "Angular", "React", "Next.js", "Node.js", "NestJS", "PHP / Laravel"] },
    { label: { fr: "Mobile", en: "Mobile" }, items: ["Flutter", "Dart", "Android", "PWA"] },
    { label: { fr: "Bases de données", en: "Databases" }, items: ["PostgreSQL", "MySQL", "MariaDB", "Prisma"] },
    { label: { fr: "DevOps et qualité", en: "DevOps & quality" }, items: ["Git / GitHub", "Docker", { fr: "Intégration continue", en: "CI" }, { fr: "Déploiement cloud", en: "Cloud deployment" }, { fr: "Tests automatisés", en: "Automated tests" }] },
    { label: { fr: "Réseaux et systèmes", en: "Networks & systems" }, items: ["Cisco", "Linux", "Windows Server", { fr: "Sécurité des applications", en: "App security" }] },
    { label: { fr: "Embarqué et IoT", en: "Embedded & IoT" }, items: ["C", "STM32", "MQTT", "KiCad"] },
    { label: { fr: "Conception", en: "Design" }, items: [{ fr: "Cahier des charges", en: "Specifications" }, "UML", "User stories", "REST API", { fr: "Architecture logicielle", en: "Software architecture" }] },
    { label: { fr: "Savoir-être", en: "Soft skills" }, items: [{ fr: "Leadership", en: "Leadership" }, { fr: "Coordination d'équipes", en: "Team coordination" }, { fr: "Autonomie", en: "Autonomy" }, { fr: "Rigueur", en: "Rigour" }] }
  ],

  /* ── Langues ── */
  languages: [
    { name: { fr: "Français", en: "French" }, level: { fr: "courant", en: "fluent" } },
    { name: { fr: "Anglais", en: "English" }, level: { fr: "intermédiaire", en: "intermediate" } },
    { name: { fr: "Dioula", en: "Dioula" }, level: { fr: "courant à l'oral", en: "fluent (spoken)" } }
  ],

  /* ── Centres d'intérêt ── */
  interests: [
    { fr: "Bénévolat et vie associative", en: "Volunteering", icon: "◈" },
    { fr: "Basketball", en: "Basketball", icon: "◉" },
    { fr: "Veille cybersécurité et dev", en: "Cyber & dev watch", icon: "◎" },
    { fr: "Design et 3D web", en: "Design & 3D web", icon: "◆" }
  ],

  /*
   * ── Projets ──
   * status : "completed" | "in_progress" | "idea"
   * badge  : mention facultative affichée à côté du statut
   */
  projects: [
    {
      id: "club-info",
      filename: "club_info.java",
      title: { fr: "Plateforme du Club Informatique de l'IST", en: "IST Computer Club platform" },
      description: {
        fr: "Site public et espace de gestion du club : actualités, événements, formations, inscriptions, supports de cours, présences. Sept rôles, contrat d'API de 107 opérations, plus de 320 tests automatisés, déploiement continu.",
        en: "Public website and management space for the club: news, events, courses, registrations, learning material, attendance. Seven roles, a 107-operation API contract, 320+ automated tests, continuous deployment."
      },
      status: "completed",
      badge: { fr: "Version de test", en: "Test version" },
      stack: ["Angular", "Spring Boot", "PostgreSQL", "Docker", "Railway"],
      links: { demo: "https://istclubinformatique.up.railway.app", repo: "" }
    },
    {
      id: "fasoguardian",
      filename: "fasoguardian.c",
      title: { fr: "FasoGuardian", en: "FasoGuardian" },
      description: {
        fr: "Bracelet connecté pour sécuriser, identifier et géolocaliser les enfants au Burkina Faso : serveur, application des parents, console des agents, logiciel embarqué et conception de la carte électronique. Mené avec le Collectif Dedsec.",
        en: "Connected wristband to protect, identify and locate children in Burkina Faso: server, parents' app, agents' console, embedded firmware and circuit board design. Built with the Dedsec Collective."
      },
      status: "in_progress",
      stack: ["Spring Boot", "Angular", "C / FreeRTOS", "STM32", "MQTT", "KiCad"],
      links: { demo: "", repo: "" }
    },
    {
      id: "club-mobile",
      filename: "club_mobile.dart",
      title: { fr: "Application mobile du Club", en: "Club mobile app" },
      description: {
        fr: "Application Android reliée à la même API que le site : activités, inscriptions et liste d'attente, projets, notifications, profil, supports et devoirs, thèmes clair et sombre.",
        en: "Android app sharing the website's API: activities, registrations and waiting list, projects, notifications, profile, learning material, light and dark themes."
      },
      status: "completed",
      stack: ["Flutter", "Dart", "Android", "REST API"],
      links: { demo: "", repo: "" }
    },
    {
      id: "billetterie",
      filename: "terre_tech.js",
      title: { fr: "Billetterie « Voyage en Terre Tech »", en: "“Voyage en Terre Tech” ticketing" },
      description: {
        fr: "Inscriptions avec quota en direct, ouverture programmée, session spéciale automatique, billet nominatif à code QR et espace d'équipe pour valider les présences. Utilisé en conditions réelles.",
        en: "Registrations with a live quota, scheduled opening, automatic overflow session, named QR-code tickets and a team space to check attendance. Used in production."
      },
      status: "completed",
      stack: ["Node.js", "Express", "PostgreSQL", "Railway"],
      links: { demo: "", repo: "" }
    },
    {
      id: "momentum",
      filename: "momentum.ts",
      title: { fr: "Momentum", en: "Momentum" },
      description: {
        fr: "Application de suivi personnel : agenda horaire, tâches imbriquées, journal du soir, séries et score de procrastination. Microservices et interface animée en 3D.",
        en: "Personal growth tracker: hourly schedule, nested tasks, evening journal, streaks and procrastination score. Microservices and an animated 3D interface."
      },
      status: "completed",
      stack: ["Spring Boot", "PostgreSQL", "Angular", "Three.js"],
      links: { demo: "https://momentum-offcicial.up.railway.app/", repo: "" }
    },
    {
      id: "dedsec",
      filename: "dedsec.tsx",
      title: { fr: "Dedsec", en: "Dedsec" },
      description: {
        fr: "Plateforme collaborative de gestion de projets : kanban, rôles multi-niveaux, quotas de stockage, suivi des absences, diffusions globales.",
        en: "Collaborative project management platform: kanban, multi-level roles, storage quotas, attendance tracking, global broadcasts."
      },
      status: "completed",
      stack: ["NestJS", "Next.js", "Prisma", "Tailwind"],
      links: { demo: "https://dedsec-pied.vercel.app/login", repo: "" }
    },
    {
      id: "farafina-coop",
      filename: "farafina_coop.py",
      title: { fr: "FarafinaCoop", en: "FarafinaCoop" },
      description: {
        fr: "Conformité KYC / LBC-FT pour les coopératives financières de l'UEMOA : collecte hors ligne sur le terrain, temps réel au guichet, filtrage approximatif des listes et traçabilité inaltérable.",
        en: "KYC / AML-CFT compliance for WAEMU cooperative financial institutions: offline field collection, real-time at the counter, fuzzy list screening and tamper-proof audit trail."
      },
      status: "in_progress",
      badge: { fr: "Hackathon DigiCoop 2026", en: "DigiCoop Hackathon 2026" },
      stack: ["Offline-first", "Fuzzy matching", "Hash-chaining"],
      links: { demo: "", repo: "" }
    },
    {
      id: "ambawbio",
      filename: "ambawbio_suite.erp",
      title: { fr: "Ambawbio Suite", en: "Ambawbio Suite" },
      description: {
        fr: "ERP tout-en-un pour les PME, conforme SYSCOHADA et DGI, utilisable hors ligne, avec Orange Money, Moov Money et Wave : ventes, finance, RH, stocks, projets.",
        en: "All-in-one ERP for SMEs, compliant with SYSCOHADA and the tax authority, usable offline, with Orange Money, Moov Money and Wave: sales, finance, HR, inventory, projects."
      },
      status: "in_progress",
      badge: { fr: "Présenté au Faso Digital 2026", en: "Pitched at Faso Digital 2026" },
      stack: ["ERP", "Mobile Money", "Offline-first"],
      links: { demo: "", repo: "" }
    },
    {
      id: "village-24h",
      filename: "festival_24h.tsx",
      title: { fr: "24h au Village", en: "24h au Village" },
      description: {
        fr: "Plateforme du festival : billetterie à code QR, boutique en ligne, suivi comptable et contrôle d'accès le jour J.",
        en: "Festival platform: QR-code ticketing, online shop, accounting and gate control on the day."
      },
      status: "in_progress",
      stack: ["Next.js", "Prisma", "MariaDB", "NextAuth"],
      links: { demo: "", repo: "" }
    },
    {
      id: "succesco",
      filename: "succesco.dart",
      title: { fr: "SuccèsCo", en: "SuccèsCo" },
      description: {
        fr: "Plateforme de gestion scolaire de Révélateur Burkina. Contributions en stage : maintenance évolutive, intégrations et support technique.",
        en: "Révélateur Burkina's school management platform. Internship contributions: evolutive maintenance, integrations and technical support."
      },
      status: "completed",
      stack: ["Flutter", "Dart", "Web services"],
      links: { demo: "https://successco.africa/burkina.eleve.successco.africa/", repo: "" }
    },
    {
      id: "portfolio",
      filename: "portfolio.html",
      title: { fr: "Ce portfolio", en: "This portfolio" },
      description: {
        fr: "Site statique bilingue, thèmes clair et sombre, sans framework : HTML, CSS et JavaScript.",
        en: "Bilingual static site with light and dark themes, no framework: HTML, CSS and JavaScript."
      },
      status: "completed",
      stack: ["HTML", "CSS", "JavaScript"],
      links: { demo: "", repo: "https://github.com/RBonsa404/mon-portfolio" }
    }
  ]
};
