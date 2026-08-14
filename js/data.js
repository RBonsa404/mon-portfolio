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
      fr: "Étudiant en Réseaux & Télécoms — Développeur Full-Stack",
      en: "Networks & Telecoms Student — Full-Stack Developer"
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
      fr: "Étudiant en Réseaux Informatiques & Télécommunications, développeur full-stack en formation. Je conçois des solutions numériques concrètes, avec la rigueur du réseau et la curiosité du code.",
      en: "Networks & Telecommunications student, full-stack developer in training. I build practical digital solutions, combining network rigor with a passion for code."
    },
    profileImage: "assets/img/profile.jpg",
    profileAlt: {
      fr: "Photo de profil de BONSA Abdoul Rachid",
      en: "Profile photo of BONSA Abdoul Rachid"
    }
  },

  /* ── À propos ── */
  about: {
    fr: "Étudiant passionné de technologie, actuellement en 2ᵉ année de Réseaux Informatiques et Télécommunications à l'Institut Supérieur de Technologie. Curieux, rigoureux et animé par l'envie d'apprendre, je complète ma formation académique par des parcours pratiques en développement (Orange Digital Center) et par une première expérience de terrain chez Révélateur Burkina. Je recherche un stage pré-emploi me permettant de mettre mes compétences au service de projets concrets, dans un environnement structuré et stimulant.",
    en: "A technology enthusiast currently in my 2nd year of Networks and Telecommunications at Institut Supérieur de Technologie. Curious, rigorous and driven by a constant will to learn, I complement my academic background with hands-on development training (Orange Digital Center) and my first field experience at Révélateur Burkina. I'm looking for a pre-employment internship to apply my skills to real projects, in a structured and stimulating environment."
  },

  /*
   * ── Formation académique (timeline) ──
   * Copiez ce modèle pour ajouter une entrée :
   * {
   *   id: "unique-id",
   *   degree: { fr: "...", en: "..." },
   *   institution: { fr: "...", en: "..." },
   *   period: { fr: "2024 → en cours", en: "2024 → present" },
   *   detail: { fr: "...", en: "..." }
   * }
   */
  academicEducation: [
    {
      id: "rit-ist",
      degree: {
        fr: "Réseaux Informatiques et Télécommunications",
        en: "Computer Networks & Telecommunications"
      },
      institution: {
        fr: "Institut Supérieur de Technologie",
        en: "Institut Supérieur de Technologie"
      },
      period: {
        fr: "2024 → en cours (2ᵉ année validée)",
        en: "2024 → present (2nd year completed)"
      },
      detail: {
        fr: "Cursus axé sur les réseaux, les télécommunications et les systèmes d'information.",
        en: "Curriculum focused on networks, telecommunications and information systems."
      }
    },
    {
      id: "bac-d",
      degree: {
        fr: "Baccalauréat série D",
        en: "High School Diploma — Science D"
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
        fr: "",
        en: ""
      }
    }
  ],

  /*
   * ── Formations complémentaires ──
   * status : "completed" | "in_progress"
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
        fr: "En cours",
        en: "In progress"
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
      id: "revelateur",
      role: {
        fr: "Informaticien Stagiaire",
        en: "IT Intern"
      },
      company: "Révélateur Burkina",
      period: {
        fr: "juin – sept. 2026",
        en: "Jun – Sep. 2026"
      },
      description: {
        fr: "Contribution aux activités du service informatique : développement, maintenance et support des outils numériques internes.",
        en: "Contributed to IT department activities: development, maintenance and support of internal digital tools."
      }
    }
  ],

  /*
   * ── Compétences par catégorie ──
   * Ajoutez un string dans le tableau de la catégorie voulue
   */
  skills: {
    languages: {
      labelKey: "skills_cat_languages",
      items: ["HTML/CSS", "JavaScript", "TypeScript", "Java", "Node.js", "React", "Angular", "PHP", "Laravel"]
    },
    database: {
      labelKey: "skills_cat_database",
      items: ["MySQL"]
    },
    office: {
      labelKey: "skills_cat_office",
      items: ["Word", "Excel", "PowerPoint"]
    },
    tools: {
      labelKey: "skills_cat_tools",
      items: ["VS Code", "Antigravity", "Eclipse", "Cisco Packet Tracer", "MATLAB", "VirtualBox", "VMware"]
    },
    os: {
      labelKey: "skills_cat_os",
      items: ["Windows", "Windows Server", "Kali Linux"]
    }
  },

  /* ── Centres d'intérêt ── */
  interests: [
    { fr: "Bénévolat", en: "Volunteering", icon: "◈" },
    { fr: "Basketball", en: "Basketball", icon: "◉" },
    { fr: "Marche à pied", en: "Walking", icon: "◎" },
    { fr: "Jeux vidéo", en: "Video games", icon: "◆" }
  ],

  /*
   * ── Projets ──
   * status : "completed" | "in_progress" | "confidential"
   * Copiez ce modèle :
   * {
   *   id: "mon-projet",
   *   filename: "mon_projet.dart",
   *   title: { fr: "...", en: "..." },
   *   description: { fr: "...", en: "..." },
   *   status: "completed",
   *   stack: ["Tech1", "Tech2"],
   *   links: { demo: "", repo: "" }
   * }
   */
  projects: [
    {
      id: "portfolio",
      filename: "portfolio.html",
      title: {
        fr: "Portfolio personnel",
        en: "Personal Portfolio"
      },
      description: {
        fr: "Mon site portfolio, conçu et développé en autodidacte avec HTML, CSS et JavaScript pur. Pensé comme une vitrine évolutive de mon profil, de mes formations et de mes réalisations.",
        en: "My personal portfolio website, self-taught and built with plain HTML, CSS and JavaScript. Designed as an evolving showcase of my profile, training and achievements."
      },
      status: "completed",
      stack: ["HTML", "CSS", "JavaScript"],
      links: { demo: "", repo: "" }
    },
    {
      id: "devispro",
      filename: "devispro.dart",
      title: {
        fr: "DevisPro",
        en: "DevisPro"
      },
      description: {
        fr: "Application mobile de gestion de devis et de factures destinée aux petites structures. J'ai rejoint l'équipe de développement en tant que contributeur, en participant à la construction de l'interface et à l'implémentation de fonctionnalités métier.",
        en: "Mobile invoicing and quote management app for small businesses. I joined the development team as a contributor, working on the interface and implementing key business features."
      },
      status: "completed",
      stack: ["Flutter", "Dart"],
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
        fr: "Plateforme de gestion scolaire développée par Révélateur Burkina pour digitaliser le suivi administratif et pédagogique des établissements. Durant mon stage, j'ai assuré la maintenance corrective et évolutive de l'application ainsi que le support technique.",
        en: "School management platform developed by Révélateur Burkina to digitize administrative and academic tracking. During my internship, I handled corrective and evolutive maintenance of the app as well as technical support."
      },
      status: "completed",
      stack: ["Flutter", "Dart"],
      links: { demo: "", repo: "" }
    },
    {
      id: "fasoguardian",
      filename: "fasoguardian.dart",
      title: {
        fr: "FasoGuardian",
        en: "FasoGuardian"
      },
      description: {
        fr: "Projet personnel actuellement en phase de prototypage, développé dans le cadre de la Quinzaine de l'Innovation de l'Institut Supérieur de Technologie (édition 2026). Les détails fonctionnels et techniques restent confidentiels à ce stade.",
        en: "Personal project currently in prototyping phase, developed as part of the Innovation Fortnight program at Institut Supérieur de Technologie (2026 edition). Functional and technical details remain confidential at this stage."
      },
      status: "in_progress",
      confidential: true,
      stack: ["Prototype"],
      links: { demo: "", repo: "" }
    },
    {
      id: "dunord-smart",
      filename: "dunord_smart.dart",
      title: {
        fr: "Dunord Smart",
        en: "Dunord Smart"
      },
      description: {
        fr: "Projet mené dans le cadre du programme Orange Digital Center, actuellement en développement actif. Pour des raisons de confidentialité, les spécificités du projet ne peuvent être partagées publiquement pour le moment.",
        en: "Project carried out as part of the Orange Digital Center program, currently under active development. For confidentiality reasons, project specifics cannot be shared publicly at this time."
      },
      status: "in_progress",
      confidential: true,
      stack: [],
      links: { demo: "", repo: "" }
    }
  ]
};
