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
      fr: "Étudiant en Réseaux & Télécoms — Développeur Full-Stack & Cyber-Ops",
      en: "Networks & Telecoms Student — Full-Stack & Cyber-Ops Developer"
    },
    email: "rachidbonsa.ai@gmail.com",
    phone: "+226 64 93 15 57",
    location: {
      fr: "Burkina Faso",
      en: "Burkina Faso"
    },
    cvPath: "assets/cv/CV_BONSA_Abdoul_Rachid.pdf"
  },

  /* ── Hero ── */
  hero: {
    tagline: {
      fr: "Étudiant en Réseaux Informatiques & Télécommunications (IST) et développeur full-stack passionné. Concepteur de solutions hautement disponibles, alliant rigueur réseau, architecture microservices et interfaces réactives.",
      en: "Networks & Telecommunications student (IST) and passionate full-stack developer. Building resilient, scalable digital architectures with network precision and modern UI."
    },
    profileImage: "assets/img/profile.jpg",
    profileAlt: {
      fr: "Photo de profil de BONSA Abdoul Rachid",
      en: "Profile photo of BONSA Abdoul Rachid"
    }
  },

  /* ── À propos ── */
  about: {
    fr: "Étudiant passionné d'informatique et de télécommunications, actuellement en 2ᵉ année de Réseaux Informatiques et Télécommunications à l'Institut Supérieur de Technologie (IST). Curieux, rigoureux et orienté résultats, je combine ma formation académique réseau avec une solide expertise en développement Full-Stack (Java/Spring Boot, NestJS, Next.js, Angular, PostgreSQL) acquise en autodidacte et au fil de projets d'envergure (Orange Digital Center, Hackathon DigiCoop 2026, Révélateur Burkina). Fort d'expériences pratiques et associatives, je recherche des opportunités techniques motivantes pour concevoir des solutions numériques à fort impact.",
    en: "Driven technology student currently in my 2nd year of Networks & Telecommunications at Institut Supérieur de Technologie (IST). Rigorous and results-oriented, I combine network engineering fundamentals with full-stack development expertise (Java/Spring Boot, NestJS, Next.js, Angular, PostgreSQL) acquired through self-learning and high-stakes projects (Orange Digital Center, DigiCoop 2026 Hackathon, Révélateur Burkina). Looking for challenging tech roles to build impactful digital platforms."
  },

  /*
   * ── Formation académique (timeline) ──
   */
  academicEducation: [
    {
      id: "rit-ist",
      degree: {
        fr: "Réseaux Informatiques et Télécommunications",
        en: "Computer Networks & Telecommunications"
      },
      institution: {
        fr: "Institut Supérieur de Technologie (IST)",
        en: "Institut Supérieur de Technologie (IST)"
      },
      period: {
        fr: "2024 → en cours (2ᵉ année validée)",
        en: "2024 → present (2nd year completed)"
      },
      detail: {
        fr: "Cursus spécialisé en architecture des réseaux, télécommunications, systèmes d'exploitation Linux/Windows Server et sécurité informatique.",
        en: "Curriculum specialized in network architecture, telecommunications, Linux/Windows Server administration, and cybersecurity."
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
      id: "cil-innovation",
      role: {
        fr: "Entretien avec la CIL — Quinzaine de l'Innovation",
        en: "CIL Interview — Innovation Fortnight"
      },
      company: "Commission de l'Informatique et des Libertés (CIL) / IST",
      period: {
        fr: "juil. 2026 – en cours",
        en: "Jul. 2026 – present"
      },
      description: {
        fr: "Projet d'innovation technologique et de protection des données retenu pour la phase de réalisation finale.",
        en: "Technological innovation and data protection project selected for final development."
      }
    },
    {
      id: "grand-salon-data",
      role: {
        fr: "Équipe Logistique — Grand Salon de la Data en Afrique",
        en: "Logistics Team — Grand Salon de la Data en Afrique"
      },
      company: "Grand Salon de la Data",
      period: {
        fr: "juil. 2026",
        en: "Jul. 2026"
      },
      description: {
        fr: "Organisation logistique et coordination technique lors du rassemblement majeur des acteurs de la Data en Afrique (Attestation obtenue).",
        en: "Logistics organization and technical coordination during the major African Data conference (Attestation awarded)."
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
        fr: "Conseil sur les choix d'architecture technique, gestion des médias et direction artistique / conception graphique des affiches du festival.",
        en: "Consulting on technical architecture choices, media management, and graphic design direction for festival promotional assets."
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
        fr: "Contribution en remote aux activités du service informatique : développement, maintenance évolutive et mises à jour système de la plateforme de gestion scolaire SuccèsCo.",
        en: "Remote contribution to IT operations: full-stack development, evolutive maintenance, and system updates for the SuccèsCo school platform."
      }
    }
  ],

  /*
   * ── Compétences par catégorie ──
   */
  skills: {
    languages: {
      labelKey: "skills_cat_languages",
      items: ["Java 17", "Spring Boot", "TypeScript", "NestJS", "Next.js", "Angular", "Tailwind CSS", "PHP / Laravel", "Flutter"]
    },
    database: {
      labelKey: "skills_cat_database",
      items: ["PostgreSQL", "MariaDB", "MySQL", "Prisma ORM"]
    },
    architecture: {
      labelKey: "skills_cat_architecture",
      items: ["Microservices", "REST API", "Offline-First", "Fuzzy Matching", "RBAC", "Three.js / R3F"]
    },
    tools: {
      labelKey: "skills_cat_tools",
      items: ["Git & GitHub", "Docker", "VS Code", "Antigravity", "Cisco Packet Tracer", "MATLAB", "VirtualBox", "VMware"]
    },
    os: {
      labelKey: "skills_cat_os",
      items: ["Linux (Kali, Ubuntu)", "Windows Server", "Networking / Telecommunication"]
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
   */
  projects: [
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
      id: "club-info",
      filename: "club_info.java",
      title: {
        fr: "Plateforme Club Informatique",
        en: "IT Club Management Platform"
      },
      description: {
        fr: "Plateforme web de gestion du Club Informatique : membres, formations, événements et projets, avec espace d'administration et de supervision complet. Stack : Java 17, Spring Boot 4.1.1, Angular, Tailwind CSS.",
        en: "Comprehensive web platform for IT Club operations: member management, training schedules, events, and tech project tracking with a rich admin supervision portal. Stack: Java 17, Spring Boot 4.1.1, Angular, Tailwind CSS."
      },
      status: "in_progress",
      stack: ["Java 17", "Spring Boot 4.1.1", "Angular", "Tailwind CSS"],
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
      id: "suite-erp-bf",
      filename: "erp_syscohada.config",
      title: {
        fr: "Suite ERP Burkina Faso",
        en: "Burkina Faso ERP Suite"
      },
      description: {
        fr: "Suite logicielle de gestion d'entreprise intégrée (ERP) pour les PME du Burkina Faso, conforme SYSCOHADA & DGI, avec mode hors-ligne et intégration native des Mobile Money (Orange Money, Moov Money, Wave). Modules : Ventes, Finance, RH, Stocks, Web, Marketing, Projets.",
        en: "Integrated Enterprise Resource Planning (ERP) suite for SMEs in Burkina Faso. Fully compliant with SYSCOHADA accounting and DGI tax frameworks, supporting offline operational sync and native Mobile Money integrations (Orange Money, Moov, Wave). Modules: Sales, Finance, HR, Inventory, Web, Marketing, Projects."
      },
      status: "idea",
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
        fr: "Site portfolio personnel développé avec HTML5, CSS3 vanilla et JavaScript moderne. Design terminal/code editor avec effets glassmorphic, internationalisation bilingue, composants dynamiques et animations fluides.",
        en: "Personal portfolio built with vanilla HTML5, CSS3, and modern JavaScript. Features a code-editor aesthetic with glassmorphic cards, bilingual i18n, custom 3D flip preview mechanics, and fluid micro-animations."
      },
      status: "completed",
      stack: ["HTML5", "CSS3", "JavaScript", "SEO"],
      links: { demo: "https://rbonsa404.github.io/mon-portfolio/", repo: "" }
    }
  ]
};
