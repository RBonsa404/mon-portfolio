/**
 * data.js — Source unique de contenu du portfolio
 * ───────────────────────────────────────────────
 * Pour ajouter un projet, une formation ou une compétence :
 * 1. Copiez un bloc existant dans le tableau concerné
 * 2. Modifiez les valeurs (id unique pour les projets)
 * 3. Enregistrez — aucune modification HTML requise
 */

const portfolioData = {

  /* ── Informations personnelles ── */
  personal: {
    firstName: "Abdoul Rachid",
    lastName: "BONSA",
    fullName: "BONSA Abdoul Rachid",
    title: {
      fr: "Développeur Full-Stack — Étudiant en Réseaux & Télécoms — Président du Club Informatique de l'IST",
      en: "Full-Stack Developer — Networks & Telecoms Student — President of the IST Computer Club"
    },
    email: "rachidbonsa.ai@gmail.com",
    phone: "+226 64 93 15 57",
    location: {
      fr: "Ouagadougou, Burkina Faso",
      en: "Ouagadougou, Burkina Faso"
    },
    cvPath: "assets/cv/CV_BONSA_Abdoul_Rachid.pdf"
  },

  /* ── Hero ── */
  hero: {
    tagline: {
      fr: "Étudiant en 3ᵉ année de Réseaux Informatiques & Télécommunications à l'IST, je développe des applications web et mobiles complètes. Plusieurs sont déjà en ligne, dont la plateforme du Club Informatique de l'IST et la billetterie de sa masterclass.",
      en: "Third-year Computer Networks & Telecommunications student at IST, I build complete web and mobile applications. Several are already live, including the IST Computer Club platform and the ticketing site for its masterclass."
    },
    profileImage: "assets/img/profile.jpg",
    profileAlt: {
      fr: "Photo de profil de BONSA Abdoul Rachid",
      en: "Profile photo of BONSA Abdoul Rachid"
    }
  },

  /* ── À propos ── */
  about: {
    fr: "Étudiant en 3ᵉ année de Réseaux Informatiques et Télécommunications à l'Institut Supérieur de Technologie (IST), vice-major de ma promotion en 1ʳᵉ et 2ᵉ année. En parallèle de ma formation réseau, je développe des applications web, mobiles et embarquées : Java / Spring Boot, Angular, Next.js, Node.js, Flutter, PostgreSQL. Président du Club Informatique de l'IST, j'ai relancé ses activités, organisé la masterclass « Voyage en Terre Tech » et noué des partenariats avec la MIA-BF, Africa Data Entry et Aiobi. J'ai aussi fondé le Collectif Dedsec pour réaliser FasoGuardian, un projet né de mon idée. Je recherche un CDI, un CDD, un stage, une alternance ou une mission sur des projets à fort impact.",
    en: "Third-year Computer Networks & Telecommunications student at the Institut Supérieur de Technologie (IST), ranked second in my class in 1st and 2nd year. Alongside my networking studies, I build web, mobile and embedded applications: Java / Spring Boot, Angular, Next.js, Node.js, Flutter, PostgreSQL. As President of the IST Computer Club, I revived its activities, organised the “Voyage en Terre Tech” masterclass and built partnerships with MIA-BF, Africa Data Entry and Aiobi. I also founded the Dedsec Collective to build FasoGuardian, a project born from my own idea. I am looking for a permanent or fixed-term position, an internship, a work-study programme or a mission on high-impact projects."
  },

  /*
   * ── Formation académique (timeline) ──
   */
  academicEducation: [
    {
      id: "rit-ist",
      degree: {
        fr: "Licence en Réseaux Informatiques et Télécommunications",
        en: "Bachelor in Computer Networks & Telecommunications"
      },
      institution: {
        fr: "Institut Supérieur de Technologie (IST)",
        en: "Institut Supérieur de Technologie (IST)"
      },
      period: {
        fr: "2024 → en cours (3ᵉ année)",
        en: "2024 → present (3rd year)"
      },
      detail: {
        fr: "Vice-major de promotion en 1ʳᵉ et 2ᵉ année, moyenne de 15/20. Administration réseau sous Linux et Windows Server, routage Cisco, téléphonie, transmission de signaux, sécurité informatique, programmation orientée objet.",
        en: "Ranked 2nd in class in 1st and 2nd year, 15/20 average. Linux and Windows Server network administration, Cisco routing, telephony, signal transmission, IT security, object-oriented programming."
      }
    },
    {
      id: "bac-d",
      degree: {
        fr: "Baccalauréat scientifique (Série D)",
        en: "High School Diploma — Science Track (Series D)"
      },
      institution: {
        fr: "École LaSalle de Tounouma, Bobo-Dioulasso",
        en: "École LaSalle de Tounouma, Bobo-Dioulasso"
      },
      period: {
        fr: "2023 – 2024",
        en: "2023 – 2024"
      },
      detail: {
        fr: "Baccalauréat scientifique obtenu avec mention.",
        en: "Scientific baccalaureate diploma awarded with honors."
      }
    }
  ],

  /*
   * ── Formations complémentaires ──
   */
  complementaryTraining: [
    {
      id: "odc-fullstack",
      title: {
        fr: "Développement Full Stack",
        en: "Full Stack Development"
      },
      provider: {
        fr: "Orange Digital Center",
        en: "Orange Digital Center"
      },
      status: "in_progress",
      date: {
        fr: "En cours (2025 – 2026)",
        en: "In progress (2025 – 2026)"
      }
    },
    {
      id: "softskills-entrepreneuriat",
      title: {
        fr: "Entrepreneuriat & Développement de Softskills",
        en: "Entrepreneurship & Softskills Development"
      },
      provider: {
        fr: "Ateliers & Parcours Pratiques",
        en: "Workshops & Practical Tracks"
      },
      status: "completed",
      date: {
        fr: "Acquis (2026)",
        en: "Completed (2026)"
      }
    },
    {
      id: "odc-excel",
      title: {
        fr: "Analyse de données sur Excel",
        en: "Data Analysis with Excel"
      },
      provider: {
        fr: "Orange Digital Center",
        en: "Orange Digital Center"
      },
      status: "completed",
      date: {
        fr: "Obtenue, déc. 2025",
        en: "Completed, Dec. 2025"
      }
    },
    {
      id: "odc-flutter",
      title: {
        fr: "Développement mobile (Flutter)",
        en: "Mobile Development (Flutter)"
      },
      provider: {
        fr: "Orange Digital Center",
        en: "Orange Digital Center"
      },
      status: "completed",
      date: {
        fr: "Obtenue, nov. 2025",
        en: "Completed, Nov. 2025"
      }
    }
  ],

  /*
   * ── Expérience professionnelle ──
   */
  experience: [
    {
      id: "bioconversion",
      role: {
        fr: "Développeur Full-Stack — BioConversion",
        en: "Full-Stack Developer — BioConversion"
      },
      company: "DunordSmart · Orange Digital Center",
      period: {
        fr: "2026",
        en: "2026"
      },
      description: {
        fr: "Reprise, consolidation et livraison d'une plateforme de valorisation des déchets organiques : supervision IoT des capteurs, place de marché d'engrais bio, paiement Orange Money, facturation et cartographie des producteurs. Mise en production sur Railway.",
        en: "Took over, consolidated and delivered an organic-waste valorisation platform: IoT sensor monitoring, organic fertiliser marketplace, Orange Money payments, invoicing and producer mapping. Deployed to production on Railway."
      }
    },
    {
      id: "24h-village-consultant",
      role: {
        fr: "Consultant Informatique / Équipe Coordination",
        en: "IT Consultant / Coordination Team"
      },
      company: "24h au Village / APPART",
      period: {
        fr: "juil. 2026",
        en: "Jul. 2026"
      },
      description: {
        fr: "Conseil sur les choix techniques, gestion des médias, direction artistique des affiches du festival et conception de sa plateforme événementielle.",
        en: "Technical advice, media management, art direction of the festival posters and design of its event platform."
      }
    },
    {
      id: "revelateur-stagiaire",
      role: {
        fr: "Stagiaire Ingénieur IT",
        en: "IT Engineering Intern"
      },
      company: "Révélateur Burkina",
      period: {
        fr: "juin – déc. 2025",
        en: "Jun – Dec. 2025"
      },
      description: {
        fr: "Contribution aux activités du service informatique : développement, maintenance évolutive et mises à jour de la plateforme de gestion scolaire SuccèsCo.",
        en: "Contributed to the IT department: development, evolutive maintenance and updates of the SuccèsCo school management platform."
      }
    }
  ],

  /*
   * ── Engagement associatif ──
   */
  engagement: [
    {
      id: "club-president",
      role: {
        fr: "Président du Club Informatique de l'IST",
        en: "President of the IST Computer Club"
      },
      company: "Institut Supérieur de Technologie, campus de Gounghin",
      period: {
        fr: "2026 – aujourd'hui",
        en: "2026 – present"
      },
      description: {
        fr: "Relance d'un club resté longtemps peu actif avec mon bureau : programme d'activités, identité visuelle, plateforme web et application mobile. Partenariats avec la Maison de l'Intelligence Artificielle du Burkina Faso (MIA-BF), Africa Data Entry et Aiobi.",
        en: "Revived a long-dormant club with my board: activity programme, visual identity, web platform and mobile app. Partnerships with the Burkina Faso House of Artificial Intelligence (MIA-BF), Africa Data Entry and Aiobi."
      }
    },
    {
      id: "dedsec-founder",
      role: {
        fr: "Fondateur du Collectif Dedsec",
        en: "Founder of the Dedsec Collective"
      },
      company: "Collectif de jeunes développeurs, Ouagadougou",
      period: {
        fr: "2026 – aujourd'hui",
        en: "2026 – present"
      },
      description: {
        fr: "Collectif que j'ai créé et que je dirige pour réaliser FasoGuardian, mon projet de bracelet connecté pour la protection des enfants.",
        en: "A collective I created and lead to build FasoGuardian, my connected wristband project for child protection."
      }
    }
  ],

  /*
   * ── Événements organisés et participations ──
   */
  events: [
    {
      id: "masterclass",
      role: {
        fr: "Masterclass « Voyage en Terre Tech » — Coordinateur général",
        en: "“Voyage en Terre Tech” Masterclass — General Coordinator"
      },
      company: "Club Informatique de l'IST · Amphithéâtre de l'UBS",
      period: {
        fr: "17 oct. 2026",
        en: "17 Oct. 2026"
      },
      description: {
        fr: "Premier grand événement du club : 200 places, sept experts en panel (télécoms et réseaux ; IA, data et cybersécurité ; deep-tech et développement), sous le parrainage du DSI de l'IST. Site d'inscription et billetterie à code QR développés pour l'occasion.",
        en: "The club's first major event: 200 seats, seven panel experts (telecoms and networks; AI, data and cybersecurity; deep-tech and development), sponsored by the IST CIO. Registration site and QR-code ticketing built for the occasion."
      }
    },
    {
      id: "forum-cyber",
      role: {
        fr: "Forum africain de la cybersécurité humaine — Responsable des bénévoles (Club)",
        en: "African Forum on Human Cybersecurity — Volunteer Lead (Club)"
      },
      company: "Initié par Balkiss OUEDRAOGO (Adja Digital)",
      period: {
        fr: "févr. 2027 (à venir)",
        en: "Feb. 2027 (upcoming)"
      },
      description: {
        fr: "Prise de contact avec l'initiatrice du forum, engagement officiel de notre équipe et coordination d'un groupe de bénévoles pour l'organisation.",
        en: "Reached out to the forum's initiator, secured our team's official involvement and coordinate a group of volunteers for the organisation."
      }
    },
    {
      id: "aiobi-workspace",
      role: {
        fr: "Lancement officiel d'Aiobi Workspace — Équipe d'organisation",
        en: "Official launch of Aiobi Workspace — Organising Team"
      },
      company: "Aiobi · Centre Culturel du Faso",
      period: {
        fr: "oct. 2026",
        en: "Oct. 2026"
      },
      description: {
        fr: "Organisation de la cérémonie aux côtés de l'équipe d'Aiobi : accueil et placement des invités, appui à la coordination le jour J.",
        en: "Organised the ceremony alongside the Aiobi team: guest reception and seating, on-site coordination support."
      }
    },
    {
      id: "faso-digital",
      role: {
        fr: "Faso Digital 2026 — Candidat",
        en: "Faso Digital 2026 — Contestant"
      },
      company: "Concours national de l'innovation numérique",
      period: {
        fr: "2026",
        en: "2026"
      },
      description: {
        fr: "Présentation d'Ambawbio Suite, mon ERP pour PME. Non lauréat, le projet a suscité l'intérêt de plusieurs entreprises pour une adaptation.",
        en: "Pitched Ambawbio Suite, my ERP for SMEs. Not among the winners, but it drew interest from several companies looking to adapt it."
      }
    },
    {
      id: "grand-salon-data",
      role: {
        fr: "Grand Salon de la Data en Afrique — Équipe Logistique",
        en: "Grand Salon de la Data en Afrique — Logistics Team"
      },
      company: "Grand Salon de la Data",
      period: {
        fr: "juil. 2026",
        en: "Jul. 2026"
      },
      description: {
        fr: "Organisation logistique et coordination technique lors du rassemblement des acteurs de la data en Afrique (attestation obtenue).",
        en: "Logistics organisation and technical coordination at the gathering of Africa's data community (certificate awarded)."
      }
    },
    {
      id: "quinzaine",
      role: {
        fr: "Quinzaine de l'Innovation — Projet retenu",
        en: "Innovation Fortnight — Project Selected"
      },
      company: "IST",
      period: {
        fr: "juil. 2026 – en cours",
        en: "Jul. 2026 – present"
      },
      description: {
        fr: "Projet d'innovation technologique retenu pour la phase de réalisation, présentation devant jury.",
        en: "Technology innovation project selected for the build phase, presented to a jury."
      }
    },
    {
      id: "digicoop",
      role: {
        fr: "Hackathon National CIF DigiCoop-WA+ 2026 — Participant",
        en: "CIF DigiCoop-WA+ 2026 National Hackathon — Participant"
      },
      company: "Finance coopérative, zone UEMOA",
      period: {
        fr: "2026",
        en: "2026"
      },
      description: {
        fr: "Conception de FarafinaCoop, plateforme de conformité KYC / LBC-FT pour les coopératives financières.",
        en: "Designed FarafinaCoop, a KYC / AML-CFT compliance platform for cooperative financial institutions."
      }
    }
  ],

  /*
   * ── Compétences par catégorie ──
   */
  skills: {
    languages: {
      labelKey: "skills_cat_languages",
      items: ["Java 17", "Spring Boot", "TypeScript", "Angular", "React", "Next.js", "Node.js", "NestJS", "PHP / Laravel", "Tailwind CSS"]
    },
    mobile: {
      labelKey: "skills_cat_mobile",
      items: ["Flutter", "Dart", "Android", "PWA"]
    },
    database: {
      labelKey: "skills_cat_database",
      items: ["PostgreSQL", "MySQL", "MariaDB", "Prisma ORM"]
    },
    devops: {
      labelKey: "skills_cat_devops",
      items: ["Git & GitHub", "Docker", "CI / GitHub Actions", "Railway", "Tests automatisés"]
    },
    architecture: {
      labelKey: "skills_cat_architecture",
      items: ["Microservices", "REST API", "UML", "Offline-First", "RBAC", "Three.js / R3F"]
    },
    embedded: {
      labelKey: "skills_cat_embedded",
      items: ["C", "STM32", "MQTT", "KiCad"]
    },
    os: {
      labelKey: "skills_cat_os",
      items: ["Linux (Kali, Ubuntu)", "Windows Server", "Cisco", "Networking / Telecommunication"]
    },
    tools: {
      labelKey: "skills_cat_tools",
      items: ["VS Code", "IntelliJ IDEA", "Cisco Packet Tracer", "MATLAB", "VirtualBox", "VMware"]
    }
  },

  /* ── Centres d'intérêt ── */
  interests: [
    { fr: "Bénévolat & Impact", en: "Volunteering & Impact", icon: "◈" },
    { fr: "Basketball", en: "Basketball", icon: "◉" },
    { fr: "Veille Cyber & Dev", en: "Cyber & Tech Watch", icon: "◎" },
    { fr: "Design & 3D Web", en: "Design & 3D Web", icon: "◆" }
  ],

  /*
   * ── Projets ──
   * status : "completed" | "in_progress" | "idea"
   * badge  : mention affichée avec un trophée (hackathon, concours)
   * note   : mention simple affichée à côté du statut
   */
  projects: [
    {
      id: "club-info",
      filename: "club_info.java",
      title: {
        fr: "Plateforme Club Informatique",
        en: "IT Club Management Platform"
      },
      description: {
        fr: "Site public et espace de gestion du Club Informatique de l'IST : actualités, événements, formations, inscriptions, supports de cours et présences. Sept rôles, contrat d'API de 107 opérations, plus de 320 tests automatisés. Stack : Java 17, Spring Boot, Angular, PostgreSQL, Docker.",
        en: "Public website and management space of the IST Computer Club: news, events, courses, registrations, learning material and attendance. Seven roles, a 107-operation API contract, 320+ automated tests. Stack: Java 17, Spring Boot, Angular, PostgreSQL, Docker."
      },
      status: "completed",
      note: { fr: "Version de test", en: "Test version" },
      stack: ["Java 17", "Spring Boot", "Angular", "PostgreSQL", "Docker"],
      links: { demo: "https://istclubinformatique.up.railway.app", repo: "" }
    },
    {
      id: "fasoguardian",
      filename: "fasoguardian.c",
      title: {
        fr: "FasoGuardian",
        en: "FasoGuardian"
      },
      description: {
        fr: "Bracelet connecté pour sécuriser, identifier et géolocaliser les enfants au Burkina Faso : serveur, application des parents, console des agents, logiciel embarqué et conception de la carte électronique. Projet mené avec le Collectif Dedsec.",
        en: "Connected wristband to protect, identify and locate children in Burkina Faso: server, parents' app, agents' console, embedded firmware and circuit board design. Built with the Dedsec Collective."
      },
      status: "in_progress",
      stack: ["Spring Boot", "Angular", "C / FreeRTOS", "STM32", "MQTT"],
      links: { demo: "", repo: "" }
    },
    {
      id: "momentum",
      filename: "momentum.ts",
      title: {
        fr: "Momentum",
        en: "Momentum"
      },
      description: {
        fr: "Application personnelle de suivi d'évolution : agenda horaire, to-do imbriquée, journal du soir, système de streaks et dashboard avec score de procrastination. Architecture microservices en Spring Boot + PostgreSQL ; frontend Angular en glassmorphism animé avec éléments 3D (Three.js).",
        en: "Personal growth & habit tracking ecosystem: hourly schedule, nested tasks, evening journal, streak counter, and procrastination analytics dashboard. Microservices backend in Spring Boot + PostgreSQL; Angular frontend with animated glassmorphism and Three.js 3D elements."
      },
      status: "completed",
      stack: ["Spring Boot", "PostgreSQL", "Angular", "Three.js", "Microservices"],
      links: { demo: "https://momentum-offcicial.up.railway.app/", repo: "" }
    },
    {
      id: "dedsec",
      filename: "dedsec.tsx",
      title: {
        fr: "Dedsec",
        en: "Dedsec"
      },
      description: {
        fr: "Plateforme collaborative de gestion de projets & cyber-ops. Kanban réactif (dnd-kit), RBAC multi-niveaux, quotas de stockage, suivi des absences et diffusions globales. Stack moderne : NestJS 10, Next.js 15, Tailwind, Prisma.",
        en: "Collaborative project management & cyber-ops platform. Drag-and-drop Kanban (dnd-kit), granular multi-tier RBAC, storage quotas, attendance management, and global system broadcasts. Stack: NestJS 10, Next.js 15, Tailwind CSS, Prisma."
      },
      status: "completed",
      stack: ["NestJS 10", "Next.js 15", "Tailwind", "Prisma", "TypeScript"],
      links: { demo: "https://dedsec-pied.vercel.app/login", repo: "" }
    },
    {
      id: "club-mobile",
      filename: "club_mobile.dart",
      title: {
        fr: "Application mobile du Club",
        en: "Club Mobile App"
      },
      description: {
        fr: "Application Android reliée à la même API que la plateforme web : activités, inscriptions et liste d'attente, projets, notifications, profil, supports et devoirs, thèmes clair et sombre.",
        en: "Android app sharing the web platform's API: activities, registrations and waiting list, projects, notifications, profile, learning material, light and dark themes."
      },
      status: "completed",
      stack: ["Flutter", "Dart", "Android", "REST API"],
      links: { demo: "", repo: "" }
    },
    {
      id: "billetterie",
      filename: "terre_tech.js",
      title: {
        fr: "Billetterie « Voyage en Terre Tech »",
        en: "“Voyage en Terre Tech” Ticketing"
      },
      description: {
        fr: "Site d'inscription de la masterclass du club : quota en direct, ouverture programmée, session spéciale automatique, billet nominatif à code QR et espace d'équipe pour valider les présences. Utilisé en conditions réelles.",
        en: "Registration site for the club's masterclass: live quota, scheduled opening, automatic overflow session, named QR-code tickets and a team space to check attendance. Used in production."
      },
      status: "completed",
      stack: ["Node.js", "Express", "PostgreSQL", "Railway"],
      links: { demo: "", repo: "" }
    },
    {
      id: "farafina-coop",
      filename: "farafina_coop.py",
      title: {
        fr: "FarafinaCoop",
        en: "FarafinaCoop"
      },
      description: {
        fr: "Plateforme de conformité KYC/AML-CFT pour les institutions financières coopératives de la zone UEMOA. Architecture offline-first (terrain) / temps réel (guichet), filtrage LBC/FT par fuzzy matching, traçabilité inaltérable par hash-chaining. Projet réalisé dans le cadre du Hackathon National CIF DigiCoop-WA+ 2026.",
        en: "KYC/AML-CFT compliance platform for cooperative financial institutions across the UEMOA zone. Dual architecture: offline-first for field agents / real-time for branch windows, AML/CFT screening with fuzzy matching, and audit trail hash-chaining. Built for the DigiCoop-WA+ 2026 National Hackathon."
      },
      status: "in_progress",
      badge: "Hackathon DigiCoop 2026",
      stack: ["KYC/AML-CFT", "Offline-First", "Fuzzy Matching", "Hash-Chaining"],
      links: { demo: "", repo: "" }
    },
    {
      id: "village-24h",
      filename: "festival_24h.tsx",
      title: {
        fr: "24h au Village",
        en: "24h au Village"
      },
      description: {
        fr: "Plateforme événementielle full-stack pour le festival '24H AU VILLAGE' (Burkina Faso) : billetterie QR Code, boutique en ligne, suivi comptable et contrôle d'accès le jour J. Stack : Next.js 16, Tailwind v4, Prisma 7, MariaDB, NextAuth v5, R3F (3D).",
        en: "Full-stack event management system for '24H AU VILLAGE' festival (Burkina Faso): QR Code ticketing, online e-commerce store, financial ledger, and real-time festival gate verification. Stack: Next.js 16, Tailwind v4, Prisma 7, MariaDB, NextAuth v5, R3F."
      },
      status: "in_progress",
      stack: ["Next.js 16", "Tailwind v4", "Prisma 7", "MariaDB", "NextAuth v5", "R3F"],
      links: { demo: "", repo: "" }
    },
    {
      id: "ambawbio-suite",
      filename: "ambawbio_suite.config",
      title: {
        fr: "Ambawbio Suite",
        en: "Ambawbio Suite"
      },
      description: {
        fr: "ERP tout-en-un pour les PME du Burkina Faso, conforme SYSCOHADA & DGI, avec mode hors-ligne et intégration native des Mobile Money (Orange Money, Moov Money, Wave). Modules : Ventes, Finance, RH, Stocks, Web, Marketing, Projets. Présenté au Faso Digital 2026.",
        en: "All-in-one ERP for SMEs in Burkina Faso, compliant with SYSCOHADA accounting and DGI tax frameworks, with offline mode and native Mobile Money integrations (Orange Money, Moov, Wave). Modules: Sales, Finance, HR, Inventory, Web, Marketing, Projects. Pitched at Faso Digital 2026."
      },
      status: "in_progress",
      badge: "Faso Digital 2026",
      stack: ["SYSCOHADA", "Mobile Money", "Offline-First", "ERP Modules"],
      links: { demo: "", repo: "" }
    },
    {
      id: "succesco",
      filename: "succesco.dart",
      title: {
        fr: "SuccèsCo",
        en: "SuccèsCo"
      },
      description: {
        fr: "Plateforme de gestion scolaire d'envergure développée par Révélateur Burkina pour digitaliser le suivi administratif et pédagogique des établissements. Interventions en tant que stagiaire ingénieur IT : maintenance évolutive, intégrations et support technique.",
        en: "School management platform developed by Révélateur Burkina to digitize administrative and academic operations. Worked as IT Engineering Intern handling full-stack maintenance, feature integrations, and server infrastructure support."
      },
      status: "completed",
      stack: ["Flutter", "Dart", "Web Services", "Support IT"],
      links: { demo: "https://successco.africa/burkina.eleve.successco.africa/", repo: "" }
    },
    {
      id: "portfolio",
      filename: "portfolio.html",
      title: {
        fr: "Portfolio personnel",
        en: "Personal Portfolio"
      },
      description: {
        fr: "Site portfolio personnel développé avec HTML5, CSS3 vanilla et JavaScript moderne. Design terminal/code editor, thèmes sombre et clair, internationalisation bilingue, composants dynamiques et animations fluides.",
        en: "Personal portfolio built with vanilla HTML5, CSS3, and modern JavaScript. Code-editor aesthetic, dark and light themes, bilingual i18n, custom 3D flip preview mechanics, and fluid micro-animations."
      },
      status: "completed",
      stack: ["HTML5", "CSS3", "JavaScript", "SEO"],
      links: { demo: "https://rbonsa404.github.io/mon-portfolio/", repo: "" }
    }
  ]
};
